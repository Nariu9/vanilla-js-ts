import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";


export const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const whereStudentLive = (stu: StudentType, cityName: string) => {
    return stu.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, bunget: number) => {
    building.budget += bunget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, stuffCounttoFire: number) => {
    building.staffCount -= stuffCounttoFire;
}

export const toHireStaff = (building: GovernmentBuildingType, stuffCounttoHire: number) => {
    building.staffCount += stuffCounttoHire;
}

export function createMessage(props: CityType) {
    return `Hello ${props.title} citizens. I want all ${props.citizensNumber} of you to be happy`
}
