var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: 'python',
    theme: 'dracula',
    lineNumbers: true
});

function runCode() {
    var code = editor.getValue();
    process();
    // fetch('/run', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ code: code })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.error) {
    //         document.getElementById('output').innerText = 'Error:\n' + data.error;
    //     } else {
    //         document.getElementById('output').innerText = 'Output:\n' + data.output;
    //     }
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
}

const process = async () => {
    var code = editor.getValue();
    const response = await fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    });
    const data = await response.json();
    if (data.error) {
        document.getElementById('output').innerText = 'Error:\n' + data.error;
    } else {
        document.getElementById('output').innerText = 'Output:\n' + data.output;
    }
}