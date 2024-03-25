import { makeDOMwithProperties } from "../utils/dom.js";
import { getProductCard } from "./productCard.js";

export const getProductList = (productInfoList) => {
  if (productInfoList == null || !Array.isArray(productInfoList)) return;
  const productListContainer = makeDOMwithProperties("div", {
    className: "product-list-con",
  });

  productInfoList.forEach((productInfo) => {
    productListContainer.appendChild(
      getProductCard({
        ...productInfo, // spread 문법 : 객체의 프로퍼티를 하나씩 가져오는 것
      })
    );
  });

  return productListContainer;
};
