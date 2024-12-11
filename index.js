
let username;

        document.getElementById("mySubmit").onclick = function() {
            username = document.getElementById("Text").value;
            document.getElementById("myh1").textContent = `Hello ${username}`
        }