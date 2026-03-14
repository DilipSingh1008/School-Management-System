import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/media-category");
        const activeImages = res.data.data.filter(
          (img) => img.status && !img.isDeleted,
        );
        // console.log(activeImages);
        setImages(activeImages);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImages();
  }, []);
  const categories = [
    ...new Set(
      images
        .filter((img) => img.status && !img.isDeleted)
        .map((img) => img.title),
    ),
  ];
  console.log(categories);
  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.title === filter);
  console.log(filteredImages);
  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-primary pt-32 pb-20 px-6 text-center text-white relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-6 leading-none animate-entrance">
            Campus <span className="text-secondary italic">Moments</span>
          </h1>
          <p className="text-blue-100/70 text-base md:text-lg mb-12 max-w-xl mx-auto animate-entrance [animation-delay:200ms]">
            Experience the vibrant life at Excellence School. Scroll through our
            cherished memories.
          </p>
          {/* ["All", "Campus", "Sports", "Cultural"] */}
          <div className="inline-flex items-center gap-1 bg-white p-1 rounded-full shadow-lg animate-entrance [animation-delay:400ms]">
            {categories.map((tag) => (
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

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl break-inside-avoid shadow group cursor-pointer aspect-[16/11]"
            >
              <img
                src={`http://localhost:5000${img.icon}`}
                alt={`${img.title} Moment`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-secondary text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
