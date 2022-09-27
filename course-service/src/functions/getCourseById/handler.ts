import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import Course from "../../Course";
import {capacityById, courseById} from "../../CourseRepository";


const getCourseById = async (event) => {
  const {id} = event.pathParameters
  const numericId = parseInt(id)
  const courseData = await courseById(numericId);
  const capacity = await capacityById(numericId)
  const course = new Course(courseData.title, courseData.desciption, courseData.price, capacity.places_left)
  console.log(courseData);
  console.log(capacity)
  return formatJSONResponse({course});
};

export const main = middyfy(getCourseById);

