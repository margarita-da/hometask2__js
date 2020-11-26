/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array,fn) {
  for(let i=0; i<array.length; i++) {
    fn(array[i], i, array)
  }
  }

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let newArray = []
  for(let i=0; i<array.length; i++) {
      newArray.push(fn.call(null, array[i],i,array))
  }
  return newArray
}
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  var x = initial || array[0],
  i = initial ? 0 : 1;

for (; i < array.length; i++) {
  x = fn(x, array[i], i, array);
}

return x;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const keys = Object.keys(obj);
  let newArray = []
  keys.forEach(keys => {
    newArray.push(keys.toUpperCase())
  })
  return newArray
}
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from=0, to=array.length) {
  let arr2 = [];

  if (to > array.length) {
      to = array.length;
  }
  if (to < 0) {
      to = array.length + to;
  }
  if (to < -array.length) {
      to = 0;
  }
  if (from < 0) {
      from = 0;
  }
  for (from; from < to; from++) {
      arr2.push(array[from]);  
  }

  return arr2;
}
/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
const obj = {}
function createProxy(obj) {
  const propic = new Proxy(obj, {
    get(target, prop) {

      return target[prop];
  },
    set (target, prop, value) {
      target[prop] = value*value
        return true
    }
  });
  return propic;
}
createProxy(obj);

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
