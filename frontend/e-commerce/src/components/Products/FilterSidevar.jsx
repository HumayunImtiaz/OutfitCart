import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function FilterSidevar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const  navigate= useNavigate();
  //x.com/?a=1&b=2
  const [PriceRange, setPriceRange] = useState([0, 100]);

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

  //Object
  const catagories = ["Top Wear", "Bottom Wear"];
  const genders = ["Men", "Women"];
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
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threade",
    "Modren Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChisStyle",
  ];

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

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked, type } )
  // Purane filters ka ek copy bana liya. Direct mutate nahi kiya (React mein immutable data ka concept hota hai).
  // agr ham direct filters sy krty tu React ko pta nhi chalta islye ... lga gr array ko shift kia hai 
    const newFilters = { ...filters };
    // Check kar rahe hain: agar input type checkbox hai...
    if(type==="checkbox"){
    //Agar checkbox tick hai, to uski value ko filter list mein add karo.
        if(checked){
            newFilters[name]=[...newFilters[name] || [], value]  //["XS" , "S"]
        }
        //Agar checkbox uncheck ho gaya, to uski value filter list se hatado.
        else{
            newFilters[name]=newFilters[name].filter((items)=>items!== value)
        }
    }
    //Jahan checkbox nahi hai waha simple value ko utha kr object mai add krdo 
    else{
        newFilters[name]=value;
    }
    setFilter(newFilters)
    //Navigation URL Update ky lye
    UpdateURLParams(newFilters)
  };

  const UpdateURLParams=(newFilters)=>{
    const params= new URLSearchParams();
    //{ catagory: "Top Wear", size : ["XS", "S"]}
    Object.keys(newFilters).forEach((key)=>{
        if(Array.isArray(newFilters[key]) && newFilters[key].length>0)
        {
            params.append(key, newFilters[key].join(","))
        }
        else if(newFilters[key]){
            params.append(key, newFilters[key]);
        }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`)   //?category=Bottom+Weare$size=XS%2CS
  }

  //price range
  const handlePriceChange = (e) => {
  const newPrice = e.target.value;
  setPriceRange([0, newPrice]);
  const newFilter = { ...filters, minPrice: 0, maxPrice: newPrice };
  setFilter(newFilter);
  UpdateURLParams(newFilter);
};


  return (
    <div className="p-4 ">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {catagories.map((catagory) => (
          <div key={catagory} className="flex items-center mb-1">
            <input
              type="radio"
              name="catagory"
              value={catagory}
              onChange={handleFilterChange}
              checked={filters.catagory===catagory}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{catagory}</span>
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
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender===gender}
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
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className= {`w-8 h-8 rounded-full border border-gray-600 cursor-pointer transition hover:scale-105 ${filters.color===color? "ring-2 ring-blue-500 " : ""}`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600  font-medium  mb-2 ">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600  font-medium  mb-2 ">
          Material
        </label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600  font-medium  mb-2 ">
          Brands
        </label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}

      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="PriceRange"
          min={0}
          max={100}
          value={PriceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-blue-500 rounded-lg  appearance-none cursor-pointer"

        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${PriceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default FilterSidevar;
