async function getmeme(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return (document.getElementById("chucknorris").innerHTML =
    "<i>Chuck Norris Fact of the day: " + data.value + "</i>");
}
getmeme("https://api.chucknorris.io/jokes/random");
