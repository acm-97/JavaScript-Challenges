var exist = false;

/**
 * It checks if the value of the second argument is present in the object passed as the first argument.
 * @param a - the object to search
 * @param b - "product"
 * @returns the value of the variable exist.
 */
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

/**
 * It returns true if the product is in the store, false otherwise
 * @param store - [{id: 1, name: 'apples', quantity: 2}, {id: 2, name: 'bananas', quantity: 0}, {id: 3,
 * name: 'cherries', quantity: 5}]
 * @param product - 'apples'
 * @returns the value of the variable exist.
 */
export default function contains(store, product) {
  exist = false;
  hasProduct(store, product);
  return exist;
}