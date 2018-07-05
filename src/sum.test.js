import sum from './sum';

describe('test sum', () => {
    it('should add two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });
})