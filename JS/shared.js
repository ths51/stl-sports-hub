statsData = {
    "statOrder": {
        "NHL": ["Team","GP","G","A","P","+/-","PIM","S%","FO%"],
    },
    "majorStats": {
        "NHL": ["GP","G","A","P","+/-"],
        "NHL_G": ["GP","W","L","OTL","SV%","GAA"],
        "MLB": ["GP","AVG","HR","RBI","SB"],
        "MLB_SP": ["IP","W-L","ERA","K","WHIP"],
        "MLB_RP": ["IP","W-L","ERA","K","WHIP"],
        "MLS": ["MP","G","SOT","Pass%","FC"],
        "MLS_GK": ["MP","CS","SV","SV%","PK SV%"],
        "XFL": [],
        "XFL_A": [],
        "XFL_B": [],
        "XFL_C": [],
    },
    "specialtyStatPositions": {
        "NHL": ["G"],
        "MLB": ["SP","RP"],
        "MLS": ["GK"],
        "XFL": ["QB","LB","S"] // ETC ETC
    }
}

allTeamData = {
    "colors": {
        "MLB": [
            {
                "team": "",
                "color1": "#000000",
                "color2": "#555555"
            },
    
            {
                "team": "ARI",
                "color1": "#A71930",
                "color2": "#------"
            },
    
            {
                "team": "ATL",
                "color1": "#CE1141",
                "color2": "#------"
            },
            
            {
                "team": "BAL",
                "color1": "#DF4601",
                "color2": "#------"
            },
            {
                "team": "BOS",
                "color1": "#C62033",
                "color2": "#------"
            },
            
            {
                "team": "CHC",
                "color1": "#0E3386",
                "color2": "#------"
            },
            {
                "team": "CHI",
                "color1": "#231F20",
                "color2": "#------"
            },
            
            {
                "team": "CIN",
                "color1": "#C6011F",
                "color2": "#------"
            },
            {
                "team": "CLE",
                "color1": "#00385D",
                "color2": "#------"
            },
            
            {
                "team": "COL",
                "color1": "#000000",
                "color2": "#------"
            },
            {
                "team": "DET",
                "color1": "#0B2B55",
                "color2": "#------"
            },
            
            {
                "team": "HOU",
                "color1": "#002D62",
                "color2": "#------"
            },
            {
                "team": "KCR",
                "color1": "#014687",
                "color2": "#------"
            },
            
            {
                "team": "LAA",
                "color1": "#CD1141",
                "color2": "#------"
            },
            {
                "team": "LAD",
                "color1": "#005797",
                "color2": "#------"
            },
            
            {
                "team": "MIA",
                "color1": "#00A3E0",
                "color2": "#------"
            },
            {
                "team": "MIL",
                "color1": "#12284B",
                "color2": "#------"
            },
            
            {
                "team": "MIN",
                "color1": "#091E3F",
                "color2": "#------"
            },
            {
                "team": "NYM",
                "color1": "#FE5C15",
                "color2": "#------"
            },
            
            {
                "team": "NYY",
                "color1": "#142448",
                "color2": "#------"
            },
            {
                "team": "OAK",
                "color1": "#003831",
                "color2": "#------"
            },
            
            {
                "team": "PHI",
                "color1": "#C51D3A",
                "color2": "#------"
            },
            {
                "team": "PIT",
                "color1": "#000000",
                "color2": "#------"
            },
            
            {
                "team": "SDP",
                "color1": "#2A211A",
                "color2": "#------"
            },
            {
                "team": "SEA",
                "color1": "#002C56",
                "color2": "#------"
            },
            
            {
                "team": "SFG",
                "color1": "#231F20",
                "color2": "#------"
            },
            {
                "team": "STL",
                "color1": "#B72126",
                "color2": "#------"
            },
            
            {
                "team": "TBR",
                "color1": "#092C5C",
                "color2": "#------"
            },
            {
                "team": "TEX",
                "color1": "#003278",
                "color2": "#------"
            },
            
            {
                "team": "TOR",
                "color1": "#134A8D",
                "color2": "#------"
            },
            {
                "team": "WSH",
                "color1": "#AB0104",
                "color2": "#------"
            },
        ],
        "NHL": [
            {
                "team": "",
                "color1": "#000000",
                "color2": "#555555"
            },
    
            {
                "team": "ANA",
                "color1": "#111111",
                "color2": "#F95602"
            },
            
            {
                "team": "ARI",
                "color1": "#111111",
                "color2": "#952C33"
            },
            {
                "team": "BOS",
                "color1": "#111111",
                "color2": "#FCB514"
            },
            
            {
                "team": "BUF",
                "color1": "#003087",
                "color2": "FFB81C"
            },
            {
                "team": "CGY",
                "color1": "#D2001C",
                "color2": "#FAAF19"
            },
            
            {
                "team": "CAR",
                "color1": "#D2001C",
                "color2": "#111111"
            },
            {
                "team": "CHI",
                "color1": "#CF0A2C",
                "color2": "#000000"
            },
            
            {
                "team": "COL",
                "color1": "#6F263D",
                "color2": "#236192"
            },
            {
                "team": "CBJ",
                "color1": "#002654",
                "color2": "#CE1126"
            },
            
            {
                "team": "DAL",
                "color1": "#00833C",
                "color2": "#111111"
            },
            {
                "team": "DET",
                "color1": "#CE1126",
                "color2": "#FFFFFF"
            },
            
            {
                "team": "EDM",
                "color1": "#02225D",
                "color2": "#FC4C02"
            },
            {
                "team": "FLA",
                "color1": "#C8102E",
                "color2": "#041E42"
            },
            
            {
                "team": "LAK",
                "color1": "#000000",
                "color2": "#A2AAAD"
            },
            {
                "team": "MIN",
                "color1": "#024930",
                "color2": "AF1E24"
            },
            
            {
                "team": "MTL",
                "color1": "#AF1E2D",
                "color2": "#192168"
            },
            {
                "team": "NSH",
                "color1": "#FFB81C",
                "color2": "#041E42"
            },
            
            {
                "team": "NJD",
                "color1": "#CE1126",
                "color2": "#000000"
            },
            {
                "team": "NYI",
                "color1": "#00539B",
                "color2": "#F47D30"
            },
            
            {
                "team": "NYR",
                "color1": "#0038A8",
                "color2": "#CE1126"
            },
            {
                "team": "OTT",
                "color1": "#000000",
                "color2": "#DA1A32"
            },
            
            {
                "team": "PHI",
                "color1": "#F74902",
                "color2": "#000000"
            },
            {
                "team": "PIT",
                "color1": "#000000",
                "color2": "#FCB514"
            },
            
            {
                "team": "SJS",
                "color1": "#006D75",
                "color2": "#000000"
            },
            {
                "team": "SEA",
                "color1": "#001425",
                "color2": "#96D8D8"
            },
            
            {
                "team": "STL",
                "color1": "#002F87",
                "color2": "#FCB514"
            },
            {
                "team": "TBL",
                "color1": "#002868",
                "color2": "#FFFFFF"
            },
            
            {
                "team": "TOR",
                "color1": "#00205B",
                "color2": "#FFFFFF"
            },
            {
                "team": "VAN",
                "color1": "#003D7D",
                "color2": "#007B49"
            },
            
            {
                "team": "VGK",
                "color1": "#B4975A",
                "color2": "#333F42"
            },
            {
                "team": "WSH",
                "color1": "#CF0A2C",
                "color2": "#041E41"
            },
            
            {
                "team": "WPG",
                "color1": "#041E41",
                "color2": "#004C97"
            },
            {
                "team": "ANA 2",
                "color1": "#F95602",
                "color2": "#111111"
            },
            
            {
                "team": "ARI 2",
                "color1": "#8c2633",
                "color2": "#111111"
            },
            {
                "team": "BOS 2",
                "color1": "#111111",
                "color2": "#FCB514"
            },
            
            {
                "team": "BUF 2",
                "color1": "#003087",
                "color2": "FFB81C"
            },
    
            {
                "team": "CAR 2",
                "color1": "#111111",
                "color2": "#d01026"
            },
            
            {
                "team": "CAR 3",
                "color1": "#c6c6ce",
                "color2": "#027b20"
            },
            {
                "team": "CBJ 2",
                "color1": "#011e42",
                "color2": "#decca3"
            },
            
            {
                "team": "CGY 2",
                "color1": "#000000",
                "color2": "#d30217"
            },
            {
                "team": "CHI 2",
                "color1": "#010101",
                "color2": "#FFFFFF"
            },
            
            {
                "team": "COL 2",
                "color1": "#002147",
                "color2": "#6F253C"
            },
            {
                "team": "DAL 2",
                "color1": "#000000",
                "color2": "#3dd91b"
            },
            
            {
                "team": "STL 2",
                "color1": "#184fb5",
                "color2": "#f7c705"
            },
            {
                "team": "STL 3",
                "color1": "#fcb513",
                "color2": "#1d51a0"
            },
            
            {
                "team": "STL 4",
                "color1": "#012c8a",
                "color2": "#fec701"
            },
            {
                "team": "MTL 2",
                "color1": "#3abded",
                "color2": "#192168"
            },
            
            {
                "team": "MIN 2",
                "color1": "#009236",
                "color2": "#fccf06"
            }
        ],
        "MLS": [
            {
                "team": "",
                "color1": "#000000",
                "color2": "#555555"
            },
    
            {
                "team": "ATL",
                "color1": "#231F20",
                "color2": "#------"
            },
    
            {
                "team": "ATX",
                "color1": "#00B140",
                "color2": "#------"
            },
            
            {
                "team": "CHI",
                "color1": "#7CCDEF",
                "color2": "#------"
            },
            {
                "team": "CIN",
                "color1": "#14478E",
                "color2": "#------"
            },
            
            {
                "team": "CLT",
                "color1": "#1A85C8",
                "color2": "#------"
            },
            {
                "team": "CLB",
                "color1": "#000000",
                "color2": "#------"
            },
            
            {
                "team": "COL",
                "color1": "#960A2C",
                "color2": "#------"
            },
            {
                "team": "DAL",
                "color1": "#E81F3E",
                "color2": "#------"
            },
            
            {
                "team": "DCU",
                "color1": "#231F20",
                "color2": "#------"
            },
            {
                "team": "HOU",
                "color1": "#101820",
                "color2": "#------"
            },
            
            {
                "team": "LAFC",
                "color1": "#17191D",
                "color2": "#------"
            },
            {
                "team": "LAG",
                "color1": "#00245D",
                "color2": "#------"
            },
            
            {
                "team": "MIA",
                "color1": "#F6B4CD",
                "color2": "#------"
            },
            {
                "team": "MIN",
                "color1": "#8CD2F4",
                "color2": "#------"
            },
            
            {
                "team": "MTL",
                "color1": "#003DA6",
                "color2": "#------"
            },
            {
                "team": "NER",
                "color1": "#CE0E2D",
                "color2": "#------"
            },
            
            {
                "team": "NSH",
                "color1": "#ECE83A",
                "color2": "#201546"
            },
            {
                "team": "NYC",
                "color1": "#28295C",
                "color2": "#------"
            },
            
            {
                "team": "NYR",
                "color1": "#ED1E36",
                "color2": "#------"
            },
            {
                "team": "ORL",
                "color1": "#633492",
                "color2": "#------"
            },
            
            {
                "team": "PHI",
                "color1": "#3E8EDE",
                "color2": "#------"
            },
            {
                "team": "PRT",
                "color1": "#0D421D",
                "color2": "#------"
            },
            
            {
                "team": "RSL",
                "color1": "#013A81",
                "color2": "#------"
            },
            {
                "team": "SEA",
                "color1": "#005595",
                "color2": "#------"
            },
            
            {
                "team": "SJE",
                "color1": "#000000",
                "color2": "#------"
            },
            {
                "team": "SKC",
                "color1": "#91B0D5",
                "color2": "#------"
            },
            
            {
                "team": "STL",
                "color1": "#DD004A",
                "color2": "#------"
            },
            {
                "team": "TOR",
                "color1": "#B81137",
                "color2": "#------"
            },
            
            {
                "team": "VAN",
                "color1": "#00245E",
                "color2": "#------"
            },
        ],
        "XFL": [
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
        ]
    },

    "games": {
        "MLB": [
            {
                "date": "3-30-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "TOR",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 9,
                "oppScore": 10,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-1-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "TOR",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-2-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "TOR",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 9,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-3-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ATL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-4-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ATL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-5-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ATL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-7-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-8-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 0,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-9-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-10-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-11-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 9,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-12-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-13-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-14-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 0,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-15-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-16-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-17-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ARI",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-18-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ARI",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-19-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ARI",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 14,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-21-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SEA",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-22-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SEA",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-23-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SEA",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-24-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SFG",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-25-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SFG",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-26-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SFG",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-27-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SFG",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 0,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-28-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAD",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-29-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAD",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "4-30-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAD",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-2-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAA",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-3-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAA",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-4-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAA",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 11,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-5-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "DET",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-6-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "DET",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-7-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "DET",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 12,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-8-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-9-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-10-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 10,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-12-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "BOS",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 8,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-13-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "BOS",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-14-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "BOS",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 9,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-15-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 18,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-16-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-17-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": "-",
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-18-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAD",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 16,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-19-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAD",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-20-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAD",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-21-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAD",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 10,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-22-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-23-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 8,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-24-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 10,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-25-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-26-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CLE",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-27-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CLE",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-28-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CLE",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-29-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "KCR",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "5-30-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "KCR",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-2-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-3-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-4-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 2,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-5-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "TEX",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-6-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "TEX",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-7-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "TEX",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 0,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-9-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-10-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-11-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-12-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SFG",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-13-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SFG",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 11,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-14-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SFG",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-16-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NYM",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-17-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NYM",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-18-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NYM",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 8,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-19-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "WSH",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 8,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-20-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "WSH",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 9,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-21-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "WSH",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-24-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 9,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-25-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-27-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "HOU",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 2,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-28-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "HOU",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 10,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "6-29-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "HOU",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 14,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-1-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NYY",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 11,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-1-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NYY",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-2-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NYY",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-3-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-4-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 15,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-5-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 9,
                "oppScore": 10,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-6-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 0,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-7-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHI",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-8-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHI",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 0,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-9-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHI",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-14-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "WSH",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-15-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "WSH",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 9,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-16-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "WSH",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 8,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-17-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-18-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 2,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-19-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-20-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 2,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-21-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-22-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-23-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-24-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ARI",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 10,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-25-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ARI",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-26-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ARI",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 11,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-27-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 10,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-28-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-29-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "7-30-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHC",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 0,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-1-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "MIN",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-2-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "MIN",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 3,
                "STLhits": 9,
                "opphits": 2,
            },
    
            
            {
                "date": "8-3-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "MIN",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-4-2023",
                "time": "7:15 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 4,
                "oppScore": 9,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-5-2023",
                "time": "6:15 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 2,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-6-2023",
                "time": "1:15 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 1,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-8-2023",
                "time": "5:40 PM",
                "STLlogo": 1,
                "opponent": "TBR",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-9-2023",
                "time": "5:40 PM",
                "STLlogo": 1,
                "opponent": "TBR",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-10-2023",
                "time": "5:40 PM",
                "STLlogo": 1,
                "opponent": "TBR",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 2,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-11-2023",
                "time": "7:10 PM",
                "STLlogo": 1,
                "opponent": "KCR",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 12,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-12-2023",
                "time": "6:10 PM",
                "STLlogo": 1,
                "opponent": "KCR",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 5,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-14-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "OAK",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 5,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-15-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "OAK",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 2,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-16-2023",
                "time": "5:45 PM",
                "STLlogo": 1,
                "opponent": "OAK",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 0,
                "oppScore": 8,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-17-2023",
                "time": "6:15 PM",
                "STLlogo": 1,
                "opponent": "NYM",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-18-2023",
                "time": "7:15 PM",
                "STLlogo": 1,
                "opponent": "NYM",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 7,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-19-2023",
                "time": "6:15 PM",
                "STLlogo": 1,
                "opponent": "NYM",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 2,
                "oppScore": 13,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-20-2023",
                "time": "1:15 PM",
                "STLlogo": 1,
                "opponent": "NYM",
                "home": true,
                "final": true,
                "inningCt": 9,
                "STLscore": 7,
                "oppScore": 3,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-21-2023",
                "time": "6:05 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": false,
                "final": false,
                "inningCt": 9,
                "STLscore": 1,
                "oppScore": 11,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-22-2023",
                "time": "6:05 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 3,
                "oppScore": 6,
                "STLhits": 0,
                "opphits": 0,
            },
    
            
            {
                "date": "8-23-2023",
                "time": "11:35 AM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": false,
                "final": true,
                "inningCt": 9,
                "STLscore": 6,
                "oppScore": 4,
                "STLhits": 0,
                "opphits": 0,
            },

            {
                "date": "8-25-2023",
                "time": "6:05 PM",
                "STLlogo": 1,
                "opponent": "PHI",
                "home": false,
                "final": true,
                "STLscore": 2,
                "oppScore": 7,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "8-26-2023",
                "time": "6:15 PM",
                "STLlogo": 1,
                "opponent": "PHI",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 12,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "8-27-2023",
                "time": "12:35 PM",
                "STLlogo": 1,
                "opponent": "PHI",
                "home": false,
                "final": true,
                "STLscore": 0,
                "oppScore": 3,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "8-28-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "SDP",
                "home": true,
                "final": true,
                "STLscore": 1,
                "oppScore": 4,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "8-29-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "SDP",
                "home": true,
                "final": true,
                "STLscore": 6,
                "oppScore": 5,
                "inningCt": 10,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "8-30-2023",
                "time": "1:15 PM",
                "STLlogo": 1,
                "opponent": "SDP",
                "home": true,
                "final": true,
                "STLscore": 5,
                "oppScore": 4,
                "inningCt": 10,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-1-2023",
                "time": "7:15 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": true,
                "final": true,
                "STLscore": 2,
                "oppScore": 4,
                "inningCt": 10,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-2-2023",
                "time": "6:15 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": true,
                "final": true,
                "STLscore": 6,
                "oppScore": 7,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-3-2023",
                "time": "1:15 PM",
                "STLlogo": 1,
                "opponent": "PIT",
                "home": true,
                "final": true,
                "STLscore": 6,
                "oppScore": 4,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-5-2023",
                "time": "6:20 PM",
                "STLlogo": 1,
                "opponent": "ATL",
                "home": false,
                "final": true,
                "STLscore": 10,
                "oppScore": 6,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-6-2023",
                "time": "6:20 PM",
                "STLlogo": 1,
                "opponent": "ATL",
                "home": false,
                "final": true,
                "STLscore": 11,
                "oppScore": 6,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-7-2023",
                "time": "6:20 PM",
                "STLlogo": 1,
                "opponent": "ATL",
                "home": false,
                "final": true,
                "STLscore": 5,
                "oppScore": 8,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-8-2023",
                "time": "5:40 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": false,
                "final": true,
                "STLscore": 9,
                "oppScore": 4,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-9-2023",
                "time": "5:40 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": false,
                "final": true,
                "STLscore": 4,
                "oppScore": 3,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-10-2023",
                "time": "12:40 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 7,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-11-2023",
                "time": "5:35 PM",
                "STLlogo": 1,
                "opponent": "BAL",
                "home": false,
                "final": true,
                "STLscore": 5,
                "oppScore": 11,
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-12-2023",
                "time": "5:35 PM",
                "STLlogo": 1,
                "opponent": "BAL",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-13-2023",
                "time": "5:35 PM",
                "STLlogo": 1,
                "opponent": "BAL",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-15-2023",
                "time": "7:15 PM",
                "STLlogo": 1,
                "opponent": "PHI",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-16-2023",
                "time": "6:15 PM",
                "STLlogo": 1,
                "opponent": "PHI",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-17-2023",
                "time": "1:15 AM",
                "STLlogo": 1,
                "opponent": "PHI",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-18-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-19-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-20-2023",
                "time": "6:45 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-21-2023",
                "time": "12:15 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-22-2023",
                "time": "8:40 PM",
                "STLlogo": 1,
                "opponent": "SDP",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-23-2023",
                "time": "7:40 PM",
                "STLlogo": 1,
                "opponent": "SDP",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-24-2023",
                "time": "3:10 PM",
                "STLlogo": 1,
                "opponent": "SDP",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-26-2023",
                "time": "6:40 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-27-2023",
                "time": "6:40 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-28-2023",
                "time": "3:10 PM",
                "STLlogo": 1,
                "opponent": "MIL",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-29-2023",
                "time": "7:15 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
            {
                "date": "9-30-2023",
                "time": "6:15 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "inningCt": 9,
                "XXXXX": false,
                "STLhits": 0,
                "oppHits": 0,
            },
    
        ],
        "NHL": [
            {
                "date": "10-12-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "DAL",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-14-2023",
                "time": "7:00 PM",
                "STLlogo": 2,
                "opponent": "SEA",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-19-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ARI",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-21-2023",
                "time": "7:00 PM",
                "STLlogo": 2,
                "opponent": "PIT",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-24-2023",
                "time": "7:45 PM",
                "STLlogo": 1,
                "opponent": "WPG",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-26-2023",
                "time": "8:00 PM",
                "STLlogo": 1,
                "opponent": "CGY",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-27-2023",
                "time": "9:00 PM",
                "STLlogo": 1,
                "opponent": "VAN",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "11-1-2023",
                "time": "8:30 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "11-3-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NJD",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "11-4-2023",
                "time": "6:00 PM",
                "STLlogo": 2,
                "opponent": "MTL",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "overtime": false,
                "shootout": false,
                "STLshots": 0,
                "oppShots": 0,
            },
        ],
        "MLS": [
            {
                "date": "2-25-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "ATX",
                "home": false,
                "final": true,
                "STLscore": 3,
                "oppScore": 2,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "3-4-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CLT",
                "home": true,
                "final": true,
                "STLscore": 3,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "3-11-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "POR",
                "home": false,
                "final": true,
                "STLscore": 2,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "3-18-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SJ",
                "home": true,
                "final": true,
                "STLscore": 3,
                "oppScore": 0,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "3-25-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "RSL",
                "home": false,
                "final": true,
                "STLscore": 4,
                "oppScore": 0,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "4-1-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIN",
                "home": true,
                "final": true,
                "STLscore": 0,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "4-8-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SEA",
                "home": false,
                "final": true,
                "STLscore": 0,
                "oppScore": 3,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "4-15-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CIN",
                "home": true,
                "final": true,
                "STLscore": 5,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "4-22-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "4-29-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "POR",
                "home": true,
                "final": true,
                "STLscore": 1,
                "oppScore": 2,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "5-6-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "DAL",
                "home": false,
                "final": true,
                "STLscore": 0,
                "oppScore": 2,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "5-13-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CHI",
                "home": false,
                "final": true,
                "STLscore": 0,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "5-20-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SKC",
                "home": true,
                "final": true,
                "STLscore": 4,
                "oppScore": 0,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "5-27-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "VAN",
                "home": true,
                "final": true,
                "STLscore": 3,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "6-3-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "HOU",
                "home": true,
                "final": true,
                "STLscore": 3,
                "oppScore": 0,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "6-11-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAG",
                "home": true,
                "final": true,
                "STLscore": 1,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "6-17-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "NSH",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 3,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "6-21-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "RSL",
                "home": true,
                "final": true,
                "STLscore": 1,
                "oppScore": 3,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "6-24-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "SJ",
                "home": false,
                "final": true,
                "STLscore": 2,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "7-1-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "COL",
                "home": true,
                "final": true,
                "STLscore": 2,
                "oppScore": 0,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "7-8-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "TOR",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 0,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "7-12-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAFC",
                "home": false,
                "final": true,
                "STLscore": 0,
                "oppScore": 3,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "7-15-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "MIA",
                "home": true,
                "final": true,
                "STLscore": 3,
                "oppScore": 0,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "7-23-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CLB",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 2,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "7-27-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "CFA",
                "home": false,
                "final": true,
                "STLscore": 0,
                "oppScore": 4,
                "STLshots": 0,
                "oppShots": 0,
            },
            {
                "date": "8-20-2023",
                "time": "8:30 PM",
                "STLlogo": 1,
                "opponent": "ATX",
                "home": true,
                "final": true,
                "STLscore": 6,
                "oppScore": 3,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "8-26-2023",
                "time": "6:30 PM",
                "STLlogo": 1,
                "opponent": "ORL",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 2,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "8-30-2023",
                "time": "7:30 PM",
                "STLlogo": 1,
                "opponent": "DAL",
                "home": true,
                "final": true,
                "STLscore": 2,
                "oppScore": 1,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "9-2-2023",
                "time": "7:30 PM",
                "STLlogo": 1,
                "opponent": "SKC",
                "home": false,
                "final": true,
                "STLscore": 1,
                "oppScore": 2,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "9-10-2023",
                "time": "7:00 PM",
                "STLlogo": 1,
                "opponent": "LAG",
                "home": false,
                "final": true,
                "STLscore": 2,
                "oppScore": 2,
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "9-16-2023",
                "time": "7:30 PM",
                "STLlogo": 1,
                "opponent": "HOU",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "9-20-2023",
                "time": "7:30 PM",
                "STLlogo": 1,
                "opponent": "LAFC",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "9-23-2023",
                "time": "7:30 PM",
                "STLlogo": 1,
                "opponent": "MIN",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "9-30-2023",
                "time": "7:30 PM",
                "STLlogo": 1,
                "opponent": "SKC",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-4-2023",
                "time": "9:30 PM",
                "STLlogo": 1,
                "opponent": "VAN",
                "home": false,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "STLshots": 0,
                "oppShots": 0,
            },
             
            {
                "date": "10-21-2023",
                "time": "8:00 PM",
                "STLlogo": 1,
                "opponent": "SEA",
                "home": true,
                "final": false,
                "STLscore": "-",
                "oppScore": "-",
                "STLshots": 0,
                "oppShots": 0,
            },
        ],
        "XFL": [
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
        ],

    }
}

function getColorIndex(text, sport) {
    let colorIndex = 0
    for (let num = 0; num < allTeamData.colors[sport].length; num++) {
        var currOpp = allTeamData.colors[sport][num].team
        if (text == currOpp) {
            // console.log(currOpp)
            colorIndex = num
            break
        }
    }
    return colorIndex
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
            "weight": "206 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "Blais was drafted in the sixth round by the Blues in 2014 and defied all odds to reach the NHL with the team in 2017. He won a Stanley Cup with the Blues in 2019 and was eventually traded to the Rangers in a deal for Pavel Buchnevich. After suffering a major knee injury early in the 2021 campaign that sidelined him for the rest of the season, Blais was only able to score 5 points in 40 games with New York in 2022-23, but was traded back to the Blues, where he put up 9 goals and 20 points in only 31 games.",
            "contractStructure": {
                2023: 1_000_000
            },
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
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3042081.png&w=350&h=254",
            "height": `6'1"`,
            "position": "LW",
            "domHand": "L",
            "weight": "196 lbs",
            "birthPlace": "Cherepovets, RUS",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",63, 26, 41, 67, 14, 36, "?", "?"],
            }
        },
        {
            "firstName": "Kevin",
            "lastName": "Hayes",
            "jerseyNum": 12,
            "birthDate": "May 8, 1992",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5767.png",
            "height": `6'5"`,
            "position": "RW",
            "domHand": "L",
            "weight": "216 lbs",
            "birthPlace": "Dorcester, MA, USA",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["PHI",81, 18, 36, 54, -22, 23, "?", "?"],
            }
        },
        {
            "firstName": "Kasperi",
            "lastName": "Kapanen",
            "jerseyNum": 42,
            "birthDate": "July 23, 1996",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3114775.png",
            "height": `6'1"`,
            "position": "RW",
            "domHand": "R",
            "weight": "194 lbs",
            "birthPlace": "Kuopio, FIN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL/PIT",66, 15, 19, 34, -8, 18, "?", "?"],
            }
        },
        {
            "firstName": "Jordan",
            "lastName": "Kyrou",
            "jerseyNum": 25,
            "birthDate": "May 5, 1998",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4062251.png",
            "height": `6'1"`,
            "position": "RW",
            "domHand": "R",
            "weight": "196 lbs",
            "birthPlace": "Toronto, ON, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",79, 37, 36, 73, -38, 22, "?", "?"],
            }
        },
        {
            "firstName": "Mackenzie",
            "lastName": "MacEachern",
            "jerseyNum": 28,
            "birthDate": "March 9, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3069342.png&w=350&h=254",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "193 lbs",
            "birthPlace": "Bloomfield Hills, MI, USA",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["CAR",0, 0, 0, 0, 0, 0, "?", "?"],
            }
        },
        {
            "firstName": "Jake",
            "lastName": "Neighbours",
            "jerseyNum": 63,
            "birthDate": "March 29, 2002",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4697409.png",
            "height": `6'0"`,
            "position": "LW",
            "domHand": "L",
            "weight": "201 lbs",
            "birthPlace": "Calgary, AB, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",43, 6, 4, 10, -19, 24, "?", "?"],
            }
        },
        {
            "firstName": "Brandon",
            "lastName": "Saad",
            "jerseyNum": 20,
            "birthDate": "October 27, 1992",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2563065.png",
            "height": `6'1"`,
            "position": "LW",
            "domHand": "L",
            "weight": "215 lbs",
            "birthPlace": "Pittsburgh, PA, USA",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",71, 19, 18, 37, -8, 12, "?", "?"],
            }
        },
        {
            "firstName": "Brayden",
            "lastName": "Schenn",
            "jerseyNum": 10,
            "birthDate": "August 22, 1991",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5219.png&w=350&h=254",
            "height": `6'1"`,
            "position": "C",
            "domHand": "L",
            "weight": "199 lbs",
            "birthPlace": "Saskatoon, SK, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",82, 21, 44, 65, -27, 50, "?", "?"],
            }
        },
        {
            "firstName": "Oskar",
            "lastName": "Sundqvist",
            "jerseyNum": 70,
            "birthDate": "March 23, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3069277.png",
            "height": `6'3"`,
            "position": "C",
            "domHand": "R",
            "weight": "220 lbs",
            "birthPlace": "Boden, SWE",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["DET/MIN",67, 10, 18, 28, -4, 28, "?", "?"],
            }
        },
        {
            "firstName": "Robert",
            "lastName": "Thomas",
            "jerseyNum": 18,
            "birthDate": "July 2, 1999",
            "image": "https://a.espncdn.com/i/headshots/nhl/players/full/4233637.png",
            "height": `6'0"`,
            "position": "C",
            "domHand": "R",
            "weight": "218 lbs",
            "birthPlace": "Aurora, ON, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",73, 18, 47, 65, -8, 22, "?", "?"],
            }
        },
        {
            "firstName": "Alexey",
            "lastName": "Toropchenko",
            "jerseyNum": 13,
            "birthDate": "June 25, 1999",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4392454.png",
            "height": `6'6"`,
            "position": "RW",
            "domHand": "L",
            "weight": "222 lbs",
            "birthPlace": "Moscow, RUS",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",69, 10, 9, 19, 6, 12, "?", "?"],
            }
        },
        {
            "firstName": "Jakub",
            "lastName": "Vrana",
            "jerseyNum": 15,
            "birthDate": "February 28, 1996",
            "image": "https://a.espncdn.com/i/headshots/nhl/players/full/3114747.png",
            "height": `6'0"`,
            "position": "LW",
            "domHand": "L",
            "weight": "190 lbs",
            "birthPlace": "Prague, CZE",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["DET/STL",25, 11, 5, 16, 3, 10, "?", "?"],
            }
        },
        {
            "firstName": "Nathan",
            "lastName": "Walker",
            "jerseyNum": 26,
            "birthDate": "February 7, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3067860.png",
            "height": `5'9"`,
            "position": "LW",
            "domHand": "L",
            "weight": "187 lbs",
            "birthPlace": "Cardiff, GBR",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",56, 2, 8, 10, 10, 25, "?", "?"],
            }
        },
        {
            "firstName": "Robert",
            "lastName": "Bortuzzo",
            "jerseyNum": 41,
            "birthDate": "March 18, 1989",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4916.png",
            "height": `6'4"`,
            "position": "D",
            "domHand": "R",
            "weight": "216 lbs",
            "birthPlace": "Thunder Bay, ON, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",43, 2, 3, 5, 9, 29, "?", "?"],
            }
        },
        {
            "firstName": "Justin",
            "lastName": "Faulk",
            "jerseyNum": 72,
            "birthDate": "March 20, 1992",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5746.png&w=350&h=254",
            "height": `6'0"`,
            "position": "D",
            "domHand": "R",
            "weight": "214 lbs",
            "birthPlace": "South St. Paul, MN, USA",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",82, 11, 39, 50, -4, 34, "?", "?"],
            }
        },
        {
            "firstName": "Torey",
            "lastName": "Krug",
            "jerseyNum": 47,
            "birthDate": "April 12, 1991",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2952729.png",
            "height": `5'9"`,
            "position": "D",
            "domHand": "L",
            "weight": "194 lbs",
            "birthPlace": "Livonia, MI, USA",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",63, 7, 25, 32, -26, 49, "?", "?"],
            }
        },
        {
            "firstName": "Nick",
            "lastName": "Leddy",
            "jerseyNum": 4,
            "birthDate": "March 20, 1991",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5447.png",
            "height": `6'0"`,
            "position": "D",
            "domHand": "L",
            "weight": "205 lbs",
            "birthPlace": "Eden Prairie, MN, USA",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",78, 2, 21, 23, 4, 20, "?", "?"],
            }
        },
        {
            "firstName": "Colton",
            "lastName": "Parayko",
            "jerseyNum": 55,
            "birthDate": "May 12, 1993",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3069341.png",
            "height": `6'6"`,
            "position": "D",
            "domHand": "R",
            "weight": "228 lbs",
            "birthPlace": "St. Albert, AB, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",79, 4, 23, 27, -19, 30, "?", "?"],
            }
        },
        {
            "firstName": "Scott",
            "lastName": "Perunovich",
            "jerseyNum": 48,
            "birthDate": "August 18, 1998",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4320665.png",
            "height": `5'10"`,
            "position": "D",
            "domHand": "L",
            "weight": "175 lbs",
            "birthPlace": "Hibbing, MN, USA",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0, 0, 0, 0, 0, 0, "?", "?"],
            }
        },
        {
            "firstName": "Calle",
            "lastName": "Rosen",
            "jerseyNum": 43,
            "birthDate": "February 2, 1994",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4220707.png",
            "height": `6'1"`,
            "position": "D",
            "domHand": "L",
            "weight": "188 lbs",
            "birthPlace": "Vaxjo, SWE",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",79, 4, 23, 27, -19, 30, "?", "?"],
            }
        },
        {
            "firstName": "Marco",
            "lastName": "Scandella",
            "jerseyNum": 6,
            "birthDate": "February 23, 1990",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5218.png",
            "height": `6'3"`,
            "position": "D",
            "domHand": "L",
            "weight": "212 lbs",
            "birthPlace": "Montreal, QC, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",20, 1, 1, 2, 2, 6, "?", "?"],
            }
        },
        {
            "firstName": "Tyler",
            "lastName": "Tucker",
            "jerseyNum": 75,
            "birthDate": "March 1, 2000",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4587904.png&w=350&h=254",
            "height": `6'1"`,
            "position": "D",
            "domHand": "L",
            "weight": "204 lbs",
            "birthPlace": "Thunder Bay, ON, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",26, 1, 3, 4, -9, 31, "?", "?"],
            }
        },
        {
            "firstName": "Jordan",
            "lastName": "Binnington",
            "jerseyNum": 50,
            "birthDate": "July 11, 1993",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2590874.png",
            "height": `6'2"`,
            "position": "G",
            "domHand": "N/A",
            "weight": "172 lbs",
            "birthPlace": "Richmond Hill, ON, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",61, 27, 27, 6, 0.894, 3.31, "?", "?"],
            }
        },
        {
            "firstName": "Joel",
            "lastName": "Hofer",
            "jerseyNum": 1,
            "birthDate": "July 30, 2000",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4587909.png&w=350&h=254",
            "height": `6'5"`,
            "position": "G",
            "domHand": "N/A",
            "weight": "179 lbs",
            "birthPlace": "Winnipeg, MB, CAN",
            "bio": "-",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",6, 3, 1, 1, 0.905, 3.22, "?", "?"],
            }
        },
    ],

    "MLB": [
        {
            "firstName": "Giovanny",
            "lastName": "Gallegos",
            "jerseyNum": 65,
            "birthDate": "",
            "image": "",
            "height": `6'2"`,
            "position": "RP",
            "domHand": "R/R",
            "weight": "215 lbs",
            "birthPlace": "Obregon, MEX",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "Dakota",
            "lastName": "Hudson",
            "jerseyNum": 43,
            "birthDate": "",
            "image": "",
            "height": `6'5"`,
            "position": "SP",
            "domHand": "R/R",
            "weight": "215 lbs",
            "birthPlace": "Dunlap, TN",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "John",
            "lastName": "King",
            "jerseyNum": 47,
            "birthDate": "",
            "image": "",
            "height": `6'2"`,
            "position": "RP",
            "domHand": "L/L",
            "weight": "215 lbs",
            "birthPlace": "Laredo, TX",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "Kyle",
            "lastName": "Leahy",
            "jerseyNum": 64,
            "birthDate": "",
            "image": "",
            "height": `6'5"`,
            "position": "RP",
            "domHand": "S/R",
            "weight": "200 lbs",
            "birthPlace": "Boulder, CO",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "Matthew",
            "lastName": "Liberatore",
            "jerseyNum": 52,
            "birthDate": "",
            "image": "",
            "height": `6'4"`,
            "position": "SP",
            "domHand": "L/L",
            "weight": "200 lbs",
            "birthPlace": "Peoria, AZ",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
            "careerStats": { // Year season ended (2022-23 = 2023)
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        }, 
    ],

    "MLS": [
        {
            "firstName": "",
            "lastName": "",
            "jerseyNum": 0,
            "birthDate": "",
            "image": "",
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
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
            "height": ``,
            "position": "",
            "domHand": "",
            "weight": "",
            "birthPlace": "",
            "bio": "",
            "contractStructure": {
                2023: 1_000_000
            },
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
    if (birthDate.type == String) {
        // console.log("A")
    }
}

let curYear = 2023

function getRoster(sport) {
    let playerCt = rosterData[sport].length
    // console.log(playerCt)
    for (i = 0; i < playerCt; i++) {
        let player = rosterData[sport][i]
        let rosterBox = document.getElementById("fullRoster")
        let statsItems = ""
        let sportList
        // console.log(player.position)
        // console.log(statsData.specialtyStatPositions[sport])
        if (statsData.specialtyStatPositions[sport].includes(player.position)) {
            sportList = sport + "_" + player.position
            // console.log("A")
        } else {
            sportList = sport
        }

        for (val = 0; val < statsData.majorStats[sportList].length; val++) {
            statsItems += `
            <div>
                <h5>${statsData.majorStats[sportList][val]}</h5>
                <h2>${player.careerStats[curYear][val+1]}</h2>
            </div>
            `
        }
        // console.log(player.firstName + " " + player.lastName)
        // console.log(player.careerStats[curYear][0])
        // calcAge(player.birthDate)

        let text = `
            <div class="playerBox">
                <section class="row">
                    <div>
                        <h1 style="font-size: 72pt; font-style: italic; height: 25px; overflow-y: visible; text-align: right;">${player.jerseyNum}</h1>
                        <img src="${player.image}">
                        <h5>${player.firstName}</h5>
                        <h2>${player.lastName}</h2>
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
                    </div>
                </section>
            </div>
        `

        rosterBox.innerHTML += text
    }
}