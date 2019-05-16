import { expect } from 'chai'
import 'mocha'
import haveEmptyCell from './have-empty-cell'

describe('haveEmptyCell cell function', () => {
    it('should return false', () => {
        const matrix = [
            ['X', 'O', 'X'],
            ['O', 'X', 'O'],
            ['O', 'X', 'O']
        ];
        const result = haveEmptyCell(matrix, 3, 3);
        expect(result).to.equal(false);
    });
    it('should return true', () => {
        const matrix = [
            ['O', 'O', 'X'],
            ['X', 'X', ''],
            ['', '', '']
        ];
        const result = haveEmptyCell(matrix, 3, 3);
        expect(result).to.equal(true);
    });
});