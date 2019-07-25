var list = document.getElementById('demo');
var entry = document.getElementById('formAdd');
entry.onsubmit = function(evt) {
evt.preventDefault();
var first = document.getElementById('first').value;
var entry = document.createElement('li');
entry.appendChild(document.createTextNode(first));
list.appendChild(entry);