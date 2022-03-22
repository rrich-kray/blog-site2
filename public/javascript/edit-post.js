document.querySelectorAll(".edit-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    document.location.replace("/edit-post");
  });
});

const editPost = async () => {
  const title = document.querySelector(".post-title").value;
  const postContent = document.querySelector(".post-content").value;
  const imageUrl = document.querySelector(".post-image-url").value;
  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (title && postContent) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        postContent,
        imageUrl,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      response.statusText;
    }
  }
};

document.querySelector(".submit").addEventListener("click", editPost);
