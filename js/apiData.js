let addressArray = [];
fetch(
  "https://port-0-foods-api-project-rt92alknmotf2.sel4.cloudtype.app/api/foods/joongu",
  {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "include",
  }
)
  .then((res) => res.json())
  .then((data) => console.log(data));
