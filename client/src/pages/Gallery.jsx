import React, { useState } from "react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const images = [
    {
      src: "https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=800",
      type: "Campus",
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800",
      type: "Campus",
    },
    {
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c2efc?q=80&w=800",
      type: "Campus",
    },
    {
      src: "https://images.unsplash.com/photo-1564983024234-f8fa7f4ce393?q=80&w=800",
      type: "Campus",
    },
    {
      src: "https://images.unsplash.com/photo-1610419358215-6ac3202951e7?q=80&w=800",
      type: "Campus",
    },
    {
      src: "https://images.unsplash.com/photo-1510531704581-5b2870f367ea?q=80&w=800",
      type: "Campus",
    },
    {
      src: "https://images.unsplash.com/photo-1560243563-062bff001d9c?q=80&w=800",
      type: "Sports",
    },
    {
      src: "https://images.unsplash.com/photo-1471295253337-3ceaaad65897?q=80&w=800",
      type: "Sports",
    },
    {
      src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800",
      type: "Sports",
    },
    {
      src: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=800",
      type: "Cultural",
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800",
      type: "Cultural",
    },
    {
      src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800",
      type: "Cultural",
    },
  ];

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.type === filter);

  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Header with Filter Tabs */}
      <section className="bg-primary pt-32 pb-20 px-6 text-center text-white relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-6 leading-none animate-entrance">
            Campus <span className="text-secondary italic">Moments</span>
          </h1>
          <p className="text-blue-100/70 text-base md:text-lg mb-12 max-w-xl mx-auto animate-entrance [animation-delay:200ms]">
            Experience the vibrant life at Excellence School. Scroll through our
            cherished memories.
          </p>

          {/* Integrated Filter Tabs */}
          <div className="inline-flex items-center gap-1 bg-white p-1 rounded-full shadow-lg animate-entrance [animation-delay:400ms]">
            {["All", "Campus", "Sports", "Cultural"].map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${filter === tag ? "bg-primary text-white shadow" : "text-primary hover:bg-slate-50"}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Masonry Gallery - Responsive Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl break-inside-avoid shadow group cursor-pointer aspect-[16/11]"
            >
              {/* Image with Slow Zoom effect on hover */}
              <img
                src={img.src}
                alt={`${img.type} Moment`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Type Badge - Appears on hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-secondary text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                  {img.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
