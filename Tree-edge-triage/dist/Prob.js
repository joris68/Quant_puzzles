"use strict";
/**
 * Now I want to model the probability:
 *
 * A Path can have two outcomes: "Winnign | Losing"
 *  If a specific Path only has "A" ==> N consecutive A it is considered a Winner, else a Loser (we look from Aarons perspective)
 *
 * Since every Edge is "independently labeled" ==> we could represent this as a binary probability tree (like a coin toss)
 *
 * Prob for winning Path: p^N
 * Prob for losing Path: else
 *
 * "somehow everybody can see the whole tree"
 *
 * X : Number of Winning Paths
 *
 * Probability that Aaron wins : P(X >= 1) = 1 - P(X = 0)
 * Beren wins: P(X = 0)
 * 0
 * How do we determine the number of winning paths:
 *
 *
 */
class BinomialDist {
    constructor(N, p) {
        this.N = N;
        this.p = p;
    }
    nChooseK(kSuccesses) {
        const result = this.faculty(this.N) / (this.faculty(kSuccesses) * this.faculty(this.N - kSuccesses));
        return result;
    }
    faculty(k) {
        if (k === 0) {
            return 1;
        }
        if (k === 1) {
            return 1;
        }
        let res = 1;
        while (k > 0) {
            res *= k;
            k -= 1;
        }
        return res;
    }
    calcProb(kSuccesses) {
        const combs = this.nChooseK(kSuccesses);
        const pTerm = Math.pow(this.p, kSuccesses);
        const NTerm = Math.pow((1 - this.p), (this.N - kSuccesses));
        return combs * pTerm * NTerm;
    }
}
const a = new BinomialDist(20, 0.5);
console.log(a.faculty(4));
