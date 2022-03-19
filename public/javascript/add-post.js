const addPost = async () => {
  const title = document.querySelector().value;
  const postContent = document.querySelector().value;

  if (title && postContent) {
    const response = await fetch("api/posts", {
      method: "POST",
      body: {
        title: title,
        content: postContent,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      response.statusText;
    }
  }
};

document.querySelector("").addEventListener("click", addPost);
