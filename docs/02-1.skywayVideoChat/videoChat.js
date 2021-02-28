navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
 
var localStream;
var connectedCall;
 
var peer = new Peer({
    key: 'bc3035be-047d-4b36-bab7-bd2a8b0c7b33',
    debug: 3,
    turn: false
});

window.onload = function(){
    displayMyCamera();
    getMyID();
}

function getMyID() {
    peer.on('open', function(){
        document.getElementById("my-id").innerHTML = peer.id;
    });
}

//take calling from other peer
peer.on('call', function(call){
    connectedCall = call;
    //$("#peer-id").text(call.peer);
    document.getElementById("peer-id").innerHTML = call.peer;
    call.answer(localStream);
 
    call.on('stream', function(stream){
        var url = URL.createObjectURL(stream);
        //$('#peer-video').prop('src', url);
        document.getElementById("peer-video").src = url;
    });
});
 

function displayMyCamera(){
    navigator.getUserMedia({audio: true, video: true}, function(stream){
        localStream = stream;
        document.getElementById("my-video").src = URL.createObjectURL(stream);
    }, function() { alert("Error!"); });
}

function callStart(){
    var peer_id = document.getElementById("peer-id-input").value;
    var call = peer.call(peer_id, localStream);
    call.on('stream', function(stream){
        document.getElementById("peer-id").innerHTML = peer_id;
        var url = URL.createObjectURL(stream);
        document.getElementById("peer-video").src = url;
    });
}

function callEnd() {
    connectedCall.close();
}