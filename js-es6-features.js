// ✅ 1. let and const (block-scoped variables)
let score = 85;
const maxScore = 100;

// ✅ 2. Template Literals (string interpolation)
console.log(`Your score is ${score} out of ${maxScore}`);

// ✅ 3. Arrow Functions (shorter syntax)
const greet = name => `Hello, ${name}!`;
console.log(greet("Hasritha"));

// ✅ 4. Destructuring (extract values)
const user = { name: "Hasritha", age: 20 };
const { name, age } = user;
console.log(`${name} is ${age} years old.`);

// ✅ 5. Spread Operator (copy/merge arrays/objects)
const skills = ["HTML", "CSS"];
const fullSkills = [...skills, "JavaScript", "React"];
console.log(fullSkills);

// ✅ 6. Default Parameters
function welcome(user = "Guest") {
  console.log(`Welcome, ${user}`);
}
welcome(); // Welcome, Guest

// ✅ 7. Promises + async/await (handle async tasks)
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Fetched title:", data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
