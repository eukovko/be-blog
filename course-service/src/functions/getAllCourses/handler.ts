import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import CourseRepository from "../../CourseRepositoryMock";
import AsyncWorker from "../../AsyncWorker";

function getResult() {
  AsyncWorker.doWork()
  const repository = new CourseRepository()
  return repository.getAllCourses();
}

const getAllCourses = async () => {
  const courses = getResult();
  return formatJSONResponse({courses});
};

export const main = middyfy(getAllCourses);
