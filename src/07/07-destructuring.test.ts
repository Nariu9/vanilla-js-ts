import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Streetname'
            }
        }
    }
})

test('', () => {

    /*const age = props.age         // можно заменить одной строкой
    const lessons = props.lessons*/
    const {age, lessons, address: {street: {title}}} = props    //если имена свойств совпадут, age, lessons получат те же значения, что и выше
    //по поводу title - так делать не надо, такой код плохо читается, лучше:
    /*const {title} = props.address.street*/    // чтобы создать переменную title, ищем свойство title внутри объекта street

    //присвоение псевдонимов(не рекомендуется сочетать с TS):
    let {lessons: l, address: a} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Streetname')

})

// деструктуризация массивов удобна когда мы знаем чёткое количество элементов

test('array destructuring', () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    /*const [ls1, ls2, ls3] = props.lessons*/        //получаем данные из массива в указанные переменные
    /*  const [ls1] = props.lessons */                    //получаем первый элемент
    const [, ls2] = props.lessons                    //получаем второй элемент
    const [, , ls3] = props.lessons                   //получаем третий элемент
    const [ls1, ...restLessons] = props.lessons     //получаем первый элемент, остальные помещаем в массив restLessons
    /*const [, ls2, ...restLessons] = props.lessons */    //получаем второй элемент, остальные помещаем в массив restLessons

    // для массивов с данными такая деструктуризация не актуальна, по ним нужно итерироваться map или filter, мы заведомом не знаем количество получаемых переменных

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(ls3.title).toBe('3')

    expect(restLessons.length).toBe(2)
    expect(restLessons[1].name).toBe('react')
    //проверяем с помощью теста соответствие структуры объекта, используя метод toStrictEqual, порядок свойств не принципиален
    expect(restLessons[1]).toStrictEqual({name: 'react', title: '3'})

})