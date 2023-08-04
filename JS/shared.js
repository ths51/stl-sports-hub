statsData = {
    "statOrder": {
        "NHL": ["Team","GP","G","A","P","+/-","PIM","S%","FO%"],
    },
    "majorStats": {
        "NHL": ["GP","Goals","Assists","Points","+/-"],
        "NHL_G": ["GP","W","L","OTL","SV%","GAA"],
    },
    "specialtyStatPositions": {
        "NHL": ["G"],
        "MLB": ["P"],
        "MLS": ["GK"],
        "XFL": ["QB","LB","S"]
    }
}

rosterData = {
    "NHL": [
        {
            "firstName": "Sammy",
            "lastName": "Blais",
            "jerseyNum": 79,
            "birthDate": "June 17, 1997",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "206 lbs.",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "Blais was drafted in the sixth round by the Blues in 2014 and defied all odds to reach the NHL with the team in 2017. He won a Stanley Cup with the Blues in 2019 and was eventually traded to the Rangers in a deal for Pavel Buchnevich. After suffering a major knee injury early in the 2021 campaign that sidelined him for the rest of the season, Blais was only able to score 5 points in 40 games with New York in 2022-23, but was traded back to the Blues, where he put up 9 goals and 20 points in only 31 games.",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL/NYR",71, 9, 16, 25, 4, 30, "?", "?"],
                2022: ["NYR",14, 0, 4, 4, 3, 17, "?", "?"],
                2021: ["STL",36, 8, 7, 15, 0, 12, "?", "?"],
                2020: ["STL",40, 6, 7, 13, -2, 20, "?", "?"],
                2019: ["STL",32, 2, 2, 4, -1, 6, "?", "?"],
                2018: ["STL",11, 1, 2, 3, 1, 6, "?", "?"]
            }
        },
        {
            "firstName": "Pavel",
            "lastName": "Buchnevich",
            "jerseyNum": 89,
            "birthDate": "April 17, 1995",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'1"`,
            "position": "LW",
            "domHand": "L",
            "weight": "196 lbs.",
            "birthPlace": "Cherepovets, RUS",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",63, 26, 41, 67, 14, 36, "?", "?"],
            }
        },
        {
            "firstName": "Kevin",
            "lastName": "Hayes",
            "jerseyNum": 12,
            "birthDate": "May 8, 1992",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'5"`,
            "position": "RW",
            "domHand": "L",
            "weight": "216 lbs.",
            "birthPlace": "Dorcester, MA, USA",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["PHI",81, 18, 36, 54, -22, 23, "?", "?"],
            }
        },
        {
            "firstName": "Kasperi",
            "lastName": "Kapanen",
            "jerseyNum": 42,
            "birthDate": "July 23, 1996",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'1"`,
            "position": "RW",
            "domHand": "R",
            "weight": "194 lbs.",
            "birthPlace": "Kuopio, FIN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL/PIT",66, 15, 19, 34, -8, 18, "?", "?"],
            }
        },
        {
            "firstName": "Jordan",
            "lastName": "Kyrou",
            "jerseyNum": 25,
            "birthDate": "May 5, 1998",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'1"`,
            "position": "RW",
            "domHand": "R",
            "weight": "196 lbs.",
            "birthPlace": "Toronto, ON, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",79, 37, 36, 73, -38, 22, "?", "?"],
            }
        },
        {
            "firstName": "Mackenzie",
            "lastName": "MacEachern",
            "jerseyNum": 28,
            "birthDate": "March 9, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "193 lbs.",
            "birthPlace": "Bloomfield Hills, MI, USA",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["CAR",0, 0, 0, 0, 0, 0, "?", "?"],
            }
        },
        {
            "firstName": "Jake",
            "lastName": "Neighbours",
            "jerseyNum": 63,
            "birthDate": "March 29, 2002",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'0"`,
            "position": "LW",
            "domHand": "L",
            "weight": "201 lbs.",
            "birthPlace": "Calgary, AB, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",43, 6, 4, 10, -19, 24, "?", "?"],
            }
        },
        {
            "firstName": "Brandon",
            "lastName": "Saad",
            "jerseyNum": 20,
            "birthDate": "October 27, 1992",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'1"`,
            "position": "LW",
            "domHand": "L",
            "weight": "215 lbs.",
            "birthPlace": "Pittsburgh, PA, USA",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",71, 19, 18, 37, -8, 12, "?", "?"],
            }
        },
        {
            "firstName": "Brayden",
            "lastName": "Schenn",
            "jerseyNum": 10,
            "birthDate": "August 22, 1991",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'1"`,
            "position": "C",
            "domHand": "L",
            "weight": "199 lbs.",
            "birthPlace": "Saskatoon, SK, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",82, 21, 44, 65, -27, 50, "?", "?"],
            }
        },
        {
            "firstName": "Oskar",
            "lastName": "Sundqvist",
            "jerseyNum": 70,
            "birthDate": "March 23, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'3"`,
            "position": "C",
            "domHand": "R",
            "weight": "220 lbs.",
            "birthPlace": "Boden, SWE",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["DET/MIN",67, 10, 18, 28, -4, 28, "?", "?"],
            }
        },
        {
            "firstName": "Robert",
            "lastName": "Thomas",
            "jerseyNum": 18,
            "birthDate": "July 2, 1999",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'0"`,
            "position": "C",
            "domHand": "R",
            "weight": "218 lbs.",
            "birthPlace": "Aurora, ON, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",73, 18, 47, 65, -8, 22, "?", "?"],
            }
        },
        {
            "firstName": "Alexey",
            "lastName": "Toropchenko",
            "jerseyNum": 13,
            "birthDate": "June 25, 1999",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'6"`,
            "position": "RW",
            "domHand": "L",
            "weight": "222 lbs.",
            "birthPlace": "Moscow, RUS",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",69, 10, 9, 19, 6, 12, "?", "?"],
            }
        },
        {
            "firstName": "Jakub",
            "lastName": "Vrana",
            "jerseyNum": 15,
            "birthDate": "February 28, 1996",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'0"`,
            "position": "LW",
            "domHand": "L",
            "weight": "190 lbs.",
            "birthPlace": "Prague, CZE",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["DET/STL",25, 11, 5, 16, 3, 10, "?", "?"],
            }
        },
        {
            "firstName": "Nathan",
            "lastName": "Walker",
            "jerseyNum": 26,
            "birthDate": "February 7, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `5'9"`,
            "position": "LW",
            "domHand": "L",
            "weight": "187 lbs.",
            "birthPlace": "Cardiff, GBR",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",56, 2, 8, 10, 10, 25, "?", "?"],
            }
        },
        {
            "firstName": "Robert",
            "lastName": "Bortuzzo",
            "jerseyNum": 41,
            "birthDate": "March 18, 1989",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'4"`,
            "position": "D",
            "domHand": "R",
            "weight": "216 lbs.",
            "birthPlace": "Thunder Bay, ON, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",43, 2, 3, 5, 9, 29, "?", "?"],
            }
        },
        {
            "firstName": "Justin",
            "lastName": "Faulk",
            "jerseyNum": 72,
            "birthDate": "March 20, 1992",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'0"`,
            "position": "D",
            "domHand": "R",
            "weight": "214 lbs.",
            "birthPlace": "South St. Paul, MN, USA",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",82, 11, 39, 50, -4, 34, "?", "?"],
            }
        },
        {
            "firstName": "Torey",
            "lastName": "Krug",
            "jerseyNum": 47,
            "birthDate": "April 12, 1991",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `5'9"`,
            "position": "D",
            "domHand": "L",
            "weight": "194 lbs.",
            "birthPlace": "Livonia, MI, USA",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",63, 7, 25, 32, -26, 49, "?", "?"],
            }
        },
        {
            "firstName": "Nick",
            "lastName": "Leddy",
            "jerseyNum": 4,
            "birthDate": "March 20, 1991",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'0"`,
            "position": "D",
            "domHand": "L",
            "weight": "205 lbs.",
            "birthPlace": "Eden Prairie, MN, USA",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",78, 2, 21, 23, 4, 20, "?", "?"],
            }
        },
        {
            "firstName": "Colton",
            "lastName": "Parayko",
            "jerseyNum": 55,
            "birthDate": "May 12, 1993",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'6"`,
            "position": "D",
            "domHand": "R",
            "weight": "228 lbs.",
            "birthPlace": "St. Albert, AB, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",79, 4, 23, 27, -19, 30, "?", "?"],
            }
        },
        {
            "firstName": "Scott",
            "lastName": "Perunovich",
            "jerseyNum": 48,
            "birthDate": "August 18, 1998",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `5'10"`,
            "position": "D",
            "domHand": "L",
            "weight": "175 lbs.",
            "birthPlace": "Hibbing, MN, USA",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0, 0, 0, 0, 0, 0, "?", "?"],
            }
        },
        {
            "firstName": "Calle",
            "lastName": "Rosen",
            "jerseyNum": 43,
            "birthDate": "February 2, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'1"`,
            "position": "D",
            "domHand": "L",
            "weight": "188 lbs.",
            "birthPlace": "Vaxjo, SWE",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",79, 4, 23, 27, -19, 30, "?", "?"],
            }
        },
        {
            "firstName": "Marco",
            "lastName": "Scandella",
            "jerseyNum": 6,
            "birthDate": "February 23, 1990",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'3"`,
            "position": "D",
            "domHand": "L",
            "weight": "212 lbs.",
            "birthPlace": "Montreal, QC, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",20, 1, 1, 2, 2, 6, "?", "?"],
            }
        },
        {
            "firstName": "Tyler",
            "lastName": "Tucker",
            "jerseyNum": 75,
            "birthDate": "March 1, 2000",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'1"`,
            "position": "D",
            "domHand": "L",
            "weight": "204 lbs.",
            "birthPlace": "Thunder Bay, ON, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["PHI",26, 1, 3, 4, -9, 31, "?", "?"],
            }
        },
        {
            "firstName": "Jordan",
            "lastName": "Binnington",
            "jerseyNum": 50,
            "birthDate": "July 11, 1993",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'2"`,
            "position": "G",
            "domHand": "N/A",
            "weight": "172 lbs.",
            "birthPlace": "Richmond Hill, ON, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",61, 27, 27, 6, 0.894, 3.31, "?", "?"],
            }
        },
        {
            "firstName": "Joel",
            "lastName": "Hofer",
            "jerseyNum": 1,
            "birthDate": "July 30, 2000",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'5"`,
            "position": "G",
            "domHand": "N/A",
            "weight": "179 lbs.",
            "birthPlace": "Winnipeg, MB, CAN",
            "bio": "-",
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",6, 3, 1, 1, 0.905, 3.22, "?", "?"],
            }
        },
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

function calcAge(birthDate) {
    
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