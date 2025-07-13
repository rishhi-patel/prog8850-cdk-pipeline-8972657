import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as s3 from "aws-cdk-lib/aws-s3"
import * as lambda from "aws-cdk-lib/aws-lambda"
import * as dynamodb from "aws-cdk-lib/aws-dynamodb"

export class Prog8850CdkPipeline8972657Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // S3 Bucket
    const myBucket = new s3.Bucket(this, "Prog8850Bucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    // Lambda Function
    const myLambda = new lambda.Function(this, "Prog8850Lambda", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log("Lambda Triggered");
          return { statusCode: 200, body: 'Hello, updated World!' };
        }
      `),
      environment: {
        BUCKET_NAME: myBucket.bucketName,
      },
    })

    // DynamoDB Table
    const myTable = new dynamodb.Table(this, "Prog8850Table", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
      tableName: "Prog8850Table",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })
  }
}
