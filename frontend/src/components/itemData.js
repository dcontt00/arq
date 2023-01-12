import axios from "axios";

function get_url(base64_img) {
  return "data:image/png;base64," + base64_img;
}

export async function getImageData() {
  const response = await axios.get("/api/images");
  const data = await response.data;
  var itemData = [];
  itemData = data.result.map((img_encoded, index) => ({ img: get_url(img_encoded), title: "" + index }));
  return itemData;
  /*   var itemData = [];
    Axios({
      url: "/api/images",
    }).then((response) => {
      itemData = response.result.map((img_encoded, index) => ({ img: get_url(img_encoded), title: "" + index }));
    })
    return itemData; */


}