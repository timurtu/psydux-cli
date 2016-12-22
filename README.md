
# Psydux CLI

Command-line Interface for the [Psydux Framework](https://github.com/timurtu/psydux)

What does the Psydux CLI do?

- Scaffolds new Psydux applications
- Transpiles es2015 and es2016
- Bundles for production on file change
- Serves Psydux applications

## Install

```
npm install -g psydux-cli
```

## Create a new Psydux application

```
psydux my-app
```

## Start the development server

- `cd my-app` to change directories into the newly created Psydux application titled __my-app__.

- `psydux` to start the development server

- You can only start the Psydux development server when your current directory is a Psydux application's __root__ folder.

- If you make a change to a Psydux application's source code and save that change while the Psydux CLI development
server is running then the Psydux CLI will use [Webpack](https://webpack.github.io) to bundle a production ready application to __my-app/.psydux/dist__.
- You can make changes to the webpack configuration file included in the root directory if you need to. By default the
 webpack configuration will

  - Transpile ES6

  - Compile Sass (SCSS) and CSS

  - Load images and URLs

## Command-line arguments

### -port -p

- `psydux -port 8080` start up the development server at port 8080

- `psydux -p 3000` start up the development server at port 3000

### [Psydux Framework](https://github.com/timurtu/psydux)
### [Contributing](CONTRIBUTING.md)
