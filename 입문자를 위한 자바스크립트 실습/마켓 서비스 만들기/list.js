import { getProductCard } from "./module/productCard.js";

const sectionDOM = document.getElementsByTagName("section")[0];

const productCard = getProductCard({
  id: 1,
  imgSrc: "./public/assets/파프리카.jpg",
  name: "파프리카 2입",
  discountPercent: 20,
  price: 2000,
  originalPrice: 2500,
});

const productCard2 = getProductCard({
  id: 5,
  imgSrc: "./public/assets/머핀.jpg",
  name: "[홍대 W마켓] 머핀 (2입)",
  discountPercent: 20,
  price: 4800,
  originalPrice: 6000,
});


sectionDOM.appendChild(productCard);
sectionDOM.appendChild(productCard2);
