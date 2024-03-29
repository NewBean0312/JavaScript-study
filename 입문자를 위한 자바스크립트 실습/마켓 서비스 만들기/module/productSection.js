import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";

export const getProductSection = (sectionName, productInfoList) => {
  const productListSection = makeDOMwithProperties("div", {
    className: "product-list-section",
  });
  const sectionTitle = makeDOMwithProperties("div", {
    className: "section-title",
  });
  const titleHighLight = makeDOMwithProperties("span", {
    className: "section-title-highlight",
  });

  appendChildrenList(sectionTitle, [titleHighLight, title])

  const productListContainer = getProductList();

  appendChildrenList(productListSection, [sectionTitle, productListContainer])

  return productListSection;
};
