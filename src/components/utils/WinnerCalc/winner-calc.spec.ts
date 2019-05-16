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
    it('should return winner in horizontal first row', () => {
        const matrix = [
            ['O', 'O', 'O'],
            ['X', 'X', ''],
            ['X', '', '']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 0, 0);
        expect(result).to.equal('O');
    });
    it('should return winner in horizontal second row', () => {
        const matrix = [
            ['O', 'X', 'X'],
            ['O', 'O', 'O'],
            ['X', '', 'X']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 1, 2);
        expect(result).to.equal('O');
    });
    it('should return winner in horizontal third row', () => {
        const matrix = [
            ['O', 'X', 'X'],
            ['X', 'X', 'O'],
            ['O', 'O', 'O']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 2, 2);
        expect(result).to.equal('O');
    });
    it('should return winner in vertical fisrt row', () => {
        const matrix = [
            ['O', 'X', 'X'],
            ['O', 'X', 'O'],
            ['O', 'O', 'X']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 0, 0);
        expect(result).to.equal('O');
    });
    it('should return winner in vertical second row', () => {
        const matrix = [
            ['X', 'O', 'X'],
            ['X', 'O', 'O'],
            ['O', 'O', 'X']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 0, 1);
        expect(result).to.equal('O');
    });
    it('should return winner in vertical third row', () => {
        const matrix = [
            ['X', 'O', 'O'],
            ['X', 'X', 'O'],
            ['O', 'X', 'O']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 0, 2);
        expect(result).to.equal('O');
    });
    it('should return winner in diagonal top left - bottom right', () => {
        const matrix = [
            ['O', 'X', 'X'],
            ['X', 'O', 'O'],
            ['O', 'X', 'O']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 0, 0);
        expect(result).to.equal('O');
    });
    it('should return winner in diagonal top right - bottom left', () => {
        const matrix = [
            ['X', 'O', 'O'],
            ['X', 'O', 'X'],
            ['O', 'X', 'O']
        ];
        const result = winnerCalc(matrix, 3, 3, 3, 2, 0);
        expect(result).to.equal('O');
    });
});