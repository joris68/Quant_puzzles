/**
 * 
 */


const p : number [] = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]

const N : number [] = [20, 50, 80, 100, 120, 150, 180];

class BinaryGame {

    probA : number;
    probB : number;
    N : number;

    constructor(probA: number, N: number){
        this.probA = probA;
        this.probB = 1 - this.probA;
        this.N = N;
    }

    buildCombLookUp(p: number) {
        const res = {};
        const crossproduct = this.buildCartesian(["A", "B"]);
    
    }


    buildCartesian(arr :number [] | string []){
        const res = [];
        for (let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                res.push([arr[i], arr[j]]);
            }
        }
        return res;
    }
}




//*********************************************************************************************** */


