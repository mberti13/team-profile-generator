const Employee = require('./Employee');

class Manager extends Employee{
    super(name,id,email,office){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
    
}