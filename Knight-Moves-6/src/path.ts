import {initalizeBoard, getAllCombinations, updateScore, buildAdjencyList, convertFieldToIndex, convertIndexToField, Board, AdjencyList, IndexPair, Combination, getFieldValue} from './board.js'

type Candidate = {
    'comb' : Combination,
    'path' : String[];
    'score': number
} | undefined

const cacheCandidates: Candidate [] = [];
const adjList  : AdjencyList = buildAdjencyList(6);
const allCombinations = getAllCombinations(50, 1);



function runAlgoForComb( comb : Combination, startField : string, endField: string) : Candidate | undefined {


    const visited : string[] = [startField];
    const board : Board = initalizeBoard(6, comb, 1);
    let StartScore = getFieldValue(convertFieldToIndex(startField), board);

    return runAlgoBacktrack(board, visited, StartScore, startField, endField, comb);


}

function runAlgoBacktrack(board: Board, visited: string [], currScore : number, currField : string, endField : string, comb: Combination):  Candidate {
        console.log(visited);
        const allNextSteps = adjList[currField];
        const nextSteps : string[] = legalNextSteps(visited, allNextSteps);


        if(currScore === 2024 && currField === endField){
            const cand  = {
                'comb' : comb,
                'path' : visited,
                'score' : currScore
            }
            return cand;
        }

        if(nextSteps.length === 0) return;
        if(currScore >= 2024) return;
        if(currField === endField && currScore !== 2024 ) return;
   


        for (let x = 0; x < nextSteps.length; x++){
            visited.push(nextSteps[x]);
            runAlgoBacktrack(board, visited, updateScore(board, nextSteps[x] , currScore ), nextSteps[x], endField, comb);
            visited.pop()
        }

}

function legalNextSteps(visited : string [], allnextSteps: string[]) : string[] {
    return allnextSteps.filter(obj => !visited.includes(obj));
}


let running = true;
let counter = 0

    const currCombination : Combination = [10,10,20];
    const possCandidate = runAlgoForComb(currCombination, 'a1', 'f6')
    if(possCandidate){
        cacheCandidates.push(possCandidate);
        console.log(possCandidate);
    } else{
        console.log(`Currcombination ${JSON.stringify(currCombination)} is not a a valid combination`)
    }
    counter++



