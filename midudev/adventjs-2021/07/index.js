var exist = false;
/**
 * It takes a store and a product and returns true if the product is in the store
 * @param {object} store estanteria1: {  cajon1: {  producto1: "coca-cola"}}
 * @param {string} product - "product1"
 * @returns {boolean} returns true if the product is in the store.
 */
export default function contains(store, product) {
  exist = false;

  const hasProduct = (a, b) => {
    const values = Object.values(a);
    const flag = values && Array.isArray(values) && values?.includes(b);

    if (flag) {
      exist = flag;
      return;
    }

    if (values && typeof values !== "undefined") {
      values.forEach((element) => {
        if (typeof element === "object") {
          hasProduct(element, b);
        }
      });
    }
  };

  hasProduct(store, product);
  return exist;
}
