import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Футболка",
    price: 2000,
    colors: ["Чёрная", "Белая"],
    category: "Базовое",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/cf3f747a-fb33-4c21-bc70-097b635a38be.png",
  },
  {
    id: 2,
    name: "Куртка",
    price: 7500,
    colors: [],
    category: "Верхняя одежда",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/753234a4-6686-47f7-b542-0a6834da1c36.png",
  },
  {
    id: 3,
    name: "Бомбер",
    price: 6500,
    colors: [],
    category: "Верхняя одежда",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/28f7d3e9-0fd8-4a1c-95c4-da05040a97e3.png",
  },
  {
    id: 4,
    name: "Майка",
    price: 1500,
    colors: [],
    category: "Базовое",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/7aed00ca-7dc9-415d-9fae-6a86241cf727.png",
  },
  {
    id: 5,
    name: "Платье",
    price: null,
    colors: ["Чёрное", "Белое"],
    category: "Платья",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/3752a644-5e1a-4da8-a4e1-1548b0575133.png",
  },
  {
    id: 6,
    name: "Худи",
    price: 6500,
    colors: [],
    category: "Толстовки",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/10c4be15-01c5-4a33-9b30-47daf21efc2d.png",
  },
  {
    id: 7,
    name: "Куртка Premium",
    price: 10000,
    colors: [],
    category: "Верхняя одежда",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/a73c9c41-09da-4812-a767-37f3d92ef600.png",
  },
  {
    id: 8,
    name: "Купальник",
    price: 15000,
    colors: [],
    category: "Пляж",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/8d20f63b-09ec-4b0c-bd40-ddfcf9992087.png",
  },
  {
    id: 9,
    name: "Шорты",
    price: 4500,
    colors: [],
    category: "Низ",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/395c57d4-b409-40c4-bf17-0c6f49654b19.png",
  },
  {
    id: 10,
    name: "Штаны",
    price: 4500,
    colors: [],
    category: "Низ",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/d2d7f453-3b72-400e-b903-e58248beab82.png",
  },
  {
    id: 11,
    name: "Кофта",
    price: 7500,
    colors: [],
    category: "Толстовки",
    image: "https://cdn.poehali.dev/projects/6ce6322c-ab5c-4fe4-babc-8dc6268d3275/bucket/7a99046f-2ca3-4994-b03c-dd38a366a0ab.png",
  },
];

const placeholderColors = [
  "bg-neutral-200",
  "bg-neutral-300",
  "bg-stone-200",
  "bg-zinc-300",
  "bg-slate-200",
];

export default function Shop() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="shop" className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="uppercase text-sm tracking-wide text-neutral-500 mb-2">
              Lunex Store
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Коллекция
            </h2>
          </div>
          <p className="text-neutral-500 text-sm hidden md:block">
            {products.length} товаров
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative aspect-[3/4] mb-3 overflow-hidden ${
                  placeholderColors[index % placeholderColors.length]
                }`}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-neutral-400 text-xs uppercase tracking-widest">
                      {product.name}
                    </span>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredId === product.id ? "opacity-10" : "opacity-0"
                  }`}
                />
                <button
                  className={`absolute bottom-0 left-0 right-0 bg-black text-white text-xs uppercase tracking-widest py-3 transition-transform duration-300 ${
                    hoveredId === product.id
                      ? "translate-y-0"
                      : "translate-y-full"
                  }`}
                >
                  В корзину
                </button>
                {product.colors.length > 0 && (
                  <div className="absolute top-3 left-3 flex gap-1">
                    {product.colors.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] bg-white text-neutral-700 px-1.5 py-0.5 uppercase tracking-wide"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wide mb-0.5">
                  {product.category}
                </p>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-neutral-900">
                  {product.price !== null
                    ? `${product.price.toLocaleString("ru-RU")} ₽`
                    : "Уточнить цену"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}