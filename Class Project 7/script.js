// Practise 1
const one = () => "orange";
const answer1 = document.getElementById("answer-1");
document.getElementById("1").addEventListener("click", () => {
  answer1.innerHTML = `<b>Answer: </b> ${one()}`;
});

// Practise 2
const two = (x, y) => x + y;
const answer2 = document.getElementById("answer-2");
document.getElementById("2").addEventListener("click", () => {
  answer2.innerHTML = `<b>Answer: </b> ${two(5, 10)}`;
});

// Practise 3
const three = (answer) => (answer ? "Yes" : "No");
const answer3 = document.getElementById("answer-3");
const answer3b = document.getElementById("answer-3b");
document.getElementById("3").addEventListener("click", () => {
  answer3.innerHTML = `<b>Answer: </b> ${three(true)}`;
  answer3b.innerHTML = `<b>Answer: </b> ${three(false)}`;
});

// Problem 4
const four = () => {
  const person = { name: "John", age: 29 };
  return person.name;
};
const answer4 = document.getElementById("answer-4");
document.getElementById("4").addEventListener("click", () => {
  answer4.innerHTML = `<b>Answer: </b> ${four()}`;
});

// Problem 5
const five = () => {
  const x = 2;
  const y = 5;
  return x * y;
};
const answer5 = document.getElementById("answer-5");
document.getElementById("5").addEventListener("click", () => {
  answer5.innerHTML = `<b>Answer: </b> ${five()}`;
});

// Problem 6
const six = () => {
  const x = 24;
  const y = 6;
  return x / y;
};
const answer6 = document.getElementById("answer-6");
document.getElementById("6").addEventListener("click", () => {
  answer6.innerHTML = `<b>Answer: </b> ${six()}`;
});

// Problem 7
const seven = () => {
  const greeting = "Hello";
  const name = "Charlie";
  return `${greeting} ${name}`;
};
const answer7 = document.getElementById("answer-7");
document.getElementById("7").addEventListener("click", () => {
  answer7.innerHTML = `<b>Answer: </b> ${seven()}`;
});

// Problem 8
const eight = (dogAge) => `Your doggie is ${dogAge * 7} years old in dog years!`;
const answer8 = document.getElementById("answer-8");
document.getElementById("8").addEventListener("click", () => {
  answer8.innerHTML = `<b>Answer: </b> ${eight(8)}`;
});

// Problem 9
const nine = (a, b) => (a > b ? "A is greater than B" : "B is greater than A");
const answer9 = document.getElementById("answer-9");
document.getElementById("9").addEventListener("click", () => {
  answer9.innerHTML = `<b>Answer: </b> ${nine(5, 9)}`;
});

// Problem 10
const ten = () => {
  const numbers = [1, 2, 3];
  const moreNumbers = [4, 5, 6];
  return [...numbers, ...moreNumbers];
};
const answer10 = document.getElementById("answer-10");
document.getElementById("10").addEventListener("click", () => {
  answer10.innerHTML = `<b>Answer: </b> ${ten().join(", ")}`;
});

// Problem 11
const eleven = () => {
  const peopleNameObject = [
    { firstName: "Karl", lastName: "Williams" },
    { firstName: "Michelle", lastName: "Marcus" },
  ];
  return peopleNameObject.map((person) => `${person.firstName} ${person.lastName}`);
};
const answer11 = document.getElementById("answer-11");
document.getElementById("11").addEventListener("click", () => {
  answer11.innerHTML = `<b>Answer: </b> ${eleven().join(", ")}`;
});

// Problem 12
const twelve = (fruits) => (fruits.includes("lemon") ? "Includes Lemons" : "Does not include lemons");
const answer12 = document.getElementById("answer-12");
const answer12b = document.getElementById("answer-12b");
document.getElementById("12").addEventListener("click", () => {
  answer12.innerHTML = `<b>Answer: </b> ${twelve(["orange", "lemon", "apple"])}`;
  answer12b.innerHTML = `<b>Answer: </b> ${twelve(["orange", "pineapple", "apple"])}`;
});

// Problem 13
const thirteen = () => {
  const carBrands = ["Tesla", "Volva", "BMW"];
  return carBrands.filter((car) => car !== "Tesla");
};
const answer13 = document.getElementById("answer-13");
document.getElementById("13").addEventListener("click", () => {
  answer13.innerHTML = `<b>Answer: </b> ${JSON.stringify(thirteen())}`;
});

// Problem 14
const fourteen = () => {
  const names = ["John", "Kate", "Marcus"];
  return names.join(", ");
};
const answer14 = document.getElementById("answer-14");
document.getElementById("14").addEventListener("click", () => {
  answer14.innerHTML = `<b>Answer: </b> ${fourteen()}`;
});

// Problem 15
const fifteen = () => {
  const persons = [
    { name: "Maria", age: 28 },
    { name: "Olav", age: 23 },
  ];
  return persons.find((person) => person.age === 23);
};
const answer15 = document.getElementById("answer-15");
document.getElementById("15").addEventListener("click", () => {
  answer15.innerHTML = `<b>Answer: </b> ${JSON.stringify(fifteen())}`;
});

// Problem 16
const sixteen = (celcius) => (celcius * 9) / 5 + 32;
const answer16 = document.getElementById("answer-16");
document.getElementById("16").addEventListener("click", () => {
  answer16.innerHTML = `<b>Answer: </b> ${sixteen(30)}`;
});
