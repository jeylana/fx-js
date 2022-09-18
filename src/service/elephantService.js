export async function fetchAllElephants() {
  const response = await fetch("http://localhost:8080/");
  const data = await response.json();
  return data;
}

export async function fetchFilteredElephants(category, filter) {
  let path = `http://localhost:8080/${category}/${filter}`;

  const response = await fetch(path);
  const data = await response.json();
  return data;
}
