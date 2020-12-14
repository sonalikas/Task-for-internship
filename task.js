const data = require('./data.json')

const getStudentsWithMarksMoreThan = marks => data.students.filter(student => student.details.marks > marks);

getStudentsWithMarksMoreThan(42)