const ErrorRepository = require('../app.js');

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('should return error description for known error code 200', () => {
        expect(errorRepo.translate(200)).toBe('OK');
    });

    test('should return error description for known error code 404', () => {
        expect(errorRepo.translate(404)).toBe('Not Found');
    });

    test('should return error description for known error code 500', () => {
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
    });

    test('should return "Unknown error" for unknown error code 999', () => {
        expect(errorRepo.translate(999)).toBe('Unknown error');
    });

    test('should return "Unknown error" for negative error code -1', () => {
        expect(errorRepo.translate(-1)).toBe('Unknown error');
    });

    test('should return "Unknown error" for non-integer error code "abc"', () => {
        expect(errorRepo.translate('abc')).toBe('Unknown error');
    });
});