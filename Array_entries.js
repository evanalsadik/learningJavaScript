const stocks = [
  {
    "ticker": "TSLA",
    "name": "Tesla Inc."
  },
  {
    "ticker": "APPL",
    "name": "Aple Inc."
  },
];

const stocksIter = stocks.entries();

for (const [idx, elem] of stocksIter) {
  console.log(idx, elem['name']);
};
