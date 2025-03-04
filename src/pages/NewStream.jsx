import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

// Data
import categories from "../data/categories";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Components
import Icon from "../components/Icon";
import DotsLoader from "../components/DotsLoader";
import productService from "../api/services/productService";
import StreamProductItem from "../components/StreamProductItem";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "../store/features/modalSlice";
import { updateProducts } from "../store/features/productsSlice";

const NewStream = () => {
  const dispatch = useDispatch();
  const { productType } = useParams();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const allProducts = useSelector((state) => state.products.data);

  useEffect(() => {
    document.title = "Mene Market | Yangi oqim yaratish";
  }, []);

  const updateProductsByType = (data = []) => {
    const formattedType = !productType ? "all" : productType?.toLowerCase();
    if (formattedType === "all") return setFilteredProducts(data);

    const filtered = data.filter((product) => product?.type === formattedType);
    setFilteredProducts(filtered);
  };

  const loadProducts = () => {
    setHasError(false);
    setIsLoading(true);

    productService
      .getProducts()
      .then((products) => {
        setFilteredProducts(products);
        dispatch(updateProducts(products));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (allProducts?.length === 0) loadProducts();
    else {
      updateProductsByType(allProducts);

      if (isLoading) {
        setTimeout(() => setIsLoading(false), 500);
      }
    }
  }, [productType]);

  const handleOpenCreateStreamModal = ({ _id, title }) => {
    dispatch(
      updateModal({
        data: {
          product: {
            title,
            id: _id,
          },
        },
        isOpen: true,
        name: "createStream",
        title: "Oqim yaratish",
        buttons: {
          secondary: { label: "Yopish" },
          primary: { label: "Yaratish", action: "createStream" },
        },
      })
    );
  };

  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container">
        <div className="space-y-3 mb-6 sm:space-y-4 sm:mb-8">
          {/* Title */}
          <h1 className="text-2xl">Yangi oqim yaratish</h1>

          {/* Description */}
          <p className="text-neutral-400 sm:text-lg">
            Yangi oqim yaratib, foydalanuvchilarni saytga jalb qiling va ko'plab
            bonuslarga ega bo'ling!
          </p>
        </div>

        {/* Filter */}
        <nav className="products-layout-tabs mb-8 sm:mb-10">
          <ul className="flex gap-x-3.5 relative w-full overflow-x-auto scroll-x-primary scroll-smooth p-0.5 pb-5 sm:gap-x-4 md:gap-x-5">
            <li className="shrink-0">
              <NavLink
                end
                to="/admin/new-stream"
                className="btn bg-gray-light px-5 py-2.5 text-sm hover:bg-neutral-200 sm:text-base"
              >
                Barchasi
              </NavLink>
            </li>

            {categories.map((category, index) => (
              <li key={index} className="shrink-0">
                <NavLink
                  to={`/admin/new-stream/${category.link.toLowerCase()}`}
                  className="btn bg-gray-light px-5 py-2.5 font-normal text-sm hover:bg-neutral-200 sm:font-medium sm:text-base"
                >
                  {category.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Products */}
        {!hasError && !isLoading && filteredProducts?.length > 0 ? (
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:gap-x-5 md:gap-y-8 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <StreamProductItem
                data={product}
                key={product._id}
                onBtnClick={handleOpenCreateStreamModal}
              />
            ))}
          </ul>
        ) : null}

        {/* Loading animation */}
        {!hasError && isLoading && (
          <div className="py-20">
            <DotsLoader color="#0085FF" />
          </div>
        )}

        {/* Reload button */}
        {hasError && !isLoading && (
          <div className="flex justify-center py-16">
            <button
              title="Reload"
              className="p-1.5"
              aria-label="Reload"
              onClick={loadProducts}
            >
              <Icon src={reloadIcon} alt="Reload icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewStream;
