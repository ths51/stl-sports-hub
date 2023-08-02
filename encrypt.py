import random

letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h", 
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
    ]

symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "=",
    "_",
    "+",
    "{",
    "}",
    "[",
    "]",
    "\u005c",
    "|",
    ";",
    ":",
    "'",
    "\u0022",
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
    "`",
    "~",
]

int_numbers = list(range(10))
numbers = []
for val in int_numbers:
    numbers.append(str(val))



# print(symbols[18])
# print(symbols[23])


def encrypt(password:str) -> str:
    length = len(password)
    spot_list = list(range (length))
    char_list = []
    symbol: bool
    capital: bool
    number: bool
    x = 0
    for char in password:
        shift = random.randint(0,9)
        list1: list
        char1: str
        try: 
            char1 = char.lower()
            if char == char.lower():
                capital = False
            else:
                capital = True
        except: 
            char1 = char
            capital = False

        if char1 in letters:
            list1 = letters
            symbol = False
            number = False
        elif char1 in numbers:
            list1 = numbers
            symbol = False
            number = True
        else:
            list1 = symbols
            symbol = True
            number = False


        
        char_index = list1.index(char1)
        new_index = char_index - shift
        while new_index < 0: new_index += len(list1)
        while new_index > (len(list1)-1): new_index -= len(list1)
        char1 = list1[new_index]
        # index = random.randint(0,len(spot_list)-1)
        char3 = letters[x]
        try: char3 = char3.upper()
        except: None



        if capital:
            char4 = "!"
        elif symbol:
            char4 = "$"
        elif number:
            char4 = "&"
        else:
            char4 = "*"

        next_char = char1+str(shift)+char3+str(random.randint(0,9))+char4

        # print(next_char)
        
        char_list.append(next_char + " ")
        x += 1

    new_password = ""
    new_password_list = []
    while len(char_list) > 0:
        new = char_list.pop(random.randint(0,len(char_list)-1))
        new_password_list.append(new)
    while len(new_password_list) > 0:
        new_password += new_password_list.pop(random.randint(0,len(new_password_list)-1))
    
    # print("")
    # print("")
    return new_password

"""def decryptXXX(encryped_password:str):
    items1 = encryped_password.split("!")
    for item in items1:
        item += "!"
    # print(items1)
    items2 = []
    items3 = []
    for item in items1:
        items2 += (item.split("$"))
        for item in items2:
            item += "$"
    # print(items2)
    for item in items2:
        items3 += (item.split("*"))
        for item in items1:
            item += "*"
    print(items3)
    ordered_list = list(range(len(items3)))
    unordered_list = []
    for obj in items3:
        unordered_list.append([*obj])
    print(unordered_list)"""


def decrypt(encryped_password:str):
    items = encryped_password.split()
    # print(items)
    unordered = []
    for item in items:
        unordered.append([*item])
    # print(unordered)
    ordered = []
    for val in range(len(unordered)):
        for obj in unordered: 
            if obj[2] == letters[val].upper():
                ordered.append(obj)
                break
    # print(ordered)
    password = ""
    for item in ordered:
        password += calculate_character(item)
    # print(password)
    return password


def calculate_character(char_list:list):
    if char_list[4] == "$":
        list1 = symbols
    elif char_list[4] == "&":
        list1 = numbers
    else: 
        list1 = letters
    index = list1.index(char_list[0])
    new_index = index + int(char_list[1])
    if new_index >= len(list1):
        new_index -= len(list1)

    char = list1[new_index]
    if char_list[4] == "!":
        char = char.upper()

    return char








        








"""
ENCRYPTION DESCRIPTION

Each character is made up of a lowercase letter, an uppercase letter, two numbers, and occasionally a symbol

lowercase [char 1]: original character (sub symbol with character)
number1 [char 2]: forward shift from original character 
uppercase [char 3]: order of character (letter = number, creates order of characters)
number2 [char 4]: a pointless number to confuse people
symbol [char 5]: ! means capital letter, $ means character is a symbol, * means normal and nothing special/unique
"""

password:str = input("Insert your password here: ")
encrypted = encrypt(password)

print(encrypted)

decrypred = decrypt(encrypted)

"""leng = len(password)
list1 = list(range(leng))

print(list1)"""