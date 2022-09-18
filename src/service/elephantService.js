export async function getAllElephants() {
  const response = await fetch("http://localhost:8080/");
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getFilteredElephants(category, filter) {
  let path = `http://localhost:8080/${category}/${filter}`;

  const response = await fetch(path);
  const data = await response.json();
  return data;
}
