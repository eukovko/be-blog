import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import {APIGatewayProxyEvent} from "aws-lambda";
import {createAllCourses} from "../../CourseRepository";
import Course from "../../Course";

const createCourses = async (event: APIGatewayProxyEvent) => {
  console.log(event.body);
  const data = JSON.stringify(event.body)
  const course: Course[] = JSON.parse(data)
  const result = await createAllCourses(course)
  console.log(result);
  return formatJSONResponse({result});
};

export const main = middyfy(createCourses);
