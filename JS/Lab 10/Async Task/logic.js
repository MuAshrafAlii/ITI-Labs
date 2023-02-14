const getUsersPromise = async () => {
  const response = await fetch(" https://reqres.in/api/users?page=2");
  const data = await response.json();

  return data;
};

getUsersPromise().then((data) => {
  let usersArr = data.data;
  const outerContainer = document.querySelector(".outerContainer");

  usersArr.forEach((user) => {
    let avatarContainer = document.createElement("div");
    avatarContainer.classList.add("avatarContainer");
    avatarContainer.innerHTML = `
    <div class="imgContainer">
          <img
            src="${user.avatar}"
            alt="${user.first_name + " " + user.last_name}"
          />
        </div>
        <div class="NameContainer">${
          user.first_name + " " + user.last_name
        }</div>
        <div class="email">${user.email}</div>
        `;

    outerContainer.append(avatarContainer);
  });
});

getUsersPromise().catch((err) => {
  const outerContainer = document.querySelector(".outerContainer");
  outerContainer.innerHTML =
    "<h1>Sorry Failed to connect check console please</h1>";
  console.log("Rejected ", err);
});
