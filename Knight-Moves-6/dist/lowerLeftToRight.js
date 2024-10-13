"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_js_1 = require("./board.js");
const path_js_1 = require("./path.js");
const fs = __importStar(require("fs"));
const path = require('path');
const currentDirectory = path.resolve();
const cacheCandidates = [];
const adjList = (0, board_js_1.buildAdjencyList)(6);
const allCombinations = (0, board_js_1.getAllCombinations)(50, 2);
function lowerLeftToUpperRight(startField, endField) {
    for (let x = 0; x < allCombinations.length; x++) {
        const currCombination = allCombinations[x];
        const possCandidate = (0, path_js_1.runAlgoForComb)(currCombination, startField, endField);
        if (possCandidate) {
            cacheCandidates.push(possCandidate);
        }
        console.log(`Done ${x} iteration`);
    }
}
;
lowerLeftToUpperRight('a1', 'f6');
const filePath = path.join(currentDirectory, 'data/lowerLeftToRight.json');
const data = JSON.stringify(cacheCandidates);
fs.writeFile(filePath, data, (err) => {
    if (err)
        throw err;
    console.log('Data written to file successfully!');
});
