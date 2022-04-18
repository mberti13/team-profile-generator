const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');

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
            type: 'list',
            name: 'title',
            message: 'What is your employees role?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees name?',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter this Employees name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employees ID number?',
            validate: idInput => {
                if(idInput){
                    return true;
                }else{
                    console.log('Please enter this Employees ID Number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Employees email address?',
            validate: emailInput => {
                if(emailInput){
                    return true;
                }else{
                    console.log('Please enter the Employees email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'github',
            message: 'What is this Engineers github username?',
            when:(input) => input.title === 'Engineer',
            validate: githubInput => {
                if(githubInput){
                    return true;
                }else{
                    console.log('Please enter this Engineers github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'school',
            message: 'Where did this Intern go to school?',
            when:(input) => input.title === 'Intern',
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                }else{
                    console.log('Please enter the school of this Intern!')
                    return false;
                }
            }
        },
        //confirm to add new employees
        {
            type: 'confirm',
            name: 'confirmAddNew',
            message:'Would you like to add another employee?',
            default: false
        }
    ])
        .then(employeeData =>{
            let { name, id, email, github, school, title, confirmAddNew} = employeeData;
            let employee;

            if(title === 'Engineer'){
                employee = new Engineer(name, id, email, github);
            }else if(title === 'Intern'){
                employee = new Intern(name,id,email,school);
            }

            teamData.push(employee);

            //if confirm add, return prompt
            if(confirmAddNew){
                return promptEmployee();
            }else{
                console.log(teamData);
                return teamData;
            }
        })
};

const writeFile = fileContent =>{
    fs.writeFile('./dist/index.html', fileContent, err =>{
        if(err){
            console.log(err);
            return;
            //if file is written successfully
        }else{
            console.log("Your team's profile has successfully been created! Check the 'dist' folder for the index.html file.")
        }
    })
};


promptManager()
    .then(promptEmployee)
    .then(teamData =>{
        return generatePage(teamData);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML);
    })
    .catch(err =>{
        console.log(err)
    });
 