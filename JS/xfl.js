allData = {
    "XFLcolors": [
        {
            "team": "",
            "color1": "#000000",
            "color2": "#555555"
        },

        {
            "team": "ARL",
            "color1": "#6BB2E1",
            "color2": "#------"
        },

        {
            "team": "DCD",
            "color1": "#C8102E",
            "color2": "#------"
        },
        
        {
            "team": "HOU",
            "color1": "#C32031",
            "color2": "#------"
        },
        {
            "team": "ORL",
            "color1": "#1A2A1D",
            "color2": "#------"
        },
        
        {
            "team": "SAN",
            "color1": "#2E3639",
            "color2": "#------"
        },
        {
            "team": "SEA",
            "color1": "#00843D",
            "color2": "#------"
        },
        
        {
            "team": "STL",
            "color1": "#012478",
            "color2": "#------"
        },
        {
            "team": "VGS",
            "color1": "#FF0700",
            "color2": "#------"
        }, 

    ], 

    "XFLgames": [
        {
            "date": "4-22-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "ORL",
            "home": true,
            "STLscore": 53,
            "oppScore": 28,
            "STLshots": "",
            "oppShots": "",
        },


    ]

}



let XFLteams = [
    "ARL",
    "DCD",
    "HOU",
    "ORL",
    "SAN",
    "SEA",
    "STL",
    "VGS"
]

// let XFLcolors = [
//     "red", "blue", "brown", "green", "purple", "orange", "black", "gray", "gold", "teal", "#EE2325"
// ]

//

// const date = new Date()
// console.log(date)


// console.log(date)
// let curDate = String(date.getMonth()+1)+"-"+String(date.getDate())+"-"+String(date.getFullYear())
// console.log(curDate)

function getNextGame() {
    for (let num = 0; num < allTeamData.games.XFL.length; num++) {
        let gameDate = allTeamData.games.XFL[num].date 
        let dateAtt = gameDate.split("-")
        let curDateAtt = curDate.split("-")
        // console.log(curDate)
        // console.log(gameDate)
        if (Number(dateAtt[2]) < Number(curDateAtt[2])) { 
            // console.log("Y") 
        }
        else if ((Number(dateAtt[2]) == Number(curDateAtt[2])) && (Number(dateAtt[0]) < Number(curDateAtt[0]))) { 
            // console.log("M") 
        }
        else if ((Number(dateAtt[2]) == Number(curDateAtt[2])) && (Number(dateAtt[0]) == Number(curDateAtt[0])) && (Number(dateAtt[1]) < Number(curDateAtt[1]))) { 
            // console.log("D") 
        }
        else if ((Number(dateAtt[2]) == Number(curDateAtt[2])) && (Number(dateAtt[0]) == Number(curDateAtt[0])) && (Number(dateAtt[1]) == Number(curDateAtt[1]))) { 
            let gameTime = getTimeList(allTeamData.games.XFL[num].time)
            let curMinute = (curTime[0] * 60) + curTime[1]
            let gameMinute = (gameTime[0] * 60) + gameTime[1]
            
            if ((!allTeamData.games.XFL[num].final) && ((curMinute >= gameMinute))) {
                // console.log(gameMinute)
                // console.log(curMinute)
                gameIsLive("nextTextXFL")
                return allTeamData.games.XFL[num]
            }
            else if (curMinute < gameMinute) {
                return allTeamData.games.XFL[num]
            }

        }
        else {
            // console.log(allTeamData.games.XFL[num])
            return allTeamData.games.XFL[num]
        }
    }
    return "void"
}

let liveScoreXFL = false

function gameIsLive(elemID) {
    // console.log(liveText)
    document.getElementById(elemID).textContent = liveText
    document.getElementById(elemID).style.color = "red"
    liveScoreXFL = true
}

function activateLiveScore(gameData) {
    try {
        document.getElementById("liveStlScoreMLB").style.display = "block"
        document.getElementById("liveOppScoreMLB").style.display = "block"
        document.getElementById("liveStlScoreMLB").textContent = gameData.STLscore
        document.getElementById("liveOppScoreMLB").textContent = gameData.oppScore
        
    } catch (error) {
        
    }
}

function getLastGame() {
    for (let num = allTeamData.games.XFL.length-1; num >= 0; num--) {
        let gameDate = allTeamData.games.XFL[num].date 
        let dateAtt = gameDate.split("-")
        let curDateAtt = curDate.split("-")
        // console.log(allTeamData.games.XFL[num])
        // console.log(curDate)
        // console.log(gameDate)
        if (Number(dateAtt[2]) > Number(curDateAtt[2])) { 
            // console.log("Y")
        }
        else if ((Number(dateAtt[2]) == Number(curDateAtt[2])) && (Number(dateAtt[0]) > Number(curDateAtt[0]))) { 
            // console.log("M")
        }
        else if ((Number(dateAtt[2]) == Number(curDateAtt[2])) && (Number(dateAtt[0]) == Number(curDateAtt[0])) && (Number(dateAtt[1]) > Number(curDateAtt[1]))) { 
            // console.log("D")
        }
        else if ((Number(dateAtt[2]) == Number(curDateAtt[2])) && (Number(dateAtt[0]) == Number(curDateAtt[0])) && (Number(dateAtt[1]) == Number(curDateAtt[1]))) { 
            let gameTime = getTimeList(allTeamData.games.XFL[num].time)
            let curMinute = (curTime[0] * 60) + curTime[1]
            let gameMinute = (gameTime[0] * 60) + gameTime[1]
            
            // console.log("FJAKL;FADS;LFDASKL;FJDAS")
            if ((curMinute > gameMinute) && (allTeamData.games.XFL[num].final)) {
                return allTeamData.games.XFL[num]
            }
        }
        else {
            // console.log(allTeamData.games.XFL[num])
            return allTeamData.games.XFL[num]
        }
    }
    return "void"
}

// console.log(getNextGame())
// console.log(getLastGame())


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'schedule.json' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

// //usage:
// readTextFile("schedule.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });



function getRandomNumber() {
    let number = Math.floor(Math.random() * 11);
    // console.log(number)
    return String(number)
}

function getRandomTeam() {
    let teamNum = Math.floor(Math.random() * XFLteams.length)
    var teamText = XFLteams[teamNum]
    console.log(teamText)
    while (getTrueTeamText(teamText) == "STL") {
        let newData = getRandomTeam()
        teamText = newData[0]
        teamNum = newData[1]
    }
    return [teamText,teamNum]
}

function getRandomSTL() {
    let teamNum = Math.floor(Math.random() * 4) + XFLteams.indexOf("STL")
    var teamText = XFLteams[teamNum]
    console.log(teamText)
    while (getTrueTeamText(teamText) != "STL") {
        let newData = getRandomTeam()
        teamText = newData[0]
        teamNum = newData[1]
    }
    return [teamText,teamNum]
}

function getTrueTeamText(team) {
    let newString = team.substring(0,3)
    return newString
}

function teamLogo(team, sport) {
    if (!XFLteams.includes(team)) {
        team = sport
    }
    let fileText = sport + " SVGs/"+team+".svg"
    return fileText
}

// let table = document.getElementById("csv-data");
// let url = 'https://www.nhl.com/gamecenter/stl-vs-dal/2023/10/12/2023020013'
// let url2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQ4WH7Z1nbwcCSPnX5rRGx_CVVwUqKkQrxIk9QYyXrLntAnQ3q2qIYu3Lnu6KVYpj9jeKN4ikZsARD/pub?gid=0&single=true&output=csv'

// fetch(url2)
//     .then(res => res.blob())
//     .then(blob => blob.stream())
//     .then(stream => stream.getReader())
//     .then(reader => reader.read())
    // .then(read => console.log(read.value))





// fetch(url)
//     .then(response => response.text())
//     .then(data => {
//         let rows = data.split("\n");
//         for (let i = 0; i < rows.length; i++) {
//             let cells = rows[i].split(",");
//             let row = table.insertRow();
//             for (let j = 0; j < cells.length; j++) {
//                 let cell = row.insertCell();
//                 cell.innerText = cells[j];
//             }
//         }
//     })
//     .catch(error => console.log(error));

// let charsReceived = 0
var list2 = ""
var result = ""

// fetch(url)
//     .then(res => res.blob())
//     .then(blob => blob.stream())
//     .then(stream => stream.getReader())
//     .then(reader => reader.read().then(function processText( { done, value } ) {
//         console.log("here")
//         // Result objects contain two properties:
//         // done  - true if the stream has already given you all its data.
//         // value - some data. Always undefined when done is true.
//         if (done) {
//             console.log("Stream complete");
//             document.getElementById("result-text").textContent = value;
//             return;
//         }
        
//         // value for fetch streams is a Uint8Array
//         charsReceived += value.length;
//         console.log(String(charsReceived));
//         const chunk = value;
//         console.log(chunk);
//         let listItem = document.createElement("li");
//         listItem.textContent = `Received ${charsReceived} characters so far. Current chunk = ${chunk}`;
//         list2 += listItem
//         list2 += ", "

//         result += chunk;

//         // Read some more, and call this function again
//         return reader.read().then(processText);
//     }));





// let info = getRandomTeam()
// let opponent = info[0]
// // let tNum = info[1]

// let STLinfo = getRandomSTL()
// let STLteam = STLinfo[0]
// // let STLtNum = STLinfo[1]

let lastGameInfoXFL = getLastGame()
let lastOppXFL = lastGameInfoXFL.opponent
// console.log(lastGameInfoXFL)

if (lastGameInfoXFL == "void") {
    document.getElementById("lastGameXFL").style.visibility = "hidden"
    document.getElementById("lastGameXFL").style.display = "none"
    // document.getElementById("barrier").style.display = "none"
} else {
    let lastSTLteamXFL = "STL"
    if (lastGameInfoXFL.STLlogo != 1) {
        lastSTLteamXFL += (" " + String(lastGameInfoXFL.STLlogo))
    }
    // console.log(STLteam)

    document.getElementById("lastStlTextXFL").textContent = getTrueTeamText(lastSTLteamXFL)
    document.getElementById("lastOppTextXFL").textContent = getTrueTeamText(lastOppXFL)

    document.getElementById("lastStlLogoXFL").src = teamLogo(lastSTLteamXFL, "XFL")
    document.getElementById("lastOppLogoXFL").src = teamLogo(lastOppXFL, "XFL")

    document.getElementById("lastStlScoreXFL").textContent = lastGameInfoXFL.STLscore
    document.getElementById("lastOppScoreXFL").textContent = lastGameInfoXFL.oppScore

    // document.getElementById("lastStlScoreXFL").style.color = allTeamData.colors.XFL[getColorIndex(lastSTLteamXFL, "XFL")].color2
    // document.getElementById("lastOppScoreXFL").style.color = allTeamData.colors.XFL[getColorIndex(lastOppXFL, "XFL")].color2

    document.getElementById("lastTextXFL").textContent = "LAST | " + lastGameInfoXFL.date + " | FINAL"

    // console.log(allTeamData.colors.XFL.length)
    document.getElementById("lastStlBoxXFL").style.backgroundColor = allTeamData.colors.XFL[getColorIndex(lastSTLteamXFL, "XFL")].color1
    document.getElementById("lastOppBoxXFL").style.backgroundColor = allTeamData.colors.XFL[getColorIndex(lastOppXFL, "XFL")].color1

}

// let stlIndex = XFLteams.indexOf("STL")



// NEXT GAME

let nextGameInfoXFL = getNextGame()
let nextOppXFL = nextGameInfoXFL.opponent

if (liveScoreXFL) {
    activateLiveScore(nextGameInfoXFL)
}

if (nextGameInfoXFL == "void") {
    document.getElementById("nextGameXFL").style.visibility = "hidden"
    document.getElementById("nextGameXFL").style.display = "none"
    // document.getElementById("barrier").style.display = "none"
} else {

let nextSTLteamXFL = "STL"
if (nextGameInfoXFL.STLlogo != 1) {
    nextSTLteamXFL += (" " + String(nextGameInfoXFL.STLlogo))
}

    document.getElementById("nextStlTextXFL").textContent = getTrueTeamText(nextSTLteamXFL)
    document.getElementById("nextOppTextXFL").textContent = getTrueTeamText(nextOppXFL)

    document.getElementById("nextStlLogoXFL").src = teamLogo(nextSTLteamXFL, "XFL")
    document.getElementById("nextOppLogoXFL").src = teamLogo(nextOppXFL, "XFL")

    // document.getElementById("nextStlScore").textContent = nextGameInfoXFL.STLscore
    // document.getElementById("nextOppXFLScore").textContent = nextGameInfoXFL.oppScore

    document.getElementById("nextStlBoxXFL").style.backgroundColor = allTeamData.colors.XFL[getColorIndex(nextSTLteamXFL, "XFL")].color1
    document.getElementById("nextOppBoxXFL").style.backgroundColor = allTeamData.colors.XFL[getColorIndex(nextOppXFL, "XFL")].color1

    if (document.getElementById("nextTextXFL").textContent != liveText) {
        document.getElementById("nextTextXFL").textContent = "NEXT | " + nextGameInfoXFL.date + " | " + nextGameInfoXFL.time
    }

}