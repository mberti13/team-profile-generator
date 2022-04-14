const Manager = require('../lib/Manager');

const manager = require('../lib/Manager');


test('It should create a manager object named Steve', () => { 
    const manager = new Manager('Steve',"21","steve@gmail.com",'17');

    expect(manager.name).toBe('Steve');
});

test('It should create an manager object with ID 21', () => { 
    const manager = new Manager('Steve',"21","steve@gmail.com",'17');

    expect(manager.id).toEqual('21');
});

test('It should create an manager object with email steve@gmail.com', () => { 
    const manager = new Manager('Steve',"21","steve@gmail.com",'17');

    expect(manager.email).toBe('steve@gmail.com');
});
test('It should create an manager object with office number of 17', () => { 
    const manager = new Manager('Steve',"21","steve@gmail.com",'17');

    expect(manager.office).toEqual('17');
});