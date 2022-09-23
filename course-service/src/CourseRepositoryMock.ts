import Course from "./Course";

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
        return CourseRepository.courses[id];
    }
    getAllCourses() {
        return CourseRepository.courses
    }
}