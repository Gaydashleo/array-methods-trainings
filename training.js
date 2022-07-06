const cars = [
  { make: 'Honda', model: 'CR- V', type: 'suv', amount: 14, price: 24845, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];


// EXAMPLE 1 - Метод MAP
// Пусть функция getModels возвращает массив моделей( поле model) всех автомобилей

// const getModels = (cars) => cars.map((car) => car.model);
// С использованием деструктуризации
// const getModels = (cars) => cars.map(({ model }) => model);

// console.log('getModels', getModels(cars));

// console.table(getModels(cars));


// EXAMPLE 2 - Метод MAP
// Пусть функция makeCarsWithDiscount возвращает массив объектов с измененным значением свойств price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({ ...car, price:car.price - (car.price * discount) }));
// };
// makeCarsWithDiscount(cars);
// console.log(makeCarsWithDiscount(cars, 0.2));


// EXAMPLE 3 - Метод filter
// Пусть функция  filterByPrice возвращает массив автомобилей цена которых меньше чем значение threshhold.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold);
// };
// console.table(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 10000));

// Фильтр на удаление марки машины
// const filterByName = (cars, name) => {
//   return cars.filter((car) => car.make !== name);
// };
// console.log(filterByName(cars, "Honda"));

// !== при замене на === оставляем в массиве то что хотим
// !== удаляем из массива то что хотим

// EXAMPLE 4 - Метод filter работает с булевым значением, результат всегда Тру или Фолс
// Пусть функция getCarsWithDiscount возвращает массив авто свойство onSale  которых true

// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => car.onSale === true);
// };
// или такая запись
// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => car.onSale);
// };
// console.log(getCarsWithDiscount(cars));

// EXAMPLE 5 - Метод filter
// Пусть функция getCarWithType возвращает массив авто тип котрых совпадает  со значением параметраType

// const getCarWithType = (cars, type) => {
//   return cars.filter((car) => car.type === type);
// };
// console.log(getCarWithType(cars, 'suv'));

// Используем деструктуризацию
// const getCarWithType = (cars, cartype) => {
//   return cars.filter(({ type }) => type === cartype);
// };
// console.log(getCarWithType(cars, 'suv'));
// console.log(getCarWithType(cars, 'sedan'));


// EXAMPLE 6 - Метод find
// Найти авто по модели

// const getCarsWithModel = (cars, model) => {
//   return cars.find((car) => car.model === model);
// }
// console.log(getCarsWithModel(cars, 'F-150'));
// console.log(getCarsWithModel(cars, 'CX-9'));


// EXAMPLE 7 - Метод sort( мутирует данные)
// Пусть функция sortByAscendingAmount возвращает новый массив авто
// в отсортированный по возрастанию значения свойства amount

// const sortByAscendingAmount = (cars) => {
//   const copyCars = [...cars];
//   copyCars.sort((a, b) => a.price - b.price); // (b.price - a.price cортировка по убыванию цены)
//   return copyCars;
// };
// Короткая запись
// const sortByAscendingAmount = (cars) => {
// return [...cars].sort((a, b) => a.price - b.price);
// };

// console.log(sortByAscendingAmount(cars));

// EXAMPLE 8 - Метод sort( мутирует данные)
// Пусть функция sortByModel возвращает новый массив авто
// отсортированный по названию модели в алфавитном порядке

// const sortByModel = (cars) => {
//   copyCars = [...cars];
//   copyCars.sort((a, b) => a.model.localeCompare(b.model));// при замене b.model.localeCompare(a.model) в обратном порядке сортировка
//   return copyCars;
// };
// Короткая запись
// const sortByModel = (cars) => {
//   return [...cars].sort((a, b) => a.model.localeCompare(b.model));
// };
// console.log(sortByModel(cars));


// EXAMPLE 9 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств  amount)

// const getTotalAmount = (cars) => {
//   return cars.reduce((acc, car) => acc + car.amount, 0);
// };
// console.log(getTotalAmount(cars));

// EXAMPLE 10 - Цепочки методов
// Пусть функция getAvaibleCarNames возвращает массив моделей авто, которые сейчас на распродаже

// const getModelOnSale = (cars) =>
//   cars
//     .filter((cars) => cars.onSale === true)
//     .map((car) => car.model);

// console.log(getModelOnSale(cars));

// EXAMPLE 11 - Цепочки методов
// Пусть функция getSortedCarOnSale возвращает массив авто на расппродаже отсортированных по возрастанию цены

// const getSortedCarOnSale = (cars) => 
//     cars
//     .filter((cars) => cars.onSale === true)
//     .sort((a, b) => a.price - b.price);

// console.log(getSortedCarOnSale(cars));