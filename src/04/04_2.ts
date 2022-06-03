import {CityType, GovernmentBuildingType} from "../02/02_02";

//не чистая функция, т.к. модифицирует массив
export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}


//чистая функция - ничего не модифицирует, возвращает новый массив
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
   return buildings.filter(b => b.staffCount > number)
}