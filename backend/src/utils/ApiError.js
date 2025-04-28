class ApiError extends Error{
    constructor(statusCode = 500, msg = "Something went wrong") {
        super(msg);
        this.statusCode = statusCode;
        this.message = msg;

    }
}

module.exports = ApiError;