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

peer.on('connection', function(conn) {
    document.getElementById("peer-id").innerHTML = conn.peer;
    conn.on('data', function(data){
        console.log(data);
        document.getElementById("receive_message").innerHTML = data;
    });
});