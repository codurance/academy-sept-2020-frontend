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
- ## [Local instalation](./doc/local-installation.md)
- ## [Local development](./doc/local-development.md)
- ## [CI/CD](./doc/cicd.md)
- ## [AWS infrastructure (Provisioning and destroy)](./doc/infrastructure.md)
- ## FAQ

<br/>
<br/>
<br/>

## ***Tech stack***

- [React 16.14](https://reactjs.org/)
- [Webpack 5.5.1](https://webpack.js.org/)
- [Jest 26.6.3](https://jestjs.io/)
- [SCSS](https://sass-lang.com/)



<br/>
<br/>
<br/>

## ***FAQ***

- If you encounter issues with linter during git commit, execute the following:
  ```
  yarn prettier
  ```
  
 - make sure that the .env file is present/created in the root of the project  
 ```java
REACT_APP_GOOGLE_OAUTH_ID = '<GOOGLE_CLIENT_ID>'
REACT_APP_BACKEND_API_URL = '<BACKEND ENDPOINT>'
```
