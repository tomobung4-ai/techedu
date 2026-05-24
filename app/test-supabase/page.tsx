import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("articles")
    .select("*");

  return (
    <div style={{ padding: "20px" }}>
      <h1>TEST SUPABASE</h1>

      <h2>ERROR:</h2>
      <pre>
        {JSON.stringify(error, null, 2)}
      </pre>

      <h2>DATA:</h2>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}