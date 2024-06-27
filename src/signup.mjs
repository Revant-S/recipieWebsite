export function signup() {
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let newUser = {};
  newUser[userName] = password;
  let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

  for (let user of allUsers) {
    if (user.hasOwnProperty(userName)) {
      alert("User Already exists");
      return false;
    }
  }
  allUsers.push(newUser);
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
  localStorage.setItem("LoggedInUser" , JSON.stringify(userName))
  window.location.href = "/index.html";

  return true;
}

export function login() {
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

  let userFound = false;
  let passwordCorrect = false;
  for (let user of allUsers) {
    if (user.hasOwnProperty(userName)) {
      userFound = true;
      if (user[userName] === password) {
        passwordCorrect = true;
      }
      break;
    }
  }

  if (!userFound) {
    alert("Username not found.");
    return false;
  } else if (!passwordCorrect) {
    alert("Incorrect password.");
    return false;
  }
  alert("Login successful!");
  localStorage.setItem("LoggedInUser" , JSON.stringify(userName))
  window.location.href = "/index.html";
  return true;
}
