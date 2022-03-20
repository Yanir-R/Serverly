![image](https://user-images.githubusercontent.com/67261194/159176023-780714e5-e566-4a24-a29d-7ae8f2e00543.png)

## Get Started
 #### Clone the repo:
<code> git clone https://github.com/Yanir-R/Serverly.git </code>
#### Install dependencies:
<code> npm i </code>
###### Install npm i inside the client & server folders
#### Run the Server:
<code> npm run dev  </code>
###### [nodemon](https://www.npmjs.com/package/nodemon) a wrapper  for node, will restart the server on file changes
#### Run The Client:
<code> npm start </code>

## Introduction
An app with React & NodeJS that connects to MongoDB and manages servers,
You can save or delete servers.

## Features
- [X] Create and Delete servers that are saved in the MongoDB database
- [X] Price for a running server based on the time spent running the server multiplied by the price of the server type
- [X] Open\Close toggle to control the status of the server
- [X] 3 types of servers with different costs
- [X] Simple Server validations
- [ ] Ability to switch currencies

## Instructions
- Start the application with your browser at <code>http://localhost:3000/</code> <br/>
  An empty table is displayed with the header <code>No Data Found</code>
- Fill in the input fields: <br>
<code>Server Name</code> <br> 
<code> Server IP</code> <br> 
<code>Select a server from the dropdown list</code> <br> 
- Clicking on the <code>Submit</code> button will dynamically update the table
- Open Toggle will dynamically change the <code> Activity Time Cost</code> every 4.5 seconds and the cost depending on the server you chose from the list
- Close Toggle will stop the cost of the server
- Clicking on the <code>Remove</code> button will remove the server from the table and from the DB

## Motivation
I created the project to test my abilities with React, TypeScript, NodeJS & MongoDB.


## Technologies

<p align="flex"> 
<img src="https://img.icons8.com/nolan/64/react-native.png" alt="reactjs"/>
<img src="https://img.icons8.com/nolan/64/html-5.png"  alt="html"/>
<img src="https://img.icons8.com/nolan/64/css-filetype.png" alt="css"/>
<img src="https://img.icons8.com/nolan/64/js.png" alt="javascript"/>
<img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongodb"/>
<img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="nodejs"/>
<img src="https://img.icons8.com/color/48/000000/typescript.png" alt="typescript"/>
</p>


## License MIT © [Yanir-r]()


