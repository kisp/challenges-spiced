// console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.log(e);
    console.log(e.message);
    return;
  }
  if (!response.ok) {
    console.log(`fetch failed! (status ${response.status})`);
    return;
  }
  if (
    !response.headers.has("Content-Type") ||
    response.headers.get("Content-Type") !== "application/json"
  ) {
    console.log(
      "Expected applicaton/json, but got",
      response.headers.get("Content-Type")
    );
    return;
  }
  let json;
  try {
    json = await response.json();
  } catch (e) {
    console.log("Error getting json data");
    console.log(e);
    return;
  }
  console.log(json);
  json.results.forEach(console.log);
  console.log(
    "eye color of R2-D2:",
    json.results.find((result) => result.name === "R2-D2").eye_color
  );
}

fetchData();
