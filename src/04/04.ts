const age = [18 ,20, 22, 1, 100, 90, 14];

const predicate = (age:number) => { // предикат - это функция возвращающая true либо false
  return age > 90;
}

const oldAges = [100]; // > 90


type CourseType = {
  title: string
  price: number
}

const courses = [
  {title: 'CSS', price: 110},
  {title: 'JS', price: 200},
  {title: 'REACT', price: 150}
]

// < 160
const cheapPredicate = (courses : CourseType) => {
  return courses.price < 160
}

//Для функций предикатов нужно использовать стрелочные функции, они чаще всего сразу передаются внутрь фильтра