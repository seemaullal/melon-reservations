# Melon Reservation Scheduler

This project allows you to make and manage melon tasting reservations. 🍉

## Prerequisites

This assumes you are running the application on a Unix based operating system.
For other operating system, you will need to install Python3 and Yarn to run
the project.

### Homebrew

```shell
/usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Python3

```shell
brew install python3
```

Node

```shell
brew install node
```

Yarn

```shell
npm install --global yarn
```

## Setup

### Javascript

Run `yarn install` to install Javascript dependencies.

### Python

The first time you run this project, create a Python virtual environment
using `python3 -m venv env`.

Each time you want to run the server, activate the virtual environment
with `source env/bin/activate`. Then install dependencies using
`pip3 install requirements.txt`.

## Local development

In separate terminal tabs, run:

```shell
yarn js-start
yarn py-start
```

Open [http://localhost:3000](http://localhost:3000) to view
the application in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `yarn js-start`

Runs the frontend in development mode.

### `yarn py-start`

Runs the Python server. Make sure you follow the setup instructions
to install the backend dependencies before running this.

### `yarn build`

Builds the app for production to the `build` folder.\
It bundles React in production mode and optimizes the build
for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment

This will be updated later
