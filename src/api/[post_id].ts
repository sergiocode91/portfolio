import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const get: APIRoute = async ({ params }) => {
  const { post_id } = params;
  const { data, error } = await supabase
    .from('post_views')
    .select('views_count')
    .eq('post_id', post_id)
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};