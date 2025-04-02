async function apiData(params) {
    const response = fetch("https://fakestoreapi.com/users/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
}

module.exports = apiData;