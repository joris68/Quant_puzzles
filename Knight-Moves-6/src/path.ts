import {initalizeBoard, getAllCombinations, updateScore, buildAdjencyList, convertFieldToIndex, convertIndexToField, Board, AdjencyList, IndexPair, Combination, getFieldValue} from './board.js'

export type Candidate = {
    'comb' : Combination,
    'path' : String[];
    'score': number
} | undefined

const cacheCandidates: Candidate [] = [];
const adjList  : AdjencyList = buildAdjencyList(6);
const allCombinations = getAllCombinations(50, 1).reverse();



export function runAlgoForComb( comb : Combination, startField : string, endField: string) : Candidate | undefined {


    const visited : string[] = [startField];
    const board : Board = initalizeBoard(6, comb, 1);
    let StartScore = getFieldValue(convertFieldToIndex(startField), board);

    return runAlgoBacktrack(board, visited, StartScore, startField, endField, comb);


}

function runAlgoBacktrack(board: Board, visited: string [], currScore : number, currField : string, endField : string, comb: Combination):  Candidate | undefined {
        //console.log(visited);
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

        if(nextSteps.length === 0) return undefined;
        if(currScore >= 2024) return undefined;
        if(currField === endField && currScore !== 2024 ) return undefined;
   


        for (let x = 0; x < nextSteps.length; x++){
            visited.push(nextSteps[x]);
            runAlgoBacktrack(board, visited, updateScore(board, nextSteps[x] , currScore ), nextSteps[x], endField, comb);
            visited.pop()
        }

}

function legalNextSteps(visited : string [], allnextSteps: string[]) : string[] {
    return allnextSteps.filter(obj => !visited.includes(obj));
}


