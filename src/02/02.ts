type LocalCityType = {
    title:string
    countryTitle: string
}

type LocalAddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechnologiesType>
}


export const student: StudentType = {
    id: 1,
    name: "Artem",
    age: 32,
    isActive: true,
    address: {
        streetTitle: "Central Str",
        city: {
            title: "Maison",
            countryTitle: "Uran"
        }
    },
    technologies: [
        {id:1, title: "HTML"},
        {id:2, title: "CSS"},
        {id:3, title: "React"},

    ]
}

console.log(student.technologies[2].title)