function copyToClipBoard(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log("Text copied to clipboard...")
        alert("Copied!")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}

function copyCode(id) {
    const code = document.getElementById(id);
    copyToClipBoard(code.innerText);
    
}


