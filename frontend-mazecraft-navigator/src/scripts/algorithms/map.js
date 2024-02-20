class Graph {
    constructor(num_nodes) {
        this.num_nodes = num_nodes;
    }
}

class Node {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    get id() {
        return this.id;
    }

    get type() {
        return this.type;
    }
}

class Map {
    constructor(height, width, num_checkpoints, start, end) {
        this.height = height;
        this.width = width;
        this.num_checkpoints = num_checkpoints;
        this.start = start;
        this.end = end;
        this.graph = this.constructGraph();
    }

    get graph() {
        return this.graph;
    }

    constructGraph() {
        
    }
}