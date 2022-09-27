import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";

const AWS = require("aws-sdk");
const dynamo: DocumentClient  = new AWS.DynamoDB.DocumentClient();

const getAllCourses = async (event) => {
  let {id} = event.pathParameters
  const idNum = parseInt(id)
  const params = {
    TableName: "courses",
    Key: {
      id: idNum}
  }
  let course  = await dynamo.get(params).promise()
      .then(data => data.Item);
  console.log(course);
  return formatJSONResponse({course});
};

export const main = middyfy(getAllCourses);

