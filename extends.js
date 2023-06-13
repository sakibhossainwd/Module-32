// parents class
class teamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}


// Instructor
class Instructor extends teamMember{
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        super(name, location);
     }
    startSupporSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please crater quiz for module ${module}`)
    }
}

// Debeloper
class developer extends teamMember{ 
    designation = 'web course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
     }
    developeFeature(feature){
        console.log(`please develop the feature ${feature}`)
    }
    createQuiz(version){
        console.log(`please release the version ${version}`)
    }
}

// Job Placement
class jobPlacement extends teamMember{
    designation = 'Job Placement Comandos'
    team = 'web team'
    region;
    constructor(name, location, resion){
        super(name, location);
        this.tech = resion;
     }
    provideResume(feature){
        console.log(`please develop the feature ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}


// apply
// developer
const sakib = new developer('Sakib Hossain', 'Cumilla', 'React');
console.log(sakib);
sakib.provideFeedback();