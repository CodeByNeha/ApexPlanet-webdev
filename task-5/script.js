const products = [
  //Electronics
  {
    id: 1,
    name: "Samsung Galaxy M14",
    category: "Electronics",
    price: 13499,
    image: "https://m.media-amazon.com/images/I/91zMokvCNuL._SL1500_.jpg",
    description:
      "A budget-friendly smartphone with a vibrant display and long battery life.",
  },
  {
    id: 2,
    name: "boAt Rockerz 255",
    category: "Electronics",
    price: 899,
    image: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg",
    description:
      "Wireless earphones with powerful bass and long-lasting battery.",
  },
  {
    id: 3,
    name: "Sony WH-CH520",
    category: "Electronics",
    price: 3999,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533161cv12d.jpg",
    description:
      "Comfortable wireless headphones with clear sound and USB-C charging.",
  },
  {
    id: 4,
    name: "Canon EOS 1500D",
    category: "Electronics",
    price: 39999,
    image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
    description:
      "Entry-level DSLR camera with high resolution and easy-to-use features.",
  },
  {
    id: 5,
    name: "Lenovo Laptop V15",
    category: "Electronics",
    price: 35999,
    image:
      "https://th.bing.com/th/id/OIP.DAOlDxjy6chVy9s1HF8UNQHaHa?rs=1&pid=ImgDetMain&cb=idpwebpc1",
    description: "Reliable laptop for work and study with a sleek design.",
  },
  {
    id: 6,
    name: "Mi Smart Band 5",
    category: "Electronics",
    price: 1999,
    image:
      "https://i02.appmifile.com/751_operator_in/26/09/2020/97073b3325ecd26d7f2ff87e63b680fa.jpg",
    description:
      "Fitness tracker with heart rate monitoring and colorful AMOLED display.",
  },
  {
    id: 7,
    name: "Fire-Boltt Ninja Call Pro",
    category: "Electronics",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/61S9aVnRZDL._SL1500_.jpg",
    description:
      "Affordable smartwatch with call functionality and fitness tracking.",
  },
  {
    id: 8,
    name: "SanDisk 64GB Pendrive",
    category: "Electronics",
    price: 449,
    image:
      "https://robu.in/wp-content/uploads/2021/04/Sandisk-Cruzer-Blade-32-Gb-USB-Pen-Drive-3-300x300.jpg",
    description: "Compact USB flash drive for quick data storage and transfer.",
  },
  {
    id: 9,
    name: "TP-Link WiFi Router",
    category: "Electronics",
    price: 1199,
    image:
      "https://th.bing.com/th/id/OIP.qNyrSpbP1ggsYiI2oKBTcwHaHa?pid=ImgDetMain&cb=idpwebpc1",
    description: "High-speed WiFi router for seamless internet connectivity.",
  },
  {
    id: 10,
    name: "Noise ColorFit Pulse",
    category: "Electronics",
    price: 1499,
    image:
      "https://th.bing.com/th/id/OIP.s917a_jEhVZARYizU94tnAAAAA?pid=ImgDetMain&cb=idpwebpc1",
    description:
      "Stylish smartwatch with health monitoring and customizable watch faces.",
  },
  //Clothing
  {
    id: 11,
    name: "Men's Casual Shirt",
    category: "Clothing",
    price: 499,
    image:
      "https://i5.walmartimages.com/asr/898458a3-145c-4777-be3e-754308e58699.ca1fab5b83506224ffcff51549503082.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    description: "Comfortable and stylish casual shirt for everyday wear.",
  },
  {
    id: 12,
    name: "Women's Kurti",
    category: "Clothing",
    price: 649,
    image:
      "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17413170/2022/3/17/242de342-07f7-4344-b423-270927e85ee41647511495979-Anubhutee-Women-Kurtis-6331647511495433-1.jpg",
    description: "Elegant kurti with traditional design for festive occasions.",
  },
  {
    id: 13,
    name: "Men's Jeans",
    category: "Clothing",
    price: 999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMr5soVwnHNG2CtTlNv7aM7HmUZXWDd2btvQ&s",
    description: "Durable and trendy jeans for a modern casual look.",
  },
  {
    id: 14,
    name: "Women's T-shirt",
    category: "Clothing",
    price: 299,
    image:
      "https://i.pinimg.com/originals/94/58/d4/9458d419322b867a3fc74d2961e52d39.jpg",
    description: "Soft and breathable t-shirt for casual comfort.",
  },
  {
    id: 15,
    name: "Kid's Hoodie",
    category: "Clothing",
    price: 599,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/382883637/KS/LD/KN/108022522/kids-hoodies-1000x1000.png",
    description: "Cozy hoodie for kids with vibrant colors and soft fabric.",
  },
  {
    id: 16,
    name: "Men's Blazer",
    category: "Clothing",
    price: 1999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrt3ccBWidQM98mjDFLp37vAMe9tdfVz26w&s",
    description: "Sleek blazer for a sharp and professional appearance.",
  },
  {
    id: 17,
    name: "Saree - Silk",
    category: "Clothing",
    price: 1299,
    image:
      "https://static.wixstatic.com/media/faf1ba_78c7a05c62a24c61a99d18980455fc89~mv2.jpg/v1/fill/w_526,h_692,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/faf1ba_78c7a05c62a24c61a99d18980455fc89~mv2.jpg",
    description:
      "Luxurious silk saree with intricate patterns for special occasions.",
  },
  {
    id: 18,
    name: "Track Pant",
    category: "Clothing",
    price: 599,
    image: "https://m.media-amazon.com/images/I/71PEvCzT0+L._UY350_.jpg",
    description: "Lightweight track pants for workouts or casual wear.",
  },
  {
    id: 19,
    name: "Women's Gown",
    category: "Clothing",
    price: 1599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpgQzAXoJROkZCVeTCi79mbDUUnMWp06OwA&s",
    description: "Graceful gown for evening events or parties.",
  },
  {
    id: 20,
    name: "Formal Shirt",
    category: "Clothing",
    price: 699,
    image: "https://saadaa.in/cdn/shop/files/134.jpg?v=1729922912",
    description: "Crisp formal shirt for office or professional settings.",
  },
  //Footwear
  {
    id: 21,
    name: "Campus Sneakers",
    category: "Footwear",
    price: 799,
    image:
      "https://www.campusshoes.com/cdn/shop/files/LEVEL_LEVEL_WHT-L.GRY_01.webp?v=1749800176",
    description: "Stylish sneakers for casual and active lifestyles.",
  },
  {
    id: 22,
    name: "Puma Running Shoes",
    category: "Footwear",
    price: 1999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDws7v8ig8mnAvKk3hC7901zxLMPGqdunPg&s",
    description: "High-performance running shoes with superior cushioning.",
  },
  {
    id: 23,
    name: "Boy's Bata Sandals",
    category: "Footwear",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwcTcfrpt3SkNOvW5j6SG27EXfKpY8ycbmw&s",
    description: "Comfortable sandals for kids with durable design.",
  },
  {
    id: 24,
    name: "Woodland Boots",
    category: "Footwear",
    price: 2899,
    image:
      "https://assets.woodlandworldwide.app/product/images/FGC0AA050061A/BLACK/FGC0AA050061A_004_0.webp",
    description: "Rugged boots for outdoor adventures and tough terrains.",
  },
  {
    id: 25,
    name: "Flip Flops",
    category: "Footwear",
    price: 299,
    image:
      "https://www.jiomart.com/images/product/original/rvjjdv1jpg/sparx-grey-flip-flops-slides-men-sfg-144-for-men-product-images-rvjjdv1jpg-0-202402272314.jpg?im=Resize=(1000,1000)",
    description: "Casual flip flops for relaxed everyday wear.",
  },
  {
    id: 26,
    name: "Heeled Sandals",
    category: "Footwear",
    price: 699,
    image:
      "https://images-static.nykaa.com/media/catalog/product/8/6/862bd46Heel-1313-Black_1.jpg?tr=w-500",
    description: "Elegant heeled sandals for parties or formal events.",
  },
  {
    id: 27,
    name: "Loafers",
    category: "Footwear",
    price: 999,
    image:
      "https://www.shoetree.io/cdn/shop/files/AW22-LBL1232-WOOD_0_3ec869fd-138e-4bee-b266-ec90ac857484.jpg?v=1736849583",
    description: "Classic loafers for a smart-casual look.",
  },
  {
    id: 28,
    name: "Girls' Ballerina Shoes",
    category: "Footwear",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgllCscObGYEMSB7AQU9APqXwHZMfx10EQlA&s",
    description: "Cute ballerina shoes for girls with a comfy fit.",
  },
  {
    id: 29,
    name: "Formal Leather Shoes",
    category: "Footwear",
    price: 1599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tUHd2bv3YkcdIue5TKR_cqtRdgKpyOLJ-A&s",
    description: "Polished leather shoes for formal occasions.",
  },
  {
    id: 30,
    name: "Casual Slippers",
    category: "Footwear",
    price: 349,
    image:
      "https://admin.walkwayshoes.com/product/17-14/1080/207-43-11-40-1.JPG",
    description: "Soft slippers for relaxed indoor or outdoor use.",
  },
  //Appliances
  {
    id: 31,
    name: "Philips Mixer Grinder",
    category: "Appliances",
    price: 2999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPNoMvrbFwyygHxBL4bmUNbxMgt6nhxK61w&s",
    description: "Powerful mixer grinder for quick and efficient blending.",
  },
  {
    id: 32,
    name: "LG Washing Machine",
    category: "Appliances",
    price: 21990,
    image: "https://m.media-amazon.com/images/I/718Wy4iXY1L.jpg",
    description:
      "Energy-efficient washing machine with multiple wash programs.",
  },
  {
    id: 33,
    name: "Samsung Refrigerator",
    category: "Appliances",
    price: 15990,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaWV2Jln4dgvHfXY2Dwq1CYSdNk1UavE4nw&s",
    description: "Spacious refrigerator with advanced cooling technology.",
  },
  {
    id: 34,
    name: "IFB Microwave Oven",
    category: "Appliances",
    price: 8990,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQla5NhjLezr_WCcvarnezsJb7dwF84Fq_dxw&s",
    description: "Versatile microwave oven for cooking and reheating.",
  },
  {
    id: 35,
    name: "Prestige Gas Stove",
    category: "Appliances",
    price: 2999,
    image:
      "https://img-prd-pim.poorvika.com/product/prestige-svachh-3-burner-gas-stove-black-front-view.png",
    description: "Durable gas stove with efficient burners for cooking.",
  },
  {
    id: 36,
    name: "Bajaj Room Heater",
    category: "Appliances",
    price: 1799,
    image: "https://m.media-amazon.com/images/I/718COOybK0L.jpg",
    description: "Compact room heater for cozy warmth in winters.",
  },
  {
    id: 37,
    name: "Inalsa Juicer",
    category: "Appliances",
    price: 2499,
    image: "https://m.media-amazon.com/images/I/51ZHATV9fvL.jpg",
    description: "Efficient juicer for fresh and healthy fruit juices.",
  },
  {
    id: 38,
    name: "Usha Ceiling Fan",
    category: "Appliances",
    price: 1799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9A9Zq8ibCbsoAbqmZo2vydy0dWevjcTsPVw&s",
    description: "Energy-saving ceiling fan with sleek design.",
  },
  {
    id: 39,
    name: "Voltas AC 1.5 Ton",
    category: "Appliances",
    price: 32990,
    image: "https://m.media-amazon.com/images/I/41jNjA3yygL.jpg",
    description: "Powerful air conditioner for rapid cooling in summers.",
  },
  {
    id: 40,
    name: "Eureka Forbes Vacuum",
    category: "Appliances",
    price: 3499,
    image:
      "https://th.bing.com/th/id/OIP.E1qWrn0m94g2mW6wptJCuQHaHa?pid=ImgDetMain&cb=idpwebpc1",
    description: "Effective vacuum cleaner for deep cleaning homes.",
  },
];

// Cart array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Format price in INR
function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

// Update cart count
function updateCartCount() {
  const cartCountElements = document.querySelectorAll("#cart-count");
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElements.forEach((el) => {
    el.textContent = count;
  });
}

// Display products
function displayProducts(filteredProducts) {
  console.log("Rendering products:", filteredProducts); // Debug
  const productGrid = document.getElementById("product-grid");
  if (!productGrid) {
    console.error("Product grid not found"); // Debug
    return;
  }
  productGrid.innerHTML = "";
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    return;
  }
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <a href="product-detail.html?id=${
              product.id
            }" class="btn">View Details</a>
        `;
    productGrid.appendChild(productCard);
  });
}

// Filter and sort products
function filterAndSortProducts() {
  console.log("Filtering and sorting products"); // Debug
  let category =
    new URLSearchParams(window.location.search).get("category") || "all";
  const sort = document.getElementById("sort-price")?.value || "default";
  const filterCategorySelect = document.getElementById("filter-category");

  // Validate and set category
  const validCategories = [
    "all",
    "Electronics",
    "Clothing",
    "Footwear",
    "Appliances",
  ];
  if (!validCategories.includes(category)) {
    category = "all";
  }

  // Sync filter dropdown with URL category
  if (filterCategorySelect) {
    filterCategorySelect.value = category;
  }

  let filteredProducts = products;
  const filter = filterCategorySelect?.value || category;

  if (filter !== "all") {
    filteredProducts = products.filter((p) => p.category === filter);
  }

  if (sort === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(filteredProducts);
  const categoryTitle = document.getElementById("category-title");
  if (categoryTitle) {
    categoryTitle.textContent = filter === "all" ? "All Products" : filter;
  }
}

// Search functionality
function searchProducts() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
    const categoryTitle = document.getElementById("category-title");
    if (categoryTitle) {
      categoryTitle.textContent = query ? "Search Results" : "All Products";
    }
  });
}

// Product detail page
function loadProductDetail() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const product = products.find((p) => p.id == productId);
  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = formatPrice(
      product.price
    );
    document.getElementById("product-description").textContent =
      product.description;
    const addToCartBtn = document.getElementById("add-to-cart-btn");
    addToCartBtn.addEventListener("click", () => {
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} added to cart!`);
    });
  } else {
    console.error("Product not found for ID:", productId); // Debug
  }
}

// Cart page
function loadCart() {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>${formatPrice(item.price)} x <input type="number" value="${
      item.quantity
    }" min="1" onchange="updateQuantity(${
      item.id
    }, this.value)"> = ${formatPrice(item.price * item.quantity)}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    cartItems.appendChild(cartItem);
  });
  document.getElementById("cart-total").textContent = `Total: ${formatPrice(
    total
  )}`;
}

// Update cart quantity
function updateQuantity(id, quantity) {
  const item = cart.find((item) => item.id == id);
  if (item) {
    item.quantity = parseInt(quantity);
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
  }
}

// Remove from cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

// Dark mode toggle
document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing page"); // Debug
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
  }
  updateCartCount();
  if (window.location.pathname.includes("products.html")) {
    console.log("On products page"); // Debug
    filterAndSortProducts();
    document
      .getElementById("sort-price")
      ?.addEventListener("change", filterAndSortProducts);
    document
      .getElementById("filter-category")
      ?.addEventListener("change", filterAndSortProducts);
  }
  if (window.location.pathname.includes("product-detail.html")) {
    loadProductDetail();
  }
  if (window.location.pathname.includes("cart.html")) {
    loadCart();
  }
  searchProducts();
});
