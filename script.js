let money = prompt('Ваш месячный доход');
console.log(typeof money);
console.log(money);

let income = 'freelance';
console.log(income);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')
console.log(addExpenses);
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке');
console.log(typeof deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;
console.log(budgetMonth);

let mission = 1100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000; 
let period = 12;
console.log('Период равен ' +period+ ' месяцев.' + ' Цель заработать ' +mission+ ' денег');

let budgetDay = money/30;
console.log(budgetDay);



