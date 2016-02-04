
# NPM Starter Kit

Run your development environment with npm. All that you need to run modern development environment without Gulp, Grunt or any other task runner. Stylus, Wepback, Jade, Browsersync, Watch and option to use Express on top of Node and Mongodb as a server and REST Api.

Minimal amount of dependencies, simple setup and ready made assets and best practices to make getting started easy as possible. You only need Node.js and NPM.

## What's included

**Stylus** as CSS preprocessor and a set of BEM modifier classes to controll type, grids, margins, paddings and a lot more.
**Webpack** as JavaScript bundler and some cool scripts like loadCSS and loadJS.
**Jade** as HTML preprocessor. And the jade files work out of the box with node express or without it.
**Browsersync** to livereload when css, js or html update with the help of **Watch**
**JSHint & Stylint** out of the box configured to keep your code clean.
**Express on top of Node and Mongodb** if you need a backend service and REST Api to develop something more dynamic.

## Getting started

### Get up and running

First make sure that you have Node and NPM installed by running:

```
$ node -v
```

If not, go to [https://nodejs.org/en/](https://nodejs.org/en/) and follow instructions. If you are technically advanced, install Node through Node Version Manager (nvm) by following these instructions: [https://github.com/creationix/nvm](https://github.com/creationix/nvm). I have developed this kit with Node 0.12.4 and npm 2.10.1.

Now, clone the repository by:

```
$ git clone git@github.com:kankamik/npm-starter-kit.git
```

or download the .zip at [https://github.com/kankamik/npm-starter-kit](https://github.com/kankamik/npm-starter-kit) and extract it somewhere on your disk.

Open Terminal or your choice of accessing command line and go to the place you cloned/extracted the kit and run:

```
$ npm install
```

If you want to install dependencies without node express and Mongodb, type:

```
$ npm install --production
```

If everything was installed without a problem, just type:

```
$ npm run start
```

You should see a lot things happening on the  command line and a page opened in your browser. What this does is that it compiles initial CSS, JavaScript and HTML files, starts watching changes on same assets and starts Browsersync to serve them to your browser.

### Basic principles of development

...work in progress

### Running the server and REST api

#### Start mongo

If you haven't installed mongo, I suggest you go to [https://docs.mongodb.org/getting-started/shell/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.org/getting-started/shell/tutorial/install-mongodb-on-os-x/) and just follow the instructions.

Once installed you need to first start the mongo service. I make assumption that your **databases** are found from:

```
/data/db
```

at root. You can double check this by typing in terminal:

```
$ cd /
$ cd data/db
```

If those folders were not found, verify that you followed the installing instructions. To start the mongo service, run:

```
$ mongod --dbpath /data/db --fork --logpath /dev/null
```

As a side tip, if you need to stop the mogod service, run:

```
$ mongo admin --eval 'db.shutdownServer()' > /dev/null
```

And if you want ot verfiy it's running, type:

```
$ ps -ef | grep mongo
```

You should see **something** reminding this:

```
0:21.77 mongod
```

Now you can start the mongodb which is the actual database listening your connections. Type:

```
$ mongo
```

If you see a output that looks somewhat like this:

```
MongoDB shell version: 2.4.4
connecting to: test
Server has startup warnings:
Mon Oct  7 20:40:35.209 [initandlisten]
Mon Oct  7 20:40:35.209 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
>
```

everything should be fine.

#### Start the node.js server

Now that the mongodb is running, open a new tab or a window in terminal and go to your projects root. Type

```
$ npm run server:sync
```

This starts the node express server, watch tasks and browsersync proxy so that browsers is livereloaded when something changes. Now you are ready to start working with node express and mongodb.

The node express server is found from:

```
./express.server.js
```

and the routes (methods) berforming logic from:

```
./express.router.js
```

The actual boot is in

```
./bin/www
```

if you need to update it. In **express.server.js** you can configure mongodb, source is commented and the **express.routes.js** contains commented examples how the started with mongodb read/write tasks.

