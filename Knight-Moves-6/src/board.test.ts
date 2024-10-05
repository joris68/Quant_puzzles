import {initalizeBoard}  from './board.js'

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
    })
})

