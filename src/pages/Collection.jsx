import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((c) => c !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((c) => c !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let product = products.slice();

    if (showSearch && search) {
      product = product.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      product = product.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      product = product.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(product);
  };

  const sortProduct = () => {
    let fpCopy = filterProduct.slice();
    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-40">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 tex-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        <div
          className={`border border-gray-300 pl-5
           py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div
            className="flex flex-col gap-2
           text-sm font-light text-gray-700"
          >
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"Men"}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5
           py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div
            className="flex flex-col gap-2
           text-sm font-light text-gray-700"
          >
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubcategory}
                className="w-3"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubcategory}
                className="w-3"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubcategory}
                className="w-3"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option className="" value="relevant">
              Sort by: Relevant
            </option>
            <option className="" value="low-high">
              Sort by: Low to High
            </option>
            <option className="" value="high-low">
              Sort by: High to Low
            </option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProduct.map((product, i) => (
            <ProductItem
              key={product._id}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collection;
