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


// PUT - Update data

const putData = {
  title: "Muraho Kigali",
  body: "My first post",
  userId: 1
};

const id = 1;

const putResponse = await fetch(
  `https://jsonplaceholder.typicode.com/posts/${id}`,
  {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(putData)
  }
);

if (!putResponse.ok) {
  throw new Error(`HTTP ${putResponse.status}`);
}

const newPutData = await putResponse.json();

console.log("PUT RESULTS:");
console.log(newPutData);
console.log("Status:", putResponse.status);




// DELETE - Remove data

const deleteId = 1;

const deleteResponse = await fetch(
  `https://jsonplaceholder.typicode.com/posts/${deleteId}`,
  {
    method: "DELETE"
  }
);

if (!deleteResponse.ok) {
  throw new Error(`HTTP ${deleteResponse.status}`);
}

console.log("DELETE RESULTS:");
console.log("Status:", deleteResponse.status);
console.log("Post deleted successfully!");



/// ERROR HANDLING - try...catch

try {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  console.log("POST DATA:");
  console.log(data);

} catch (error) {
  console.log("Something went wrong:");
  console.log(error.message);
}