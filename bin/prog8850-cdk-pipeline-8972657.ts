#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Prog8850CdkPipeline8972657Stack } from '../lib/prog8850-cdk-pipeline-8972657-stack';

const app = new cdk.App();
new Prog8850CdkPipeline8972657Stack(app, 'Prog8850CdkPipeline8972657Stack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});