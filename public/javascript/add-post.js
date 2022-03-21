const addPost = async () => {
  const title = document.querySelector(".post-title").value;
  const postContent = document.querySelector(".post-content").value;
  const imageUrl = document.querySelector(".post-image-url").value;

  if (title && postContent) {
    const response = await fetch("/api/posts/add-post", {
      method: "POST",
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
      document.location.replace("/dashboard");
    } else {
      response.statusText;
    }
  }
};

document.querySelector(".submit").addEventListener("click", addPost);
