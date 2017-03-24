# VisualizationG6 [![Join the chat at https://gitter.im/MusicConnectionMachine/VisualizationG6](https://badges.gitter.im/MusicConnectionMachine/VisualizationG6.svg)](https://gitter.im/MusicConnectionMachine/VisualizationG6?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)[![Build Status](https://travis-ci.org/MusicConnectionMachine/VisualizationG6.svg?branch=master)](https://travis-ci.org/MusicConnectionMachine/VisualizationG6)


In this repository we will build a visualization of the other teams aggregated data

## Demo

You can checkout the project throughout the development phase [here](http://visualization-g6.surge.sh/).

## Run Project

If everything is on track, in the project directory, run `yarn start`. This should start the webpack-dev-server and you should see the landing page with search bar when you browse to `http://localhost:8080`.

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

### Docker

Docker is a virtualisation suit for servers. We use it to run Elasticsearch. Docker will automatically pull the latest image of Elasticsearch from their website and run it inside a virtual linux server. The **elastic-data** directory will be mounted inside this container, to make the data persistent.

You have to install the [Community Edition of Docker](https://store.docker.com/search?type=edition&offering=community) for your operating sytem.

Troubleshooting on Windows: If Virtualization is enabled, but wont work, try to [disable & enable Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v).

###### Additional Licences

All photos used in this project are licenced under the **_Creative Commons Zero (CC0) license._**
