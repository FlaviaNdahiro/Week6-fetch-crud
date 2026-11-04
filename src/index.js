// GET - Retrieve data

const query = "phone";

const params = new URLSearchParams({
  q: query,
  limit: 10,
  skip: 20
});

const search = await fetch(
  `https://dummyjson.com/products/search?${params}`
);

if (!search.ok) {
  throw new Error(`HTTP error! status: ${search.status}`);
}

const data = await search.json();

console.log("GET RESULTS:");
console.log(data);