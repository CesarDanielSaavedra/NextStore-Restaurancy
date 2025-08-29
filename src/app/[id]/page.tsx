import Link from "next/link";

import api from "@/api";
import RestaurantCard from "../components/RestaurantCard";

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return (
    <main>
      <RestaurantCard restaurant={restaurant} />
      <Link href="/" className="mt-4 text-lg font-bold opacity-80 inline-block">Back to Home</Link>
    </main>
  );
}