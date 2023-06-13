const student = {
    name: 'Rakib hossain',
    age: 10,
    class: 'five',
    marks: {
        math: 78,
        bangla: 86,
        english: 95,
    }
}

// we can access date using (dot notation -- .), Like this
const marks = student.marks;
const math = student.marks.math;

// bracket notation ( [] ), like this
const bangla = student['marks']['bangla'];
console.log(bangla);
const subject = 'english';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);
