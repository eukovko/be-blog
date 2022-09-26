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
  let {id} = event.pathParameters
  const idNum = parseInt(id)
  return repository.getCourseById(idNum);
}
