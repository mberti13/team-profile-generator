const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,id,email)

        this.office = office;
    }
    getOfficeNumber(){
        return this.office;
    }
    getRole(){
        return `Manager`;
    }
};

const manager = new Manager('Steve','21','steve@gmail.com','17');
console.log(manager.getRole());

module.exports = Manager;