import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterSidevar() {
  const [searchParams, setSearchParams] = useSearchParams();
  //x.com/?a=1&b=2
  const [filters, setFilter] = useState({
    catagory: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const catagories = ["Top Wear", "Bottom Wear"];

  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "white",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const material = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brand = [
    "Urban Threade",
    "Modren Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChisStyle",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    //ye array ko javascript ky object mai bdlta hai
    const params = Object.fromEntries([...searchParams]);
    // {catagory: "Top Wear", maxPrice: 100} => params.catagory

    setFilter({
      catagory: params.catagory || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  return (
    <div className="p-4 ">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {catagories.map((catergory) => (
          <div key={catergory} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{catergory}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

     {/* Color Filter */}
     <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
            {
                colors.map((color)=>(
                    <button key={color} name="color" 
                    className="w-8 h-8 rounded-full border border-gray-600 cursor-pointer transition hover:scale-105"
                    style={{backgroundColor: color.toLowerCase()}}
                    ></button>
                ))
            }
        </div>

     </div>

     {/* Size Filter */}
     <div className="mb-6">
        <label className="block text-gray-600  font-medium  mb-2 ">Size</label>
        {
            sizes.map((size)=>(
                <div key={size} className="flex items-center mb-1">
                    <input type="checkbox" name="size" 
                    className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300" />
                <span className="text-gray-700">{size}</span>
                </div>
            ))
        }

     </div>

    </div>
  );
}

export default FilterSidevar;
