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




// POST - Create data


const postData = {
  title: "Muraho Kigali",
  body: "My first post",
  userId: 1
};

const response = await fetch(
  "https://jsonplaceholder.typicode.com/posts",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  }
);

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}

const created = await response.json();

console.log("POST RESULTS:");
console.log(created);
console.log("Status:", response.status);




