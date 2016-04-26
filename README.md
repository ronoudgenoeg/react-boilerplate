# React boilerplate

## A boilerplate to start developing react apps faster.

### Install

```
git clone git@github.com:ronoudgenoeg/react-boilerplate.git
git remote set-url origin git@github.com:username/repositoryname.git
git push -u origin master
```
Replace username and repositoryname with your own.

### Usage

Commands:

`` npm run dev `` Starts the development server. Go to localhost:3000 to develop

`` npm run build `` Runs eslint, all tests and builds the distribution file

`` npm run lint `` Runs eslint

`` npm run test `` Runs the tests and generates a coverage report


To run the distribution file copy dist/app.min.js file to your application, or use composer component installer.

Start writing react code in src/containers/app.js

### Notes

* Uses ecmascript 6 via babel
* Uses ramda to ensure immutable objects
* Uses redux
* Uses react hot reloading to speed up development significantly

