export const GET_STORE_ITEMS = `
  query GetStoreItems {
    storeItems(orderBy: date_DESC) {
      id
      name
      date
      price
      paymentUrl
      image {
        url
      }
    }
  }
`;
