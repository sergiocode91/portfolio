import { supabase } from './supabaseClient.js'; // Asegúrate de que la ruta es correcta

document.addEventListener('DOMContentLoaded', async () => {
  const viewsElement = document.getElementById('views');
  if (!viewsElement) {
    console.log("Views element not found");
    return;
  }

  const slug = viewsElement.dataset.slug;

  async function incrementViews(articleId) {
    console.log(`Incrementing views for article ID: ${articleId}`);

    const { data, error } = await supabase
      .from('article_views')
      .select('views')
      .eq('article_id', articleId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        const { data: insertData, error: insertError } = await supabase
          .from('article_views')
          .insert({ article_id: articleId, views: 1 });

        if (insertError) {
          console.error("Error inserting views:", insertError);
        } else {
          console.log("Views inserted for new article");
        }
      } else {
        console.error("Error incrementing views:", error);
      }
    } else if (data) {
      const { error: updateError } = await supabase
        .from('article_views')
        .update({ views: data.views + 1 })
        .eq('article_id', articleId);

      if (updateError) {
        console.error("Error updating views:", updateError);
      } else {
        console.log("Views updated for existing article");
      }
    }
  }

  async function getViews(articleId) {
    console.log(`Fetching views for article ID: ${articleId}`);

    const { data, error } = await supabase
      .from('article_views')
      .select('views')
      .eq('article_id', articleId)
      .single();

    if (error) {
      console.error("Error fetching views:", error);
      return 0;
    }

    console.log("Views fetched successfully");
    return data ? data.views : 0;
  }

  const views = await getViews(slug);
  await incrementViews(slug);
  viewsElement.innerText = `Vistas: ${views}`;
  console.log(`Views updated in DOM: ${views}`);
});
