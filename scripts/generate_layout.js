const headerElement = document.querySelector('header');
const sidenavElement = document.querySelector('nav');
const mainElement = document.querySelector('main');
const footerElement = document.querySelector('footer');

const tools = ['', '', ''];

function createHeaderTool(num) {
    let toolElement = document.createElement('button');
    toolElement.textContent = `tool_${num}`;

    toolElement.style.backgroundColor = "lightblue";
    toolElement.style.width = "80px";
    toolElement.style.height = "80px";
    toolElement.style.borderRadius = "8px";

    return toolElement;
}

function createAlgorithmsChoice(num) {
    let algorithmElement = document.createElement('button');
    algorithmElement.textContent = `algorithm-${num}`;

    algorithmElement.backgroundColor = "lightblue";
    algorithmElement.style.width = "80px";
    algorithmElement.style.height = "80px";
    algorithmElement.style.borderRadius = "8px";

    return algorithmElement;
}

(() => {
    for(let i = 0; i < 4; i++) {
        headerElement.appendChild(createHeaderTool(i));
    }

    for(let i = 0; i < 6; i++) {
        sidenavElement.appendChild(createAlgorithmsChoice(i));
    }
})();

/*

function createNumber(number) {
    let element = document.createElement("DIV");
    element.textContent = number;
    element.addEventListener("click", () => {
    addNewDigit(number);
    updateScreen();
});

*/