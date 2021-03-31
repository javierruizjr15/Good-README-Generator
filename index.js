const inquirer = require('inquirer')

let projectinfo = []

// array of questions for user
const questions = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'person',
        message: 'Whats the title of your project?'
      },
      {
        type: 'input',
        name: 'person',
        message: 'Whats the discription of your project?'
      },
      {
        type: 'input',
        name: 'person',
        message: 'Whats the install instructions of your project?'
      },
      {
        type: 'input',
        name: 'person',
        message: 'Whats the usage info of your project?'
      },
      {
        type: 'input',
        name: 'person',
        message: 'Whats the contribution guidelines of your project?'
      },
      {
        type: 'input',
        name: 'person',
        message: 'Whats the test instructions of your project?'
      }
    ])
      // .then(res => {
      //   console.log(res)
      // } 
      // })
      // .catch(err => console.log(err))
  } 
questions()
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
