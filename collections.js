// Simplified currency configuration - no exchange rate needed
const DEFAULT_CURRENCY = "ZAR"

// Complete product data with direct ZAR pricing (same numbers, no conversion)
const products = [
  // Set 1
  {
    id: 1,
    name: "Fury Hoodie",
    price: 450,
    originalPrice: 500,
    image: "hoodies/hoodiee1.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: true,
  },
  {
    id: 2,
    name: "Fury Tee",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirt.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: true,
    onSale: false,
  },
  {
    id: 3,
    name: "Summer set",
    price: 350,
    originalPrice: null,
    image: "Combination/comb1.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 4,
    name: "Beanie",
    price: 100,
    originalPrice: null,
    image: "hats/hat1.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 5,
    name: "Longitude Jackets",
    price: 750,
    originalPrice: null,
    image: "Jackets/jackets1.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: true,
    onSale: false,
  },
  {
    id: 6,
    name: "Leather bag",
    price: 800,
    originalPrice: null,
    image: "Others/others1.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 2
  {
    id: 7,
    name: "Fury Hoodie (Back)",
    price: 400,
    originalPrice: 550,
    image: "hoodies/hoodiee2.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: true,
  },
  {
    id: 8,
    name: "Barcode Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts2.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 9,
    name: "Summer set",
    price: 250,
    originalPrice: null,
    image: "Combination/comb2.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 10,
    name: "Bucket Hat",
    price: 200,
    originalPrice: null,
    image: "hats/hat2.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 11,
    name: "Winter Jacket",
    price: 650,
    originalPrice: null,
    image: "Jackets/jackets2.jpeg?height=600&width=400",
    category: "Tops",
    isNew: false,
    onSale: false,
  },
  {
    id: 12,
    name: "Classic Bag",
    price: 800,
    originalPrice: null,
    image: "Others/others2.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 3
  {
    id: 13,
    name: "Fury Sweater",
    price: 350,
    originalPrice: 550,
    image: "hoodies/hoodiee3.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: true,
  },
  {
    id: 14,
    name: "Tee",
    price: 180,
    originalPrice: null,
    image: "T-Shirts/t-shirts3.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 15,
    name: "Winter set",
    price: 770,
    originalPrice: null,
    image: "Combination/comb3.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 16,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat3.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 17,
    name: "Puffed Jacket",
    price: 650,
    originalPrice: null,
    image: "Jackets/jackets3.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 18,
    name: "Bag",
    price: 800,
    originalPrice: null,
    image: "Others/others3.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 4
  {
    id: 19,
    name: "Fury Sweater (Back)",
    price: 350,
    originalPrice: 550,
    image: "hoodies/hoodiee4.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: true,
  },
  {
    id: 20,
    name: "Unbran Tee",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirts4.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 21,
    name: "T-shirt + Hat",
    price: 250,
    originalPrice: null,
    image: "Combination/comb4.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 22,
    name: "Cap (Printed)",
    price: 100,
    originalPrice: null,
    image: "hats/hat4.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 23,
    name: "Windbreaker",
    price: 550,
    originalPrice: null,
    image: "Jackets/jackets4.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: true,
    onSale: false,
  },
  {
    id: 24,
    name: "Bag",
    price: 800,
    originalPrice: null,
    image: "Others/others4.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 5
  {
    id: 25,
    name: "Hoodie",
    price: 380,
    originalPrice: null,
    image: "hoodies/hoodiee5.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 26,
    name: "Unbran Tee",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirts5.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 27,
    name: "T-shirt + Cap",
    price: 250,
    originalPrice: null,
    image: "Combination/comb5.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 28,
    name: "Cap (Embroidered)",
    price: 150,
    originalPrice: null,
    image: "hats/hat5.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 29,
    name: "Windbreaker",
    price: 550,
    originalPrice: null,
    image: "Jackets/jackets5.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 30,
    name: "Bag",
    price: 800,
    originalPrice: null,
    image: "Others/others5.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 6
  {
    id: 31,
    name: "Hoodie",
    price: 400,
    originalPrice: 550,
    image: "hoodies/hoodiee6.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: true,
  },
  {
    id: 32,
    name: "Unbran Tee",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirts6.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 33,
    name: "T-shirt + Cap",
    price: 250,
    originalPrice: null,
    image: "Combination/comb6.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 34,
    name: "Bucket Hat",
    price: 180,
    originalPrice: 1200,
    image: "hats/hat6.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: true,
  },
  {
    id: 35,
    name: "Windbreaker",
    price: 650,
    originalPrice: null,
    image: "Jackets/jackets6.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 36,
    name: "Bag",
    price: 650,
    originalPrice: null,
    image: "Others/others6.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 7
  {
    id: 37,
    name: "TD Hoodie",
    price: 350,
    originalPrice: null,
    image: "hoodies/hoodiee7.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 38,
    name: "TD Allover",
    price: 300,
    originalPrice: null,
    image: "T-Shirts/t-shirts7.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 39,
    name: "Hoodie + Cap",
    price: 420,
    originalPrice: null,
    image: "Combination/comb7.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 40,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat7.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 41,
    name: "Winter Jacket",
    price: 650,
    originalPrice: null,
    image: "Jackets/jackets7.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 42,
    name: "Bag",
    price: 450,
    originalPrice: null,
    image: "Others/others7.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 8
  {
    id: 43,
    name: "Hoodie",
    price: 350,
    originalPrice: null,
    image: "hoodies/hoodiee8.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 44,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts8.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 45,
    name: "Hat + T-shirt",
    price: 280,
    originalPrice: null,
    image: "Combination/comb8.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 46,
    name: "Embroidered Caps",
    price: 150,
    originalPrice: null,
    image: "hats/hat8.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 47,
    name: "Longitude Jacket",
    price: 750,
    originalPrice: null,
    image: "Jackets/jackets8.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 48,
    name: "Glass Music Plague",
    price: 200,
    originalPrice: null,
    image: "Others/others8.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 9
  {
    id: 49,
    name: "Hoodie",
    price: 350,
    originalPrice: null,
    image: "hoodies/hoodiee9.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 50,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts9.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 51,
    name: "Hoodie + Cap",
    price: 800,
    originalPrice: null,
    image: "Combination/comb9.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 52,
    name: "Bucket Hat",
    price: 180,
    originalPrice: null,
    image: "hats/hat9.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 53,
    name: "Winter Jacket",
    price: 650,
    originalPrice: null,
    image: "Jackets/jackets9.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 54,
    name: "Love Story Book",
    price: 250,
    originalPrice: null,
    image: "Others/others9.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 10
  {
    id: 55,
    name: "TeeDee Simple Hoodie",
    price: 320,
    originalPrice: null,
    image: "hoodies/hoodiee10.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 56,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts10.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 57,
    name: "Hoodiee + Cap + Tee",
    price: 650,
    originalPrice: null,
    image: "Combination/comb10.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 58,
    name: "Embroidered Caps",
    price: 150,
    originalPrice: 200,
    image: "hats/hat10.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: true,
  },
  {
    id: 59,
    name: "Puffer Jacket",
    price: 650,
    originalPrice: null,
    image: "Jackets/jackets10.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: true,
    onSale: false,
  },
  {
    id: 60,
    name: "Engraved Wooden Trays",
    price: 250,
    originalPrice: null,
    image: "Others/others10.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 11
  {
    id: 61,
    name: "Hoodie",
    price: 320,
    originalPrice: null,
    image: "hoodies/hoodiee11.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 62,
    name: "Unbran Tee",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirts11.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 63,
    name: "T-Shirt + Hat",
    price: 250,
    originalPrice: null,
    image: "Combination/comb11.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 64,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat11.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 65,
    name: "Winter Jackets",
    price: 650,
    originalPrice: null,
    image: "Jackets/jackets11.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 66,
    name: "Customized Key Holder",
    price: 60,
    originalPrice: null,
    image: "Others/others11.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 12
  {
    id: 67,
    name: "Sweater",
    price: 320,
    originalPrice: null,
    image: "hoodies/hoodiee12.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 68,
    name: "Oversized t-shirt",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirts12.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 69,
    name: "T-shirt + Hat",
    price: 250,
    originalPrice: null,
    image: "Combination/comb12.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 70,
    name: "Cap",
    price: 150,
    originalPrice: null,
    image: "hats/hat12.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 71,
    name: "Longitude Jackets",
    price: 750,
    originalPrice: null,
    image: "Jackets/jackets12.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 72,
    name: "Bucket Hat + Masks",
    price: 220,
    originalPrice: null,
    image: "Others/others12.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 13
  {
    id: 73,
    name: "Sweater",
    price: 320,
    originalPrice: null,
    image: "hoodies/hoodiee13.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 74,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts13.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 75,
    name: "Hoodie + T-Shirt",
    price: 420,
    originalPrice: null,
    image: "Combination/comb13.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 76,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat13.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 77,
    name: "Longitude Jackets",
    price: 750,
    originalPrice: null,
    image: "Jackets/jackets13.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 78,
    name: "Key Holders",
    price: 80,
    originalPrice: null,
    image: "Others/others13.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 14
  {
    id: 79,
    name: "Sweater",
    price: 320,
    originalPrice: null,
    image: "hoodies/hoodiee14.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 80,
    name: "Oversized t-shirt",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirts14.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 81,
    name: "(T-Shirt + Bucket) & (Cap + Hoodie)",
    price: 800,
    originalPrice: null,
    image: "Combination/comb14.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 82,
    name: "Caps",
    price: 100,
    originalPrice: null,
    image: "hats/hat14.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 83,
    name: "Tracksuits",
    price: 320,
    originalPrice: null,
    image: "Jackets/jackets14.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 84,
    name: "Phone Cover",
    price: 120,
    originalPrice: null,
    image: "Others/others14.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 15
  {
    id: 85,
    name: "TeeDee Hoodie",
    price: 420,
    originalPrice: null,
    image: "hoodies/hoodiee15.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 86,
    name: "Teedee Pixels 1.2",
    price: 250,
    originalPrice: 300,
    image: "T-Shirts/t-shirts15.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: true,
  },
  {
    id: 87,
    name: "(Sweater + Cap) & (Cap + Hoodie)",
    price: 900,
    originalPrice: null,
    image: "Combination/comb15.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 88,
    name: "Cap",
    price: 120,
    originalPrice: null,
    image: "hats/hat15.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 89,
    name: "Hoodie",
    price: 350,
    originalPrice: null,
    image: "Jackets/hoodiejacket15.jpeg?height=600&width=400",
    category: "Hoodie",
    isNew: false,
    onSale: false,
  },
  {
    id: 90,
    name: "Pixels Vest",
    price: 120,
    originalPrice: null,
    image: "Others/t-shirt15.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 16
  {
    id: 91,
    name: "TeeDee Hoodie",
    price: 420,
    originalPrice: null,
    image: "hoodies/hoodiee16.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 92,
    name: "Tee",
    price: 160,
    originalPrice: null,
    image: "T-Shirts/t-shirts16.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 93,
    name: "Hoodie + beanie",
    price: 450,
    originalPrice: null,
    image: "Combination/comb16.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 94,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat16.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 95,
    name: "FullSet",
    price: 750,
    originalPrice: null,
    image: "Jackets/combjacket16.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 96,
    name: "Pixels Vest",
    price: 120,
    originalPrice: null,
    image: "Others/t-shirt16.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 17
  {
    id: 97,
    name: "TeeDee Hoodie",
    price: 420,
    originalPrice: null,
    image: "hoodies/hoodiee17.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 98,
    name: "Tee",
    price: 150,
    originalPrice: null,
    image: "T-Shirts/t-shirts17.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 99,
    name: "T-Shirt + Cap",
    price: 250,
    originalPrice: null,
    image: "Combination/comb17.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 100,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat17.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 101,
    name: "Cream White Fullset",
    price: 600,
    originalPrice: null,
    image: "Jackets/fullset1.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 102,
    name: "Pixels (Tee + Vest)",
    price: 180,
    originalPrice: null,
    image: "Others/t-shirt17.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 18
  {
    id: 103,
    name: "TeeDee Simple Hoodie",
    price: 200,
    originalPrice: null,
    image: "hoodies/hoodiee18.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 104,
    name: "Tee",
    price: 180,
    originalPrice: null,
    image: "T-Shirts/t-shirts18.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 105,
    name: "Women Full Set",
    price: 600,
    originalPrice: null,
    image: "Combination/comb18.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 106,
    name: "Embroidered Caps",
    price: 100,
    originalPrice: null,
    image: "hats/hat18.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 107,
    name: "Grey Fullset",
    price: 600,
    originalPrice: null,
    image: "Jackets/fullset2.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 108,
    name: "Tee",
    price: 180,
    originalPrice: null,
    image: "Others/t-shirt18.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  // Set 19
  {
    id: 109,
    name: "Croped Hoodie",
    price: 300,
    originalPrice: null,
    image: "hoodies/hoodiee19.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 110,
    name: "TD Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts19.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 111,
    name: "T-shirt + Tee",
    price: 250,
    originalPrice: null,
    image: "Combination/comb19.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 112,
    name: "Embroidered Cap",
    price: 150,
    originalPrice: null,
    image: "hats/hat19.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 113,
    name: "White Fullset",
    price: 600,
    originalPrice: null,
    image: "Jackets/fullset3.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 114,
    name: "Vest Pixels 1.2",
    price: 120,
    originalPrice: null,
    image: "Others/t-shirt19.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 20
  {
    id: 115,
    name: "Croped Hoodie",
    price: 200,
    originalPrice: null,
    image: "hoodies/hoodiee20.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 116,
    name: "TD Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts20.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 117,
    name: "Full Set",
    price: 600,
    originalPrice: null,
    image: "Combination/comb20.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 118,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat20.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 119,
    name: "Winter Dress",
    price: 450,
    originalPrice: null,
    image: "Jackets/fullset4.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 120,
    name: "Teedee Pixels 2.1",
    price: 200,
    originalPrice: null,
    image: "Others/t-shirt20.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  // Set 21
  {
    id: 121,
    name: "Hoodie",
    price: 200,
    originalPrice: null,
    image: "hoodies/hoodiee21.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 122,
    name: "Correctional Range",
    price: 280,
    originalPrice: null,
    image: "T-Shirts/t-shirts21.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 123,
    name: "Gym Gear",
    price: 450,
    originalPrice: null,
    image: "Combination/comb21.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 124,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat21.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 125,
    name: "Winter Fullset",
    price: 750,
    originalPrice: null,
    image: "Jackets/fullset5.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 126,
    name: "Bottle + Cap",
    price: 220,
    originalPrice: null,
    image: "Others/others21.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 22
  {
    id: 127,
    name: "Croped Hoodie",
    price: 300,
    originalPrice: null,
    image: "hoodies/hoodiee22.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 128,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts22.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 129,
    name: "Barcode Full Set",
    price: 600,
    originalPrice: null,
    image: "Combination/comb22.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 130,
    name: "Bucket Hat",
    price: 180,
    originalPrice: null,
    image: "hats/hat22.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 131,
    name: "Classic Jacket",
    price: 450,
    originalPrice: null,
    image: "Jackets/fullset6.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 132,
    name: "Vest",
    price: 120,
    originalPrice: null,
    image: "Others/others22.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 23
  {
    id: 133,
    name: "Hoodie",
    price: 350,
    originalPrice: null,
    image: "hoodies/hoodiee23.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 134,
    name: "Teedee Vagabong",
    price: 180,
    originalPrice: null,
    image: "T-Shirts/t-shirts23.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 135,
    name: "Purple Full Set",
    price: 600,
    originalPrice: null,
    image: "Combination/comb23.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 136,
    name: "Printed Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat23.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 137,
    name: "Teedee Crop Top",
    price: 200,
    originalPrice: null,
    image: "Jackets/fullset7.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 138,
    name: "Tee + Vest",
    price: 260,
    originalPrice: null,
    image: "Others/others23.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 24
  {
    id: 139,
    name: "Hoodie",
    price: 400,
    originalPrice: null,
    image: "hoodies/hoodiee24.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 140,
    name: "Correctional Range",
    price: 250,
    originalPrice: null,
    image: "T-Shirts/t-shirts24.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 141,
    name: "Green Full Set",
    price: 600,
    originalPrice: null,
    image: "Combination/comb24.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 142,
    name: "Beanie(Printed)",
    price: 100,
    originalPrice: null,
    image: "hats/hat24.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 143,
    name: "Designed Crop Top",
    price: 300,
    originalPrice: null,
    image: "Jackets/fullset8.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  {
    id: 144,
    name: "Tee",
    price: 160,
    originalPrice: null,
    image: "Others/others24.jpeg?height=600&width=400",
    category: "T-Shirts",
    isNew: false,
    onSale: false,
  },
  // Set 25
  {
    id: 145,
    name: "Hoodie",
    price: 400,
    originalPrice: null,
    image: "hoodies/hoodiee25.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 146,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts25.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 147,
    name: "Yellow Full Set",
    price: 600,
    originalPrice: null,
    image: "Combination/comb25.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 148,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat25.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 149,
    name: "Mordern Sweater",
    price: 350,
    originalPrice: null,
    image: "Jackets/fullset9.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 150,
    name: "Classic Jacket",
    price: 120,
    originalPrice: null,
    image: "Others/others25.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  // Set 26
  {
    id: 151,
    name: "Hoodie",
    price: 400,
    originalPrice: null,
    image: "hoodies/hoodiee26.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 152,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts26.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 153,
    name: "Sweater + Bucket Hat",
    price: 450,
    originalPrice: null,
    image: "Combination/comb26.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 154,
    name: "TD Cap",
    price: 200,
    originalPrice: null,
    image: "hats/hat26.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 155,
    name: "Printed Cap",
    price: 100,
    originalPrice: null,
    image: "Jackets/fullset10.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 156,
    name: "Golf T-Shirt",
    price: 220,
    originalPrice: null,
    image: "Others/others26.jpeg?height=600&width=400",
    category: "T-Shirts",
    isNew: false,
    onSale: false,
  },
  // Set 27
  {
    id: 157,
    name: "Hoodie",
    price: 400,
    originalPrice: null,
    image: "hoodies/hoodiee27.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 158,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts27.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 159,
    name: "Summer Combo",
    price: 450,
    originalPrice: null,
    image: "Combination/comb27.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 160,
    name: "Fury Cap",
    price: 150,
    originalPrice: null,
    image: "hats/hat27.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 161,
    name: "Embroidered Cap",
    price: 150,
    originalPrice: null,
    image: "Jackets/fullset11.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 162,
    name: "Poloneck + Mask + Buckhat",
    price: 500,
    originalPrice: null,
    image: "Others/others27.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 28
  {
    id: 163,
    name: "Hoodie",
    price: 400,
    originalPrice: 550,
    image: "hoodies/hoodiee28.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: true,
  },
  {
    id: 164,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts28.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 165,
    name: "Cap + T-Shirt",
    price: 250,
    originalPrice: null,
    image: "Combination/comb28.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 166,
    name: "Bucket Hat",
    price: 180,
    originalPrice: null,
    image: "hats/hat28.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 167,
    name: "Teedee Colour Splash",
    price: 250,
    originalPrice: null,
    image: "Jackets/fullset12.jpeg?height=600&width=400",
    category: "T-Shirts",
    isNew: false,
    onSale: false,
  },
  {
    id: 168,
    name: "Poloneck",
    price: 300,
    originalPrice: null,
    image: "Others/others28.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
  // Set 29
  {
    id: 169,
    name: "Hoodie",
    price: 400,
    originalPrice: 550,
    image: "hoodies/hoodiee29.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 170,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts29.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 171,
    name: "T-Shirt + Cap",
    price: 250,
    originalPrice: null,
    image: "Combination/comb29.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 172,
    name: "Beanie",
    price: 100,
    originalPrice: null,
    image: "hats/hat29.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 173,
    name: "Sweater",
    price: 350,
    originalPrice: null,
    image: "Jackets/fullset13.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 174,
    name: "Teedee Colour Splash",
    price: 320,
    originalPrice: null,
    image: "Others/others29.jpeg?height=600&width=400",
    category: "T-Shirts",
    isNew: false,
    onSale: false,
  },
  // Set 30
  {
    id: 175,
    name: "Hoodie",
    price: 400,
    originalPrice: null,
    image: "hoodies/hoodiee30.jpeg?height=600&width=400",
    category: "Hoodies",
    isNew: false,
    onSale: false,
  },
  {
    id: 176,
    name: "Tee",
    price: 200,
    originalPrice: null,
    image: "T-Shirts/t-shirts30.jpeg?height=600&width=400",
    category: "T-Shirt",
    isNew: false,
    onSale: false,
  },
  {
    id: 177,
    name: "Cap + T-shirt",
    price: 250,
    originalPrice: null,
    image: "Combination/comb30.jpeg?height=600&width=400",
    category: "Combination",
    isNew: false,
    onSale: false,
  },
  {
    id: 178,
    name: "Cap",
    price: 100,
    originalPrice: null,
    image: "hats/hat30.jpeg?height=600&width=400",
    category: "Hats",
    isNew: false,
    onSale: false,
  },
  {
    id: 179,
    name: "Windbreaker",
    price: 450,
    originalPrice: null,
    image: "Jackets/fullset14.jpeg?height=600&width=400",
    category: "Jackets",
    isNew: false,
    onSale: false,
  },
  {
    id: 180,
    name: "Tee + Cap",
    price: 300,
    originalPrice: null,
    image: "Others/others30.jpeg?height=600&width=400",
    category: "Other",
    isNew: false,
    onSale: false,
  },
]

// DOM elements
const productsGrid = document.getElementById("productsGrid")
const categoryFilter = document.querySelector(".filter-select")
const sortSelect = document.querySelector(".sort-select")
const viewButtons = document.querySelectorAll(".view-btn")

// Current filters and sort
let currentCategory = "All Categories"
let currentSort = "featured"
let currentView = "grid"
const currentCurrency = DEFAULT_CURRENCY

// Simplified price formatting - always show as ZAR
function formatPrice(price) {
  return `R${price.toLocaleString()}`
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products)
  setupEventListeners()
  createCartModal()
  createCartButton()
  updateCartDisplay()
})

// Setup event listeners
function setupEventListeners() {
  if (categoryFilter) {
    categoryFilter.addEventListener("change", handleCategoryChange)
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", handleSortChange)
  }
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", handleViewChange)
  })
}

// Handle category filter change
function handleCategoryChange(e) {
  currentCategory = e.target.value
  filterAndSortProducts()
}

// Handle sort change
function handleSortChange(e) {
  const sortValue = e.target.value
  switch (sortValue) {
    case "Price: Low to High":
      currentSort = "price-asc"
      break
    case "Price: High to Low":
      currentSort = "price-desc"
      break
    case "Newest First":
      currentSort = "newest"
      break
    default:
      currentSort = "featured"
  }
  filterAndSortProducts()
}

// Handle view change
function handleViewChange(e) {
  viewButtons.forEach((btn) => btn.classList.remove("active"))
  e.target.closest(".view-btn").classList.add("active")
  const isGrid = e.target.closest(".view-btn").querySelector(".fa-th")
  currentView = isGrid ? "grid" : "list"
  if (productsGrid) {
    productsGrid.className = currentView === "grid" ? "products-grid" : "products-list"
  }
  renderProducts(getFilteredAndSortedProducts())
}

// Filter and sort products
function filterAndSortProducts() {
  const filteredAndSorted = getFilteredAndSortedProducts()
  renderProducts(filteredAndSorted)
}

// Get filtered and sorted products
function getFilteredAndSortedProducts() {
  let filtered = products

  // Filter by category
  if (currentCategory !== "All Categories") {
    filtered = filtered.filter((product) => product.category === currentCategory)
  }

  // Sort products
  switch (currentSort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price)
      break
    case "newest":
      filtered.sort((a, b) => b.isNew - a.isNew)
      break
    default:
      // Keep original order for featured
      break
  }

  return filtered
}

// Render products
function renderProducts(productsToRender) {
  if (!productsGrid) return

  productsGrid.innerHTML = ""
  productsToRender.forEach((product) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)
  })
}

// Create product card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  const badges = []
  if (product.isNew) badges.push('<span class="product-badge new">New</span>')
  if (product.onSale) badges.push('<span class="product-badge sale">Sale</span>')

  // Use direct ZAR pricing
  const priceHTML = product.originalPrice
    ? `<div class="product-price">
         <span class="current-price">${formatPrice(product.price)}</span>
         <span class="original-price">${formatPrice(product.originalPrice)}</span>
       </div>`
    : `<div class="product-price">
         <span class="current-price">${formatPrice(product.price)}</span>
       </div>`

  card.innerHTML = `
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-overlay">
            <button class="quick-view-btn" onclick="quickView(${product.id})">
                <i class="fas fa-eye"></i>
            </button>
            <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                <i class="far fa-heart"></i>
            </button>
        </div>
        <div class="product-badges">
            ${badges.join("")}
        </div>
    </div>
    <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        ${priceHTML}
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            Add to Cart
        </button>
    </div>
  `

  return card
}

// Utility functions
function quickView(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    console.log("Quick view for:", product.name)
    alert(`Quick view: ${product.name} - ${formatPrice(product.price)}`)
  }
}

function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    console.log("Toggle wishlist for:", product.name)
    alert(`Added ${product.name} to wishlist!`)
  }
}

// Shopping cart state
let cart = []
let cartTotal = 0

// Add to cart function
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    // Check if product already exists in cart
    const existingItem = cart.find((item) => item.id === productId)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        ...product,
        quantity: 1,
      })
    }
    updateCartTotal()
    updateCartDisplay()
    showCartNotification(product.name)
    console.log("Added to cart:", product.name)
  }
}

// Calculate cart total (simplified for ZAR only)
function updateCartTotal() {
  cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

// Update cart display
function updateCartDisplay() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartCountElement = document.querySelector(".cart-count")
  if (cartCountElement) {
    cartCountElement.textContent = cartCount
    cartCountElement.style.display = cartCount > 0 ? "block" : "none"
  }
}

// Show cart notification
function showCartNotification(productName) {
  const notification = document.createElement("div")
  notification.className = "cart-notification"
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-check-circle"></i>
      <span>${productName} added to cart!</span>
    </div>
  `
  document.body.appendChild(notification)

  setTimeout(() => notification.classList.add("show"), 100)
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => document.body.removeChild(notification), 300)
  }, 3000)
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartTotal()
  updateCartDisplay()
  renderCartItems()
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = newQuantity
      updateCartTotal()
      updateCartDisplay()
      renderCartItems()
    }
  }
}

// Render cart items
function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items")
  if (!cartItemsContainer) return

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>'
    return
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const itemTotal = item.price * item.quantity
      return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p class="cart-item-price">${formatPrice(item.price)} each</p>
          <div class="quantity-controls">
            <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="qty-btn">-</button>
            <span class="quantity">${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="qty-btn">+</button>
          </div>
        </div>
        <div class="cart-item-total">
          <p>${formatPrice(itemTotal)}</p>
          <button onclick="removeFromCart(${item.id})" class="remove-btn">×</button>
        </div>
      </div>
    `
    })
    .join("")
}

// Toggle cart modal
function toggleCart() {
  const cartModal = document.querySelector(".cart-modal")
  if (cartModal) {
    cartModal.classList.toggle("show")
    if (cartModal.classList.contains("show")) {
      renderCartItems()
      updateCartSummary()
    }
  }
}

// Update cart summary
function updateCartSummary() {
  const cartSummaryElement = document.querySelector(".cart-summary")
  if (cartSummaryElement) {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
    cartSummaryElement.innerHTML = `
      <div class="summary-line">
        <span>Items (${itemCount}):</span>
        <span>${formatPrice(cartTotal)}</span>
      </div>
      <div class="summary-line total">
        <span>Total:</span>
        <span>${formatPrice(cartTotal)}</span>
      </div>
    `
  }
}

// Place order via WhatsApp
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!")
    return
  }

  // Create order message
  let orderMessage = "🛍️ *New Order Request*\n\n"
  orderMessage += "📋 *Order Details:*\n"

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity
    orderMessage += `${index + 1}. ${item.name}\n`
    orderMessage += `   Qty: ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(itemTotal)}\n\n`
  })

  orderMessage += `💰 *Total: ${formatPrice(cartTotal)} ZAR*\n\n`
  orderMessage += "Please confirm this order and provide delivery details. Thank you! 🙏"

  // Encode message for WhatsApp URL
  const encodedMessage = encodeURIComponent(orderMessage)
  const whatsappNumber = "27631258926" // South African format
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  // Open WhatsApp
  window.open(whatsappURL, "_blank")

  // Clear cart after order
  setTimeout(() => {
    cart = []
    cartTotal = 0
    updateCartDisplay()
    toggleCart()
    showOrderConfirmation()
  }, 1000)
}

// Show order confirmation
function showOrderConfirmation() {
  const confirmation = document.createElement("div")
  confirmation.className = "order-confirmation"
  confirmation.innerHTML = `
    <div class="confirmation-content">
      <i class="fas fa-check-circle"></i>
      <h3>Order Sent!</h3>
      <p>Your order has been sent to WhatsApp. We'll contact you shortly to confirm your order.</p>
    </div>
  `
  document.body.appendChild(confirmation)

  setTimeout(() => confirmation.classList.add("show"), 100)
  setTimeout(() => {
    confirmation.classList.remove("show")
    setTimeout(() => document.body.removeChild(confirmation), 300)
  }, 5000)
}

// Create cart modal
function createCartModal() {
  const cartModal = document.createElement("div")
  cartModal.className = "cart-modal"
  cartModal.innerHTML = `
    <div class="cart-overlay" onclick="toggleCart()"></div>
    <div class="cart-content">
      <div class="cart-header">
        <h2>Shopping Cart</h2>
        <button class="close-cart" onclick="toggleCart()">×</button>
      </div>
      <div class="cart-body">
        <div class="cart-items"></div>
      </div>
      <div class="cart-footer">
        <div class="cart-summary"></div>
        <button class="checkout-btn" onclick="placeOrder()">
          <i class="fab fa-whatsapp"></i>
          Order via WhatsApp
        </button>
      </div>
    </div>
  `
  document.body.appendChild(cartModal)
}

// Create cart button
function createCartButton() {
  const cartButton = document.createElement("div")
  cartButton.className = "cart-button"
  cartButton.innerHTML = `
    <button onclick="toggleCart()" class="cart-btn">
      <i class="fas fa-shopping-cart"></i>
      <span class="cart-count">0</span>
    </button>
  `
  document.body.appendChild(cartButton)
}

// Collections-specific styles
const collectionsStyles = `
    .collections-hero {
        position: relative;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        margin-top: 64px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }
    .collections-hero .hero-title {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }
    .collections-hero .hero-subtitle {
        font-size: 1.25rem;
        opacity: 0.9;
    }
    .currency-display {
        position: absolute;
        bottom: 10px;
        right: 20px;
        background: rgba(255, 255, 255, 0.2);
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.875rem;
    }
    .currency-display::after {
        content: "All prices in ZAR (South African Rand)";
    }
    .filters-section {
        padding: 2rem 0;
        border-bottom: 1px solid #eee;
        background: #f8f9fa;
    }
    .filters-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }
    .filters-left,
    .filters-right {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .filter-btn,
    .filter-select,
    .sort-select {
        padding: 8px 16px;
        border: 1px solid #ddd;
        background: white;
        font-size: 0.875rem;
        cursor: pointer;
        border-radius: 4px;
    }
    .filter-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
    }
    .view-toggle {
        display: flex;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
    }
    .view-btn {
        padding: 8px 12px;
        border: none;
        background: white;
        cursor: pointer;
        border-right: 1px solid #ddd;
    }
    .view-btn:last-child {
        border-right: none;
    }
    .view-btn.active {
        background: #000;
        color: white;
    }
    .products-section {
        padding: 3rem 0;
        max-width: 1200px;
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }
    .products-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .product-card {
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-radius: 8px;
        overflow: hidden;
        background: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    .product-image {
        position: relative;
        overflow: hidden;
    }
    .product-image img {
        width: 100%;
        height: 350px;
        object-fit: cover;
        transition: transform 0.7s ease;
    }
    .product-card:hover .product-image img {
        transform: scale(1.05);
    }
    .product-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .product-card:hover .product-overlay {
        opacity: 1;
    }
    .quick-view-btn,
    .wishlist-btn {
        background: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    .quick-view-btn:hover,
    .wishlist-btn:hover {
        transform: scale(1.1);
    }
    .product-badges {
        position: absolute;
        top: 10px;
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .product-badge {
        padding: 4px 8px;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-radius: 4px;
    }
    .product-badge.new {
        background: #28a745;
        color: white;
    }
    .product-badge.sale {
        background: #dc3545;
        color: white;
    }
    .product-info {
        text-align: center;
        padding: 1.5rem;
    }
    .product-category {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    .product-name {
        font-size: 1.125rem;
        font-weight: 500;
        letter-spacing: 0.025em;
        margin-bottom: 0.75rem;
        color: #333;
    }
    .product-price {
        margin-bottom: 1rem;
    }
    .current-price {
        font-size: 1.25rem;
        font-weight: 600;
        color: #28a745;
    }
    .original-price {
        font-size: 1rem;
        color: #999;
        text-decoration: line-through;
        margin-left: 0.5rem;
    }
    .add-to-cart-btn {
        background: #000000;
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: 100%;
        border-radius: 4px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    .add-to-cart-btn:hover {
        background: #218838;
    }
    /* Cart Button */
    .cart-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    }
    .cart-btn {
        background: #28a745;
        color: white;
        border: none;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        transition: all 0.3s ease;
        position: relative;
    }
    .cart-btn:hover {
        background: #218838;
        transform: scale(1.1);
    }
    .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #dc3545;
        color: white;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        font-size: 0.75rem;
        display: none;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
    /* Cart Modal */
    .cart-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    .cart-modal.show {
        opacity: 1;
        visibility: visible;
    }
    .cart-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .cart-content {
        position: absolute;
        top: 0;
        right: 0;
        width: 400px;
        height: 100%;
        background: white;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
    }
    .cart-modal.show .cart-content {
        transform: translateX(0);
    }
    .cart-header {
        padding: 1.5rem;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cart-header h2 {
        margin: 0;
        font-size: 1.5rem;
    }
    .close-cart {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
    }
    .cart-body {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
    }
    .empty-cart {
        text-align: center;
        color: #666;
        font-style: italic;
        margin-top: 2rem;
    }
    .cart-item {
        display: flex;
        gap: 1rem;
        padding: 1rem 0;
        border-bottom: 1px solid #eee;
    }
    .cart-item-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
    }
    .cart-item-details {
        flex: 1;
    }
    .cart-item-details h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
    }
    .cart-item-price {
        color: #28a745;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
    }
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .qty-btn {
        background: #f8f9fa;
        border: 1px solid #ddd;
        width: 30px;
        height: 30px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .qty-btn:hover {
        background: #e9ecef;
    }
    .quantity {
        min-width: 30px;
        text-align: center;
        font-weight: 600;
    }
    .cart-item-total {
        text-align: right;
    }
    .cart-item-total p {
        margin: 0 0 0.5rem 0;
        font-weight: 600;
        color: #28a745;
    }
    .remove-btn {
        background: #dc3545;
        color: white;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1rem;
    }
    .cart-footer {
        padding: 1.5rem;
        border-top: 1px solid #eee;
        background: #f8f9fa;
    }
    .cart-summary {
        margin-bottom: 1rem;
    }
    .summary-line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
    .summary-line.total {
        font-weight: bold;
        font-size: 1.1rem;
        padding-top: 0.5rem;
        border-top: 1px solid #ddd;
    }
    .checkout-btn {
        width: 100%;
        background: #000000;
        color: white;
        border: none;
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: background-color 0.3s ease;
    }
    .checkout-btn:hover {
        background: #128c7e;
    }
    /* Notifications */
    .cart-notification,
    .order-confirmation {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }
    .cart-notification.show,
    .order-confirmation.show {
        transform: translateX(0);
    }
    .notification-content,
    .confirmation-content {
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .notification-content i,
    .confirmation-content i {
        color: #28a745;
        font-size: 1.2rem;
    }
    .confirmation-content {
        flex-direction: column;
        text-align: center;
        padding: 2rem;
    }
    .confirmation-content i {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .confirmation-content h3 {
        margin: 0 0 0.5rem 0;
        color: #28a745;
    }
    .confirmation-content p {
        margin: 0;
        color: #666;
    }
    /* Mobile Responsive */
    @media (max-width: 768px) {
        .filters-container {
            flex-direction: column;
            align-items: stretch;
        }
        .filters-left,
        .filters-right {
            justify-content: space-between;
        }
        .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }
        .collections-hero .hero-title {
            font-size: 2rem;
        }
        .cart-content {
            width: 100%;
        }
        .cart-btn {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
        }
        .cart-count {
            width: 20px;
            height: 20px;
            font-size: 0.7rem;
        }
    }
`

// Add styles to head
const styleSheet = document.createElement("style")
styleSheet.textContent = collectionsStyles
document.head.appendChild(styleSheet)

// Export functions for external use
window.CollectionJS = {
  products,
  formatPrice,
  quickView,
  toggleWishlist,
  addToCart,
}
