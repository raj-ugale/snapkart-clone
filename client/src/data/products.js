// src/data/products.js

export const categories = [
  {
    id: "mobiles",
    title: "Mobiles",
    products: [
      {
        id: "iphone-16-pro", name: "iPhone 16 Pro", image: "/images/iphone16pro.png",
        originalPrice: 139999, price: 124999, offer: "11% Off",
        shortDescription: "The ultimate iPhone experience.",
        longDescription: "Experience the iPhone 16 Pro with its sleek titanium design, powerful A18 Pro chip, and stunning 6.3-inch Super Retina XDR display. Capture professional-quality photos with the advanced Fusion camera system, enjoy smooth performance with ProMotion technology, and stay connected with Wi-Fi 7 and satellite connectivity.",
        rating: 4.5,
      },
      {
        id: "samsung-s23-ultra", name: "Samsung S23 Ultra", image: "/images/s23.png",
        originalPrice: "1,24,999", price: 109999, offer: "14% Off",
        shortDescription: "Epic in every way.",
        longDescription: "The Galaxy S23 Ultra comes with a 200MP pro-grade camera, Snapdragon 8 Gen 2 processor, and a built-in S Pen for ultimate creativity. Enjoy a 6.8-inch QHD+ Dynamic AMOLED 2X display with 120Hz refresh rate and a massive 5000mAh battery.",
        rating: 4.5,
      },
      {
        id: "redmi-note13", name: "Redmi Note 13", image: "/images/redmi13.png",
        originalPrice: 19999, price: 16999, offer: "15% Off",
        shortDescription: "Smart performance, stunning design.",
        longDescription: "The Redmi Note 13 delivers excellent value with a 6.6-inch AMOLED display, MediaTek Dimensity processor, and a versatile triple camera setup. A large battery and fast charging make it perfect for everyday use.",
        rating: 4,
      },
      {
        id: "oneplus 11 5G", name: "OnePlus Nord", image: "/images/oneplus11.png",
        originalPrice: 64999, price: 57999, offer: "11% Off",
        shortDescription: "Fast and smooth, redefined.",
        longDescription: "OnePlus 11 5G combines speed and elegance with Snapdragon 8 Gen 2, a 120Hz AMOLED display, Hasselblad triple-camera setup, and super-fast 100W charging. Designed for those who demand flagship performance at a competitive price.",
        rating: 4.2,
      },
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    subcategories: [
      {
        id: "laptops",
        title: "Laptops",
        products: [
          {
            id: "laptop1", name: "Dell Inspiron 15", image: "/images/laptop1.png",
            originalPrice: 65999, price: 54999, offer: "16% Off",
            shortDescription: "Reliable performance for daily tasks.",
            longDescription: "Dell Inspiron 15 is built for productivity with an Intel Core i5 processor, 15.6-inch FHD display, 8GB RAM, and fast SSD storage. Ideal for students and professionals alike.", 
            rating: 4.3,
          },
          {
            id: "laptop2", name: "HP Pavilion 14", image: "/images/laptop2.png",
            originalPrice: 60999, price: 50999, offer: "16% Off",
            shortDescription: "Compact yet powerful.",
            longDescription: "HP Pavilion 14 offers portability and style with a 14-inch micro-edge display, AMD Ryzen/Intel processors, long battery life, and modern design — perfect for work and entertainment.",
            rating: 4.4,
          },
          {
            id: "laptop3", name: "Lenovo IdeaPad Slim", image: "/images/laptop3.png",
            originalPrice: 55999, price: 44999, offer: "19% Off",
            shortDescription: "Lightweight productivity on the go.",
            longDescription: "Lenovo IdeaPad Slim combines a slim design with dependable performance, featuring a sharp FHD screen, SSD storage, and Dolby Audio. Great for those who value portability and efficiency.",
            rating: 4.1,
          },
          {
            id: "laptop4", name: "MacBook Air M1", image: "/images/macbook.png",
            originalPrice: 99999, price: 87999, offer: "12% Off",
            shortDescription: "Thin. Powerful. Silent.",
            longDescription: "The MacBook Air M1 revolutionizes laptops with Apple’s M1 chip, offering incredible speed, energy efficiency, and a fanless design. With up to 18 hours of battery life, it’s the ultimate ultraportable.",
            rating: 4.9,
          },
        ],
      },
      {
        id: "smartwatches",
        title: "Smartwatches",
        products: [
          {
            id: "watch1", name: "Apple Watch SE", image: "/images/watch1.png",
            originalPrice: 29999, price: 24999, offer: "17% Off",
            shortDescription: "Essential features, great value.",
            longDescription: "Apple Watch SE packs core fitness tracking, heart rate monitoring, notifications, and fall detection into a stylish design. It’s the best affordable entry into the Apple Watch lineup.",
            rating: 4.6,
          },
          {
            id: "watch2", name: "Samsung Galaxy Watch 5", image: "/images/watch2.png",
            originalPrice: 27999, price: 22999, offer: "18% Off",
            shortDescription: "Health and style on your wrist.",
            longDescription: "The Galaxy Watch 5 offers advanced sleep tracking, fitness insights, and durable sapphire glass. With LTE options and a sleek AMOLED display, it blends health features with everyday convenience.",
            rating: 4.5,
          },
          {
            id: "watch3", name: "Noise ColorFit Ultra", image: "/images/watch3.png",
            originalPrice: 5999, price: 3999, offer: "33% Off",
            shortDescription: "Affordable fitness companion.",
            longDescription: "Noise ColorFit Ultra features a large HD display, multiple sports modes, heart rate monitoring, and long-lasting battery. A stylish and budget-friendly smartwatch for everyday use.",
            rating: 4.1,
          },
          {
            id: "watch4", name: "Fossil Gen 6", image: "/images/watch4.png",
            originalPrice: 24999, price: 19999, offer: "20% Off",
            shortDescription: "Classic style meets smart features.",
            longDescription: "Fossil Gen 6 runs on Wear OS, offering Google apps, fitness tracking, and customizable watch faces. With its stainless steel design, it blends fashion with functionality.",
            rating: 4.3,
          },
        ],
      },
      {
        id: "earbuds",
        title: "Earbuds",
        products: [
          {
            id: "earbud1", name: "AirPods Pro", image: "/images/earbud1.png",
            originalPrice: 24999, price: 19999, offer: "20% Off",
            shortDescription: "Immersive sound, seamless Apple integration.",
            longDescription: "AirPods Pro deliver active noise cancellation, spatial audio, and a customizable fit. With transparency mode and wireless charging, they redefine true wireless earphones for Apple users.",
            rating: 4.7,
          },
          {
            id: "earbud2", name: "Samsung Galaxy Buds 2", image: "/images/earbud2.png",
            originalPrice: 15999, price: 11999, offer: "25% Off",
            shortDescription: "Compact design, rich sound.",
            longDescription: "Galaxy Buds 2 feature dynamic two-way speakers, ANC, and comfortable fit. With seamless Galaxy ecosystem integration, they’re perfect for music and calls on the go.",
            rating: 4.4,
          },
          {
            id: "earbud3", name: "boAt Airdopes 441", image: "/images/earbud3.png",
            originalPrice: 3999, price: 1999, offer: "50% Off",
            shortDescription: "Bass-heavy, budget-friendly earbuds.",
            longDescription: "boAt Airdopes 441 deliver punchy sound, touch controls, IPX7 water resistance, and up to 30 hours of playtime with the case — all at an affordable price point.",
            rating: 4.2
          },
          {
            id: "earbud4", name: "Sony WF-1000XM4", image: "/images/earbud4.png",
            originalPrice: 19999, price: 15999, offer: "20% Off",
            shortDescription: "Premium sound with industry-best ANC.",
            longDescription: "Sony WF-1000XM4 earbuds bring Hi-Res audio, superior noise cancellation, and adaptive sound control. With long battery life and wireless charging, they set the benchmark for premium earbuds.",
            rating: 4.8
            
          },
        ],
      },
      {
        id: "headsets",
        title: "Headsets",
        products: [
          {
            id: "headset1", name: "HyperX Cloud II", image: "/images/headset1.png",
            originalPrice: 8999, price: 6999, offer: "22% Off",
            shortDescription: "Comfort and sound built for gamers.",
            longDescription: "HyperX Cloud II gaming headset delivers immersive 7.1 virtual surround sound, memory foam ear pads, and a detachable noise-cancelling mic. Known for comfort during long gaming sessions.",
            rating: 4.5
          },
          {
            id: "headset2", name: "Logitech G733", image: "/images/headset2.png",
            originalPrice: 12499, price: 9999, offer: "20% Off",
            shortDescription: "Wireless freedom, vibrant style.",
            longDescription: "The Logitech G733 features LIGHTSPEED wireless, customizable RGB lighting, Blue VO!CE mic technology, and 29 hours of battery life. A headset that looks as good as it performs.",
            rating: 4.4
          },
          {
            id: "headset3", name: "Razer Kraken X", image: "/images/headset3.png",
            originalPrice: 4999, price: 3499, offer: "30% Off",
            shortDescription: "Lightweight headset, powerful sound.",
            longDescription: "Razer Kraken X offers 7.1 surround sound, a lightweight design (just 250g), and plush ear cushions. A budget-friendly option for immersive gaming audio.",
            rating: 4.1
          },
          {
            id: "headset4", name: "Corsair HS70", image: "/images/headset4.png",
            originalPrice: 10999, price: 8499, offer: "23% Off",
            shortDescription: "Durable build, wireless performance.",
            longDescription: "Corsair HS70 combines 7.1 surround sound with a rugged build and low-latency wireless. With up to 16 hours of battery life, it’s a dependable choice for gamers.",
            rating: 4.2
          },
        ],
      },
    ],
  },
  {
    id: "fashion",
    title: "Fashion",
    subcategories: [
      {
        id: "shirts",
        title: "Shirts",
        products: [
          { id: "shirt1", name: "Casual Cotton Shirt", image: "/images/shirt1.png", 
            originalPrice: 1999, price: 999, offer: "50% Off", 
            shortDescription: "Breathable and stylish everyday wear.",
            longDescription: "Crafted from pure cotton, this casual shirt offers comfort and durability. Designed with a relaxed fit and versatile style, it’s perfect for work, weekends, or outings.",
            rating: 4.2
          },
          { id: "shirt2", name: "Formal White Shirt", image: "/images/shirt2.png", 
            originalPrice: 2499, price: 1499, offer: "40% Off",
            shortDescription: "Crisp, classic, and professional.",
            longDescription: "This formal white shirt is made from premium cotton blend fabric, offering a sharp look and easy maintenance. Ideal for office, meetings, or formal events.",
            rating: 4.3
          },
          { id: "shirt3", name: "Denim Shirt", image: "/images/shirt3.png", 
            originalPrice: 2299, price: 1599, offer: "30% Off",
            shortDescription: "Rugged look with modern fit.",
            longDescription: "The denim shirt combines casual comfort with edgy style. Made from durable denim fabric, it’s perfect for layering or standalone wear for a laid-back yet confident look.",
            rating: 4.1,
          },
          { id: "shirt4", name: "Printed Shirt", image: "/images/shirt4.png", 
            originalPrice: 1799, price: 1299, offer: "28% Off",
            shortDescription: "Casual wear with a pop of design.",
            longDescription: "Made from lightweight fabric, this printed shirt adds vibrancy to your wardrobe. A comfortable fit and stylish prints make it great for casual outings.",
            rating: 4.0
          },
        ],
      },
      {
        id: "jeans",
        title: "Jeans",
        products: [
          { id: "jeans1", name: "Blue Slim Fit Jeans", image: "/images/jeans1.png", 
            originalPrice: 2499, price: 1499, offer: "40% Off",
            shortDescription: "Classic denim with a modern fit.",
            longDescription: "Blue slim fit jeans crafted from stretch denim provide comfort with a contemporary silhouette. A versatile essential for casual or semi-formal looks.",
            rating: 4.3
          },
          { id: "jeans2", name: "Black Skinny Jeans", image: "/images/jeans2.png", 
            originalPrice: 2699, price: 1799, offer: "33% Off",
            shortDescription: "Bold and stylish everyday denim.",
            longDescription: "Black skinny jeans made with high-quality stretch fabric hug the body while allowing easy movement. Perfect for pairing with both casual tees and formal shirts.",
            rating: 4.2
          },
          { id: "jeans3", name: "Grey Straight Jeans", image: "/images/jeans3.png", 
            originalPrice: 2399, price: 1699, offer: "29% Off",
            shortDescription: "Comfort meets classic design.",
            longDescription: "Grey straight jeans offer a relaxed fit with durable denim fabric. Ideal for daily wear with a timeless and versatile color.",
            rating: 4.0
          },
          { id: "jeans4", name: "Ripped Denim Jeans", image: "/images/jeans4.png", 
            originalPrice: 2999, price: 1999, offer: "33% Off",
            shortDescription: "Edgy style, casual comfort.",
            longDescription: "Ripped denim jeans bring a streetwear-inspired look with distressed details and slim fit. Designed for those who want modern casual wear with attitude.",
            rating: 4.1
          },
        ],
      },
      {
        id: "shoes",
        title: "Shoes",
        products: [
          { id: "shoe1", name: "Running Shoes", image: "/images/shoe1.png",
            originalPrice: 3499, price: 2499, offer: "28% Off", 
            shortDescription: "Lightweight shoes built for speed.",
            longDescription: "Running shoes designed with breathable mesh, cushioned midsoles, and durable outsoles. Perfect for daily jogging, workouts, and active lifestyles.",
            rating: 4.3
          },
          { id: "shoe2", name: "Casual Sneakers", image: "/images/shoe2.png", 
            originalPrice: 2999, price: 1999, offer: "33% Off",
            shortDescription: "Versatile style for daily wear.",
            longDescription: "Casual sneakers with a trendy design, comfortable soles, and durable construction. Perfect for pairing with jeans, shorts, or casual outfits.",
            rating: 4.3
          },
          { id: "shoe3", name: "Formal Leather Shoes", image: "/images/shoe3.png", 
            originalPrice: 4999, price: 3499, offer: "30% Off",
            shortDescription: "Sophisticated style for formal wear.",
            longDescription: "Crafted from genuine leather, these formal shoes feature a sleek design with cushioned insoles for comfort. Ideal for offices, weddings, or formal occasions.",
            rating: 4.4
          },
          { id: "shoe4", name: "Sports Shoes", image: "/images/shoe4.png", 
            originalPrice: 3999, price: 2799, offer: "30% Off",
            shortDescription: "All-rounder shoes for active wear.",
            longDescription: "Sports shoes offering durable grip, breathable fabric, and cushioned support. Great for gym sessions, outdoor sports, and casual wear.",
            rating: 4.2
          },
        ],
      },
      {
        id: "jackets",
        title: "Jackets",
        products: [
          { id: "jacket1", name: "Leather Jacket", image: "/images/jacket1.png", 
            originalPrice: 5999, price: 3999, offer: "33% Off",
            shortDescription: "Timeless style with rugged charm.",
            longDescription: "This leather jacket is crafted from premium faux/genuine leather with a slim fit, zip closure, and classic biker look. A wardrobe essential for cool-weather style.",
            rating: 4.4
          },
          { id: "jacket2", name: "Denim Jacket", image: "/images/jacket2.png", 
            originalPrice: 3499, price: 2499, offer: "28% Off",
            shortDescription: "Classic outerwear staple.",
            longDescription: "A denim jacket built with sturdy cotton fabric and a tailored fit. Perfect for layering across seasons, offering a casual and timeless look.",
            rating: 4.2
          },
          { id: "jacket3", name: "Winter Puffer Jacket", image: "/images/jacket3.png", 
            originalPrice: 6999, price: 4999, offer: "29% Off",
            shortDescription: "Warmth without the weight.",
            longDescription: "The winter puffer jacket provides insulation with lightweight padding, water-resistant fabric, and a hood for protection. Ideal for cold weather comfort.",
            rating: 4.5
          },
          { id: "jacket4", name: "Hooded Jacket", image: "/images/jacket4.png",
            originalPrice: 4499, price: 3299, offer: "27% Off",
            shortDescription: "Casual and functional outerwear.",
            longDescription: "The hooded jacket features a soft lining, adjustable hood, and lightweight material for versatile use. Perfect for everyday wear in mild winters.",
            rating: 4.1
          },
        ],
      },
    ],
  },
  {
    id: "toys",
    title: "Toys",
    products: [
      { id: "toy1", name: "Lego Technic Ferrari 488 GTE",image: "/images/toy1.png", 
        originalPrice: 16999, price: 14999, offer: "12% Off",
        shortDescription: "Build your racing dream.",
        longDescription:"Experience the thrill of motorsport with the LEGO Technic Ferrari 488 GTE set. Packed with authentic details including suspension, engine, and aerodynamic bodywork, it’s a rewarding build for car enthusiasts.",
        rating: 4.8,
      },
      { id: "toy2", name: "Barbie Dreamhouse Doll Set", image: "/images/toy2.png", 
        originalPrice: 12999, price: 9999, offer: "23% Off",
        shortDescription: "Where imagination lives.",
        longDescription:"The Barbie Dreamhouse Doll Set features 3 floors, 8 rooms, a working elevator, and over 70 accessories. Kids can create endless stories with Barbie and friends in this stylish dollhouse.",
        rating: 4.6,
      },
      { id: "toy3", name: "Hot Wheels Mega Garage Playset", image: "/images/toy3.png", 
        originalPrice: 8999, price: 7499, offer: "17% Off", 
        shortDescription: "Racing fun at every level.",
        longDescription: "The Hot Wheels Mega Garage is a multi-level playset with parking for over 35 cars, motorized elevator, and exciting racing tracks. Ideal for young car enthusiasts.",
        rating: 4.3,
      },
      { id: "toy4", name: "Action Figure", image: "/images/toy4.png", 
        originalPrice: 1299, price: 899, offer: "30% Off",
        shortDescription: "Your friendly neighborhood hero.",
        longDescription: "This Spider-Man action figure features detailed sculpting, multiple articulation points, and a durable build. Great for kids, collectors, and Marvel fans alike.",
        rating: 4.4
      },
    ],
  },
];

// Flatten all products for search/detail page
export const products = categories.flatMap((cat) => {
  let all = [];

  // include products directly under category 
  if (cat.products) {
    all = all.concat(cat.products);
  }

  // include products inside subcategories
  if (cat.subcategories) {
    cat.subcategories.forEach((sub) => {
      all = all.concat(sub.products);
    });
  }
  return all;
});

// Separate hero products
export const heroProducts = [
  {
    id: "hero-1",
    name: "Wireless Headphones",
    originalPrice: 3999,
    price: 2999,
    offer: "25% Off",
    image: "/images/herobuds.png",
    longDescription: "Experience high-quality sound with OnePlus earbuds. Featuring deep bass, clear treble, and smart noise cancellation, these lightweight earbuds provide all-day comfort and seamless connectivity for music, calls, and workouts.",
    rating: 4.5,
  },
  {
    id: "hero-2",
    name: "Smart Watch",
    originalPrice: 5999,
    price: 4999,
    offer: "17% Off",
    image: "/images/herowatch.png",
    longDescription: "Stay connected and track your health with the Titan smartwatch. Featuring a sleek design, heart rate monitoring, step tracking, and smart notifications, it combines style and functionality for everyday use.",
    rating: 4,
  },
  {
    id: "hero-3",
    name: "Gaming Mouse",
    originalPrice: 2499,
    price: 1499,
    offer: "40% Off",
    image: "/images/heromouse.png",
    longDescription: "Enhance your gaming experience with this precision gaming mouse. Featuring customizable DPI, ergonomic design, and responsive buttons, it offers comfort and accuracy for long gaming sessions.",
    rating: 4.3,
  },
  {
    id: "hero-4",
    name: "Mobiles",
    originalPrice: 50000,
    price: 35000,
    offer: "30% Off",
    image: "/images/herophone.png",
    longDescription: "Discover the iPhone 15 with its sleek design, advanced camera system, and powerful performance. Enjoy a vibrant display, seamless connectivity, and long-lasting battery, making it perfect for work, play, and everything in between.",
    rating: 4.7,
  },
  // ✅ keep your other normal products below...
];

export const allProducts = [...products, ...heroProducts];