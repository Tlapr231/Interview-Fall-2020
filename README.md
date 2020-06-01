# Programming Question
### Description
In this project, there is currently an endpoint implemented that allows you to get all SpaceX launches from a specific year.

Using a **similar project structure** to the existing one, you will create a new endpoint that takes in two parameters, start and end, and returns all launches between this start and end date in chronological order.

- Under the src\spaceX folder of the project, you will see that there is a class called Launches that currently allows users to get the launches for a specific year

- In the src\index.ts file, you will see that a get endpoint has been setup for /yearly-launches, that allows the user to get the launches for the current year using the Launches class.

### Required New Functionality

- Create a new endpoint /range-launches that accepts a GET request with a 'start' and an 'end' parameter. You may use any existing methods in your implementation. **Make sure you read the api docs carefully before implementing this**

- You will then call the spaceX api and retrieve all launches between this start and end date

- An issue with the API being used is that launches are sometimes not returned fully chronologically sorted. **Make sure that your endpoint sorts the launches by their launch date.** 


### Request Format
The request parameters have the following format (YYYY-MM-DD):
```
?start=2020-01-01&end=2021-01-01
```

Your response json should have the following format: 
```
[
    {
    flight_number: 1,
    mission_name: "Mission 1",
    rocket_name: "Rocket 1",
    rocket_type: "Rocket Type 1",
    details: "space is cool man",
    launch_success: true,
    },
]

```

# Passing Criteria & Submitting

#### Code Quality
Keep code strongly typed with good coding practices, and **use the await/async model** when performing `Promises` within TypeScript
#### Document your code!
Document all of your functions with statement blocks using the @param and @returns annotations
#### Test your code!
Add 2 tests for every function written, one that expects to pass and one that expects to fail. Your tests should go in the tests\spacex-test.ts file. **A minimum of 2 tests is expected**
#### Submitting
Before you start your task, **make a fork of this repository**. Once you have completed your task, or the allotted hour has passed, commit your solution to a branch in your forked repo with the branch name in the following format: firstname-lastname, and make a pull request. 

# Setup

Make sure you have the following installed:
```
NodeJS 10.x, x > 10
NPM
```
Open the project in your favourite TypeScript editor. I recommend that you use [Visual Studio Code](https://code.visualstudio.com/download) in order to start working on the project

# Building the project
Go to the root of the project (folder with the package.json) folder and run the following commands: 
```
npm install
npm run start
```

To run the unit test, run the following commands:
``` 
npm install
npm run test
```


# Helpful Links


[Api Documentation](https://documenter.getpostman.com/view/2025350/RWaEzAiG?version=latest#bc65ba60-decf-4289-bb04-4ca9df01b9c1)


[Typescript Docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)

[expressJs](https://expressjs.com/en/4x/api.html)

[momentJs](https://momentjs.com/docs/)

[node-fetch Docs](https://www.npmjs.com/package/node-fetch)



# Interview Rooms
### Technical Interview Room (Join this room if you have questions while doing the interview)
https://meet.google.com/qcj-nzjp-mzj

### UOttawa Interviews: (Join this room for your scheduled personal interview if you are from UOttawa)
https://meet.google.com/boy-rkom-fpy

### Carleton Interviews: (Join this room for your scheduled personal interview if you are from Carleton)
https://meet.google.com/rky-ycrx-dyn
