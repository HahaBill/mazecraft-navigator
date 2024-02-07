const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');
const footerElement = document.querySelector('footer');
const sidenavElement = document.querySelector('nav');

const tools = ['map', 'start', 'end', 'checkpoint', 'wall'];
const algorithms = ['dfs', 'bfs', 'dijkstra', 'a_star', 'mst'];

let selectedTool = '';
let selectedAlgorithm = '';

////// Generating tools and algorithms //////

function createHeaderTool(tool) {
    let toolElement = document.createElement('button');
    toolElement.className = tool;
    toolElement.textContent = `${tool}`;

    toolElement.addEventListener('click', () => {
        selectedTool = tool;
        handleTool(selectedTool);
    })

    toolElement.style.backgroundColor = "lightblue";
    toolElement.style.width = "80px";
    toolElement.style.height = "80px";
    toolElement.style.borderRadius = "8px";

    return toolElement;
}

function createAlgorithmsChoice(algorithm) {
    let algorithmElement = document.createElement('button');
    algorithmElement.textContent = `${algorithm}`;

    algorithmElement.addEventListener('click', () => {
        selectedAlgorithm = algorithm;
        handleAlgorithm(selectedAlgorithm);
    });

    algorithmElement.style.backgroundColor = "lightblue";
    algorithmElement.style.width = "80px";
    algorithmElement.style.height = "80px";
    algorithmElement.style.borderRadius = "8px";

    return algorithmElement;
}

function handleTool(tool) {
    switch(tool) {
        case 'map':
            openMapDropdown();
            break
        case 'start':
            console.log(`Selected tool: ${tool}.`)
            break;
        case 'end':
            console.log(`Selected tool: ${tool}.`)
            break;
        case 'checkpoint':
            console.log(`Selected tool: ${tool}.`)
            break;
        case 'wall':
            console.log(`Selected tool: ${tool}.`)
            break
        default:
            console.log('Error: Illegal tool')
    }
}

function handleAlgorithm(algorithm) {
    switch(algorithm) {
        case 'dfs':
            console.log(`Selected algorithm: ${algorithm}.`);
            break;
        case 'bfs':
            console.log(`Selected algorithm: ${algorithm}.`);
            break;
        case 'dijkstra':
            console.log(`Selected algorithm: ${algorithm}.`);
            break;
        case 'a_star':
            console.log(`Selected algorithm: ${algorithm}.`);
            break;
        case 'mst':
            console.log(`Selected algorithm: ${algorithm}.`);
            break;
        default:
            console.log('Error: Illegal algorithm');
    }
}

function openMapDropdown() {
    document.getElementById("map-form-dropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.map')) {
    var map_dropdown = document.getElementById("map-form-dropdown");
      if (map_dropdown.classList.contains('show')) {
        map_dropdown.classList.remove('show');
      }
    }
  }

function createGridMap() {
    const gridContainer = document.getElementById('grid-container');

}

(() => {
    tools.forEach((tool) => headerElement.appendChild(createHeaderTool(tool)));
    algorithms.forEach((algorithm) => sidenavElement.appendChild(createAlgorithmsChoice(algorithm)));
})();
