import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

async function getResult() {
  return await dynamo.scan({TableName: "courses"}).promise()
}

const getAllCourses = async () => {
  const courses = await getResult();
  return formatJSONResponse({courses});
};

export const main = middyfy(getAllCourses);
