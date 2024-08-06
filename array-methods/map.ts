const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjsArr = prices.map((item): object => {
  const pricesObj = { price: item, salePrice: item / 2 };
  return pricesObj;
});
console.log('priceObjsArr:', priceObjsArr);

const prettyPrices = prices.map((item): string => {
  const priceStr = '$' + item.toFixed(2).toString();
  return priceStr;
});
console.log('prettyPrices:', prettyPrices);
