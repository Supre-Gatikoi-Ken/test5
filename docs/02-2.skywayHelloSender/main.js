var peer = new Peer({
    key: 'bc3035be-047d-4b36-bab7-bd2a8b0c7b33',
    debug: 3,
    turn: false
});

window.onload = function(){
    getMyID();
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