#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemocicdStack } from '../lib/democicd-stack';

const app = new cdk.App();
new DemocicdStack(app, 'DemocicdStack', {
  env: { account: '030645697433', region: 'ap-southeast-2' }
});