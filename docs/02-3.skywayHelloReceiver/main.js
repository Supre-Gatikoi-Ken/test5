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

peer.on('connection', function(conn) {
    document.getElementById("peer-id").innerHTML = conn.peer;
    conn.on('data', function(data){
        console.log(data);
        document.getElementById("receive_message").innerHTML = data;
    });
});