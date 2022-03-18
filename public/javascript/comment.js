const postComment = async (event) => {
  event.preventDefault();
  const commentText = document.querySelector("").value;

  if (commentText) {
    const response = await fetch("api/comment", {
      method: "POST",
      body: JSON.stringify({
        comment: commentText,
      }),
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      res.statusText;
    }
  }
};
