"use client";

import CompNav from "./details/navbar";

import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase/clients";
import CompCard from "./component/comp_card";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data, error } = await supabase.from("Showcase").select("*");
        if (error) throw error;
        if (data != null) {
          setProducts(data);
        }
      } catch (error) {
        alert(error + "Error: not able to set products");
      }
    }

    getProducts();
  }, []);

  return (
    <main className="flex h-screen flex-row  justify-between gap-2 p-2">
      <CompNav />
      <div className="w-full h-full flex flex-col gap-2 justify-start items-center md:flex-row md:flex-wrap md:items-start bg-slate-400 rounded-md p-5 overflow-y-auto ">
        {products.map((product) => (
          <CompCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
