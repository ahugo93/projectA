const students = ["David", "John", "Dallas", "Rafa"];
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
    }
//will print list of student names
for (let students of students){
    console.log(students);
}
//simplified code does the same thing 

for (let i = 0; i < students.length; i++) {
    const name = students[i];
    if (name[0] === "D") {
      console.log(name);
    }
  }
  //will print names of students beginning with D
  for (let student of students) {
    if (student[0] === "D") {
      console.log(student);
    }
  }
  //simplified