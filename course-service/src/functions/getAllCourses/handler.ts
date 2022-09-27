import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.COURSE_TABLE_NAME

async function getResult() {
  return await dynamo.scan({TableName: tableName}).promise()
}

const getAllCourses = async () => {
  const courses = await getResult();
  return formatJSONResponse({courses});
};

export const main = middyfy(getAllCourses);
