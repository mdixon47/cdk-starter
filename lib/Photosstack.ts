// Cross Stack Referencing

import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { CfnOutput, Fn } from "aws-cdk-lib";


export class PhotosStack extends cdk.Stack {
    private stackSuffix: string; // Add stackSuffix property
    public photosBucketArn: string

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.initializeSuffix();

        // Create the bucket and assign it to a variable
        const photosBucket = new Bucket(this, 'PhotoBucket2', {
        bucketName: `photos-bucket-${this.stackSuffix}`
        });
        // Assign the bucketArn to the photosBucketArn property  
        this.photosBucketArn = photosBucket.bucketArn; 

 
        
    }
    private initializeSuffix(){
        const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
        this.stackSuffix = Fn.select(4, Fn.split('-', shortStackId))
    }
}