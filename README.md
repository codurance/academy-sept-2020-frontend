# All Aboard Frontend Documentation

Front end of All Aboard application. This is the final project for the September-December 2020 academy. The project is a platform to learn ....  
[Deploy link](http://all-aboard-fe.s3-website.eu-west-2.amazonaws.com/)

***Developed by:***
- Fabio D'Amico [![GitHub Fabio](https://img.shields.io/github/followers/fdamico?label=follow&style=social)](https://github.com/fdamico)
- Ignacio Saporiti [![GitHub Ignacio](https://img.shields.io/github/followers/isaporiti?label=follow&style=social)](https://github.com/isaporiti)
- Maciej Durkiewicz [![GitHub Maciej](https://img.shields.io/github/followers/MaWoDu?label=follow&style=social)](https://github.com/MaWoDu)
- Martín García Blanco [![GitHub Martin](https://img.shields.io/github/followers/martin-garcia-blanco?label=follow&style=social)](https://github.com/martin-garcia-blanco)

<br/>
<br/>
<br/>


# Index
- ## Tech stack
- ## Local instalation
- ## Local development
- ## CI/CD
- ## AWS infrastructure (Provisioning and destroy)
- ## FAQ

<br/>
<br/>
<br/>

## ***Tech stack***

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
- [SCSS](https://sass-lang.com/)

## ***Local installation***

- Clone the repository.
```
git clone https://github.com/codurance/all-aboard-frontend
```
- Move inside of the folder all-aboard-frontend.
```
cd all-aboard-frontend
```
- Install the dependencies.  
 Since the beggining we always worked with yarn so we encouraged you to continue using it.
 ```
 yarn install
 ```
- You will need to manually add .env to root folder. The information of the .env is stored in BitWarden (secure notes -> AllAboard). The .env file will have to contain REACT_APP_GOOGLE_OAUTH_ID='<your-id>' property, this will allow you to run authentication locally.
   You will also need this property set in the github secrets.
<br/>
<br/>
<br/>

## ***Local development***
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

<br/>
<br/>
<br/>

## ***CI/CD***
`REMEMBER: To deploy the application it's necessary to have the infrastructure up (more info at AWS infrastructure point)`
There is a pipeline implemented with [GithubActions](https://github.com/features/actions). This action will be executed on each push to master. The action will install, run the linter, run the tests, create a build and automatically upload the build to our aws s3 bucket.
This action needs the following secrets:  
`The data to fill this secrets is stored in BitWarden (secure notes -> AllAboard)`
- REACT_APP_GOOGLE_OAUTH_ID
- AWS_S3_BUCKET
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION


<br/>
<br/>
<br/>

## ***AWS infrastructure (Provisioning and destroy)***
There are 2 different [GithubActions](https://github.com/features/actions), the first one is the provisioning action and the second one the destroy action.

- ***Provisioning:*** this action will automatically create and configure an AWS S3 bucket and configure it to work as a static web site
  - Necessary secrets:   
  `Information stored in BitWarden (secure notes -> AllAboard)`
    - AWS_ACCESS_KEY_ID 
    - AWS_SECRET_ACCESS_KEY 
    - AWS_REGION
  - Github action steps: 
    - Create S3 Bucket
    - Configure Web hosting
    - Configure access control
    - Put S3 Policy

- ***Destroy:*** this action will automatically remove the content of the S3 bucket and delete it permanently.

<br/>
<br/>
<br/>

## ***FAQ***

- If you encounter issues with linter during git commit, execute the following:
  ```
  yarn prettier
  ```
