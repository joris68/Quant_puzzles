/**
 *  In this file I want to build a binary tree with labeled edges based on a probability p.
 *  We will have two parameters N given the levels and probability P.
 * 
 * 
 *  The actual question: A loses if there is no path in N levels that has At least one A in each level.
 *  Propability that A wins = 1 - Prob(B wins)
 * 
 * Beren wins. can we fins a path where in N levels there is no 
 * Aaron wins if there is no level of 
 * 
 * 
 */




class BTree {

    root : BTreeNode;
    levels : number; // should be Integer, is simuntaniuosly Beren`s N
    prob : number; // probability to have Edge labeled A


    constructor(levels: number, prob : number){
        this.levels = levels;
        this.prob = prob;
        this.root = this.buildTree();
    }

    buildTree() : BTreeNode {
        let levels  = this.levels;
        const root = new BTreeNode();

        const buildLevel = (node :BTreeNode, level: number): void =>{
            if(level === 0){
                return;
            }   

            // creating the new Nodes
            node.leftChild = new BTreeNode();
            node.rightChild = new BTreeNode();

            // creating and labeling the Edges
            const labelRight = this.decideEdge();
            const labelLeft = this.decideEdge();
            const leftEdge = new BTreeEdge(node, node.leftChild, labelRight);
            const rightEdge = new BTreeEdge(node, node.rightChild, labelLeft);
            
            // referencing the right nodes for the edges
            node.edgeLeft = leftEdge;
            node.edgeRight = rightEdge;
            // recursive call

            buildLevel(node.leftChild, level - 1);
            buildLevel(node.rightChild, level - 1);


        }

        buildLevel(root, levels );

        return root;

    }



    private decideEdge(){
        if(Math.random() >= this.prob) {
            return "A";
        }else{
            return "B";
        }
    }

    printTree(node: BTreeNode | undefined) : void{

        console.log("Root");
        function printRecursive(node : BTreeNode | undefined, level : number){
            if(node){
                if(node.edgeLeft && node.edgeRight) console.log(`Level ${level}: ${node.edgeLeft} ${node.edgeRight}`);
                
            } else {
                return;
            }
            printRecursive(node.leftChild, level +1);
            printRecursive(node.rightChild, level +1);
        }
        //return this.printTree(node.leftChild) + node.edgeLeft + "" +  node.edgeRight + this.printTree(node.rightChild);
        printRecursive(node, 1);

    }

}

class BTreeNode {
    // in this class we do not need a value property
    leftChild: BTreeNode | undefined;
    rightChild: BTreeNode | undefined;
    edgeRight : BTreeEdge | undefined;
    edgeLeft : BTreeEdge | undefined;

    constructor(leftChild ? : BTreeNode, rightChild?: BTreeNode){
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

}

class BTreeEdge {

    sourceNode: BTreeNode;
    targetNode: BTreeNode;
    value : string;

    constructor(s : BTreeNode, t : BTreeNode, v: string){
        this.sourceNode = s;
        this.targetNode = t;
        this.value = v;
    }
    toString(){
        return this.value;
    }

}

// create the Tree

const tree = new BTree(3, 0.5);

tree.printTree(tree.root);