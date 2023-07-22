let addressArray = [];
fetch(
  "https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?page=1&perPage=1000&serviceKey=I3ONCgSdg1Tf8GYukQdpJYSpq7nLY9Uqy3AE1Zp%2B1tx1r11%2BDj5djJKCEllItBS2WtgL318%2BX93ZNZ5K5RHSsA%3D%3D",
  {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "I3ONCgSdg1Tf8GYukQdpJYSpq7nLY9Uqy3AE1Zp%2B1tx1r11%2BDj5djJKCEllItBS2WtgL318%2BX93ZNZ5K5RHSsA%3D%3D",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("addressArray", JSON.stringify(data));
  });
