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
    setMainHeight()
    
}
function closeSubmenu(menuID) {
    document.getElementById(menuID).style.display = "none"
    document.getElementById(menuID).style.padding = "0 0 0 10px"
    document.getElementById(menuID).style.height = "0px"
    document.getElementById(menuID+"Opener").style.backgroundColor = "#777"
    setMainHeight()
    
}

function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

// console.log("Menu Opener 1: " + document.getElementById('WholeMenuOpener').clientHeight)
// if (document.getElementById('WholeMenuOpener').clientHeight == 0) {
//     openSubmenu('WholeMenu')
// }
// else {
//     closeSubmenu('WholeMenu')
// }


function setMainHeight() {
    // console.log(document.getElementsByTagName("nav"))
    let navHt = document.getElementsByTagName("nav")[0].clientHeight
    let bodyHt = document.getElementsByTagName("body")[0].clientHeight
    // console.log(navHt)
    // console.log(bodyHt)
    if (navHt != bodyHt) {
        document.getElementById("main").style.height = `calc(100vh - ${navHt}px - 20px)`
    } else {
        document.getElementById("main").style.height = `calc(100vh - 20px)`
    }
}

onReady(function() {
    document.getElementById("loadingScreen").style.animation = "make_transparent 1s forwards"  
    setTimeout(() => {
        document.getElementById("loadingScreen").remove()
    }, 1500)
    // while (true) {
    setMainHeight()
    // }
    
})

window.addEventListener('resize', setMainHeight)