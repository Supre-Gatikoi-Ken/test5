var peer = new Adawarp();


window.onload = function(){
    getMyID();
    peer.login();
}

function getMyID() {
    peer.on('open', function(){
        document.getElementById("my-id").innerHTML = peer.id;
    });
}

function callStart(){
    var peer_id = document.getElementById("peer-id-input").value;
    var conn = peer.connect(peer_id);
    conn.on('open', function() {
        conn.send('HelloWorld');
    });
}