$.connection.hub.start()
    .done(function () {
        console.log("Connected to signalR");
        $.connection.chatHub.server.announce("Connected!");
    }).fail(function () {
        alert("Failed to connect.");
    });

$.connection.chatHub.client.announce = function (m) { $('#table').append(m + " <br />"); };

$(document).ready(function () {
    $('#send').on('click', function () {
        //$('#textbox').val();
        var a = document.getElementById('textbox').value;
        $.connection.chatHub.server.announce(a);
        document.getElementById('textbox').value = "";
    });
});