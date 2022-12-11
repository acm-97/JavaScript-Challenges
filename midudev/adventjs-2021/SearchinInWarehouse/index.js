var exist = false;

function hasProduct(a, b) {
  const values = Object.values(a)
  const flag = values && Array.isArray(values) && values?.includes( b);

  if (flag) {
    exist = flag;
    return;
  }

  if (values && typeof values !== "undefined") {
    values.forEach((element) => {
      if (typeof element === "object") {
        hasProduct(element, b);
      };
    });
  };
};

export default function contains(store, product) {
  exist = false;
  hasProduct(store, product);
  return exist;
}