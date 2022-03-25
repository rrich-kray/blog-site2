const deletePost = async (event) => {
  // this isn't being run - declared multiple times in the same scope? Are scripts being loaded multiple times? Maybe scripts should only be linked in dashboard and not in each tile
  const post_id = event.target.dataset.id;
  console.log(post_id); // yet this is logging in the console

  const response = await fetch(`api/posts/${post_id}`, {
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
