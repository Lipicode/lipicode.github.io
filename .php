
#### **textbox.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chati - Chat</title>
</head>
<body>
    <h1>Chatbox</h1>
    <textarea id="chatBox" rows="10" cols="30" readonly></textarea><br>
    <input type="text" id="message" placeholder="Type a message..."><br>
    <button onclick="sendMessage()">Send</button>

    <script>
        const ws = new WebSocket("ws://localhost:8080");

        ws.onmessage = function(event) {
            document.getElementById("chatBox").value += event.data + "\n";
        };

        function sendMessage() {
            const message = document.getElementById("message").value;
            ws.send(message);
            document.getElementById("message").value = "";
        }
    </script>
</body>
</html>
