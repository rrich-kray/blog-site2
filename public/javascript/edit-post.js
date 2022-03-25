const editPost = async () => {
  const title = document.querySelector(".post-title").value;
  const postContent = document.querySelector(".post-content").value;
  const imageUrl = document.querySelector(".post-image-url").value;
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (title && postContent && imageUrl && post_id) {
    const response = await fetch(`/api/posts/${post_id}`, {
      // failed to fetch
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
