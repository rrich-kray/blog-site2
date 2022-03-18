const addPost = async () => {
  const title = document.querySelector().value;
  const postContent = document.querySelector().value;

  if (title && postContent) {
    const response = await fetch("api/post/:id", {
      method: "POST",
      body: {
        title: title,
        content: postContent,
      },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      response.statusText;
    }
  }
};
