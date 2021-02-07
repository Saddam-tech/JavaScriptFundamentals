'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.orderRisotto?.(2, 1) ?? 'Method does not exist!');

// const properties = Object.keys(openingHours);
// const values = Object.values(openingHours);
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`We are open on ${key}, at ${open}, and close at ${close}`);
// }

//Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', ' Gnarby', ' Lewandowski', ' Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//////////////////////////

// const oddsArray = [team1, x, team2];

// const newOdds = {
//   [oddsArray[0]]: {
//     team1: 1.33,
//   },
//   [oddsArray[1]]: {
//     x: 3.25,
//   },
//   [oddsArray[2]]: {
//     team2: 6.5,
//   },
// };

//1.

// for (const [key, value] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${value}`);
// }

//2.

// const calcAverage = function (numbers) {
//   const average = 0;
//   const odd = (average + numbers) / 3;
//   return odd;
// };

// const values = Object.values(game.odds);

// for (const numbers of values) {
//   const average = calcAverage(numbers);
//   console.log(average);
// }

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //3.

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(game[team]);
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // BONUS
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const ordersSet = new Set(['Pizza', 'Risotto', 'Pancake', 'Pizza', 'Pancake']);
// ordersSet.clear();
// console.log(ordersSet);

// const staff = [
//   'Manager',
//   'Chef',
//   'Developer',
//   'Waiter',
//   'Cook',
//   'Dishwasher',
//   'Waiter',
//   'Chef',
// ];

// const staffUnique = new Set(staff);

// console.log(staffUnique);

// const me = new Set('saddamsalokhiddinov').size;

// console.log(me);

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest
//   .set('1', 'Firenze Italy')
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'We are open ;)')
//   .set(false, 'We are closed :(');

// const time = 8;

// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// const question = new Map([
//   ['question', ['What is the best programming language in the world?']],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === 3));

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(...gameEvents);

// //3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

//4.
//[FIRST HALF] 17: ⚽️ GOAL

//My solution

// for (const [key, value] of gameEvents.entries()) {
//   console.log(
//     key <= 45
//       ? `[FIRST HAlF] ${key}: ${value}`
//       : `[SECOND HALF] ${key}: ${value}`
//   );
// }

//Jonas` solution

// for (const [key, value] of gameEvents.entries()) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

// const airline = 'Tap Air Portugal';

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// const me = 'All passengers come to boarding door 23. Boarding door 23!';

// // const correct = me.toLowerCase();

// // console.log(correct[0].toUpperCase() + me.toLowerCase().slice(1));

// // const myEmail = 'salokhiddinov0727@gmail.com';

// // const wrongEmail = '  SalokhiDDinov0727@gmail.Com';

// // const trueVersion = wrongEmail.toLowerCase().trim();
// // console.log(trueVersion);

// // console.log(myEmail === trueVersion);

// const newMe = me.replaceAll('door', 'gate');

// console.log(newMe);

// const checker = function (items) {
//   const baggage = items.toLowerCase();
//   if (
//     baggage.includes('knife') ||
//     baggage.includes('gun') ||
//     baggage.includes('alcohol')
//   ) {
//     console.log('You are out!');
//   } else {
//     console.log('Have a nice flight!');
//   }
// };

// checker('I have some food, pocket knife, real knife, gun and my laptop');

// checker('I have food, beverage, laptop, and books');

// const name = 'jessica ann smith davis';
// console.log(name);
// console.log(name.split(''));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   const mask = last.padStart(str.length, '*');
//   return mask;
// };

// console.log(maskCreditCard(234345413564));

// THIS TEST DATA (pasted to textarea)
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', converter);
// const converter = function (text) {
//   const dividedText = text.split(' ');

//   for (const value of dividedText.values()) {
//     const divide = value.toLowerCase().trim().split('_');
//     const toUpper = divide[1].toUpperCase().slice(0, 1);
//     const full = divide[1].slice(1);
//     return `${divide[0], toUpper, full}`
//   }
// };

// console.log(converter('underscore_caSe'));

// document.querySelector('button').addEventListener('click', function () {
//   const newText = document.querySelector('textarea').value;
//   const rows = newText.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

const getCode = str => str.slice(0, 3).toUpperCase();

const flights =
  '_Delayed_Departure;fao234293847;txl23492837;11:25+_Arrival;bru09283745;fao293840345;11:45+_Delayed_Arrival;hel7439299980;dao023948753;12:05+_Departure;fao028023423;lis309485309458;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `
  ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
    to
  )} ${time.replace(':', 'h')}`;
  console.log(output.padStart(36, ' '));
}
