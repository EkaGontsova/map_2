class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [100, 'Continue'],
            [101, 'Switching Protocols'],
            [200, 'OK'],
            [201, 'Created'],
            [204, 'No Content'],
            [400, 'Bad Request'],
            [401, 'Unauthorized'],
            [403, 'Forbidden'],
            [404, 'Not Found'],
            [500, 'Internal Server Error'],
            [501, 'Not Implemented'],
            [502, 'Bad Gateway'],
            [503, 'Service Unavailable'],
        ]);
    }

    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }
}

module.exports = ErrorRepository;

const errorRepo = new ErrorRepository();
console.log(errorRepo.translate(200)); 
console.log(errorRepo.translate(999)); 