import {initalizeBoard, convertFieldToIndex, convertIndexToField, Board, getFieldValue, updateScore}  from './board.js'

const realBoard : Board = initalizeBoard(6, [1,2,3], 1);
console.log(realBoard);

describe('testing for initializing the board', () => {
    it('build the deafult baord for a gven combination of given parameters', ()=> {
        expect(JSON.stringify(initalizeBoard(6, [1,2,3], 1))).toBe( JSON.stringify([
            [ 1, 2, 2, 3, 3, 3 ],
            [ 1, 2, 2, 3, 3, 3 ],
            [ 1, 1, 2, 2, 3, 3 ],
            [ 1, 1, 2, 2, 3, 3 ],
            [ 1, 1, 1, 2, 2, 3 ],
            [ 1, 1, 1, 2, 2, 3 ]
          ]))
    });

    it('build board for another given parameter', () =>{
        expect(JSON.stringify(initalizeBoard(6, [2,3,4], 1))).toBe(JSON.stringify(
            [
            [2,3,3,4,4,4],
            [2,3,3,4,4,4],
            [2,2,3,3,4,4],
            [2,2,3,3,4,4],
            [2,2,2,3,3,4],
            [2,2,2,3,3,4]
            ]
    ))
    })
});

describe('testting string field to index comversion', () => {
    it('test a6', () => {
        expect(JSON.stringify(convertFieldToIndex('a6'))).toBe(JSON.stringify([0, 0]));
    });
    it('test d3', () => {
        expect(JSON.stringify(convertFieldToIndex('d3'))).toBe(JSON.stringify([3,3]));
    });
    it('test f6', () => {
        expect(JSON.stringify(convertFieldToIndex('f6'))).toBe(JSON.stringify([0,5]));
    });
    it('test f1', () => {
        expect(JSON.stringify(convertFieldToIndex('f1'))).toBe(JSON.stringify([5,5]));
    });
    it('test e5', () => {
        expect(JSON.stringify(convertFieldToIndex('e5'))).toBe(JSON.stringify([1,4]));
    });
});

describe('testing indePair to string field function', () => {
    it('test [0,0]', () => {
        expect(JSON.stringify(convertIndexToField([0,0]))).toBe(JSON.stringify('a6'))
    });

    it('test [3,3]', () => {
        expect(JSON.stringify(convertIndexToField([3,3]))).toBe(JSON.stringify('d3'));
    });

    it('test [0,5]', () => {
        expect(JSON.stringify(convertIndexToField([0,5]))).toBe(JSON.stringify('f6'));
    })
});

describe('testing the getField function', () => {
    it('with [0,0]', () => {
        expect(getFieldValue([0,0], realBoard)).toBe(1);
    });
    it('with [5,5]', () => {
        expect(getFieldValue([5,5], realBoard)).toBe(3);
    });

    it('with [5,5]', () => {
        expect(getFieldValue([0,5], realBoard)).toBe(3);
    });
});

describe('testing the update score function', ()=> {
    it('some', () => {
        expect(updateScore(realBoard, 'b5', 3)).toBe(6)
    });
});
