function submenuTrigger(menuID) {

    if (document.getElementById(menuID).clientHeight == 0) {
        // console.log("opened menu")
        openSubmenu(menuID)
    } else {
        // console.log("closed menu")
        closeSubmenu(menuID)
    }
}

function openSubmenu(menuID) {
    document.getElementById(menuID).style.display = "block"
    document.getElementById(menuID).style.padding = "1px 1px 1px 10px"
    document.getElementById(menuID).style.height = "max-content"
    document.getElementById(menuID+"Opener").style.background = "#333"
}
function closeSubmenu(menuID) {
    document.getElementById(menuID).style.display = "none"
    document.getElementById(menuID).style.padding = "0 0 0 10px"
    document.getElementById(menuID).style.height = "0px"
    document.getElementById(menuID+"Opener").style.backgroundColor = "#777"
}

function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

onReady(function() {
    document.getElementById("loadingScreen").style.animation = "make_transparent 1s forwards"  
})