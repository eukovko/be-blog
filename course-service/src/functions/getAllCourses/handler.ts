import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import CourseRepository from "../../CourseRepositoryMock";

const getAllCourses = async () => {
  function getResult() {
    const repository = new CourseRepository()
    return repository.getAllCourses();
  }

  const courses = getResult();
  return formatJSONResponse({courses});
};

export const main = middyfy(getAllCourses);
