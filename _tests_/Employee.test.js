const Employee = require('../lib/Employee');

test('It should create an employee object named Matt', () => { 
    const employee = new Employee('Matt',"13","mjb@gmail.com");

    expect(employee.name).toBe('Matt');
});

test('It should create an employee object with ID 13', () => { 
    const employee = new Employee('Matt',"13","mjb@gmail.com");

    expect(employee.id).toEqual('13');
});

test('It should create an employee object with email mjb@gmail.com', () => { 
    const employee = new Employee('Matt',"13","mjb@gmail.com");

    expect(employee.email).toBe('mjb@gmail.com');
});



new Employee('Matt', '13', 'mjb@gmail.com')