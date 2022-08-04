//consts initial statements
const inquirer = require('inquirer');
const fs= require('fs');

//  
const generatePage = require ('./src/page.js');
// array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt ([
{
    type: 'input',
    name: 'email',
    message: 'what is your email!?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter email address!');
            return false; 
        }
    }
  
},
{
    type: 'input',
    name: 'title',
    message: 'What is the project name?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter project name!');
            return false; 
        }
    }
},

{   type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description of your project!');
            return false; 
        }
    }
},
{
    type: 'input',
        name: 'usage',
        message: 'How do you use your app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Tell us how to use app');
                return false; 
            }
        }
    }
]);

};

// function for read me
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // err check
        if (err) {
            console.log(err);
            return;
        //README has been created 
        } else {
            console.log("Your README has been created!")
        }
    })
}; 

// function initialize program
questions()
// getting answers 
.then(answers => {
    return generatePage(answers);
})
// getting data and writing data 
.then(data => {
    return writeFile(data);
})
// catch err 
.catch(err => {
    console.log(err)
})