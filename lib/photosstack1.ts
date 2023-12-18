import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib';
import { Bucket } from "aws-cdk-lib/aws-s3";

export class PhotosStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Update the bucket name to your desired value lowercase values only
        new Bucket(this, 'PhotosBucket', {
            bucketName: 'photosbucket-22378532', // Change this to your desired bucket name
        });
    }
}
