import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import CourseRepository from "../../CourseRepositoryMock";

const getAllCourses = async () => {
  const repository = new CourseRepository()
  const courses = repository.getAllCourses();
  return formatJSONResponse({courses});
};

export const main = middyfy(getAllCourses);
