const search = async (event) => {
  event.preventDefault();

  const searchTerm = document.querySelector("#search").value;
  console.log(searchTerm);
  const response = await fetch("/posts", {
    method: "POST",
    body: JSON.stringify({
      searchTerm,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.statusText;
};

document.querySelector(".search-btn").addEventListener("click", search);
