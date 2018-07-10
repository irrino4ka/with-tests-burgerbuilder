import sum from './sum';

describe('test sum', () => {
    it('should add two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should concat symbols', () => {
        expect(sum('a', 'b')).toEqual('ab');
        expect(sum('a', '-b')).toEqual('a-b');
    })
})