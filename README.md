# **JS** test suite with Cypress
[![cypress-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/urshkd&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/urshkd/runs) [![cypress-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/count/urshkd&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/urshkd/runs)
> **application under test:** https://app.laserhub.com

## :gear: Setup

1. `git clone https://github.com/vovuch/JS_project.git`
2. cd to `JS_project` folder and run `npm install`


## :heavy_check_mark: Run tests

- If you installed Cypress via npm: 
    - cypress test runner (cypress __open__):
      - **`npm run cy:open:web`** OR `cypress open --env device=web` (change web to mob to switch to mobile view)
    
    - cypress __headless mode__ (cypress run):
      - `npm run cy:run:web` OR `cypress run --env device=web`
- If you installed Cypress zip:
    - import **`cypress-example`** folder and you are good to go

## :bulb: Information
#### :test_tube: Tests:
:file_folder: Tests are located in `cypress/integration` folder

:file_folder: Selectors (CSS selectors) are located in `cypress/selectors` folder

#### :hammer_and_wrench: Configuration
Config files:
1. `cypress.json` - Main config file where default behavior of Cypress can be modified.
2. `plugins/index.js` - Plugins file is where we can programmatically alter the resolved configuration 
