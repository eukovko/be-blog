import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';
import {APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEvent, APIGatewayProxyEventBase} from "aws-lambda";

import CourseRepository from "../../CourseRepositoryMock";
import ApiError from "../../ApiError";

const getAllCourses = async (event: APIGatewayProxyEvent) => {
  let course
  try {
    course = getResult(event);
  } catch (e) {
    let error = (<ApiError>e)
    return formatJSONResponse({error}, error.code);
  }
  return formatJSONResponse({course});
};

export const main = middyfy(getAllCourses);

function getResult(event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>) {
  const repository = new CourseRepository()
  let {id} = event.pathParameters
  const idNum = parseInt(id)
  return repository.getCourseById(idNum);
}
