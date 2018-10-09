import html from './message.html';
import './message.css';

let elements = [];
let body;
let button;

export function show() {
    // convert plain HTML string into DOM elements
    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    // append elements to body
    body = document.getElementsByTagName('body')[0];
    button = document.getElementsByTagName('button');

    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        body.appendChild(temporary.children[0]);
    }
    if (button) {
        let submitBtn = button[0];
        submitBtn.addEventListener('click', submitData);
    }

}


function submitData() {
    var form = document.getElementById('widget-form');
    var data = new FormData(form);
    postData(`http://example.com/answer`, data)
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .catch(error => console.error(error));
}

function postData(url, data) {
    return fetch(url, {
        credentials: 'same-origin',
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    }).then(response => response.json()).catch(error => {
        return error;
    });
}