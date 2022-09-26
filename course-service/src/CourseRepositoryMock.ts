import Course from "./Course";
import ApiError from "./ApiError";

export default class CourseRepository {

    static courses: Course[] = [
        new Course("Java 8"),
        new Course("Java For Beginners"),
        new Course("C#/Unity"),
        new Course("AWS"),
        new Course("SQL"),
        new Course("Algorithms")
    ]

    getCourseById(id: number) {
        if (id < 0 || id >= CourseRepository.courses.length) {
            throw new ApiError("Course not found", 404)
        } else {
            return CourseRepository.courses[id];
        }
    }
    getAllCourses() {
        return CourseRepository.courses
    }
}