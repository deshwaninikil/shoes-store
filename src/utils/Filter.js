import { ACTION_TYPE } from "../utils/constants";

export const getPriceRangeData = (productData, priceRange) => {
  return productData.filter(
    (item) => Number(item.discountedPrice) <= Number(priceRange)
  );
};

export const getSearchedData = (productData, searchText) => {
  if (searchText.trim() === "") return productData;
  return productData.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase().trim())
  );
};
export const getRatedData = (productData, rating) => {
  return productData.filter((item) => Number(item.rating) >= Number(rating));
};

export const getCategoryData = (filteredData, newSelectedCategory) => {
  if (
    Object.values(newSelectedCategory).every((item) => item === false) ||
    Object.values(newSelectedCategory).every((item) => item === true)
  ) {
    return filteredData;
  } else {
    return Object.keys(newSelectedCategory).reduce((acc, curr) => {
      if (newSelectedCategory[curr]) {
        return [
          ...acc,
          ...filteredData.filter((item) => item.categoryName === curr),
        ];
      } else {
        return [...acc];
      }
    }, []);
  }
};

export const getSortedData = (productData, sortBy) => {
  switch (sortBy) {
    case ACTION_TYPE.HIGH_TO_LOW:
      return productData.sort((a, b) => b.discountedPrice - a.discountedPrice);
    case ACTION_TYPE.LOW_TO_HIGH:
      return productData.sort((a, b) => a.discountedPrice - b.discountedPrice);
    default:
      return productData;
  }
};
