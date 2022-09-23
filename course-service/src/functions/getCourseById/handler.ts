import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';
import {APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEvent, APIGatewayProxyEventBase} from "aws-lambda";

import CourseRepository from "../../CourseRepositoryMock";

const getAllCourses = async (event: APIGatewayProxyEvent) => {
  const course = getResult(event);
  return formatJSONResponse({course});
};

export const main = middyfy(getAllCourses);

function getResult(event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>) {
  const repository = new CourseRepository()
  const {idParam} = event.pathParameters
  const id = parseInt(idParam)
  return repository.getCourseById(id);
}
