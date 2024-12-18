import shoe1 from '../assets/shop_items/shoe 1.png';
import shoe2 from '../assets/shop_items/shoe 2.png';
import shoe3 from '../assets/shop_items/shoe 3.png';
import shoe4 from '../assets/shop_items/shoe 4.png';
import shoe5 from '../assets/shop_items/shoe 5.png';
import shoe6 from '../assets/shop_items/shoe 6.png';
import shoe7 from '../assets/shop_items/shoe 7.png';
import cloth1 from '../assets/shop_items/cloth 1.png';
import cloth2 from '../assets/shop_items/clothe 2.png';
import cloth3 from '../assets/shop_items/cloth 3.png';
import cloth4 from '../assets/shop_items/cloth 4.png';
import cloth5 from '../assets/shop_items/cloth 5.png';
import cloth6 from '../assets/shop_items/cloth 6.png';
import cloth7 from '../assets/shop_items/cloth 7.png';
import menbag1 from '../assets/shop_items/men bag 1.jpeg';
import menbag2 from '../assets/shop_items/men bag 2.jpeg';
import womenbag1 from '../assets/shop_items/bag 2.jpeg';
import womenbag2 from '../assets/shop_items/bag 3.jpeg';
import acessmen1 from '../assets/shop_items/acessmen1.jpeg';
import acessmen2 from '../assets/shop_items/accessmen2.jpeg';
import acesswomen1 from '../assets/shop_items/accesswomen1.jpeg';
import acesswomen2 from '../assets/shop_items/accesswomen2.jpeg';
import acesswomen3 from '../assets/shop_items/accesswomne3.jpeg';


const shopItems = [
    {
        name: "Shoe 1",
        price: 15000,
        colorsAvailable: ["Red", "Blue", "Black"],
        size: [38, 39, 40, 41, 42],
        inStock: true,
        image: shoe1,
        type: 'shoes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Shoe 2",
        price: 16500,
        colorsAvailable: ["White", "Gray", "Black"],
        size: [39, 40, 42, 44],
        inStock: false,
        image: shoe2,
        type: 'shoes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Shoe 3",
        price: 17000,
        colorsAvailable: ["Green", "Yellow"],
        size: [37, 38, 39, 40],
        inStock: true,
        image: shoe3,
        type: 'shoes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Shoe 4",
        price: 18000,
        colorsAvailable: ["Black", "Brown"],
        size: [40, 41, 42, 43],
        inStock: true,
        image: shoe4,
        type: 'shoes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Shoe 5",
        price: 15500,
        colorsAvailable: ["Blue", "White"],
        size: [36, 37, 38, 39],
        inStock: false,
        image: shoe5,
        type: 'shoes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "Shoe 6",
        price: 19000,
        colorsAvailable: ["Red", "Black"],
        size: [41, 42, 43, 44, 45],
        inStock: true,
        image: shoe6,
        type: 'shoes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "Shoe 7",
        price: 10000,
        colorsAvailable: ["Purple", "Pink"],
        size: [37, 38, 39, 40, 41],
        inStock: false,
        image: shoe7,
        type: 'shoes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Flay Skirt",
        price: 5000,
        colorsAvailable: ["Red", "Blue", "Black"],
        size: [38, 39, 40, 41, 42],
        inStock: true,
        image: cloth1,
        type: 'clothes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Hijab",
        price: 6500,
        colorsAvailable: ["White", "Gray", "Black"],
        size: [39, 40, 42, 44],
        inStock: false,
        image: cloth2,
        type: 'clothes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Female Streetwear",
        price: 7000,
        colorsAvailable: ["Green", "Yellow"],
        size: [37, 38, 39, 40],
        inStock: true,
        image: cloth3,
        type: 'clothes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Jacket Sweater",
        price: 8000,
        colorsAvailable: ["Black", "Brown"],
        size: [40, 41, 42, 43],
        inStock: true,
        image: cloth4,
        type: 'clothes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Hoodies",
        price: 15500,
        colorsAvailable: ["Blue", "White"],
        size: [36, 37, 38, 39],
        inStock: false,
        image: cloth5,
        type: 'clothes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "Crop Top",
        price: 8500,
        colorsAvailable: ["Red", "Black"],
        size: [41, 42, 43, 44, 45],
        inStock: true,
        image: cloth6,
        type: 'clothes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "Jacket Sweater",
        price: 10000,
        colorsAvailable: ["Purple", "Pink"],
        size: [37, 38, 39, 40, 41],
        inStock: false,
        image: cloth7,
        type: 'clothes',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Butterfly Necklace",
        price: 8000,
        colorsAvailable: ["Black", "Brown"],
        size: [40, 41, 42, 43],
        inStock: true,
        image: acesswomen2,
        type: 'accessories',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Chain Necklace",
        price: 15500,
        colorsAvailable: ["Blue", "White"],
        size: [36, 37, 38, 39],
        inStock: false,
        image: acessmen2,
        type: 'accessories',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "Black Necklace",
        price: 8500,
        colorsAvailable: ["Red", "Black"],
        size: [41, 42, 43, 44, 45],
        inStock: true,
        image: acessmen1,
        type: 'accessories',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "Pearl",
        price: 10000,
        colorsAvailable: ["Purple", "Pink"],
        size: [37, 38, 39, 40, 41],
        inStock: false,
        image: acesswomen1,
        type: 'accessories',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "ButterFly bag",
        price: 8000,
        colorsAvailable: ["Black", "Brown"],
        size: [40, 41, 42, 43],
        inStock: true,
        image: womenbag2,
        type: 'bags',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
    {
        name: "Knuckle bag",
        price: 15500,
        colorsAvailable: ["Blue", "White"],
        size: [36, 37, 38, 39],
        inStock: false,
        image: menbag1,
        type: 'bags',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "School Bag",
        price: 8500,
        colorsAvailable: ["Red", "Black"],
        size: [41, 42, 43, 44, 45],
        inStock: true,
        image: menbag2,
        type: 'bags',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Male"
    },
    {
        name: "White Bag",
        price: 10000,
        colorsAvailable: ["Purple", "Pink"],
        size: [37, 38, 39, 40, 41],
        inStock: false,
        image: womenbag1,
        type: 'bags',
        description: "Lorem ipsum dolor sit amet consectetur. Odio dictum sed elit ac non tristique. Velit feugiat accumsan nulla pulvinar aenean.",
        gender: "Female"
    },
];

export default shopItems;