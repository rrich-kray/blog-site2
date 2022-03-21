const postComment = async (event) => {
  event.preventDefault();
  const commentText = document.querySelector(".comment").value;

  if (commentText) {
    const response = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({
        commentText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      res.statusText;
    }
  }
};

const deleteComment = async (event) => {
  event.preventDefault();

  const response = await fetch("api/comments/:id", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    response.statusText;
  }
};

const editComment = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector("").value;
  const response = await fetch("api/comments/:id", {
    method: "PUT",
    body: {
      commentText,
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    response.statusText;
  }
};

document
  .querySelector(".submit-comment")
  .addEventListener("click", postComment);
