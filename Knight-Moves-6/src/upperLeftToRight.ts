import {initalizeBoard, getAllCombinations, updateScore, buildAdjencyList, convertFieldToIndex, convertIndexToField, Board, AdjencyList, IndexPair, Combination, getFieldValue} from './board.js'
import { runAlgoForComb, Candidate } from './path.js';
import * as fs from 'fs';
const path = require('path');

const currentDirectory = path.resolve();

const cacheCandidates: Candidate [] = [];
const adjList  : AdjencyList = buildAdjencyList(6);
const allCombinations = getAllCombinations(50, 2);



function lowerLeftToUpperRight(startField : string, endField: string) {

    for(let x = 0; x < allCombinations.length; x++){
        const currCombination = allCombinations[x];
        const possCandidate = runAlgoForComb(currCombination, startField, endField);
        if(possCandidate){
            cacheCandidates.push(possCandidate);
        }
        console.log(`Done ${x} iteration`);
    }

};

lowerLeftToUpperRight('a6', 'f1');



const filePath = path.join(currentDirectory, 'data/lowerLeftToRight.json');

const data = JSON.stringify(cacheCandidates);
fs.writeFile(filePath, data, (err) => {
  if (err) throw err;
  console.log('Data written to file successfully!');
});