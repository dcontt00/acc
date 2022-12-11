import { Card, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { dataName, getData, addData } from "../data/data";
import Cookie from "universal-cookie";
import AddIcon from "@mui/icons-material/Add";

const cookie = new Cookie();

function AddButton(props) {}

function DescriptionList(props) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Card variant="outlined" sx={{ padding: 2, width: "100%" }}>
          <Typography sx={{ fontWeight: "bold" }}>{props.title}</Typography>
        </Card>
      </Grid>
      <Grid item xs={6}>
        {/*First Car Description*/}
        <Card
          variant="outlined"
          sx={{ padding: 2, width: "100%", textAlign: "center" }}
        >
          {props.firstCar ? (
            <Typography>{props.firstCar[props.item]}</Typography>
          ) : (
            <div></div>
          )}
        </Card>
      </Grid>
      <Grid item xs={6}>
        {/*Second Car Description*/}
        <Card
          variant="outlined"
          sx={{ padding: 1, width: "100%", textAlign: "center" }}
        >
          {props.secondCar ? (
            <Typography>{props.secondCar[props.item]}</Typography>
          ) : (
            <div></div>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}

export default function Comparator(props) {
  const [carList, setCarList] = useState(getData(dataName.cars));
  const [firstCar, setFirstCar] = useState();
  const [secondCar, setSecondCar] = useState();
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    var index = cookie.get("compareIndex");
    if (index) {
      setFirstCar(carList.at(index));
    }

    if (firstCar != undefined) {
      var list = Object.keys(firstCar)
        .filter((item) => item !== "img" && item !== "imgs")
        .map((item) => item.substring(0, 1).toUpperCase() + item.substring(1));

      setCharList(list);
    }
  }, []);

  return (
    <Grid container>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          {/*First Car image*/}
          {firstCar ? (
            <Card
              variant="outlined"
              sx={{ margin: 2, width: "100%", textAlign: "center" }}
            >
              <img
                src={firstCar.img}
                alt={firstCar.name + " image"}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "80%",
                  height: "auto",
                }}
              />
            </Card>
          ) : (
            <AddButton setCar={setFirstCar} />
          )}
        </Grid>
        <Grid item xs={6}>
          {/*Second Car image*/}
          {secondCar ? (
            <Card
              variant="outlined"
              sx={{ margin: 2, width: "100%", textAlign: "center" }}
            >
              <img
                src={firstCar.img}
                alt={firstCar.name + " image"}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "80%",
                  height: "auto",
                }}
              />
            </Card>
          ) : (
            <AddButton setCar={setSecondCar} />
          )}
        </Grid>
      </Grid>
      {charList.map((it) => (
        <DescriptionList
          key={it}
          title={it}
          item={it.toLowerCase()}
          firstCar={firstCar}
          secondCar={secondCar}
        />
      ))}
    </Grid>
  );
}
