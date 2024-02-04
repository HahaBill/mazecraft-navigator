const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');
const footerElement = document.querySelector('footer');
const sidenavElement = document.querySelector('nav');

const tools = ['map', 'start', 'end', 'checkpoint', 'wall'];
const algorithms = ['dfs', 'bfs', 'dijkstra', 'a_star', 'mst'];

function createHeaderTool(tool) {
    let toolElement = document.createElement('button');
    toolElement.textContent = `${tool}`;

    toolElement.style.backgroundColor = "lightblue";
    toolElement.style.width = "80px";
    toolElement.style.height = "80px";
    toolElement.style.borderRadius = "8px";

    return toolElement;
}

function createAlgorithmsChoice(algorithm) {
    let algorithmElement = document.createElement('button');
    algorithmElement.textContent = `${algorithm}`;

    algorithmElement.style.backgroundColor = "lightblue";
    algorithmElement.style.width = "80px";
    algorithmElement.style.height = "80px";
    algorithmElement.style.borderRadius = "8px";

    return algorithmElement;
}

(() => {
    tools.forEach((tool) => headerElement.appendChild(createHeaderTool(tool)));
    algorithms.forEach((algorithm) => sidenavElement.appendChild(createAlgorithmsChoice(algorithm)));
})();
