document.getElementById("smoresSocialsBtn").addEventListener("click", function() {
    var menu = document.getElementById("smoresSocialsMenu");
    var smoresIrlMenu = document.getElementById("smoresIrlMenu");
    smoresIrlMenu.style.display = "none";
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.getElementById("smoresIrlBtn").addEventListener("click", function() {
    var menu = document.getElementById("smoresIrlMenu");
    var smoresSocialsMenu = document.getElementById("smoresSocialsMenu");
    smoresSocialsMenu.style.display = "none";
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});
