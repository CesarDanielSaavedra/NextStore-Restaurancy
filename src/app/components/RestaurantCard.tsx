import {Restaurant} from "@/types";

export default function RestaurantCard({restaurant}: {restaurant: Restaurant}) {
    return (
        <article key={restaurant.id} className="p-4 border-2 border-gray-400/50 rounded-lg max-w-lg shadow-md shadow-fuchsia-400/20 hover:ring-1 ring-offset-2 ring-offset-transparent ring-fuchsia-400/20 transition-all duration-500 ease-in-out">
            <h1 className="mb-3 text-xl font-bold">{restaurant.name}</h1>
            <p className="mb-3 leading-snug opacity-80">{restaurant.description}</p>
            <img className="h-[300px] w-full object-cover rounded-lg" src={restaurant.image} alt={restaurant.name} />
            <small className="inline-flex gap-1 w-full mt-2">
                <span>⭐</span>
                <span>{restaurant.score}</span>
                <span className="font-normal opacity-75">({restaurant.ratings})</span>
            </small>
        </article>
    );
}