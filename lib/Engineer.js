const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)

        this.github = github;
    }
    getRole(){
        return `Engineer`
    }
    getGithub(){
        return this.github
    }
}

const engineer = new Engineer('Bill',"99","Bill@gmail.com",'bill-prog');
console.log(engineer.getRole());


module.exports = Engineer;