export const removeDuplicateOfProducts = (products) => {
    const uniqueIds = {};

    return products.filter(product => {
        if (!uniqueIds[product.id]) {
            uniqueIds[product.id] = true;
            return true;
        }
        return false;
    });
};

// // // // // // // // // // // // // // // // // // // // // // // // // //

export const removeDuplicateOfIds = (ids) => {
    const uniqueIds = {};

    return ids.filter(id => {
        if (!uniqueIds[id]) {
            uniqueIds[id] = true;
            return true;
        }
        return false;
    });
};

export const productsFilter = (products, filters) => {
    return products.filter(product => {
      if (filters.price && product.price < filters.price) {
        return false;
      }
      if (filters.brand && (!product.brand || !product.brand.toLowerCase().includes(filters.brand.toLowerCase()))) {
        return false;
      }
      if (filters.product && !product.product.toLowerCase().includes(filters.product.toLowerCase())) {
        return false;
      }
      return true;
    });
}