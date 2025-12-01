const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    "name": "Classic White T-Shirt",
    "description": "100% cotton white tee",
    "price": 499,
    "image": "https://picsum.photos/seed/t1/400/400",
    "category": "Men",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Blue Denim Jeans",
    "description": "Slim fit denim jeans",
    "price": 1299,
    "image": "https://picsum.photos/seed/t2/400/400",
    "category": "Men",
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Black Hoodie",
    "description": "Warm fleece hoodie",
    "price": 899,
    "image": "https://picsum.photos/seed/t3/400/400",
    "category": "Unisex",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Floral Summer Dress",
    "description": "Light and breezy",
    "price": 1499,
    "image": "https://picsum.photos/seed/t4/400/400",
    "category": "Women",
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Leather Jacket",
    "description": "Stylish moto jacket",
    "price": 4999,
    "image": "https://picsum.photos/seed/t5/400/400",
    "category": "Men",
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Chino Pants",
    "description": "Smart casual chinos",
    "price": 1199,
    "image": "https://picsum.photos/seed/t6/400/400",
    "category": "Men",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Pleated Skirt",
    "description": "Comfortable pleated skirt",
    "price": 799,
    "image": "https://picsum.photos/seed/t7/400/400",
    "category": "Women",
    "sizes": [
      "S",
      "M"
    ]
  },
  {
    "name": "Kids Graphic Tee",
    "description": "Fun print for kids",
    "price": 399,
    "image": "https://picsum.photos/seed/t8/400/400",
    "category": "Kids",
    "sizes": [
      "S",
      "M"
    ]
  },
  {
    "name": "Sports Shorts",
    "description": "Breathable running shorts",
    "price": 599,
    "image": "https://picsum.photos/seed/t9/400/400",
    "category": "Unisex",
    "sizes": [
      "M",
      "L"
    ]
  },
  {
    "name": "Woolen Scarf",
    "description": "Cozy winter scarf",
    "price": 299,
    "image": "https://picsum.photos/seed/t10/400/400",
    "category": "Women",
    "sizes": [
      "One Size"
    ]
  },
  {
    "name": "Formal Shirt",
    "description": "Office wear shirt",
    "price": 999,
    "image": "https://picsum.photos/seed/t11/400/400",
    "category": "Men",
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Maxi Dress",
    "description": "Evening wear maxi",
    "price": 1999,
    "image": "https://picsum.photos/seed/t12/400/400",
    "category": "Women",
    "sizes": [
      "M",
      "L"
    ]
  },
  {
    "name": "Cargo Pants",
    "description": "Utility cargo pants",
    "price": 1399,
    "image": "https://picsum.photos/seed/t13/400/400",
    "category": "Men",
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Denim Jacket",
    "description": "Classic denim jacket",
    "price": 2199,
    "image": "https://picsum.photos/seed/t14/400/400",
    "category": "Unisex",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Striped Polo",
    "description": "Casual polo shirt",
    "price": 699,
    "image": "https://picsum.photos/seed/t15/400/400",
    "category": "Men",
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Yoga Leggings",
    "description": "Stretchy & comfortable",
    "price": 899,
    "image": "https://picsum.photos/seed/t16/400/400",
    "category": "Women",
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Kids Hoodie",
    "description": "Warm hoodie for kids",
    "price": 699,
    "image": "https://picsum.photos/seed/t17/400/400",
    "category": "Kids",
    "sizes": [
      "S",
      "M"
    ]
  },
  {
    "name": "Trench Coat",
    "description": "Classic long coat",
    "price": 5499,
    "image": "https://picsum.photos/seed/t18/400/400",
    "category": "Women",
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Casual Sneakers",
    "description": "Everyday sneakers",
    "price": 2499,
    "image": "https://picsum.photos/seed/t19/400/400",
    "category": "Unisex",
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Summer Hat",
    "description": "Stylish sun hat",
    "price": 399,
    "image": "https://picsum.photos/seed/t20/400/400",
    "category": "Unisex",
    "sizes": [
      "One Size"
    ]
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seeded products');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
seed();
