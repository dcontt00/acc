
import * as React from "react";
import Typography from "@mui/material/Typography";
import Cars from "../../data/Cars.json";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import Llantas from "../../data/Llantas.json";
import Colores from "../../data/Colores.json";
import Asientos from "../../data/Asientos.json";


const cookie = new Cookies();
function getCar(id) {
    return Cars.find((car) => car.id === parseInt(id));
}
export default function Details() {
    const params = useParams();
    const car = getCar(params.id);
    var personalization = [];
    if (cookie.get("personalization")) {
        personalization = cookie.get("personalization");
        var llantas = Llantas.find((llanta) => llanta.id === parseInt(personalization["tire"]));
        var color = Colores.find((color) => color.id === parseInt(personalization["colors"]));
        var asiento = Asientos.find((asiento) => asiento.id === parseInt(personalization["seats"]));
    }

    const desglose = () => {
        var total = car.price;
        if (llantas) {
            total += llantas.price;
        }
        if (color) {
            total += color.price;
        }
        if (asiento) {
            total += asiento.price;
        }
        return (
            <div>
                <Typography>Base: {car.price}€</Typography>
                {llantas && <Typography>Llantas: {llantas.price}€</Typography>}
                {color && <Typography>Color: {color.price}€</Typography>}
                {asiento && <Typography>Asientos: {asiento.price}€</Typography>}
                <Typography color="red">Total: {total}€</Typography>
            </div>

        );
    }

    return (
        <div>
            <Typography>{car.name}</Typography>
            <Typography>{car.brand}</Typography>
            <Typography>{car.type}</Typography>
            <Typography>{car.year}</Typography>
            <Typography>Desglose</Typography>
            {desglose()}


        </div>

    )
}