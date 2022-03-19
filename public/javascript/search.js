const search = async (event) => {
  event.preventDefault();

  const searchTerm = document.querySelector(".search").value;
  const response = await fetch("/posts", {
    method: "GET",
    body: {
      searchTerm: searchTerm,
    },
  });
};

document.querySelector(".search-btn").addEventListener("submit", search);
