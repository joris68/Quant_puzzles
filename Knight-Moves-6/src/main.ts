import {initalizeBoard, getAllCombinations, updateScore, buildAdjencyList, convertFieldToIndex, convertIndexToField, Board, AdjencyList, IndexPair, Combination, getFieldValue} from './board.js'
import { runAlgoForComb, Candidate } from './path.js';


const comb : Combination = [5,5,5];

const res = runAlgoForComb(comb, 'a1', 'f6');
console.log(`This is the reuslt ${res}`);
