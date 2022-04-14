const Intern = require('../lib/Intern');

test('It should create a intern object named Mark', () => { 
    const intern = new Intern('Mark',"11","Mark@gmail.com",'UT Austin');

    expect(intern.name).toBe('Mark');
});

test('It should create an intern object with ID 11', () => { 
    const intern = new Intern('Mark',"11","Mark@gmail.com",'UT Austin');

    expect(intern.id).toEqual('11');
});

test('It should create an intern object with email Mark@gmail.com', () => { 
    const intern = new Intern('Mark',"11","Mark@gmail.com",'UT Austin');

    expect(intern.email).toBe('Mark@gmail.com');
});
test('It should create an intern object with school of of UT Austin', () => { 
    const intern = new Intern('Mark',"11","Mark@gmail.com",'UT Austin');

    expect(intern.school).toBe('UT Austin');
});