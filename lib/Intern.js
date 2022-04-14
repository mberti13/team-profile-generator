const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email)

        this.school = school;
    }
    getRole(){
        return `Intern`
    }
    getSchool(){
        return this.school;
    }
};

const intern = new Intern('Mark',"11","Mark@gmail.com",'UT Austin');
console.log(intern.getRole());





module.exports = Intern;