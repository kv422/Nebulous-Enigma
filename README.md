# Nebulous Enigma

Nebulous Enigma is a web-based, choose-your-own-adventure game set in a science fiction universe where players navigate a series of branching paths and decisions. With the option to save progress or start anew using a guest account, players have flexibility in how they approach each adventure. The game is designed to give players with a mix of strategic choices, each with the potential for rewarding outcomes or catastrophic failures, making every decision impactful. Nebulous Enigma offers a unique, replayable experience in interactive storytelling.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

TEMP: What things you need to install the software and how to install them

```
Give examples
```

### Installing

TEMP:A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

TEMP: Explain how to run the automated tests for this system

### Break down into end to end tests

On the root directory, type the folloing command to do the automated testing:

```
npm run test
```
This will run all of the tests specified in the activity.test.js file. 
Currently, the test that runs checks if the website exists and can be interacted with by the user.

### And coding style tests

TEMP: Explain what these tests test and why

```
Give an example
```

## Deployment

Link: [Nebulous Enigma](https://nebulousenigma.com/)

We are running our website on a raspberry pi 5, using NodeJS with Nodemon and React with Vite.  We are using a CloudFlare tunnel to route traffic from our domain (nebulousenigma.com) to the Vite server running at the pi's localhost.  The CloudFlare tunnel also routes requests from the Vite server from the subdomain (api.nebulousenigma.com) to the Node server running at the pi's localhost.

## Built With

* [MongoDB](https://www.mongodb.com/) - The database used
* [Express](https://expressjs.com/) - Node.js web framework
* [React](https://react.dev/) - a client-side JavaScript framework
* [Node](https://nodejs.org/en) - the premier JavaScript web server

## Contributing

Please read [CONTRIBUTING.md](https://github.com/clw549/Nebulous-Enigma/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

TEMP: We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Collin Boyer** - *Initial work* - [Collin](https://github.com/ZenzeroBro)
* **Levi Ly** - *Initial work* - [Levi](https://github.com/levihly)
* **Ciaran Wham** - *Initial work* - [Ciaran](https://github.com/clw549)
* **Kayden Vicenti** - *Initial work* - [Kayden](https://github.com/kv422)
* **Kameron Napier** - *Initial work* - [Kameron](https://github.com/Kameron-Napier)
* **Isaac Schwarz** - *Initial work* - [Isaac](https://github.com/shantz14)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Templeting used [PurpleBooth] (https://github.com/PurpleBooth/a-good-readme-template/tree/main/.github)
