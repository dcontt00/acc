import {
  Button,
  Card,
  Divider,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Paper,
  Fab,
} from "@mui/material";
import { useEffect, useState } from "react";
import { dataName, getData } from "../data/data";
import Cookie from "universal-cookie";
import AddIcon from "@mui/icons-material/Add";
import CompareModal from "../components/CompareModal";
import EditIcon from '@mui/icons-material/Edit';
import { Container } from "@mui/system";

const cookie = new Cookie();
function DescriptionList(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{props.title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              {props.car ? props.car[props.item] : ""}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Comparator(props) {
  const [carList, setCarList] = useState(getData(dataName.cars));
  const [firstCar, setFirstCar] = useState();
  const [secondCar, setSecondCar] = useState();
  const [charList, setCharList] = useState([]);
  const [open, setOpen] = useState(false);
  const compareFilter = [
    "img",
    "imgs",
    "name",
    "description",
    "id",
    "brand",
    "year",
  ];

  useEffect(() => {
    var index = cookie.get("compareIndex");
    if (index) {
      setFirstCar(carList.at(index));
    }
  }, []);

  useEffect(() => {
    var list = [];
    if (firstCar !== undefined) {
      list = Object.keys(firstCar)
        .filter((item) => !compareFilter.includes(item))
        .map((item) => item.substring(0, 1).toUpperCase() + item.substring(1));

      setCharList(list);
    } else if (secondCar !== undefined) {
      list = Object.keys(secondCar)
        .filter((item) => !compareFilter.includes(item))
        .map((item) => item.substring(0, 1).toUpperCase() + item.substring(1));
    }
    setCharList(list);
  }, [firstCar, secondCar]);

  const selectFirstCar = (index) => {
    setFirstCar(carList.at(index));
  };

  const selectSecondCar = (index) => {
    setSecondCar(carList.at(index));
  };

  const [selection, setSelection] = useState(false);
  const handleOpen = (type) => {
    setSelection(type);
    setOpen(true);
  };
  const getBrandImg = (brand) => {
    var brandImg =
      "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/" +
      brand.toLowerCase() +
      ".png";
    return brandImg;
  };

  return (
    <Container maxWidth="xl">

      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">Comparador</Typography>
          <Typography variant="body1">Elige dos coches para ver y comparar sus características</Typography>
        </Grid>
        <Divider />
        <Grid container spacing={4} sx={{ marginBottom: "5%", marginTop: "5px" }}>
          <Grid item xs={6}>
            {/*First Car image*/}
            {firstCar ? (
              <Card sx={{ width: "100%", height: "100%", textAlign: "center", position: "relative" }} onClick={() => handleOpen(true)}>
                <Fab sx={{ position: "absolute", top: "25px", right: "25px" }}>
                  <EditIcon fontSize="large" />
                </Fab>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <img
                        src={process.env.PUBLIC_URL + firstCar.img}
                        alt="First car"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                      <img
                        src={getBrandImg(firstCar.brand)}
                        alt="brand"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          width: "80%",
                          height: "auto",
                        }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography
                        gutterBottom
                        variant="h3"
                        align="left"
                        component="div"
                      >
                        {firstCar.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography align="right" variant="h3">
                        {firstCar.year}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align="left" variant="h5" color="">
                        {firstCar.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ) : (
              <Button onClick={() => handleOpen(true)} variant="contained" sx={{ width: "100%", minHeight: "500px" }}>
                <Grid container>
                  <Grid item align="center" xs={12}>
                    <AddIcon fontSize="large"></AddIcon>
                  </Grid>
                </Grid>
              </Button>
            )}
          </Grid>
          <Grid item xs={6}>
            {/*Second Car image*/}
            {secondCar ? (
              <Card sx={{ width: "100%", height: "100%", textAlign: "center", position: "relative" }} onClick={() => handleOpen(false)}>
                <Fab sx={{ position: "absolute", top: "25px", right: "25px" }}>
                  <EditIcon fontSize="large" />
                </Fab>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <img
                          src={process.env.PUBLIC_URL + secondCar.img}
                          alt="First car"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </Grid>
                      <Grid item xs={2} sm={2} md={2} lg={2}>
                        <img
                          src={getBrandImg(secondCar.brand)}
                          alt="brand"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            width: "80%",
                            height: "auto",
                          }}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <Typography
                          gutterBottom
                          variant="h3"
                          align="left"
                          component="div"
                        >
                          {secondCar.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography align="right" variant="h3">
                          {secondCar.year}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography align="left" variant="h5">
                          {secondCar.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ) : (
              <Button onClick={() => handleOpen(false)} variant="contained" sx={{ width: "100%", minHeight: "500px" }}>
                <Grid container>
                  <Grid item align="center" xs={12}>
                    <AddIcon fontSize="large"></AddIcon>
                  </Grid>
                </Grid>
              </Button>
            )}
          </Grid>


          <Grid item xs={6} >
            {charList.map((it) => (
              <DescriptionList
                key={it}
                title={it}
                item={it.toLowerCase()}
                car={firstCar}
              />
            ))}
          </Grid>
          <Grid item xs={6}>
            {charList.map((it) => (
              <DescriptionList
                key={it}
                title={it}
                item={it.toLowerCase()}
                car={secondCar}
              />
            ))}
          </Grid>

        </Grid>
        <CompareModal
          open={open}
          hClose={() => setOpen(false)}
          hSelect={selection ? selectFirstCar : selectSecondCar}
          cars={carList}
        />
      </Grid>
    </Container>

  );
}
