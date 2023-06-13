// syntactic sugar
class Instructor{
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
     }
    startSupporSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please crater quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamit', 'dhaka');
console.log(aamir);
aamir.startSupporSession('9.00');
aamir.createQuiz(60);

const sakib = new Instructor('Sakib Hossain', 'Cumilla');
console.log(sakib);