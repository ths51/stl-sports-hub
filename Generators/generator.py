import pyperclip as pc
import pandas as pds
import time as alja

nums = range(100)
letNums = []

for val in nums:
    letNums.append(str(val))

print(letNums)

sportEndConds = {
    "NHL": ["overtime","shootout"],
    "MLS": ["overtime","PKs"],
    "MLB": ["inningCt","XXXXX"],
    "XFL": ["overtime","XXXXX"],
}

sportStatNames = {
    "NHL": ["shots"],
    "MLS": ["shots"],
    "MLB": ["hits"],
    "XFL": ["yards"],

}

item_order = ['colors','games','roster']


# pc.copy("This text has just been copied")

def create_games(sport:str):
    csv_data = pds.read_csv(f'./GameData/{sport}games.csv', header=0)

    # print(csv_data)
    # print(csv_data.count(0)['Month']) # 0 denotes axis read by count function

    full_string = ""

    for val in range((csv_data.count(0)['Month'])) :
        # None
        date = f"{csv_data['Month'].values[val]}-{csv_data['Day'].values[val]}-{csv_data['Year'].values[val]}"
        time = f"{csv_data['Time'].values[val]}"
        opp = f"{csv_data['Opponent'].values[val]}"
        stl_logo = f"{csv_data['Logo #'].values[val]}"
        home = False
        final = False
        endCond1 = False
        endCond2 = False
        if csv_data['Home'].values[val] == "X":
            home = True
        if csv_data['Final'].values[val] == "X":
            final = True
        if csv_data['Final Cond 1'].values[val] == "X":
            endCond1 = True
        elif csv_data['Final Cond 1'].values[val] in nums:
            endCond1 = int(csv_data['Final Cond 1'].values[val])
        if csv_data['Final Cond 2'].values[val] == "X":
            endCond2 = True
        elif csv_data['Final Cond 2'].values[val] in nums:
            endCond1 = int(csv_data['Final Cond 2'].values[val])
        stl_score = f"{csv_data['Team Score'].values[val]}"
        opp_score = f"{csv_data['Opp Score'].values[val]}"
        team_stat1 = f"{csv_data['Team Stat'].values[val]}"
        team_stat2 = f"{csv_data['Opp Stat'].values[val]}"
        
        string_addition = f'''\u007b
            "date": "{date}",
            "time": "{time}",
            "STLlogo": {stl_logo},
            "opponent": "{opp}",
            "home": {str(home).lower()},
            "final": {str(final).lower()},
            "STLscore": "{stl_score}",
            "oppScore": "{opp_score}",
            "{sportEndConds[sport][0]}": {str(endCond1).lower()},
            "{sportEndConds[sport][1]}": {str(endCond2).lower()},
            "STL{sportStatNames[sport][0]}": {team_stat1},
            "opp{sportStatNames[sport][0].capitalize()}": {team_stat2},
        \u007d,

        '''
        full_string += string_addition
        # print(string_addition)

    # full_string += "]"

    # print("-")
    # print("-")
    # print("-")
    # print("-")
    # print("-")
    # print("-")
    # print("-")
    # print("-")
    # print("-")
    # print(full_string)

    pc.copy(full_string)
    print()
    print("WHOLE STRING HAS BEEN COPIED TO YOUR CLIPBOARD!")
    return full_string


def create_roster(sport:str):
    """
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
    """


    csv_data = pds.read_csv(f'./RosterData/{sport}roster.csv', header=0)

    # print(csv_data)
    # print(csv_data.count(0)['Month']) # 0 denotes axis read by count function

    full_string = ""

    for val in range((csv_data.count(0)['Jersey #'])) :
        first = csv_data['First Name'].values[val]
        last = csv_data['Last Name'].values[val]
        jersey = csv_data['Jersey #'].values[val]
        bdate = csv_data['Birthdate'].values[val]
        imgurl = csv_data['Image URL'].values[val]
        hgt = csv_data['Height'].values[val]
        pos = csv_data['Position'].values[val]
        hand = csv_data['Hand'].values[val]
        weight = csv_data['Weight'].values[val]
        bplace = csv_data['Birthplace'].values[val]
        bio = csv_data['Bio'].values[val]
        contract = csv_data['Contract Structure'].values[val]
        # careerStats = csv_data['Career Statistics'].values[val]

        player_csv = pds.read_csv(f'./RosterData/{sport} Player Stats/{first}_{last}.csv', header=0)
        careerStatsText = "{\n"
        for line in range(player_csv.count(0)['Year']):
            year = player_csv['Year'].values[line]
            team = player_csv['Team'].values[line]
            games = player_csv['Games'].values[line]
            stat1 = player_csv['stat1'].values[line]
            stat2 = player_csv['stat2'].values[line]
            stat3 = player_csv['stat3'].values[line]
            stat4 = player_csv['stat4'].values[line]
            stat5 = player_csv['stat5'].values[line]
            stat6 = player_csv['stat6'].values[line]
            stat7 = player_csv['stat7'].values[line]
            careerStatsText += f'\t\t\t\t{year}: ["{team}",{games},{stat1},{stat2},{stat3},{stat4},{stat5},{stat6},{stat7}],\n'
        careerStatsText += "}"

        player_addition_str = f'''\u007b
            "firstName": "{first}",
            "lastName": "{last}",
            "jerseyNum": {jersey},
            "birthDate": "{bdate}",
            "image": "{imgurl}",
            "height": `{hgt}`,
            "position": "{pos}",
            "domHand": "{hand}",
            "weight": "{weight}",
            "birthPlace": "{bplace}",
            "bio": "{bio}",
            "contractStructure": \u007b
                {contract}
            \u007d,
            "careerStats": {careerStatsText}
        \u007d,

        '''

        full_string += player_addition_str

    # full_string += "]"

    print(full_string)

    pc.copy(full_string)
    print()
    print("WHOLE STRING HAS BEEN COPIED TO YOUR CLIPBOARD!")
    return full_string




def addGamesToJSON(sport:str) :

    file = open("./JS/shared.js","r")
    lines = file.read().split("\n")
    sport_lines = []
    game_lines = []
    index = 0
    for line in lines: 
        # lines[index] = line.strip()
        if (sport.upper() in line):
            sport_lines.append(index)
        if "games" in line:
            game_lines.append(index)
        index += 1
    sport_games_index = 0
    for line_num in sport_lines:
        if line_num > game_lines[0]:
            sport_games_index = line_num
            break
        
    end_line_val = 0
    for line_val in range(sport_games_index+1, len(lines)): 
        if "]" in lines[line_val]:
            end_line_val = line_val
            break
        lines[line_val] = ""
    for line in range(sport_games_index+1, end_line_val): 
        lines.pop(sport_games_index+1)
    lines.insert(sport_games_index+1, create_games(sport))
    # print(sport_lines)
    # print(game_lines)
    # print(lines[sport_games_index])
    # print(lines[sport_games_index+1])
    # print(lines[sport_games_index+2])
    file.close()

    full_text = ""
    write_file = open("./JS/shared.js","w")
    for item in lines:
        full_text += item
        full_text += "\n"

    write_file.write(full_text)




def addRosterToJSON(sport:str) :

    file = open("./JS/shared.js","r")
    lines = file.read().split("\n")
    sport_lines = []
    roster_lines = []
    index = 0
    for line in lines: 
        # lines[index] = line.strip()
        if (sport.upper() in line):
            sport_lines.append(index)
        if "roster" in line:
            roster_lines.append(index)
        index += 1
    sport_roster_index = 0
    for line_num in sport_lines:
        if line_num > roster_lines[0]:
            sport_roster_index = line_num
            break
        
    end_line_val = 0
    for line_val in range(sport_roster_index+1, len(lines)): 
        if ("]" in lines[line_val]) and (lines[line_val+1].strip() == ''):
            end_line_val = line_val
            break
        lines[line_val] = ""
    for line in range(sport_roster_index+1, end_line_val): 
        lines.pop(sport_roster_index+1)
    lines.insert(sport_roster_index+1, create_roster(sport))
    # print(sport_lines)
    # print(roster_lines)
    # print(lines[sport_roster_index])
    # print(lines[sport_roster_index+1])
    # print(lines[sport_roster_index+2])
    file.close()

    full_text = ""
    write_file = open("./JS/shared.js","w")
    for item in lines:
        full_text += str(item)
        full_text += "\n"

    write_file.write(full_text)





addGamesToJSON("NHL")
addGamesToJSON("MLB")
# addRosterToJSON("NHL")