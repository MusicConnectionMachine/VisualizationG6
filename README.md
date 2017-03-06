# VisualizationG6 [![Join the chat at https://gitter.im/MusicConnectionMachine/VisualizationG6](https://badges.gitter.im/MusicConnectionMachine/VisualizationG6.svg)](https://gitter.im/MusicConnectionMachine/VisualizationG6?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


In this repository we will build a visualization of the other teams aggregated data


## Setup

In order get the project running, we need to some tools to be installed.

### node.js 6+

Project is setup using node v6.9.1 but probably anything above node 4 will suffice. If you don't have node, you can install it **globally** either using [nvm](https://github.com/creationix/nvm) OR you can follow the steps on [node website](https://nodejs.org/en/). For macOS, [homebrew](https://brew.sh/) could be used.

### Yarn

Yarn is a package manager that will help us install all the tools and dependencies to our project. Install yarn **globally** following the steps on [Yarn website](https://yarnpkg.com/en/) according to your OS.

#### Global Installs

When Yarn is up and running run the following global installs from the terminal.

```
yarn global add webpack@v2.1.0-beta.25
yarn global add standard@v8.4.0
```

#### Yarn Installs

Clone the repo/checkout the branch where the project setup is. In the terminal, navigate to the project directory, and run `yarn`. All the dependencies should then be installed.

If everything is on track, in the project directory, run `yarn start`. This should start the webpack-dev-server and you should see the initial page with **Hello World** when you browse to http://localhost:8080

