import Link from "next/link";

import api from "@/api";
import RestaurantCard from "../components/RestaurantCard";

export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

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