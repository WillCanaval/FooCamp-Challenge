
function openSendModal() {
    document.getElementById("card-modal").style.display = "block";
}

function cancelSend() {
    document.getElementById("card-modal").style.display = "none";
    document.getElementById("error-msg").style.display = "none";
    document.getElementById("input-name").value = "";
    
}

function sendCard() {
    var userName = document.getElementById('input-name').value;
    if (document.getElementById('input-name').value) {
        document.getElementById('send-success').style.display = 'block';
        document.getElementById("render-name").innerHTML = userName;
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function returnHome() {
    document.getElementById("send-success").style.display = "none";
    document.getElementById("card-modal").style.display = "none";
    document.getElementById("input-name").value = "";
}




