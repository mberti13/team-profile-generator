const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//array for teamData
let teamData = [];

const promptManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name?',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter this Managers name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Managers ID number?',
            validate: idInput => {
                if(idInput){
                    return true;
                }else{
                    console.log('Please enter this Managers ID Number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Managers email address?',
            validate: emailInput => {
                if(emailInput){
                    return true;
                }else{
                    console.log('Please enter the Managers email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'office',
            message: 'What is the Managers office number?',
            validate: officeInput => {
                if(officeInput){
                    return true;
                }else{
                    console.log('Please enter the Managers office number!')
                    return false;
                }
            }
        }
       // Add conditions for which role is chosen and prompts for specific items for that role
    ])
        .then(managerData =>{
            const {name, email, id, office} = managerData;
            const manager = new Manager(name,id,email,office);

            teamData.push(manager);
        })
}

const promptEmployee = () =>{
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: 'What is your employees role?',
            choices: ['Engineer', 'Intern']
        },

    ])
}
 