import { useState } from "react";
import ProductList from "../features/counter/ProductList";
import CartView from "../features/counter/CartView";

export default function Shop() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="max-w-[1280px] mx-auto px-8 py-12">

            {/* Search */}
            <input
                type="text"
                placeholder="search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4 border px-3 py-2 rounded"
            />

            {/* Layout */}
            <div className="grid grid-cols-12 gap-4">
                <ProductList searchQuery={searchQuery} />
                <CartView />
            </div>

        </div>
    );
}