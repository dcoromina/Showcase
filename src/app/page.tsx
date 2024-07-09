"use client";

import CompNav from "./details/navbar";
import Browser from "./details/browser";

import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase/clients";
import CompCard from "./component/comp_card";

export default function Home() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data, error } = await supabase.from("Showcase").select("*");
        if (error) throw error;
        if (data != null) {
          console.log(data);

          setProducts(data);
        }
      } catch (error) {
        alert(error + "test");
      }
    }

    getProducts();
  }, []);

  return (
    <main className="flex h-screen flex-row  justify-between space-x-5 p-2">
      <CompNav />
      <div className="w-full h-full flex flex-col gap-5 justify-start items-center md:flex-row md:flex-wrap md:items-start bg-slate-400 rounded-md p-5 overflow-y-auto ">
        {products.map((product) => (
          <CompCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
