//This is the custom Error class that extends the in-build Error class
class AppError extends Error {
    constructor(message, status) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = AppError;