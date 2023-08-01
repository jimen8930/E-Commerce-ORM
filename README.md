# E-Commerce-ORM
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description
  Build a back-end for a e-commerce website that wants to use the latest technologies.

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Clone the repo

Open in VS Code. If you do not have VS code you must install it.

Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored. Also, you'll need to use the MySQL2 package to connect to your MySQL database and perform queries, and the Inquirer package to interact with the user via the command line.

Next, use the terminal to run the command npm i to install the dependencies associated with this application 
Also, you will need to install more packges such as:
-Install Sequelize package (https://www.npmjs.com/package/sequelize)
-Install Dotenv package. It stores sensitive data, like a user’s MySQL username, password, and database name (https://www.npmjs.com/package/dotenv)
To run the server, within the terminal, type the command npm start or node server.js.

Once the server is running, users can then access the back end of the application within the browser to observe full functionality of the site. Here is the link for the tutorial:


## Usage
This application is powered by mySQL workbench and MAMP meaning for it to function properly, there needs to be a server running in the background. To start the server, navigate to the directory of the application, install all dependencies (npm i), then type the command npm start (or node server.js). 
After installing all the packages, open mysql to create the database. Type the following:

DROP DATABASE IF EXISTS ecommerce_db; CREATE DATABASE ecommerce_db;

Then , open the integrated terminal and type "npm run seed", this is to seed data into the database created. Once that is done, it is time to test each route. For this process, it will require Insomnia. There will test any GET, POST, PUT or Delete requests.

## License
https://opensource.org/licenses/MIT

This project is licensed under the MIT License.

## Contributing
Contributions to the E-Commerce backend application are welcome! Here are the guidelines for this project. Fork the repository. Create a new branch for your contribution. Make your changes. Commit and push your changes to your forked repository. Submit a pull request, and provide a detailed description of your changes.

## Tests
There is currently no unit testing yet written for this application.

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: [@jimen8930](https://github.com/jimen8930)
- Email: ejime053@gmail.com