# ***Local development***
All the following scripts are stored on the package.json.

- dev: Webpack runs the project locally through the port 8080, aiming the production backend.
```
yarn dev
```
- build: Webpack loads all the resources and creates a *dist* folder, inside of this folder we have the same files than in production. (index.html, bundle.js ...)
```
yarn build
```
- test: Jest and testing-library execute all the *.spec.js files under /src folder
```
yarn test
```
- prettier: This command formats all jsx, js and scss files  under /src folder
```
yarn prettier
```
- test-coverage: Jest creates a coverage/ folder with the metric of the project coverage
```
yarn test-coverage
```