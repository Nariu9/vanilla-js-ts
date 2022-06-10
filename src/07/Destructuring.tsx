import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?:string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title:string
    man:ManType
    food:Array<string>
    car: {model:string}
}

function useSomeState(m:string) {   //условная структура UseState
    return [m, function (){} ]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    /*const {title, man, ...restProps} = props*/

    const [message, setMessage] = useState<string>('hello') // используем деструктуризацию массива

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}

//При написании useState отдали предпочтение массиву, т.к. деструктуризируя объект нужно указывать либо те же имена ключей, что есть в нём либо давать им псевдонимы
//Обычно массив хранит однородные данные, но не в случае useState, к тому же при деструктуризации мы можем дать любое название будущим переменным