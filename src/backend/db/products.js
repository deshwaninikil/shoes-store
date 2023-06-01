import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/x/u/f/-original-imaghrfbp5bjfzsz.jpeg",
    categoryName: "men",
    rating: "4",
    size: "9",
    description: "High For Men",
    title: "Puma",
    new_arrival: true,
    price: "2099",
    discountedPrice: "819",
    delivery_time: "9",
    reviews: "3.9k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/900/900/xif0q/kids-shoe/9/v/0/-original-imaghugwaguyz9hz.jpeg",
    categoryName: "men",
    rating: "4",
    size: "10",
    description: "Gym Shoes For Men",
    title: "Adidas",
    new_arrival: false,
    price: "4599",
    discountedPrice: "2299",
    delivery_time: "10",
    reviews: "1.9k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/z/u/0/-original-imaghugvjcavcgrz.jpeg?q=70",
    categoryName: "men",
    rating: "2",
    size: "8",
    description: "Sports Training ",
    title: "Red Tape",
    new_arrival: true,
    price: "2099",
    discountedPrice: "999",
    delivery_time: "9",
    reviews: "3.2k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-shoe/q/v/l/-original-imaghugyezzbvync.jpeg?q=70",
    categoryName: "men",
    rating: "1",
    size: "10",
    description: "Football Shoes",
    title: "Skechers",
    new_arrival: true,
    price: "5499",
    discountedPrice: "1599",
    delivery_time: "3",
    reviews: "2.5k",
    in_stock: false,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/s/2/l/8-ls3850-8-layasa-blue-white-original-imageh9ngztqgbpq-bb.jpeg?q=70",
    categoryName: "women",
    rating: "5",
    size: "8",
    description: "Running Shoes For Women",
    title: "Skechers",
    new_arrival: true,
    price: "1499",
    discountedPrice: "599",
    delivery_time: "2",
    reviews: "4.5k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/o/j/w/-original-imagfxf6swwfjqpw-bb.jpeg?q=70",
    categoryName: "women",
    rating: "2",
    size: "9",
    description: "Puma Harper Wns",
    title: "Puma",
    new_arrival: true,
    price: "3499",
    discountedPrice: "1599",
    delivery_time: "7",
    reviews: "3.5k",
    in_stock: false,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/7/a/4/8-hop-dimond-8-longwalk-white-original-imaghz6ptehe8zpw.jpeg?q=70",
    categoryName: "women",
    rating: "2",
    size: "7",
    description: "R78 Voyage Garden",
    title: "Longwalk ",
    new_arrival: true,
    price: "1599",
    discountedPrice: "780",
    reviews: "3.5k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/832/832/kufuikw0/sandal/s/n/h/6-ml00014708-marc-loire-grey-original-imag7ke48fuhzsdb.jpeg?q=70",
    categoryName: "women",
    rating: "3",
    size: "8",
    description: "Bellies For Women",
    title: "Looks",
    new_arrival: true,
    price: "1499",
    discountedPrice: "599",
    delivery_time: "7",
    reviews: "2.5k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/8/2/n/8c-jordan-5-kats-original-imagkggprf3hc9nt.jpeg?q=70",
    categoryName: "kids",
    rating: "2",
    size: "5",
    description: "Velcro Sneakers",
    title: "Pu-Pine ",
    new_arrival: true,
    price: "2899",
    discountedPrice: "799",
    delivery_time: "3",
    reviews: "1.5k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/r/0/c/12-peppa-growing-india-original-imagkrg8vsbp68ck.jpeg?q=70",
    categoryName: "kids",
    rating: "3",
    size: "4",
    description: "Slip on Sneakers",
    title: "BUMuhenera",
    new_arrival: true,
    price: "2999",
    discountedPrice: "599",
    delivery_time: "4",
    reviews: "4.8k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/y/y/z/-original-imaghuj2fsgbu5qn.jpeg?q=70",
    categoryName: "kids",
    rating: "1",
    size: "4",
    description: "Lace Walking Shoes ",
    title: "World Wear",
    new_arrival: true,
    price: "7499",
    discountedPrice: "2599",
    delivery_time: "3",
    reviews: "1.5k",
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/s/k/x/-original-imagg7hzy6zfs2pj.jpeg?q=70",
    categoryName: "kids",
    rating: "3",
    size: "3",
    description: "Lace Sneakers",
    title: "NEOBABY",
    new_arrival: true,
    price: "5499",
    discountedPrice: "3099",
    delivery_time: "4",
    reviews: "4.5k",
    in_stock: true,
  },
];

// export const products = [
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9410",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/x/u/f/-original-imaghrfbp5bjfzsz.jpeg",
//     categoryName: "men",
//     rating: "4",
//     size: "9",
//     description: "High For Men",
//     title: "Puma",
//     new_arrival: true,
//     price: "2099",
//     discountedPrice: "819",
//     delivery_time: "9",
//     reviews: "3.9k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9411",
//     image:
//       "https://rukminim1.flixcart.com/image/900/900/xif0q/kids-shoe/9/v/0/-original-imaghugwaguyz9hz.jpeg",
//     categoryName: "men",
//     rating: "4",
//     size: "10",
//     description: "Gym Shoes For Men",
//     title: "Adidas",
//     new_arrival: false,
//     price: "4599",
//     discountedPrice: "2299",
//     delivery_time: "10",
//     reviews: "1.9k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9412",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/z/u/0/-original-imaghugvjcavcgrz.jpeg?q=70",
//     categoryName: "men",
//     rating: "2",
//     size: "8",
//     description: "Sports Training ",
//     title: "Red Tape",
//     new_arrival: true,
//     price: "2099",
//     discountedPrice: "999",
//     delivery_time: "9",
//     reviews: "3.2k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9413",
//     image:
//       "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-shoe/q/v/l/-original-imaghugyezzbvync.jpeg?q=70",
//     categoryName: "men",
//     rating: "1",
//     size: "10",
//     description: "Football Shoes",
//     title: "Skechers",
//     new_arrival: true,
//     price: "5499",
//     discountedPrice: "1599",
//     delivery_time: "3",
//     reviews: "2.5k",
//     in_stock: false,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9414",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/s/2/l/8-ls3850-8-layasa-blue-white-original-imageh9ngztqgbpq-bb.jpeg?q=70",
//     categoryName: "women",
//     rating: "5",
//     size: "8",
//     description: "Running Shoes For Women",
//     title: "Skechers",
//     new_arrival: true,
//     price: "1499",
//     discountedPrice: "599",
//     delivery_time: "2",
//     reviews: "4.5k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9415",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/o/j/w/-original-imagfxf6swwfjqpw-bb.jpeg?q=70",
//     categoryName: "women",
//     rating: "2",
//     size: "9",
//     description: "Puma Harper Wns",
//     title: "Puma",
//     new_arrival: true,
//     price: "3499",
//     discountedPrice: "1599",
//     delivery_time: "7",
//     reviews: "3.5k",
//     in_stock: false,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9416",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/7/a/4/8-hop-dimond-8-longwalk-white-original-imaghz6ptehe8zpw.jpeg?q=70",
//     categoryName: "women",
//     rating: "2",
//     size: "7",
//     description: "R78 Voyage Garden",
//     title: "Longwalk ",
//     new_arrival: true,
//     price: "1599",
//     discountedPrice: "780",
//     reviews: "3.5k",
//     in_stock: false,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9417",
//     image:
//       "https://rukminim1.flixcart.com/image/832/832/kufuikw0/sandal/s/n/h/6-ml00014708-marc-loire-grey-original-imag7ke48fuhzsdb.jpeg?q=70",
//     categoryName: "women",
//     rating: "3",
//     size: "8",
//     description: "Bellies For Women",
//     title: "Looks",
//     new_arrival: true,
//     price: "1499",
//     discountedPrice: "599",
//     delivery_time: "7",
//     reviews: "2.5k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9418",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/8/2/n/8c-jordan-5-kats-original-imagkggprf3hc9nt.jpeg?q=70",
//     categoryName: "kids",
//     rating: "2",
//     size: "5",
//     description: "Velcro Sneakers",
//     title: "Pu-Pine ",
//     new_arrival: true,
//     price: "2899",
//     discountedPrice: "799",
//     delivery_time: "3",
//     reviews: "1.5k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9419",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/r/0/c/12-peppa-growing-india-original-imagkrg8vsbp68ck.jpeg?q=70",
//     categoryName: "kids",
//     rating: "3",
//     size: "4",
//     description: "Slip on Sneakers",
//     title: "BUMuhenera",
//     new_arrival: true,
//     price: "2999",
//     discountedPrice: "599",
//     delivery_time: "4",
//     reviews: "4.8k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9420",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/y/y/z/-original-imaghuj2fsgbu5qn.jpeg?q=70",
//     categoryName: "kids",
//     rating: "1",
//     size: "4",
//     description: "Lace Walking Shoes ",
//     title: "World Wear",
//     new_arrival: true,
//     price: "7499",
//     discountedPrice: "2599",
//     delivery_time: "3",
//     reviews: "1.5k",
//     in_stock: true,
//   },
//   {
//     _id: "27ddd577-6566-41a5-a833-ad2534bf9421",
//     image:
//       "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-shoe/s/k/x/-original-imagg7hzy6zfs2pj.jpeg?q=70",
//     categoryName: "kids",
//     rating: "3",
//     size: "3",
//     description: "Lace Sneakers",
//     title: "NEOBABY",
//     new_arrival: true,
//     price: "5499",
//     discountedPrice: "3099",
//     delivery_time: "4",
//     reviews: "4.5k",
//     in_stock: false,
//   },
// ];
