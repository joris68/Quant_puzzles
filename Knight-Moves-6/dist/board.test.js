"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_js_1 = require("./board.js");
describe('testing for initializing the board', () => {
    it('build the deafult baord for a gven combination of given parameters', () => {
        expect(JSON.stringify((0, board_js_1.initalizeBoard)(6, [1, 2, 4], 1))).toBe(JSON.stringify([
            [1, 2, 2, 3, 3, 3],
            [1, 2, 2, 3, 3, 3],
            [1, 1, 2, 2, 3, 3],
            [1, 1, 2, 2, 3, 3],
            [1, 1, 1, 2, 2, 3],
            [1, 1, 1, 2, 2, 3]
        ]));
    });
});
