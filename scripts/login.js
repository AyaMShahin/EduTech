const loginForm = document.forms[0];
const userEmail = document.querySelector("#formSigninEmail");
const userPassword = document.querySelector("#formSigninPassword");
const rememberCheckBtn = document.querySelector("#flexCheck");
const submitBtn = document.querySelector("#submitBtn");

// Listen to form submit
loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  // get input values
  const email = userEmail.value;
  const password = userPassword.value;
  const rememberMe = rememberCheckBtn.checked;
  const response = await fetch(
    `http://localhost:3000/users?email=${email}`
  );
//   Read Fetched data
  const users = await response.json();
  const fetchedUser = users[0];
  if(fetchedUser){

  }else{
    alert("Invalid email");
  }
});

