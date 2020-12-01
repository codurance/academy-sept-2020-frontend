# Steps to create CI/CD pipeline

- [Deploy link](http://all-aboard-fe.s3-website.eu-west-2.amazonaws.com/)
- We will use the Github action that is on the folder, for this action we need
  - AWS_S3_BUCKET
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - AWS_REGION
  - SOURCE_DIR folder with the react build
- [AWS logging site](https://codurance-sso.awsapps.com/start/)
- All the steps have been done with playground-admin role
- **_Generating a S3 bucket_**
  - Create a new one
  - Properties:
    - Static website hosting: enable
    - Hosting type: Host a static website
    - Index document: index.html
    - Error document: index.html
  - Permissions
    - Block public access (bucket settings), uncheck all
    - Bucket policy
    ```{
        "Version": "2012-10-17",
        "Id": "Policy1589379388716",
        "Statement": [
            {
            "Sid": "Stmt1589379372331",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource":     "arn:aws:s3:::academy-september-2020-frontend/*"
            }
        ]
        }
    ```
  - Access points
    - We need and access point with properties
    ```
    Name         Network origin        Access
    frontend        internet      Objects can be public
    ```
- **_Creating the key_**
  - [AWS Key Managment Service](https://eu-west-2.console.aws.amazon.com/kms/home?region=eu-west-2#/kms/home)
  - We need to save the Access key ID and Secret access key, there is a folder in BitWarden with this credentials.
- **_Setting up de GithubAction_**
  - This project uses this [custom action](https://github.com/marketplace/actions/react-deploy-to-s3)
  - Wee need to store these 3 secrets
    - AWS_ACCESS_KEY_ID
    - AWS_S3_BUCKET (just the name, without the arn...)
    - AWS_SECRET_ACCESS_KEY

# Local Development

- You can run the application locally by running
  `yarn dev`
- You will need to manually add .env to root folder.
  ```
  .env file will have to contain REACT_APP_GOOGLE_OAUTH_ID='<your-id>' property, this will allow you to run authentication locally.
   You will also need this property set in the github secrets.
  ```
- If you encounter issues with linter during git commit, execute the following:
  `yarn prettier`
