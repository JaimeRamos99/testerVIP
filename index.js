const axios = require('axios');
let size = 1000;
for (let index = 0; index < size; index++) {
  let random = Math.random() * size;
  if (index == size - 1) {
    random = size + 1;
  }
  axios
    .get(`http://localhost:8080/query/${random}`)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
}

