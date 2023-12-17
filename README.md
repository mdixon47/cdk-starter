# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template




## Resources:
### CDK Docs
https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html
### Lambda NodeJS Construct
https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
### CDK Coures Resources
https://github.com/alexhddev/CDK-course-resources/commit/a5ac5de75e43100f88064602c033ccf3d497101d

### CDK ChatGPT info on different levels of abstraction: 

TypeScript code examples for interacting with AWS S3 buckets at different levels of abstraction using the AWS SDK for JavaScript (AWS SDK for JavaScript in Node.js). Ensure you have the aws-sdk package installed before running the code:

```
npm install aws-sdk
```
### Low-level abstraction:

```
import { S3 } from 'aws-sdk';

function s3LowLevel(bucketName: string, key: string, data: string): void {
  const s3 = new S3();
  s3.putObject({ Bucket: bucketName, Key: key, Body: data }, (err, data) => {
    if (err) {
      console.error('Error uploading object:', err);
    } else {
      console.log('Object uploaded successfully:', data);
    }
  });
}

// Example usage
s3LowLevel('your_bucket_name', 'example_key.txt', 'Hello, AWS S3!');

```

### Mid-level abstraction:


```
import { S3 } from 'aws-sdk';

class S3MidLevel {
  private s3: S3;

  constructor(private bucketName: string) {
    this.s3 = new S3();
  }

  uploadObject(key: string, data: string): void {
    this.s3.putObject({ Bucket: this.bucketName, Key: key, Body: data }, (err, data) => {
      if (err) {
        console.error('Error uploading object:', err);
      } else {
        console.log('Object uploaded successfully:', data);
      }
    });
  }
}


// Example usage
const s3MidLevel = new S3MidLevel('your_bucket_name');
s3MidLevel.uploadObject('example_key.txt', 'Hello, AWS S3!');
```



### High-level abstraction:


```
import * as AWS from 'aws-sdk';
import * as fs from 'fs';

AWS.config.update({ region: 'your_region' }); // Replace 'your_region' with your AWS region


class S3HighLevel {
  private s3: AWS.S3;

  constructor(private bucketName: string) {
    this.s3 = new AWS.S3();
  }

  uploadObject(key: string, data: string): void {
    this.s3.upload({ Bucket: this.bucketName, Key: key, Body: data }, (err, data) => {
      if (err) {
        console.error('Error uploading object:', err);
      } else {
        console.log('Object uploaded successfully:', data);
      }
    });
  }
}

// Example usage
const s3HighLevel = new S3HighLevel('your_bucket_name');
s3HighLevel.uploadObject('example_key.txt', 'Hello, AWS S3!');

```

Replace placeholders like 'your_bucket_name' and 'your_region' with your actual AWS S3 bucket name and region. Choose the level of abstraction that best suits your needs.

### CloudFormation Parameters

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html

CloudFormation parameters allow you to provide input values that can be used throughout the template. This provides flexibility and reusability. There are a few different ways to provide parameter values:

- Specify default values in the template. These will be used unless overridden.

- Pass parameter values during stack creation/update using the AWS CLI or console.

- Reference values stored in AWS Systems Manager Parameter Store. This allows sharing parameters between stacks without dependencies.

- Use AWS-specific parameter types to select from lists of AWS values like VPC IDs, subnet IDs etc.

- Specify comma-delimited lists for parameters that require multiple values using the 
CommaDelimitedList type.

This allows dynamically configuring resources in the template based on the parameters provided. It is a best practice to make templates reusable by using parameters wherever hardcoded values are used.