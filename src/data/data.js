import audiData from  "./Audi.json";
import brandsData from "./Brands.json";
import favData from "./FavCars.json";
import CarsData from "./Cars.json";
import history from "./History.json";

export const dataName =  {
    audi: 0,
    brands: 1,
    favcars: 2,
    cars: 3,
    history: 4
};

var audiJson = audiData;
var brandsJson = brandsData;
var favJson = favData;
var carsJson = CarsData;
var historyJson = history;

export function getData(index) {
    switch(index) {
        case dataName.audi:
            return audiJson;
        case dataName.brands:
            return brandsJson;
        case dataName.favcars:
            return favJson;
        case dataName.cars:
            return carsJson;
        case dataName.history:
            return historyJson;
        default:
            return carsJson;
    };
}

export function addData(index, data) {
    if(data !== null) {
        switch(index) {
            case dataName.audi:
                audiJson = [...audiJson, ...[data]];
                break;
            case dataName.brands:
                brandsJson = [...brandsJson, ...[data]];
                break;
            case dataName.favcars:
                favJson = [...favJson, ...[data]];
                break;
            case dataName.cars:
                carsJson = [...carsJson, ...[data]];
                break;
            case dataName.history:
                historyJson = [...historyJson, ...[data]];
                break;
            default:
                carsJson = [...carsJson, ...[data]];
        };
        return true;
    }else {
        return false;
    }
}