const fortuneComponents = {
  grade: ["A", "B", "C", "D", "E", "F"],
  day: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  condition: ["sick", "rich", "poor", "hungry", "angry", "moody"],
};

const fortunes = [];

for (let [key, value] of Object.entries(fortuneComponents)) {
  if (key === "grade")
    value.forEach((grade) =>
      fortunes.push(`You will get grade "${grade}" on the test`)
    );

  if (key === "day")
    value.forEach((day) => fortunes.push(`Be careful on ${day}`));

  if (key === "condition")
    value.forEach((condition) => fortunes.push(`You will be ${condition}`));
}

function getFortunes() {
  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
}

console.log(getFortunes());
