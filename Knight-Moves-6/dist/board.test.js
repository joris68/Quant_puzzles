"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_js_1 = require("./board.js");
describe('testing for initializing the board', () => {
    it('build the deafult baord for a gven combination of given parameters', () => {
        expect(JSON.stringify((0, board_js_1.initalizeBoard)(6, [1, 2, 3], 1))).toBe(JSON.stringify([
            [1, 2, 2, 3, 3, 3],
            [1, 2, 2, 3, 3, 3],
            [1, 1, 2, 2, 3, 3],
            [1, 1, 2, 2, 3, 3],
            [1, 1, 1, 2, 2, 3],
            [1, 1, 1, 2, 2, 3]
        ]));
    });
    it('build board for another given parameter', () => {
        expect(JSON.stringify((0, board_js_1.initalizeBoard)(6, [2, 3, 4], 1))).toBe(JSON.stringify([
            [2, 3, 3, 4, 4, 4],
            [2, 3, 3, 4, 4, 4],
            [2, 2, 3, 3, 4, 4],
            [2, 2, 3, 3, 4, 4],
            [2, 2, 2, 3, 3, 4],
            [2, 2, 2, 3, 3, 4]
        ]));
    });
});
describe('testting string field to index comversion', () => {
    it('test a6', () => {
        expect(JSON.stringify((0, board_js_1.convertFieldToIndex)('a6'))).toBe(JSON.stringify([0, 0]));
    });
    it('test d3', () => {
        expect(JSON.stringify((0, board_js_1.convertFieldToIndex)('d3'))).toBe(JSON.stringify([3, 3]));
    });
    it('test f6', () => {
        expect(JSON.stringify((0, board_js_1.convertFieldToIndex)('f6'))).toBe(JSON.stringify([0, 5]));
    });
    it('test f1', () => {
        expect(JSON.stringify((0, board_js_1.convertFieldToIndex)('f1'))).toBe(JSON.stringify([5, 5]));
    });
    it('test e5', () => {
        expect(JSON.stringify((0, board_js_1.convertFieldToIndex)('e5'))).toBe(JSON.stringify([1, 4]));
    });
});
describe('testing indePair to string field function', () => {
    it('test [0,0]', () => {
        expect(JSON.stringify((0, board_js_1.convertIndexToField)([0, 0]))).toBe(JSON.stringify('a6'));
    });
    it('test [3,3]', () => {
        expect(JSON.stringify((0, board_js_1.convertIndexToField)([3, 3]))).toBe(JSON.stringify('d3'));
    });
    it('test [0,5]', () => {
        expect(JSON.stringify((0, board_js_1.convertIndexToField)([0, 5]))).toBe(JSON.stringify('f6'));
    });
});
