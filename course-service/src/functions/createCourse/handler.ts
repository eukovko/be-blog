import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import {APIGatewayProxyEvent} from "aws-lambda";
import {createCourse} from "../../CourseRepository";

const getCourseById = async (event: APIGatewayProxyEvent) => {
  const course = JSON.parse(event.body)
  const result = await createCourse(course)
  console.log(result);
  return formatJSONResponse({result});
};

export const main = middyfy(getCourseById);
