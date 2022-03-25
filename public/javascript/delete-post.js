const deletePost = async () => {
  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${postId}`, {
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

document.querySelector(".delete-post").addEventListener("click", deletePost);
