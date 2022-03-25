const deletePost = async (event) => {
  const post_id = event.target.dataset.id;
  console.log(post_id);

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    response.statusText;
  }
};

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", deletePost);
});
