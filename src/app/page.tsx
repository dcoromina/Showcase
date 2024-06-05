import Image from "next/image";
import CompNav from "./placement/navbar";
import Browser from "./placement/browser";

export default function Home() {
  return (
    <main className="flex h-screen flex-row  justify-between space-x-5 p-5">
      <CompNav />
      <Browser />
    </main>
  );
}
