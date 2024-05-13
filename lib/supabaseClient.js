import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fmiuomlhzcskklocfycv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtaXVvbWxoemNza2tsb2NmeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyODA2MTksImV4cCI6MjAzMDg1NjYxOX0.hL-bhjMmVdhTMM_qZd7DBn6l-6ShTikb4Mnyj9deo-0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', async () => {
  const viewsElement = document.getElementById('views');
  if (!viewsElement) return;

  const slug = viewsElement.dataset.slug;

  async function incrementViews(articleId) {
    const { data, error } = await supabase
      .from('article_views')
      .select('views')
      .eq('article_id', articleId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        await supabase
          .from('article_views')
          .insert({ article_id: articleId, views: 1 });
      } else {
        console.error("Error incrementing views:", error);
      }
    } else if (data) {
      await supabase
        .from('article_views')
        .update({ views: data.views + 1 })
        .eq('article_id', articleId);
    }
  }

  async function getViews(articleId) {
    const { data, error } = await supabase
      .from('article_views')
      .select('views')
      .eq('article_id', articleId)
      .single();

    if (error) {
      console.error("Error fetching views:", error);
      return 0;
    }

    return data ? data.views : 0;
  }

  const views = await getViews(slug);
  await incrementViews(slug);
  viewsElement.innerText = `Vistas: ${views}`;
});