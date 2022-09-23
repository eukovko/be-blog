import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyEvent } from "aws-lambda";

import CourseRepository from "../../CourseRepositoryMock";

const getAllCourses = async (event: APIGatewayProxyEvent) => {
  const repository = new CourseRepository()
  const { idParam }  = event.pathParameters
  const id = parseInt(idParam)
  const course = repository.getCourseById(id);
  return formatJSONResponse({course});
};

export const main = middyfy(getAllCourses);
