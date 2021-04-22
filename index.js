const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'Title',
    message: 'You type title now!'
  }, {
    type: 'input',
    name: 'description',
    message: 'You give description now!'
  }, {
    type: 'input',
    name: 'installation',
    message: 'You give install instruction now!'
  }, {
    type: 'input',
    name: 'usage',
    message: 'You tell me how to use now!'
  }, {
    type: 'input',
    name: 'contributions',
    message: 'You tell me contribution guidelines now!'
  }, {
    type: 'input',
    name: 'test',
    message: 'You tell me test intruction now!'
  }, {
    type: 'list',
    name: 'license',
    message: 'You choose license now!',
    choices: ['community', 'MIT', 'GNU', 'GPL']
  }, {
    type: 'input',
    name: 'username',
    message: 'You tell me Github username now!'
  }, {
    type: ' input',
    name: 'email',
    message: 'You tell me your email now'
  }
])
.then(res => {

  let body = `
# ${res.title}
  
![License](https://img.shields.io/badge/license-${res.license}-brightgreen)

##Description
${res.description}

##Table of Contents
-[Install](#install)
-[Usage](#usage)
-[Contributions](#contributions)
-[Test](#test)
-[license](#license)

## Installation
${res.installation}

## Usage
${res.usage}

## Contributions
${res.contributions}

##Test
${res.test}

## Questions?
[My Github](https://github.com/${res.username})
[Email](${res.email})

## License: {#license}

`

  let mitLicense = `MIT License
  
COpyright (c) [2021] [${res.username}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

  let gnuLicense = ` GNU GENERAL PUBLIC LICENSE
  Version 3, 29 June 2007

  Copyright(C) 2007 Free Software Foundation, Inc. < https://fsf.org/>
  Everyone is permitted to copy and distribute verbatim copies
  of this license document, but changing it is not allowed.
  

  <${res.title}> Copyright (c) <2021> <${res.username}>`

  fs.writeFile('README.md', body, err => {
    if (err) { console.log(err) }
  })

  if (res.license === 'MIT') {
    fs.appendFile('README.md', mitLicense, err => {
      if (err) { console.log(err) }
    })
  } else if (res.license === 'GNU GPL') {
    fs.appendFile('README.md', gnuLicense, err => {
      if (err) { console.log(err) }
    })
  } else {
    fs.appendFile('README.md', "This is a community license", err => {
      if (err) { console.log(err) }
    })
  }
})
.catch(err => console.log(err))