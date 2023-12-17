# remote-engine-assesment

## Introduction

This dynamic job portal serves as the job hub where clients seamlessly post job openings for developer, enabling developers to effortlessly showcase their releted skill sets, and get application accepted for next proceess, and facilitating seamless communication between developers and companies for the realization of their dream careers.

## Deplolyed App

Till now it is not deployed any where. You can check this project using bellow few step and instruction

## Video Walkthrough of the project

- Vedio link:- https://drive.google.com/file/d/1dZenvBgY90D1l0mS2nvcH9WYo_BxSuBG/view?usp=sharing

## Features

List out the key features of your application.

- Multiple user can register and login.
- Developer can choose the skill from the given skills list also can add new skills if require.
- other important feature.

## design decisions or assumptions

- First creacting a visual structure on the white board.
- Create a psudo Schema.
- Initialize the project and make set up with backend and some impotant feature created in frontend.
- used thunder client for making manual CRUD operation

## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

# frontend bash commond line

```bash
### `npm install`
install the require module
go to the project directory

### `cd remote-engine`

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
```

# backend bash commond line

```bash
### `npm install`
install the require module
go to the project directory
### `npm run server`
to run your backend localy and see all changes
```

## API Endpoints

Multiple API endpoints, methods, brief descriptions, and examples of request/response.

GET /api/user - retrieve all the developer and client registred user list
POST /api/developer/add - register new user both for client and developer as well
GET /api/developer - retrieve all the onboarded developer list
POST /api/developer/add - add new developer in developer list

## Technology Stack

A brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- React.js
- Thunder client (CRUD operation)

## Few useful module

A brief overview of the module and method used in the project.

- bcrypt
- jwt(jsonwebtoken)
- Authorization.
- I push environment variavle you can check it for your safty it can be ignore just add 
```.env
 ```
 in .gitignore file
