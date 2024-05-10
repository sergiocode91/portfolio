import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  const { data, error } = await supabase
    .from('post_views')
    .select("*")
    .eq('post_id', params.id)
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};

export async function getStaticPaths() {
  const { data, error } = await supabase
    .from('post_views')
    .select("post_id");

  if (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }

  const paths = data.map(post => ({
    params: { id: post.post_id }
  }));

  return paths;
}
