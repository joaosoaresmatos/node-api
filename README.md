# Node API

## Requirements

For development, you willneed Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on mac OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it. Or install via package manager [Chocolatey](https://chocolatey.org/) with the following command on admin PowerShell.

    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

    cinst nodejs
    # or for full install with npm
    cinst nodejs.install

---

## Install

    git clone https://github.com/ORG/PROJECT.git
    cd PROJECT

In this project we will be used [Express](https://expressjs.com/) as micro framework to help us with routes and views.

    npm init -y
    npm install express

### Configure app

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

- backend api
- oauth like endpoint for auth
- development

## Start & watch

To start a server API

    npm server.js

But if you have changes after start you shoud be restart server everytime. You can restart automaticaly, if use Nodemon. To install and add in the development dependencies use:

    npm install -D nodemon

## Simple build for production

    npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    git pull
    npm prune
    npm install

To run those 3 commands you can just do

    npm run pull

**Note:** Unix user can just link the `git-hooks/post-merge`:

## Enable git hooks (unix only :/)

    npm run create-hook-symlinks

### `post-merge` (≃ `npm install`)

This hook will `npm prune && npm install` each time you `git pull` something if the `package.json` has been modified.

### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` & eventually reinstall missings/not correctly removed packages.
Then it will try a production build.

---

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.

### JavaScript

- [JSHint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [JSCS](https://npmjs.org/package/jscs) is used to check coding conventions.
- [Browserify](http://browserify.org/) to handle allow us to write our client-side scripts with [es6 syntax](http://es6.github.io/) thanks to [es6ify](https://github.com/thlorenz/es6ify).
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [cssnext](http://cssnext.putaindecode.io) is used to write futureproof CSS for CSS vendor prefix under the hood).

_Autoprefixer_ is included and use [caniuse.com](http://caniuse.com/) database to avoid outdated prefixes. _You can forget CSS prefixes NOW._

### Mongo DB

In this project we used a [MongoDB](https://www.mongodb.com/) as database. To install we used [Docker](https://www.docker.com/). After install docker, ou can install mongo with:

    docker pull mongo

    docker run --name mongodb -p 27017:27017 -d mongo

if you use a Windows Home and docker toolkit the IP is [192.168.99.100](192.168.99.100) to access the docker containers via IP. You can test is the mongo is work with click here [http://192.168.99.100:27017/](http://192.168.99.100:27017/).

I use [mongoose](https://mongoosejs.com/docs/api.html) as ORM.

## Auxiliary Softwares

### Robo 3T

[Robo 3T](https://robomongo.org/) is a interface to view the mongo database schema. You can conect with your database with your mongo instaced in docker.
