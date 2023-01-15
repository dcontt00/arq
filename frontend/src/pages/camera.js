import * as React from "react";
import AppBar from "../components/Appbar";
import { Button, Typography } from "@mui/material";
import AddPhoto from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Box from '@mui/material/Box';
import planta from "../images/planta.jpeg";
import Grid from "@mui/material/Grid";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getImageData } from "../components/itemData";
import Container from '@mui/material/Container';
import axios from "axios";
import { Skeleton } from "@mui/material";
import { CircularProgress, Paper } from "@mui/material";
export default function Camera() {
  const [image, setImage] = React.useState(null);
  const [images, setImages] = React.useState([]);

  async function getData() {

    // Foto nueva
    const response = await axios.get("/api/image");
    console.log(response)
    var data = await response.data;
    data = data.data;
    console.log("data")
    console.log(data)
    console.log("/api/images/" + data)
    setImage("/api/images/" + data);

    // Lista de fotos
    const response2 = await axios.get("/api/images");
    console.log(response2)
    var data2 = await response2.data;
    data2 = data2.data;
    console.log("data2")
    console.log(data2)
    var out = []
    data2.map((item) => {
      console.log(item)
      out.push("/api/images/" + item)
    })
    setImages(out);

  }

  React.useEffect(() => {
    getData();

  }, []);




  return (
    <Container>
      <Typography fontSize="25" align="center" sx={{ mt: 1, mb: 1 }}>CONTROL VISUAL</Typography>
      <Grid container>
        <Grid item lg={6} sx={{ ml: 5, mt: 3 }}>
          <Box align="center">
            {image == null ?
              <Box width={"500px"} height="400px">
                <CircularProgress />

              </Box> :
              <img src={image} alt="img" width="550px" />
            }

          </Box>
          <Box align="center" sx={{ mt: 1 }}>
            <Button sx={{ backgroundColor: "green" }}>
              <AddPhoto sx={{ fontSize: 25 }} />
            </Button>
          </Box>
        </Grid>
        <Grid item lg={5} sx={{ mt: 4 }}>
          <ImageList sx={{ width: 500, height: 340 }} cols={3} rowHeight={164}>
            {images.map((item, key) => (
              <ImageListItem key={key}>
                <img
                  src={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Container>
  );
}