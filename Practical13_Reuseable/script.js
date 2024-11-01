const peopleInfo = {
  Karma: {
    age: 21,
    role: "Developer",
    description: "A passionate developer skilled in JavaScript and Python and loves playing Basketball."
  },
  Yeshey: {
    age: 20,
    role: "Accountant",
    description: "An expert in Accounting and Business Management and loves playing Chess."
  },
};

function showMoreInfo (name) {
  const info = peopleInfo[name];
  if (info) {
    alert(
      `More info about ${name}:\n\n` +
      `Age: ${info.age}\n` +
      `Role: ${info.role}\n` +
      `Description: ${info.description}`
    );
  } else {
    alert("Information not available.");
  }
}
