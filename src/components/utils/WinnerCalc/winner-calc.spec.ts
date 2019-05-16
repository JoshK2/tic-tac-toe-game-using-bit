import { expect } from 'chai'
import 'mocha'
import winnerCalc from './winner-calc'

describe('Winner check function', () => {
    it('should return draw', () => {
        const matrix = [
            ['X', 'O', 'X'],
            ['O', 'X', 'O'],
            ['O', 'X', 'O']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 0, 0);
        expect(result).to.equal('-1');
    });
    it('should return no winner', () => {
        const matrix = [
            ['O', 'O', 'X'],
            ['X', 'X', ''],
            ['', '', '']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 0, 0);
        expect(result).to.equal('');
    });
});