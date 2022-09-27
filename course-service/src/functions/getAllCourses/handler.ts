import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';
import {allCapacity, allCourses} from "../../CourseRepository";
import Course from "../../Course";

const getAllCourses = async () => {
  const coursesData = await allCourses();
  const capacities = await allCapacity();
  const courses = []
  let length = coursesData.length;
  for (let i = 0; i < length; i++) {
    let courseData = coursesData[i];
    let capacity = capacities[i]
    const course = new Course(courseData.title, courseData.description, courseData.price, capacity.places_left)
    courses.push(course)
  }
  return formatJSONResponse({courses});
};

export const main = middyfy(getAllCourses);
