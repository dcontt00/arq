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
import { CircularProgress, Paper, ImageListItemBar } from "@mui/material";
import Dialog from '@mui/material/Dialog';
export default function Camera() {
  const [image, setImage] = React.useState(null);
  const [images, setImages] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [showDialog, setShowDialog] = React.useState(false);

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
    var data2 = await response2.data;
    data2 = data2.data;
    var out = []

    // Order alphabetically inverse data2
    data2 = data2.sort();
    data2 = data2.reverse();
    console.log(data2)


    data2.map((item) => {
      var title = item;
      title = title.replace(".jpg", "")
      title = title.replace("_", " ")

      out.push({ "img": "/api/images/" + item, "title": title })
    })
    setImages(out);

  }

  React.useEffect(() => {
    getData();

  }, []);

  return (
    <Container maxWidth="xl">
      <Dialog open={showDialog}>
        <Button onClick={() => setShowDialog(false)}>Cerrar</Button>
        <img src={selectedImage} alt="img" width="100%" />

      </Dialog>
      <Typography variant="h4" align="center">CONTROL VISUAL</Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} >
          <Paper sx={{ p: 2 }}>

            {image == null ?
              <Box width={"500px"} height="400px">
                <CircularProgress />

              </Box> :
              <img src={image} alt="img" width="100%" />
            }
            <br />

            <Button sx={{ backgroundColor: "green" }} onClick={() => getData()}>
              <AddPhoto sx={{ fontSize: 25 }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item lg={6} >
          <Paper sx={{ p: 2 }}>

            {images.length == 0 ?
              <Box width={"500px"} height="400px">
                <CircularProgress />
              </Box> :


              <ImageList sx={{ width: "100%", height: 500 }} cols={2} >
                {images.map((item, key) => (
                  <ImageListItem key={key}>
                    <img
                      src={item.img}
                      loading="lazy"
                      onClick={() => {
                        setSelectedImage(item.img);
                        setShowDialog(true);
                      }}
                    />
                    <ImageListItemBar
                      title={item.title}
                    />
                  </ImageListItem>
                ))}
              </ImageList>

            }

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}