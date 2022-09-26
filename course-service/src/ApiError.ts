class ApiError {
    message: String
    code: number

    constructor(message: String, error: number) {
        this.message = message;
        this.code = error;
    }
}

export default ApiError