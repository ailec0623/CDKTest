#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebStack } from '../lib/app';

const app = new cdk.App();
new WebStack(app, 'WebStack', {});