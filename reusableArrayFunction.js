// map()ArrayFunction
const myCar = ['BMW', 'Honda', 'Toyota'].map((model) => {return `${model}`});
const arrayMap = myCar.map((model) => `${model}`);

console.log(myCar);  // *output* ['BMW', 'Honda', 'Toyota']
console.log(arrayMap); // *output* ['BMW', 'Honda', 'Toyota']


// filter()ArrayFunction
const truthyValues = [2, "Name", null, 0].filter((item) => Boolean(item));

const dbeDivision = [
    {
        name: "Michale Tyrell",
        scores: 85,
    },
    {
        name: "Lee Jum Beom",
        scores: 82,
    },
    {
        name: "Sukmawati",
        scores: 75,
    },
    {
        name: "Theo Warner",
        scores: 70,
    },
];

const eligibleForPromote = dbeDivision.filter((employeeName) => employeeName.scores>70);


console.log(truthyValues); // *output* [ 2, 'Name' ]
console.log(eligibleForPromote);
/*output
[ { name: 'Michale Tyrell', scores: 85 },
  { name: 'Lee Jum Beom', scores: 75 },
  { name: 'Sukmawati', scores: 82 } ]
*/


//reduce()ArrayFunction
const dbeDivision = [
    {
        name: "Michale Tyrell",
        scores: 85,
    },
    {
        name: "Lee Jum Beom",
        scores: 82,
    },
    {
        name: "Sukmawati",
        scores: 75,
    },
    {
        name: "Theo Warner",
        scores: 70,
    },
];

const totalScore = dbeDivision.reduce((acc, employeeName) => acc + employeeName.scores, 0);

console.log(totalScore);


//some()ArrayFunction
const divisionScores = [85, 82, 75, 70];
const evenScores = dbeDivision.some(score => score % 2 === 0);

console.log(evenScores); // *output* true


//find()ArrayFunction
const dbeDivision = [
    {
        name: "Michale Tyrell",
        scores: 85,
    },
    {
        name: "Lee Jum Beom",
        scores: 82,
    },
    {
        name: "Sukmawati",
        scores: 75,
    },
    {
        name: "Theo Warner",
        scores: 70,
    },
];

const findSukmawati = dbeDivision.find(employee => employee.name === "Sukmawati");
console.log(findSukmawati);

/* output
{ name: "Sukmawati", scores: 70 }
*/


//sort()ArrayFunction
const divisionScores = [85, 82, 75, 70];

const compareScores = (a,b) => {
  return a-b;
};

const sortingScores = divisionScores.sort(compareScores);
console.log(sortingScores); // *output* [ 70, 75, 82, 85 ]


//every()ArrayFunction
const divisionScores = [85, 82, 75, 70];
const promoteScores = 71;
const scoresPassed = divisionScores.every(score => score > promoteScores);

console.log(scoresPassed); // *output* false


//forEach()ArrayFunction
const employeeName = ["Michale", "Lee", "Sukmawati", "Theo"];

for(let i = 0; i < employeeName.length; i++) {  //imperative syntax
  console.log(`Hello, ${i}!`);
}

employeeName.forEach((name) => {
  console.log(`Hello, ${i}!`);  // declarative syntax
});
