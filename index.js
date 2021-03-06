const inquirer = require('inquirer')
const fs = require('fs')
const { prependOnceListener } = require('process')

let readmearray = []

const Readme = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'whats the project title?:'
    }, {
      type: 'input',
      name: 'description',
      message: 'give a description of the project:'
    }, {
      type: 'input',
      name: 'instal instructions',
      message: 'whats the install instruction?:'
    }, {
      type: 'input',
      name: 'usage info',
      message: 'whats the usage info?:'
    }, {
      type: 'input',
      name: 'contribution guidlines',
      message: 'what are the contribution guidlines?:'
    }, {
      type: 'input',
      name: 'test instructions',
      message: 'whats the test instruction?:'
    }
  ])
    .then(res => {
      console.log(res)
      readmearray.push(res)
      if (res.choice) {
        Readme()
      } else {
        console.log(readmearray)
      }
    })
    .catch(err => console.log(err))
}

Readme()

fs.writeFile('TheREADME.md', 'here i write stuff', err => {
  if (err) { console.log(err) }
})


