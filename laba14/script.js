let inputField = document.getElementById('inputField');
let output = document.getElementById('output');

inputField.addEventListener('input', function() {
    output.textContent = inputField.value;
});

let myLink = document.getElementById('myLink');
        
myLink.addEventListener('click', function(event) {
    event.preventDefault();
});

let eventTypes = ['click', 'mouseover', 'mouseout', 'focus', 'blur'];
eventTypes.forEach(function(eventType) {
    myLink.addEventListener(eventType, function() {
        console.log('Событие ' + eventType + ' произошло');
    });
});


function eventHandler(event) {
    alert('Событие ' + event.type + ' произошло на элементе ' + event.target.id);
}

let elements = document.querySelectorAll('div');

elements.forEach(function(element) {
    element.addEventListener('click', eventHandler, true); 
    element.addEventListener('click', eventHandler, false); 
    element.addEventListener('mouseover', eventHandler, true); 
    element.addEventListener('mouseover', eventHandler, false); 
});

let eventType = prompt('Введите тип события (например, click или mouseover):');
let elementId = prompt('Введите id элемента, для которого нужно вызвать событие:');

let specifiedElement = document.getElementById(elementId);
if (specifiedElement) {
    specifiedElement.dispatchEvent(new Event(eventType));
} else {
    alert('Элемент с указанным id не найден.');
}