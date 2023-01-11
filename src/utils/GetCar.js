import Cars from "../data/Cars.json"
export default function getCar(id) {
    return Cars.find((car) => car.id === parseInt(id));
}