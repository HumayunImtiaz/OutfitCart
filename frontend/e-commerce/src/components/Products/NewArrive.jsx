import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrive() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=1",
          alrText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=2",
          alrText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=3",
          alrText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=4",
          alrText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=5",
          alrText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=6",
          alrText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=7",
          alrText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: "120",
      Image: [
        {
          url: "https://picsum.photos/500/500?random=8",
          alrText: "Stylish Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setInitialScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    scrollRef.current.style.cursor = "grab";
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const leftScroll = container.scrollLeft;
    const rightScrollable =
      container.scrollLeft + container.clientWidth < container.scrollWidth;

    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 md:bottom-[-35px] bottom-[-60px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll md:overflow-x-hidden md:mt-6 lg:mt-6 flex space-x-6 relative 
                   mt-16 cursor-grab mb-1`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[30%] lg:min-x-[20%] relative"
          >
            <img
              src={product.Image[0]?.url}
              alt={product.Image[0]?.alrText || product.name}
              className="w-full h-[400px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-opacity-50 text-white p-4 rounded-b-lg">
              <Link to={`/products/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrive;
