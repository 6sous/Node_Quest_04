require("dotenv").config();

const env = process.env;

console.log(
  `I am ${env.MY_NAME}, wilder in ${env.MY_CITY}, and I love ${env.MY_LANGUAGE}!`
);
