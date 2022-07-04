export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export const moveUser = (u: UserWithLaptop, cityTitle: string) => {
    return {...u, address: {...u.address, city: cityTitle}}

    /*const copy = {...u}
    copy.address = {...copy.address, city :cityTitle}
    return copy*/
}

export const upgradeLaptop = (u: UserWithLaptop, laptopTitle: string) => {
    return {...u, laptop: {...u.laptop, title: laptopTitle}}
}

export const changeHouse = (u: UserWithLaptop & UserWithBooks, house: number) => {
    return {...u, address: {...u.address, house}}
}

export const addNewBooksToUser = (u: UserWithLaptop & UserWithBooks, newBooks: Array<string>) => {
    return {...u, books: [...u.books, ...newBooks]}
}

export const updateBook = (u: UserWithLaptop & UserWithBooks, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map((b => b === oldBook ? newBook : b))
})

export const removeBook = (u: UserWithLaptop & UserWithBooks, bookToRemove: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookToRemove)
})

export const addCompany = (u: UserWithLaptop & WithCompaniesType, company: { id: number, title: string }) => ({
    ...u,
    companies: [...u.companies, company]
})

export const updateCompanyTitle = (u: WithCompaniesType, id: number, title: string) => ({
    ...u,
    companies: u.companies.map(c => c.id === id ? {...c, title} : c)
})

export const updateCompanyTitle2 = (companies: {[key:string]:Array<CompanyType>}, userName:string, companyID:number, newTitle:string) => ({...companies, [userName]: companies[userName].map(c=>c.id === companyID ? {...c, title: newTitle} : c)})