import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabase =
  createClient <
  Database >
  (process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const { data, error } = await supabase.from("Showcase").select("*");
function MyComponent({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default test;
