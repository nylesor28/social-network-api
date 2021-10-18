# social-network-api
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# Description
This repo represent a back-end infratucture to support an social network via expressJS which will use mongoose as on ODM to interact with a Mongo database. 

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#test)
* [Contributing](#​contributors)
* [Contact Me](#contact-me)
* [License](#license)


## Installation
````
1. Run npm i to install the packages
2. Run npm run start
3. The Mongo Database, social-network will create if it doesn't exist
````

## Usage
Use Insomnia for the following routes:

### User Routes
1. To list all Users<br /> 
    GET http://localhost:3001/api/users

2. To find one user <br /> 
    GET http://localhost:3001/api/users/:id

3. To create a new user <br /> 
    POST http://localhost:3001/api/users <br /> 
        {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
        }   
4. To update a category <br /> 
    PUT http://localhost:3001/api/users/:id <br /> 
    {
	    "email" : "value"
    } 
5. To delete a cateogry <br /> 
    DELETE http://localhost:3001/api/users/:id

### User Friends
1. To Add to User's Friend List<br /> 
    POST http://localhost:3001/api/users/:userId/friends/:friendId <br />  

2. To Delete from User's Friend List <br /> 
    DELETE http://localhost:3001/api/users/:userId/friends/:friendId

### Thought Routes
1. To list all thoughts <br /> 
    GET http://localhost:3001/api/thoughts

2. To find one thought <br /> 
    GET http://localhost:3001/api/thoughts/:id

3. To create a new thought <br /> 
    POST http://localhost:3001/api/thoughts/ <br /> 
        {
        "thoughtText": "Here's a cool thought...",
        "username": "lernantino",
        "userId": "5edff358a0fcb779aa7b118b"
        }
4. To update a thought <br /> 
    PUT http://localhost:3001/api/thoughts/:id <br /> 
        {
            "thoughtText" : "Amazing comment !"
        }
5. To delete a thoughts <br /> 
    DELETE http://localhost:3001/api/thoughts/:id

### Reactions
1. To Add to User reaction to thoughts<br /> 
    POST http://localhost:3001/api/thoughts/:thoughtId/reactions <br />  

2. To Delete from User's Friend List <br /> 
    DELETE http://localhost:3001/api/thoughts/:thoughtId/reactions

## ​Walkthough Videos
Video Walkthrough (Start-up): (https://drive.google.com/file/d/152aOl50deDJhyZB9XvDUQuquQPcuNwVM/view?usp=sharing) <br />  
Video Walkthrough (User): (https://drive.google.com/file/d/1zwRurJ47lXfVON3xeivXVrtgIE4yIg0a/view?usp=sharing) <br />  
Video Walkthrough (Thoughts): (https://drive.google.com/file/d/1lAIKYxsC6-RX3qrlZzhduucZLrEt0BHu/view?usp=sharing)



## ​Contributors
To contribute to this code base:
1. Create a github issue.
2. Create a new branch from develop
3. Create a Pull Request into develop branch

## Contact Me
For Issues please create a github issue for the repository

 
## License
 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

