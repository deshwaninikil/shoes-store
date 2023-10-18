import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    title: "Shop Men's",
    image:
      "https://res.cloudinary.com/dvqztmtkq/image/upload/v1697630933/shoes-store/category_imgs/men.jpg",
  },
  {
    _id: uuid(),
    categoryName: "women",
    title: "Shop womes's",
    image:
      "https://res.cloudinary.com/dvqztmtkq/image/upload/v1697630934/shoes-store/category_imgs/women.jpg",
  },
  {
    _id: uuid(),
    categoryName: "kids",
    title: "Shop kid's",
    image:
      "https://res.cloudinary.com/dvqztmtkq/image/upload/v1697630934/shoes-store/category_imgs/kids.jpg",
  },
];
