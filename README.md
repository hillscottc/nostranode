[![Build Status](https://travis-ci.org/hillscottc/nostranode.svg)](https://travis-ci.org/hillscottc/nostranode)[![Coverage Status](https://coveralls.io/repos/hillscottc/nostranode/badge.svg?branch=master&service=github)](https://coveralls.io/github/hillscottc/nostranode?branch=master)

# nostranode
A Node+Express app for displaying fortunes. 
Serves as a web front-end for the [nostra](https://www.npmjs.com/package/nostra) npm module.



## Install:

    $ npm install

## Run:

Use `npm start` to run the app, with a temporary env variable of `DEBUG=nostranode:*`, set according to your system.

On MacOS or Linux:

    $ DEBUG=nostranode:* npm start

On Windows:

    > set DEBUG=nostranode:* & npm start

    
## Docker Building
The app can also be run as a virtualized Docker container.

Build:

    $ docker build -t hillscottc/nostranode .

Run:

    $ docker run -d -P hillscottc/nostranode
    $ docker ps    

The `PORTS` column shows what local port to hit with your browser to see the app running. It will be something like `0.0.0.0:32772`.

