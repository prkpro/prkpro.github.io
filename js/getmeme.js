async function getmeme(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return (document.getElementById("chucknorris").innerHTML =
    "Chuck Norris Fact of the day: " + data.value);
}
getmeme("https://api.chucknorris.io/jokes/random");
