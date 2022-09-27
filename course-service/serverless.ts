import type {AWS} from '@serverless/typescript';

import getAllCourses from '@functions/getAllCourses';
import getCourseById from '@functions/getCourseById';
import createCourse from "@functions/createCourse";

const serverlessConfiguration: AWS = {
    service: 'course-service',
    frameworkVersion: '3',
    plugins: ['serverless-esbuild'],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'eu-west-1',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
            COURSE_TABLE_NAME: "courses",
            CAPACITY_TABLE_NAME: "capacity",
        },
        iam: {
            role: {
                statements: [
                    {
                        Effect: "Allow",
                        Action: [
                            "dynamodb:DescribeTable",
                            "dynamodb:Query",
                            "dynamodb:Scan",
                            "dynamodb:GetItem",
                            "dynamodb:PutItem",
                            "dynamodb:UpdateItem",
                            "dynamodb:DeleteItem",
                        ],
                        Resource: "arn:aws:dynamodb:eu-west-1:400502372718:table/*",
                    },
                ]
            }
        },
    },
    // import the function via paths
    functions: {getAllCourses, getCourseById, createCourse},
    package: {individually: true},
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ['aws-sdk'],
            target: 'node14',
            define: {'require.resolve': undefined},
            platform: 'node',
            concurrency: 10,
        },
    },
    resources: {
        Resources: {
            courses: {
                Type: "AWS::DynamoDB::Table",
                Properties: {
                    TableName: "courses",
                    AttributeDefinitions: [
                        {AttributeName: "id", AttributeType: "N"},
                    ],
                    KeySchema: [
                        {AttributeName: "id", KeyType: "HASH"},
                    ],
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 1,
                        WriteCapacityUnits: 1,
                    }
                }
            },
            capacity: {
                Type: "AWS::DynamoDB::Table",
                Properties: {
                    TableName: "capacity",
                    AttributeDefinitions: [
                        {AttributeName: "id", AttributeType: "N"},
                    ],
                    KeySchema: [
                        {AttributeName: "id", KeyType: "HASH"},
                    ],
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 1,
                        WriteCapacityUnits: 1,
                    }
                }
            }
        }
    }
};

module.exports = serverlessConfiguration;
