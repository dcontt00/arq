import Axios from "axios";

function get_url(base64_img) {
  return "data:image/png;base64," + base64_img;
}

export function getImageData() {
  var itemData = [];
  Axios({
    url: "/api/images",
  }).then((response) => {
    itemData = response.result.map((img_encoded, index) => ({img: get_url(img_encoded), title: "" + index}));
  })
  return itemData;
}