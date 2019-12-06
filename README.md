## Inquirer Checkbox Tree Prompt

### QuickDemo
![QuickDemo](./example/screenshot.gif)

### Install
```
npm install inquirer-checkbox-tree-prompt
```

### Usage
```
inquirer.registerPrompt('checkbox-tree', inquirerCheckboxTree)

inquirer.prompt({
  type: 'checkbox-tree',
  ...
})
```

### Options
Takes type, name, message[filter, validate, default, pageSize] properties.

### Example
```
const inquirer = require('inquirer')
const inquirerCheckboxTree = require('inquirer-checkbox-tree-prompt')

inquirer.registerPrompt('checkbox-tree', inquirerCheckboxTree)

inquirer
  .prompt([
    {
      type: 'checkbox-tree',
      name: 'file'
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers))
  });
```