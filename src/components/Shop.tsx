import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Футболка",
    price: 2000,
    colors: ["Чёрная", "Белая"],
    category: "Базовое",
    image: null,
  },
  {
    id: 2,
    name: "Куртка",
    price: 7500,
    colors: [],
    category: "Верхняя одежда",
    image: null,
  },
  {
    id: 3,
    name: "Бомбер",
    price: 6500,
    colors: [],
    category: "Верхняя одежда",
    image: null,
  },
  {
    id: 4,
    name: "Майка",
    price: 1500,
    colors: [],
    category: "Базовое",
    image: null,
  },
  {
    id: 5,
    name: "Платье",
    price: null,
    colors: ["Чёрное", "Белое"],
    category: "Платья",
    image: null,
  },
  {
    id: 6,
    name: "Худи",
    price: 6500,
    colors: [],
    category: "Толстовки",
    image: null,
  },
  {
    id: 7,
    name: "Куртка Premium",
    price: 10000,
    colors: [],
    category: "Верхняя одежда",
    image: null,
  },
  {
    id: 8,
    name: "Купальник",
    price: 15000,
    colors: [],
    category: "Пляж",
    image: null,
  },
  {
    id: 9,
    name: "Шорты",
    price: 4500,
    colors: [],
    category: "Низ",
    image: null,
  },
  {
    id: 10,
    name: "Штаны",
    price: 4500,
    colors: [],
    category: "Низ",
    image: null,
  },
  {
    id: 11,
    name: "Кофта",
    price: 7500,
    colors: [],
    category: "Толстовки",
    image: null,
  },
  {
    id: 12,
    name: "Кофта Premium",
    price: 8000,
    colors: [],
    category: "Толстовки",
    image: null,
  },
  {
    id: 13,
    name: "Свитшот",
    price: 5500,
    colors: [],
    category: "Толстовки",
    image: null,
  },
  {
    id: 14,
    name: "Лонгслив",
    price: 3500,
    colors: [],
    category: "Базовое",
    image: null,
  },
  {
    id: 15,
    name: "Джоггеры",
    price: 5000,
    colors: [],
    category: "Низ",
    image: null,
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">
                    {product.name}
                  </span>
                </div>
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
