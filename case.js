const userName = "blackpink";
console.log(userName.toLowerCase());

const userInput = "BlackPink";
console.log(userInput.toUpperCase());

if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("valid user");
} else {
  console.log("invalid user");
}
