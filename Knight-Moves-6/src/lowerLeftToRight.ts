import {initalizeBoard, getAllCombinations, updateScore, buildAdjencyList, convertFieldToIndex, convertIndexToField, Board, AdjencyList, IndexPair, Combination, getFieldValue} from './board.js'
import { runAlgoForComb, Candidate } from './path.js';
import * as fs from 'fs';


const cacheCandidates: Candidate [] = [];
const adjList  : AdjencyList = buildAdjencyList(6);
const allCombinations = getAllCombinations(50, 1).reverse();



function lowerLeftToUpperRight(startField : string, endField: string) {

    for(let x = 0; x < 500; x++){
        const currCombination = allCombinations[x];
        const possCandidate = runAlgoForComb(currCombination, startField, endField);
        if(possCandidate){
            cacheCandidates.push(possCandidate);
        }
        console.log(`Done ${x} iteration`);
    }

};

lowerLeftToUpperRight('a1', 'f6');

const dataString = JSON.stringify(cacheCandidates);
fs.writeFileSync('data/lowerLeftToRight.json', dataString);
console.log('Data saved');