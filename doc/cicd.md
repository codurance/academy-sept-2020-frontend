# ***CI/CD***
`REMEMBER: To deploy the application it's necessary to have the infrastructure up (more info at AWS infrastructure point)`
There is a pipeline implemented with [GithubActions](https://github.com/features/actions). This action will be executed on each push to master. The action will install, run the linter, run the tests, create a build and automatically upload the build to our aws s3 bucket.
This action needs the following secrets:  
`The data to fill this secrets is stored in BitWarden (secure notes -> AllAboard)`
- REACT_APP_GOOGLE_OAUTH_ID
- AWS_S3_BUCKET
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION
