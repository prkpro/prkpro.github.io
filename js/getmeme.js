async function getmeme(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data.value;
}
document.getElementById("chucknorris").innerHTML = getmeme(
  "https://api.chucknorris.io/jokes/random"
);
