statsData = {
    "statOrder": {
        "NHL": ["Team","GP","G","A","P","+/-","PIM","S%","FO%"],
    },
    "majorStats": {
        "NHL": ["GP","Goals","Assists","Points","+/-"]
    }
}

rosterData = {
    "NHL": [
        {
            "firstName": "Sammy",
            "lastName": "Blais",
            "jerseyNum": 9,
            "birthDate": "June 17, 1997",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "Left",
            "weight": "206 lbs.",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "Blais was drafted in the sixth round by the Blues in 2014 and defied all odds to reach the NHL with the team in 2017. He won a Stanley Cup with the Blues in 2019 and was eventually traded to the Rangers in a deal for Pavel Buchnevich. After suffering a major knee injury early in the 2021 campaign that sidelined him for the rest of the season, Blais was only able to score 5 points in 40 games with New York in 2022-23, but was traded back to the Blues, where he put up 9 goals and 20 points in only 31 games.",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL/NYR",71, 9, 16, 25, 4, 30, "?", "?"],
            }
        }
    ],

    "MLB": [
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": "",
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }
    ],

    "MLS": [
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": "",
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }
    ],

    "XFL": [
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": "",
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }
    ]
}

let teamNames = {
    "NHL" : "St. Louis Blues",
    "MLS" : "St. Louis CITY SC",
    "MLB" : "St. Louis Cardinals",
    "XFL" : "St. Louis Battlehawks"
}



let curYear = 2023

function getRoster(sport) {
    let playerCt = rosterData[sport].length
    for (i = 0; i < playerCt; i++) {
        let player = rosterData[sport][i]
        let rosterBox = document.getElementById("fullRoster")
        let statsItems = ""
        for (i = 0; i < statsData.majorStats[sport].length; i++) {
            statsItems += `
            <div>
                <h5>${statsData.majorStats[sport][i]}</h5>
                <h2>${player.careerStats[curYear][i+1]}</h2>
            </div>
            `
        }

        let text = `
            <div class="playerBox">
                <section class="row">
                    <div>
                        <img src="${player.image}">
                        <h5>${player.firstName}</h5>
                        <h2>${player.lastName}</h2>
                        <h1 style="font-size: 56pt; font-style: italic;">${player.jerseyNum}</h1>
                    </div>
                    <div class="bio">
                        <section class="row">
                            <div>
                                <h2>${player.position}</h2>
                            </div>
                            <div>
                                <h2>${player.height}</h2>
                            </div>
                            <div>
                                <h2>${player.weight}</h2>
                            </div>
                            
                        </section>
                        <hr>
                        <h3 style="text-transform: uppercase;">2022-23 Stats</h3>
                        <section class="row">
                            ${statsItems}
                        </section>
                        <hr>
                        <p id="bio">${player.bio}</p>
                    </div>
                </section>
            </div>
        `

        rosterBox.innerHTML += text
    }
}