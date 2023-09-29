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
            "time": "10:05 AM",
            "STLlogo": 1,
            "opponent": "TOR",
            "home": true,
            "final": true,
            "STLscore": "9",
            "oppScore": "10",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-1-2023",
            "time": "11:05 AM",
            "STLlogo": 1,
            "opponent": "TOR",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-2-2023",
            "time": "12:05 PM",
            "STLlogo": 1,
            "opponent": "TOR",
            "home": true,
            "final": true,
            "STLscore": "9",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-3-2023",
            "time": "1:05 PM",
            "STLlogo": 1,
            "opponent": "ATL",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "8",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-4-2023",
            "time": "2:05 PM",
            "STLlogo": 1,
            "opponent": "ATL",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-5-2023",
            "time": "3:05 PM",
            "STLlogo": 1,
            "opponent": "ATL",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "2",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-7-2023",
            "time": "4:05 PM",
            "STLlogo": 1,
            "opponent": "MIL",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-8-2023",
            "time": "5:05 PM",
            "STLlogo": 1,
            "opponent": "MIL",
            "home": false,
            "final": true,
            "STLscore": "6",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-9-2023",
            "time": "6:05 PM",
            "STLlogo": 1,
            "opponent": "MIL",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-10-2023",
            "time": "7:05 PM",
            "STLlogo": 1,
            "opponent": "COL",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-11-2023",
            "time": "8:05 PM",
            "STLlogo": 1,
            "opponent": "COL",
            "home": false,
            "final": true,
            "STLscore": "9",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-12-2023",
            "time": "9:05 PM",
            "STLlogo": 1,
            "opponent": "COL",
            "home": false,
            "final": true,
            "STLscore": "7",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-13-2023",
            "time": "10:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-14-2023",
            "time": "11:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-15-2023",
            "time": "12:05 AM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "6",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-16-2023",
            "time": "1:05 AM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "4",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-17-2023",
            "time": "2:05 AM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-18-2023",
            "time": "3:05 AM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "8",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-19-2023",
            "time": "4:05 AM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": true,
            "final": true,
            "STLscore": "14",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-21-2023",
            "time": "5:05 AM",
            "STLlogo": 1,
            "opponent": "SEA",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-22-2023",
            "time": "6:05 AM",
            "STLlogo": 1,
            "opponent": "SEA",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-23-2023",
            "time": "7:05 AM",
            "STLlogo": 1,
            "opponent": "SEA",
            "home": false,
            "final": true,
            "STLscore": "7",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-24-2023",
            "time": "8:05 AM",
            "STLlogo": 1,
            "opponent": "SFG",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-25-2023",
            "time": "9:05 AM",
            "STLlogo": 1,
            "opponent": "SFG",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-26-2023",
            "time": "10:05 AM",
            "STLlogo": 1,
            "opponent": "SFG",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-27-2023",
            "time": "11:05 AM",
            "STLlogo": 1,
            "opponent": "SFG",
            "home": false,
            "final": true,
            "STLscore": "6",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-28-2023",
            "time": "12:05 PM",
            "STLlogo": 1,
            "opponent": "LAD",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-29-2023",
            "time": "1:05 PM",
            "STLlogo": 1,
            "opponent": "LAD",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "4-30-2023",
            "time": "2:05 PM",
            "STLlogo": 1,
            "opponent": "LAD",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-2-2023",
            "time": "3:05 PM",
            "STLlogo": 1,
            "opponent": "LAA",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-3-2023",
            "time": "4:05 PM",
            "STLlogo": 1,
            "opponent": "LAA",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-4-2023",
            "time": "5:05 PM",
            "STLlogo": 1,
            "opponent": "LAA",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "11",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-5-2023",
            "time": "6:05 PM",
            "STLlogo": 1,
            "opponent": "DET",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-6-2023",
            "time": "7:05 PM",
            "STLlogo": 1,
            "opponent": "DET",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "6",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-7-2023",
            "time": "8:05 PM",
            "STLlogo": 1,
            "opponent": "DET",
            "home": true,
            "final": true,
            "STLscore": "12",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-8-2023",
            "time": "9:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-9-2023",
            "time": "10:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": false,
            "final": true,
            "STLscore": "6",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-10-2023",
            "time": "11:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "10",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-12-2023",
            "time": "12:05 AM",
            "STLlogo": 1,
            "opponent": "BOS",
            "home": false,
            "final": true,
            "STLscore": "8",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-13-2023",
            "time": "1:05 AM",
            "STLlogo": 1,
            "opponent": "BOS",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-14-2023",
            "time": "2:05 AM",
            "STLlogo": 1,
            "opponent": "BOS",
            "home": false,
            "final": true,
            "STLscore": "9",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-15-2023",
            "time": "3:05 AM",
            "STLlogo": 1,
            "opponent": "MIL",
            "home": true,
            "final": true,
            "STLscore": "18",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-16-2023",
            "time": "4:05 AM",
            "STLlogo": 1,
            "opponent": "MIL",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-17-2023",
            "time": "5:05 AM",
            "STLlogo": 1,
            "opponent": "MIL",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-18-2023",
            "time": "6:05 AM",
            "STLlogo": 1,
            "opponent": "LAD",
            "home": true,
            "final": true,
            "STLscore": "16",
            "oppScore": "8",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-19-2023",
            "time": "7:05 AM",
            "STLlogo": 1,
            "opponent": "LAD",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-20-2023",
            "time": "8:05 AM",
            "STLlogo": 1,
            "opponent": "LAD",
            "home": true,
            "final": true,
            "STLscore": "6",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-21-2023",
            "time": "9:05 AM",
            "STLlogo": 1,
            "opponent": "LAD",
            "home": true,
            "final": true,
            "STLscore": "10",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-22-2023",
            "time": "10:05 AM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": false,
            "final": true,
            "STLscore": "5",
            "oppScore": "6",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-23-2023",
            "time": "11:05 AM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": false,
            "final": true,
            "STLscore": "8",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-24-2023",
            "time": "12:05 PM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "10",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-25-2023",
            "time": "1:05 PM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-26-2023",
            "time": "2:05 PM",
            "STLlogo": 1,
            "opponent": "CLE",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-27-2023",
            "time": "3:05 PM",
            "STLlogo": 1,
            "opponent": "CLE",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "1",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-28-2023",
            "time": "4:05 PM",
            "STLlogo": 1,
            "opponent": "CLE",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-29-2023",
            "time": "5:05 PM",
            "STLlogo": 1,
            "opponent": "KCR",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "5-30-2023",
            "time": "6:05 PM",
            "STLlogo": 1,
            "opponent": "KCR",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-2-2023",
            "time": "7:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": false,
            "final": true,
            "STLscore": "5",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-3-2023",
            "time": "8:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-4-2023",
            "time": "9:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "2",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-5-2023",
            "time": "10:05 PM",
            "STLlogo": 1,
            "opponent": "TEX",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-6-2023",
            "time": "11:05 PM",
            "STLlogo": 1,
            "opponent": "TEX",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-7-2023",
            "time": "12:05 AM",
            "STLlogo": 1,
            "opponent": "TEX",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-9-2023",
            "time": "1:05 AM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-10-2023",
            "time": "2:05 AM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "8",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-11-2023",
            "time": "3:05 AM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-12-2023",
            "time": "4:05 AM",
            "STLlogo": 1,
            "opponent": "SFG",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-13-2023",
            "time": "5:05 AM",
            "STLlogo": 1,
            "opponent": "SFG",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "11",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-14-2023",
            "time": "6:05 AM",
            "STLlogo": 1,
            "opponent": "SFG",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "8",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-16-2023",
            "time": "7:05 AM",
            "STLlogo": 1,
            "opponent": "NYM",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-17-2023",
            "time": "8:05 AM",
            "STLlogo": 1,
            "opponent": "NYM",
            "home": false,
            "final": true,
            "STLscore": "5",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-18-2023",
            "time": "9:05 AM",
            "STLlogo": 1,
            "opponent": "NYM",
            "home": false,
            "final": true,
            "STLscore": "8",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-19-2023",
            "time": "10:05 AM",
            "STLlogo": 1,
            "opponent": "WSH",
            "home": false,
            "final": true,
            "STLscore": "8",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-20-2023",
            "time": "11:05 AM",
            "STLlogo": 1,
            "opponent": "WSH",
            "home": false,
            "final": true,
            "STLscore": "9",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-21-2023",
            "time": "12:05 PM",
            "STLlogo": 1,
            "opponent": "WSH",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-24-2023",
            "time": "1:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "9",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-25-2023",
            "time": "2:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-27-2023",
            "time": "3:05 PM",
            "STLlogo": 1,
            "opponent": "HOU",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "2",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-28-2023",
            "time": "4:05 PM",
            "STLlogo": 1,
            "opponent": "HOU",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "10",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "6-29-2023",
            "time": "5:05 PM",
            "STLlogo": 1,
            "opponent": "HOU",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "14",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-1-2023",
            "time": "7:05 PM",
            "STLlogo": 1,
            "opponent": "NYY",
            "home": true,
            "final": true,
            "STLscore": "11",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-1-2023",
            "time": "8:05 PM",
            "STLlogo": 1,
            "opponent": "NYY",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-2-2023",
            "time": "9:05 PM",
            "STLlogo": 1,
            "opponent": "NYY",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-3-2023",
            "time": "10:05 PM",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-4-2023",
            "time": "11:05 PM",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "15",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-5-2023",
            "time": "12:05 AM",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": false,
            "final": true,
            "STLscore": "9",
            "oppScore": "10",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-6-2023",
            "time": "1:05 AM",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-7-2023",
            "time": "2:05 AM",
            "STLlogo": 1,
            "opponent": "CHI",
            "home": false,
            "final": true,
            "STLscore": "8",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-8-2023",
            "time": "3:05 AM",
            "STLlogo": 1,
            "opponent": "CHI",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-9-2023",
            "time": "4:05 AM",
            "STLlogo": 1,
            "opponent": "CHI",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "3",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-14-2023",
            "time": "5:05 AM",
            "STLlogo": 1,
            "opponent": "WSH",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "7",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-15-2023",
            "time": "6:05 AM",
            "STLlogo": 1,
            "opponent": "WSH",
            "home": true,
            "final": true,
            "STLscore": "9",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-16-2023",
            "time": "7:05 AM",
            "STLlogo": 1,
            "opponent": "WSH",
            "home": true,
            "final": true,
            "STLscore": "8",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-17-2023",
            "time": "8:05 AM",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": true,
            "final": true,
            "STLscore": "6",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-18-2023",
            "time": "9:05 AM",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "2",
            "inningCt": 10,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-19-2023",
            "time": "10:05 AM",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": true,
            "final": true,
            "STLscore": "6",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-20-2023",
            "time": "11:05 AM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": false,
            "final": true,
            "STLscore": "7",
            "oppScore": "2",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-21-2023",
            "time": "12:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-22-2023",
            "time": "1:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": false,
            "final": true,
            "STLscore": "6",
            "oppScore": "8",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-23-2023",
            "time": "2:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-24-2023",
            "time": "3:05 PM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": false,
            "final": true,
            "STLscore": "10",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-25-2023",
            "time": "4:05 PM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-26-2023",
            "time": "5:05 PM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": false,
            "final": true,
            "STLscore": "11",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-27-2023",
            "time": "6:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "10",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-28-2023",
            "time": "7:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-29-2023",
            "time": "8:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "7-30-2023",
            "time": "9:05 PM",
            "STLlogo": 1,
            "opponent": "CHC",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-1-2023",
            "time": "10:05 PM",
            "STLlogo": 1,
            "opponent": "MIN",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-2-2023",
            "time": "11:05 PM",
            "STLlogo": 1,
            "opponent": "MIN",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-3-2023",
            "time": "12:05 AM",
            "STLlogo": 1,
            "opponent": "MIN",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-4-2023",
            "time": "1:05 AM",
            "STLlogo": 1,
            "opponent": "COL",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "9",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-5-2023",
            "time": "2:05 AM",
            "STLlogo": 1,
            "opponent": "COL",
            "home": true,
            "final": true,
            "STLscore": "6",
            "oppScore": "2",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-6-2023",
            "time": "3:05 AM",
            "STLlogo": 1,
            "opponent": "COL",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "1",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-8-2023",
            "time": "4:05 AM",
            "STLlogo": 1,
            "opponent": "TBR",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-9-2023",
            "time": "5:05 AM",
            "STLlogo": 1,
            "opponent": "TBR",
            "home": false,
            "final": true,
            "STLscore": "6",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-10-2023",
            "time": "6:05 AM",
            "STLlogo": 1,
            "opponent": "TBR",
            "home": false,
            "final": true,
            "STLscore": "5",
            "oppScore": "2",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-11-2023",
            "time": "7:05 AM",
            "STLlogo": 1,
            "opponent": "KCR",
            "home": false,
            "final": true,
            "STLscore": "8",
            "oppScore": "12",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-12-2023",
            "time": "8:05 AM",
            "STLlogo": 1,
            "opponent": "KCR",
            "home": false,
            "final": true,
            "STLscore": "5",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-14-2023",
            "time": "9:05 AM",
            "STLlogo": 1,
            "opponent": "OAK",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "5",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-15-2023",
            "time": "10:05 AM",
            "STLlogo": 1,
            "opponent": "OAK",
            "home": true,
            "final": true,
            "STLscore": "6",
            "oppScore": "2",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-16-2023",
            "time": "11:05 AM",
            "STLlogo": 1,
            "opponent": "OAK",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "8",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-17-2023",
            "time": "12:05 PM",
            "STLlogo": 1,
            "opponent": "NYM",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-18-2023",
            "time": "1:05 PM",
            "STLlogo": 1,
            "opponent": "NYM",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "7",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-19-2023",
            "time": "2:05 PM",
            "STLlogo": 1,
            "opponent": "NYM",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "13",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-20-2023",
            "time": "3:05 PM",
            "STLlogo": 1,
            "opponent": "NYM",
            "home": true,
            "final": true,
            "STLscore": "7",
            "oppScore": "3",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-21-2023",
            "time": "4:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "11",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-22-2023",
            "time": "5:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "6",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-23-2023",
            "time": "6:05 PM",
            "STLlogo": 1,
            "opponent": "PIT",
            "home": false,
            "final": true,
            "STLscore": "6",
            "oppScore": "4",
            "inningCt": 9,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        {
            "date": "8-25-2023",
            "time": "6:05 PM",
            "STLlogo": 1,
            "opponent": "PHI",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "7",
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
            "STLscore": "1",
            "oppScore": "12",
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
            "STLscore": "0",
            "oppScore": "3",
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
            "STLscore": "1",
            "oppScore": "4",
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
            "STLscore": "6",
            "oppScore": "5",
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
            "STLscore": "5",
            "oppScore": "4",
            "inningCt": 9,
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
            "STLscore": "2",
            "oppScore": "4",
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
            "STLscore": "6",
            "oppScore": "7",
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
            "STLscore": "6",
            "oppScore": "4",
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
            "STLscore": "10",
            "oppScore": "6",
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
            "STLscore": "11",
            "oppScore": "6",
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
            "STLscore": "5",
            "oppScore": "8",
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
            "STLscore": "9",
            "oppScore": "4",
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
            "STLscore": "4",
            "oppScore": "3",
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
            "STLscore": "1",
            "oppScore": "7",
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
            "STLscore": "5",
            "oppScore": "11",
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
            "final": true,
            "STLscore": "5",
            "oppScore": "2",
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
            "final": true,
            "STLscore": "1",
            "oppScore": "0",
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
            "final": true,
            "STLscore": "4",
            "oppScore": "5",
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
            "final": true,
            "STLscore": "1",
            "oppScore": "6",
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
            "final": true,
            "STLscore": "6",
            "oppScore": "5",
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
            "final": true,
            "STLscore": "1",
            "oppScore": "0",
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
            "final": true,
            "STLscore": "3",
            "oppScore": "7",
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
            "final": true,
            "STLscore": "2",
            "oppScore": "8",
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
            "final": true,
            "STLscore": "0",
            "oppScore": "6",
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
            "final": true,
            "STLscore": "2",
            "oppScore": "4",
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
            "final": true,
            "STLscore": "5",
            "oppScore": "2",
            "inningCt": 11,
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
            "final": true,
            "STLscore": "2",
            "oppScore": "12",
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
            "final": true,
            "STLscore": "4",
            "oppScore": "1",
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
            "final": true,
            "STLscore": "2",
            "oppScore": "3",
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
            "final": true,
            "STLscore": "0",
            "oppScore": "3",
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

        {
            "date": "10-1-2023",
            "time": "2:15 PM",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": true,
            "final": false,
            "STLscore": "-",
            "oppScore": "-",
            "inningCt": false,
            "XXXXX": false,
            "STLhits": 0,
            "oppHits": 0,
        },

        
        ],
        "NHL": [
{
            "date": "9-23-2023",
            "time": "2:00 PM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "2",
            "overtime": false,
            "shootout": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-23-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "ARI",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "5",
            "overtime": false,
            "shootout": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-26-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CBJ",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "2",
            "overtime": false,
            "shootout": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-28-2023",
            "time": "7:30 PM",
            "STLlogo": 1,
            "opponent": "CHI",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "2",
            "overtime": true,
            "shootout": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-30-2023",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "DAL",
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
            "date": "10-2-2023",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "CBJ",
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
            "date": "10-5-2023",
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
            "date": "10-7-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CHI",
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
            "STLlogo": 1,
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
            "STLlogo": 1,
            "opponent": "PIT",
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
            "STLlogo": 1,
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

        {
            "date": "11-7-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "WPG",
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
            "date": "11-9-2023",
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
            "date": "11-11-2023",
            "time": "8:00 PM",
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
            "date": "11-14-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "TBL",
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
            "date": "11-16-2023",
            "time": "9:30 PM",
            "STLlogo": 1,
            "opponent": "SJS",
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
            "date": "11-18-2023",
            "time": "9:30 PM",
            "STLlogo": 1,
            "opponent": "LAK",
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
            "date": "11-19-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "ANA",
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
            "date": "11-22-2023",
            "time": "8:00 PM",
            "STLlogo": 1,
            "opponent": "ARI",
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
            "date": "11-24-2023",
            "time": "2:00 PM",
            "STLlogo": 1,
            "opponent": "NSH",
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
            "date": "11-26-2023",
            "time": "1:00 PM",
            "STLlogo": 1,
            "opponent": "CHI",
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
            "date": "11-28-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "MIN",
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
            "date": "11-30-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "BUF",
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
            "date": "12-2-2023",
            "time": "8:00 PM",
            "STLlogo": 1,
            "opponent": "ARI",
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
            "date": "12-4-2023",
            "time": "9:00 PM",
            "STLlogo": 1,
            "opponent": "VGK",
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
            "date": "12-6-2023",
            "time": "8:00 PM",
            "STLlogo": 1,
            "opponent": "VGK",
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
            "date": "12-8-2023",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "CBJ",
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
            "date": "12-9-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CHI",
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
            "date": "12-12-2023",
            "time": "6:30 PM",
            "STLlogo": 1,
            "opponent": "DET",
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
            "date": "12-14-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "OTT",
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
            "date": "12-16-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "DAL",
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
            "date": "12-19-2023",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "TBL",
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
            "date": "12-21-2023",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "FLA",
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
            "date": "12-23-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CHI",
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
            "date": "12-27-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "DAL",
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
            "date": "12-29-2023",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "COL",
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
            "date": "12-30-2023",
            "time": "6:00 PM",
            "STLlogo": 1,
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
            "date": "1-4-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "VAN",
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
            "date": "1-6-2024",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "CAR",
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
            "date": "1-9-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "FLA",
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
            "date": "1-11-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "NYR",
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
            "date": "1-13-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "BOS",
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
            "date": "1-15-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "PHI",
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
            "date": "1-18-2024",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "WSH",
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
            "date": "1-20-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "WSH",
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
            "date": "1-23-2024",
            "time": "8:00 PM",
            "STLlogo": 1,
            "opponent": "VGY",
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
            "date": "1-24-2024",
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
            "date": "1-26-2024",
            "time": "9:00 PM",
            "STLlogo": 1,
            "opponent": "SEA",
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
            "date": "1-28-2024",
            "time": "1:00 PM",
            "STLlogo": 1,
            "opponent": "LAK",
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
            "date": "1-30-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CBJ",
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
            "date": "2-10-2024",
            "time": "12:00 PM",
            "STLlogo": 1,
            "opponent": "BUF",
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
            "date": "2-11-2024",
            "time": "12:00 PM",
            "STLlogo": 1,
            "opponent": "MTL",
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
            "date": "2-13-2024",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "TOR",
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
            "date": "2-15-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "EDM",
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
            "date": "2-17-2024",
            "time": "4:00 PM",
            "STLlogo": 1,
            "opponent": "NSH",
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
            "date": "2-19-2024",
            "time": "12:00 PM",
            "STLlogo": 1,
            "opponent": "TOR",
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
            "date": "2-22-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "NYI",
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
            "date": "2-24-2024",
            "time": "11:00 AM",
            "STLlogo": 1,
            "opponent": "DET",
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
            "date": "2-27-2024",
            "time": "7:00 PM",
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
            "date": "2-28-2024",
            "time": "7:30 PM",
            "STLlogo": 1,
            "opponent": "EDM",
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
            "date": "3-2-2024",
            "time": "2:00 PM",
            "STLlogo": 1,
            "opponent": "MIN",
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
            "date": "3-4-2024",
            "time": "6:30 PM",
            "STLlogo": 1,
            "opponent": "PHI",
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
            "date": "3-5-2024",
            "time": "6:30 PM",
            "STLlogo": 1,
            "opponent": "NYI",
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
            "date": "3-7-2024",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "NJD",
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
            "date": "3-9-2024",
            "time": "6:30 PM",
            "STLlogo": 1,
            "opponent": "NYR",
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
            "date": "3-11-2024",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "BOS",
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
            "date": "3-13-2024",
            "time": "6:30 PM",
            "STLlogo": 1,
            "opponent": "LAK",
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
            "date": "3-16-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "MIN",
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
            "date": "3-17-2024",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "ANA",
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
            "date": "3-19-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "COL",
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
            "date": "3-21-2024",
            "time": "6:00 PM",
            "STLlogo": 1,
            "opponent": "OTT",
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
            "date": "3-23-2024",
            "time": "1:00 PM",
            "STLlogo": 1,
            "opponent": "MIN",
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
            "date": "3-25-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "VGK",
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
            "date": "3-28-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CGY",
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
            "date": "3-30-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "SJS",
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
            "date": "4-1-2024",
            "time": "8:00 PM",
            "STLlogo": 1,
            "opponent": "EDM",
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
            "date": "4-4-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "NSH",
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
            "date": "4-6-2024",
            "time": "5:00 PM",
            "STLlogo": 1,
            "opponent": "SJS",
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
            "date": "4-7-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "ANA",
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
            "date": "4-10-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CHI",
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
            "date": "4-12-2024",
            "time": "7:00 PM",
            "STLlogo": 1,
            "opponent": "CAR",
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
            "date": "4-14-2024",
            "time": "12:00 PM",
            "STLlogo": 1,
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
            "date": "4-17-2024",
            "time": "8:30 PM",
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

        
        ],
        "MLS": [
{
            "date": "2-25-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "ATX",
            "home": false,
            "final": true,
            "STLscore": "3",
            "oppScore": "2",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "3-4-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "CLT",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "3-11-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "POR",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "3-18-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "SJE",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "3-25-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "RSL",
            "home": false,
            "final": true,
            "STLscore": "4",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "4-1-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "MIN",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "4-8-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "SEA",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "3",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "4-15-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "CIN",
            "home": true,
            "final": true,
            "STLscore": "5",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "4-22-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "COL",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "4-29-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "POR",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "2",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "5-6-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "DAL",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "2",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "5-13-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "CHI",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "5-20-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "SKC",
            "home": true,
            "final": true,
            "STLscore": "4",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "5-27-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "VAN",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "6-3-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "HOU",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "6-11-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "LAG",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "6-17-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "NSH",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "3",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "6-21-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "RSL",
            "home": true,
            "final": true,
            "STLscore": "1",
            "oppScore": "3",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "6-24-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "SJE",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "7-1-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "COL",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "7-8-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "TOR",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "7-12-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "LAF",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "3",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "7-15-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "MIA",
            "home": true,
            "final": true,
            "STLscore": "3",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "7-23-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "CLB",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "2",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "7-27-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "CFA",
            "home": false,
            "final": true,
            "STLscore": "0",
            "oppScore": "4",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "8-20-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "ATX",
            "home": false,
            "final": true,
            "STLscore": "6",
            "oppScore": "3",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "8-26-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "ORL",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "2",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "8-30-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "DAL",
            "home": true,
            "final": true,
            "STLscore": "2",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-2-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "SKC",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "2",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-10-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "LAG",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "2",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-16-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "HOU",
            "home": false,
            "final": true,
            "STLscore": "1",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-20-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "LAF",
            "home": true,
            "final": true,
            "STLscore": "0",
            "oppScore": "0",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-23-2023",
            "time": "nan",
            "STLlogo": 1,
            "opponent": "MIN",
            "home": false,
            "final": true,
            "STLscore": "2",
            "oppScore": "1",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "9-30-2023",
            "time": "7:30 PM",
            "STLlogo": 1,
            "opponent": "SKC",
            "home": true,
            "final": true,
            "STLscore": "-",
            "oppScore": "-",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "10-4-2023",
            "time": "9:30 PM",
            "STLlogo": 1,
            "opponent": "VAN",
            "home": false,
            "final": true,
            "STLscore": "-",
            "oppScore": "-",
            "overtime": 0,
            "PKs": false,
            "STLshots": 0,
            "oppShots": 0,
        },

        {
            "date": "10-21-2023",
            "time": "8:00 PM",
            "STLlogo": 1,
            "opponent": "SEA",
            "home": true,
            "final": true,
            "STLscore": "-",
            "oppScore": "-",
            "overtime": 0,
            "PKs": false,
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
            "firstName": "Nick",
            "lastName": "Leddy",
            "jerseyNum": 4,
            "birthDate": "20-Mar-91",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5447.png",
            "height": `6'0"`,
            "position": "D",
            "domHand": "L",
            "weight": "205 lbs",
            "birthPlace": "Eden Prairie, MN, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Marco",
            "lastName": "Scandella",
            "jerseyNum": 6,
            "birthDate": "23-Feb-90",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5218.png",
            "height": `6'3"`,
            "position": "D",
            "domHand": "L",
            "weight": "212 lbs",
            "birthPlace": "Montreal, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Brayden",
            "lastName": "Schenn",
            "jerseyNum": 10,
            "birthDate": "22-Aug-91",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5219.png&w=350&h=254",
            "height": `6'1"`,
            "position": "C",
            "domHand": "L",
            "weight": "199 lbs",
            "birthPlace": "Saskatoon, SK, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Kevin",
            "lastName": "Hayes",
            "jerseyNum": 12,
            "birthDate": "8-May-92",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5767.png",
            "height": `6'5"`,
            "position": "RW",
            "domHand": "L",
            "weight": "216 lbs",
            "birthPlace": "Dorcester, MA, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Alexey",
            "lastName": "Toropchenko",
            "jerseyNum": 13,
            "birthDate": "25-Jun-99",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4392454.png",
            "height": `6'6"`,
            "position": "RW",
            "domHand": "L",
            "weight": "nan",
            "birthPlace": "Moscow, RUS",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Jakub",
            "lastName": "Vrana",
            "jerseyNum": 15,
            "birthDate": "28-Feb-96",
            "image": "https://a.espncdn.com/i/headshots/nhl/players/full/3114747.png",
            "height": `6'0"`,
            "position": "LW",
            "domHand": "L",
            "weight": "190 lbs",
            "birthPlace": "Prague, CZE",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Robert",
            "lastName": "Thomas",
            "jerseyNum": 18,
            "birthDate": "2-Jul-99",
            "image": "https://a.espncdn.com/i/headshots/nhl/players/full/4233637.png",
            "height": `6'0"`,
            "position": "C",
            "domHand": "R",
            "weight": "218 lbs",
            "birthPlace": "Aurora, ON, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Brandon",
            "lastName": "Saad",
            "jerseyNum": 20,
            "birthDate": "27-Oct-92",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2563065.png",
            "height": `6'1"`,
            "position": "LW",
            "domHand": "L",
            "weight": "215 lbs",
            "birthPlace": "Pittsburgh, PA, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Jordan",
            "lastName": "Kyrou",
            "jerseyNum": 25,
            "birthDate": "5-May-98",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4062251.png",
            "height": `6'1"`,
            "position": "C",
            "domHand": "R",
            "weight": "196 lbs",
            "birthPlace": "Toronto, ON, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Nathan",
            "lastName": "Walker",
            "jerseyNum": 26,
            "birthDate": "7-Feb-94",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3067860.png",
            "height": `5'9"`,
            "position": "LW",
            "domHand": "L",
            "weight": "187 lbs",
            "birthPlace": "Cardiff, GBR",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Mackenzie",
            "lastName": "MacEachern",
            "jerseyNum": 28,
            "birthDate": "9-Mar-94",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3069342.png&w=350&h=254",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "193 lbs",
            "birthPlace": "Bloomfield Hills, MI, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Joel",
            "lastName": "Hofer",
            "jerseyNum": 30,
            "birthDate": "30-Jul-00",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4587909.png&w=350&h=254",
            "height": `6'5"`,
            "position": "G",
            "domHand": "L",
            "weight": "nan",
            "birthPlace": "Winnipeg, MB, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Robert",
            "lastName": "Bortuzzo",
            "jerseyNum": 41,
            "birthDate": "18-Mar-89",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4916.png",
            "height": `6'4"`,
            "position": "D",
            "domHand": "R",
            "weight": "216 lbs",
            "birthPlace": "Thunder Bay, ON, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Kasperi",
            "lastName": "Kapanen",
            "jerseyNum": 42,
            "birthDate": "23-Jul-96",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3114775.png",
            "height": `6'1"`,
            "position": "RW",
            "domHand": "R",
            "weight": "194 lbs",
            "birthPlace": "Kuopio, FIN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Calle",
            "lastName": "Rosen",
            "jerseyNum": 43,
            "birthDate": "2-Feb-94",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4220707.png",
            "height": `6'1"`,
            "position": "D",
            "domHand": "L",
            "weight": "188 lbs",
            "birthPlace": "Vaxjo, SWE",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Torey",
            "lastName": "Krug",
            "jerseyNum": 47,
            "birthDate": "12-Apr-91",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2952729.png",
            "height": `5'9"`,
            "position": "D",
            "domHand": "L",
            "weight": "194 lbs",
            "birthPlace": "Livonia, MI, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Scott",
            "lastName": "Perunovich",
            "jerseyNum": 48,
            "birthDate": "18-Aug-98",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4320665.png",
            "height": `5'10"`,
            "position": "D",
            "domHand": "L",
            "weight": "nan",
            "birthPlace": "Hibbing, MN, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Jordan",
            "lastName": "Binnington",
            "jerseyNum": 50,
            "birthDate": "11-Jul-93",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2590874.png",
            "height": `6'2"`,
            "position": "G",
            "domHand": "L",
            "weight": "172 lbs",
            "birthPlace": "Richmond Hill, ON, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Colton",
            "lastName": "Parayko",
            "jerseyNum": 55,
            "birthDate": "12-Jun-93",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3069341.png",
            "height": `6'6"`,
            "position": "D",
            "domHand": "R",
            "weight": "228 lbs",
            "birthPlace": "St. Albert, AB, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Nikita",
            "lastName": "Alexandrov",
            "jerseyNum": 59,
            "birthDate": "16-Sep-00",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4565284.png&w=350&h=254",
            "height": `6'1"`,
            "position": "C",
            "domHand": "L",
            "weight": "nan",
            "birthPlace": "Burgwedel, DEU",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Jake",
            "lastName": "Neighbours",
            "jerseyNum": 63,
            "birthDate": "9-Jun-02",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4697409.png",
            "height": `6'0"`,
            "position": "LW",
            "domHand": "L",
            "weight": "201 lbs",
            "birthPlace": "Calgary, AB, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Oskar",
            "lastName": "Sundqvist",
            "jerseyNum": 70,
            "birthDate": "23-Sep-94",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3069277.png",
            "height": `6'3"`,
            "position": "C",
            "domHand": "R",
            "weight": "nan",
            "birthPlace": "Boden, SWE",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Justin",
            "lastName": "Faulk",
            "jerseyNum": 72,
            "birthDate": "20-Mar-92",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5746.png&w=350&h=254",
            "height": `6'0"`,
            "position": "D",
            "domHand": "R",
            "weight": "214 lbs",
            "birthPlace": "South St. Paul, MN, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Tyler",
            "lastName": "Tucker",
            "jerseyNum": 75,
            "birthDate": "1-Mar-00",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4587904.png&w=350&h=254",
            "height": `6'1"`,
            "position": "D",
            "domHand": "L",
            "weight": "nan",
            "birthPlace": "Thunder Bay, ON, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Sammy",
            "lastName": "Blais",
            "jerseyNum": 79,
            "birthDate": "17-Jan-99",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3149697.png&w=350&h=254",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "206 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        {
            "firstName": "Pavel",
            "lastName": "Buchnevich",
            "jerseyNum": 89,
            "birthDate": "17-Apr-95",
            "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3042081.png&w=350&h=254",
            "height": `6'1"`,
            "position": "LW",
            "domHand": "L",
            "weight": "196 lbs",
            "birthPlace": "Cherepovets, RUS",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
				2023: ["STL/NYR",80,24,44,68,12,4,18,0],
				2022: ["NYR",80,24,44,68,12,4,18,0],
				2021: ["NYR",80,24,44,68,12,4,18,0],
				2020: ["STL",80,24,44,68,12,4,18,0],
				2019: ["STL",80,24,44,68,12,4,18,0],
				2018: ["STL",80,24,44,68,12,4,18,0],
			}
        },

        
    ],

    "MLB": [
{
            "firstName": "Jacob",
            "lastName": "Barnes",
            "jerseyNum": 61,
            "birthDate": "14-Apr-90",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "RP",
            "domHand": "R/R",
            "weight": "231 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Giovanny",
            "lastName": "Gallegos",
            "jerseyNum": 65,
            "birthDate": "14-Aug-91",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "RP",
            "domHand": "R/R",
            "weight": "215 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Ryan",
            "lastName": "Helsley",
            "jerseyNum": 56,
            "birthDate": "18-Jul-94",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "RP",
            "domHand": "R/R",
            "weight": "230 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Dakota",
            "lastName": "Hudson",
            "jerseyNum": 43,
            "birthDate": "15-Sep-94",
            "image": "xxxxx",
            "height": `6'5"`,
            "position": "SP",
            "domHand": "R/R",
            "weight": "215 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "John",
            "lastName": "King",
            "jerseyNum": 47,
            "birthDate": "14-Sep-94",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "RP",
            "domHand": "L/L",
            "weight": "215 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Casey",
            "lastName": "Lawrence",
            "jerseyNum": 72,
            "birthDate": "28-Oct-87",
            "image": "xxxxx",
            "height": `6'0"`,
            "position": "RP",
            "domHand": "R/R",
            "weight": "180 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Matthew",
            "lastName": "Liberatore",
            "jerseyNum": 52,
            "birthDate": "6-Nov-99",
            "image": "xxxxx",
            "height": `6'4"`,
            "position": "RP",
            "domHand": "L/L",
            "weight": "200 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Miles",
            "lastName": "Mikolas",
            "jerseyNum": 39,
            "birthDate": "23-Aug-88",
            "image": "xxxxx",
            "height": `6'4"`,
            "position": "SP",
            "domHand": "R/R",
            "weight": "230 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Andre",
            "lastName": "Pallante",
            "jerseyNum": 53,
            "birthDate": "18-Sep-98",
            "image": "xxxxx",
            "height": `6'0"`,
            "position": "RP",
            "domHand": "R/R",
            "weight": "203 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Drew",
            "lastName": "Rom",
            "jerseyNum": 38,
            "birthDate": "15-Dec-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "SP",
            "domHand": "L/L",
            "weight": "215 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Andrew",
            "lastName": "Suarez",
            "jerseyNum": 31,
            "birthDate": "11-Sep-92",
            "image": "xxxxx",
            "height": `6'0"`,
            "position": "RP",
            "domHand": "L/L",
            "weight": "202 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Zack",
            "lastName": "Thompson",
            "jerseyNum": 57,
            "birthDate": "28-Oct-97",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "SP",
            "domHand": "L/L",
            "weight": "215 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Drew",
            "lastName": "VerHagen",
            "jerseyNum": 34,
            "birthDate": "22-Oct-90",
            "image": "xxxxx",
            "height": `6'6"`,
            "position": "RP",
            "domHand": "R/R",
            "weight": "230 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Adam",
            "lastName": "Wainwright",
            "jerseyNum": 50,
            "birthDate": "30-Aug-81",
            "image": "xxxxx",
            "height": `6'7"`,
            "position": "SP",
            "domHand": "R/R",
            "weight": "230 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Willson",
            "lastName": "Contreras",
            "jerseyNum": 40,
            "birthDate": "13-May-92",
            "image": "xxxxx",
            "height": `6'1"`,
            "position": "C",
            "domHand": "R/R",
            "weight": "225 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Andrew",
            "lastName": "Knizner",
            "jerseyNum": 7,
            "birthDate": "3-Feb-95",
            "image": "xxxxx",
            "height": `6'1"`,
            "position": "C",
            "domHand": "R/R",
            "weight": "225 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Nolan",
            "lastName": "Arenado",
            "jerseyNum": 28,
            "birthDate": "16-Apr-91",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "3B",
            "domHand": "R/R",
            "weight": "215 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Luken",
            "lastName": "Baker",
            "jerseyNum": 26,
            "birthDate": "10-Mar-97",
            "image": "xxxxx",
            "height": `6'4"`,
            "position": "2B",
            "domHand": "R/R",
            "weight": "280 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Tommy",
            "lastName": "Edman",
            "jerseyNum": 19,
            "birthDate": "9-May-95",
            "image": "xxxxx",
            "height": `5'10"`,
            "position": "SS",
            "domHand": "S/R",
            "weight": "180 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Jose",
            "lastName": "Fermin",
            "jerseyNum": 35,
            "birthDate": "29-Mar-99",
            "image": "xxxxx",
            "height": `5'9"`,
            "position": "2B",
            "domHand": "R/R",
            "weight": "200 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Paul",
            "lastName": "Goldschmidt",
            "jerseyNum": 46,
            "birthDate": "10-Sep-87",
            "image": "xxxxx",
            "height": `6'3"`,
            "position": "1B",
            "domHand": "R/R",
            "weight": "220 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Juniel",
            "lastName": "Querecuto",
            "jerseyNum": 62,
            "birthDate": "19-Sep-92",
            "image": "xxxxx",
            "height": `5'9"`,
            "position": "2B",
            "domHand": "S/R",
            "weight": "195 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Masyn",
            "lastName": "Wynn",
            "jerseyNum": 0,
            "birthDate": "21-Mar-02",
            "image": "xxxxx",
            "height": `5'11"`,
            "position": "SS",
            "domHand": "R/R",
            "weight": "180 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Alec",
            "lastName": "Burleson",
            "jerseyNum": 41,
            "birthDate": "25-Nov-98",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "RF",
            "domHand": "L/L",
            "weight": "212 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Lars",
            "lastName": "Nootbaar",
            "jerseyNum": 21,
            "birthDate": "8-Sep-97",
            "image": "xxxxx",
            "height": `6'3"`,
            "position": "LF",
            "domHand": "L/R",
            "weight": "210 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Richie",
            "lastName": "Palacios",
            "jerseyNum": 67,
            "birthDate": "16-May-97",
            "image": "xxxxx",
            "height": `5'10"`,
            "position": "CF",
            "domHand": "L/R",
            "weight": "180 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Jordan",
            "lastName": "Walker",
            "jerseyNum": 18,
            "birthDate": "22-May-02",
            "image": "xxxxx",
            "height": `6'6"`,
            "position": "RF",
            "domHand": "R/R",
            "weight": "245 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Juan",
            "lastName": "Yepez",
            "jerseyNum": 13,
            "birthDate": "19-Feb-98",
            "image": "xxxxx",
            "height": `6'1"`,
            "position": "RF",
            "domHand": "R/R",
            "weight": "200 lbs",
            "birthPlace": "Montmagny, QC, CAN",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        
    ],

    "MLS": [
{
            "firstName": "Samuel",
            "lastName": "Adeniran",
            "jerseyNum": 16,
            "birthDate": "30-Sep-98",
            "image": "xxxxx",
            "height": `6'5"`,
            "position": "FWD",
            "domHand": "L",
            "weight": "201 lbs",
            "birthPlace": "Houston, TX, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Rasmus",
            "lastName": "Alm",
            "jerseyNum": 21,
            "birthDate": "17-Aug-95",
            "image": "xxxxx",
            "height": `5'9"`,
            "position": "MID",
            "domHand": "R",
            "weight": "154 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Lucas",
            "lastName": "Bartlett",
            "jerseyNum": 24,
            "birthDate": "26-Jul-97",
            "image": "xxxxx",
            "height": `6'3"`,
            "position": "DEF",
            "domHand": "nan",
            "weight": "201 lbs",
            "birthPlace": "Kansas City, MO, USA",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Jonathan",
            "lastName": "Bell",
            "jerseyNum": 23,
            "birthDate": "26-Aug-97",
            "image": "xxxxx",
            "height": `5'11"`,
            "position": "DEF",
            "domHand": "nan",
            "weight": "165 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Njabulo",
            "lastName": "Blom",
            "jerseyNum": 6,
            "birthDate": "21-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "210 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Roman",
            "lastName": "B\u00FCrki",
            "jerseyNum": 1,
            "birthDate": "22-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "211 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Michael",
            "lastName": "Creek",
            "jerseyNum": 31,
            "birthDate": "23-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "212 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Nicholas",
            "lastName": "Gioacchini",
            "jerseyNum": 11,
            "birthDate": "24-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "213 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Caden",
            "lastName": "Glover",
            "jerseyNum": 46,
            "birthDate": "25-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "214 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Kyle",
            "lastName": "Hiebert",
            "jerseyNum": 22,
            "birthDate": "26-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "215 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Aziel",
            "lastName": "Jackson",
            "jerseyNum": 25,
            "birthDate": "27-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "216 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Isak",
            "lastName": "Jensen",
            "jerseyNum": 30,
            "birthDate": "28-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "217 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Ben",
            "lastName": "Lundt",
            "jerseyNum": 39,
            "birthDate": "29-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "218 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Eduard",
            "lastName": "L\u00F6wen",
            "jerseyNum": 10,
            "birthDate": "30-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "219 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Anthony",
            "lastName": "Markanich",
            "jerseyNum": 13,
            "birthDate": "31-Jan-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "220 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "John",
            "lastName": "Nelson",
            "jerseyNum": 14,
            "birthDate": "1-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "221 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Jake",
            "lastName": "Nerwinski",
            "jerseyNum": 2,
            "birthDate": "2-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "222 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Joakim",
            "lastName": "Nilsson",
            "jerseyNum": 33,
            "birthDate": "3-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "223 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Owen",
            "lastName": "O'Malley",
            "jerseyNum": 18,
            "birthDate": "4-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "224 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Tomas",
            "lastName": "Ostrak",
            "jerseyNum": 7,
            "birthDate": "5-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "225 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Tim",
            "lastName": "Parker",
            "jerseyNum": 26,
            "birthDate": "6-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "226 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Miguel",
            "lastName": "Perez",
            "jerseyNum": 28,
            "birthDate": "7-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "227 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Selmir",
            "lastName": "Pidro",
            "jerseyNum": 17,
            "birthDate": "8-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "228 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "C\u00E9lio",
            "lastName": "Pompeu",
            "jerseyNum": 12,
            "birthDate": "9-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "229 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Jared",
            "lastName": "Stroud",
            "jerseyNum": 8,
            "birthDate": "10-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "230 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Nokkvi",
            "lastName": "Thorisson",
            "jerseyNum": 29,
            "birthDate": "11-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "231 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Indiana",
            "lastName": "Vassilev",
            "jerseyNum": 19,
            "birthDate": "12-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "232 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Akil",
            "lastName": "Watts",
            "jerseyNum": 20,
            "birthDate": "13-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "233 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Joshua",
            "lastName": "Yaro",
            "jerseyNum": 15,
            "birthDate": "14-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "234 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        {
            "firstName": "Jo\u00E3o",
            "lastName": "Klauss",
            "jerseyNum": 9,
            "birthDate": "15-Feb-99",
            "image": "xxxxx",
            "height": `6'2"`,
            "position": "LW",
            "domHand": "L",
            "weight": "235 lbs",
            "birthPlace": " ",
            "bio": "BIO",
            "contractStructure": {
                 
            },
            "careerStats": {
                2023: ["STL",0,0,0,0,0,0,0,0]
            }
        },

        
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
    console.log(playerCt)
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

























