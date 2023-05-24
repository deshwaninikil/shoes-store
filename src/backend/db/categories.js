import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "men",
    title: "Shop Men's",
    image:
      "https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dwdb3fc61c/Home-Page/skx58039-homepagecontentblocks-feb2023-1500x1304-men.jpg?sw=500",
  },
  {
    _id: uuid(),
    category: "women",
    title: "Shop womes's",
    image:
      "https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw5004b5a3/Home-Page/skx58039-homepagecontentblocks-feb2023-1500x1304-women.jpg?sw=500",
  },
  {
    _id: uuid(),
    category: "kids",
    title: "Shop kid's",
    image:
      "https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dwe9b202c0/Home-Page/skx58039-homepagecontentblocks-feb2023-1500x1304-boys.jpg?sw=500",
  },
];
