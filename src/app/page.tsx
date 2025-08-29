import Link from 'next/link';

import api from '@/api';
import RestaurantCard from './components/RestaurantCard';

export default async function HomePage() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <Link key={restaurant.id} href={`/${restaurant.id}`}>
            <RestaurantCard restaurant={restaurant} />
          </Link>
        );
      })}
    </section>
  );
}
