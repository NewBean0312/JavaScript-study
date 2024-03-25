// 요소 생성 및 속성 지정
export const makeDOMwithProperties = (domType, propertyMap) => {
  // domType : div, a, li, ...
  // propertyMap : { "className" : "product-card", "alt" : ...}
  // Object.keys() : Object의 키 값을 넣어주는 메서드
  const dom = document.createElement(domType);
  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key];
  });

  return dom;
};

// 자식 노드 추가
export const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};
