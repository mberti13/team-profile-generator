const Engineer = require('../lib/Engineer');

test('It should create a engineer object named Bill', () => { 
    const engineer = new Engineer('Bill',"99","Bill@gmail.com",'bill-prog');

    expect(engineer.name).toBe('Bill');
});

test('It should create an engineer object with ID 99', () => { 
    const engineer = new Engineer('Bill',"99","Bill@gmail.com",'bill-prog');

    expect(engineer.id).toEqual('99');
});

test('It should create an engineer object with email Bill@gmail.com', () => { 
    const engineer = new Engineer('Bill',"99","Bill@gmail.com",'bill-prog');

    expect(engineer.email).toBe('Bill@gmail.com');
});
test('It should create an engineer object with github of of bill-prog', () => { 
    const engineer = new Engineer('Bill',"99","Bill@gmail.com",'bill-prog');

    expect(engineer.github).toBe('bill-prog');
});