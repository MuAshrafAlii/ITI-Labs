fetch("../server/users.json")
  .then((res) => res.json())
  .then(function (d) {
    let usersArr = d.user;
    let showAllContainer = document.querySelector(".showAllOuterContainer");
    usersArr.forEach((user) => {
      let dataContainer = document.createElement("div");
      dataContainer.classList.add("dataContainer");
      dataContainer.innerHTML = `
        <p>${user.Name}</p>
        <p>${user.Tel}</p>
        <p>${user.Address}</p>
        <p>${user.Email}</p>
        <p>${user.Password}</p>
        `;
      showAllContainer.append(dataContainer);
    });
  });
