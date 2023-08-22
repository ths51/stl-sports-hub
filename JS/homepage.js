newsData = {

    "news" : [

        
        {
            "sport": "NHL",
            "title": "BREAKING: Blues Acquire Kevin Hayes from Philadelphia",
            "imageURL": "https://i.marqueur.com/habsetlnh/large_original/280377.jpeg",
            "previewText": "Hayes put up a career high in points (54) this past season despite reports of a poor relationship with the head coach. Philly retained half of Hayes' salary.",
            "articleActive": false,
            "articleText": [""]
        },

        
        {
            "sport": "NHL",
            "title": "Blues Bring Back Fan Favorite Sundqvist",
            "imageURL": "https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Fbleedinblue.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F942048248.jpeg",
            "previewText": "St. Louis signed Oskar Sundqvist to a one-year contract worth $775K annually. Sundqvist was previously traded from St. Louis to Detroit in 2022, then to Minnesota this past trade deadline.",
            "articleActive": false,
            "articleText": [""]
        },
        
        {
            "sport": "MLS",
            "title": "CITY Falls to Club Am\u00e9rica, is Eliminated from leagues' Cup",
            "imageURL": "https://cdn.vox-cdn.com/thumbor/n770AR-yy2vjQCElQH-ydP6gpHA=/0x0:2728x1817/1200x800/filters:focal(1564x314:2000x750)/cdn.vox-cdn.com/uploads/chorus_image/image/72495864/1558858928.0.jpg",
            "previewText": "During Leagues' Cup play, CITY SC failed to win a single game and they were shut out 4-0 in Game 2. Their only goal of the tournament was credited as a Columbus own goal.",
            "articleActive": false,
            "articleText": [""]
        },

        {
            "sport": "MLB",
            "title": "Cardinals Trade Jordan Hicks to Toronto for Prospects",
            "imageURL": "https://cdn.vox-cdn.com/thumbor/91Ng1s2-qNXgu7Uxpa_5SLdoCds=/0x0:4746x3165/1200x800/filters:focal(1994x1204:2752x1962)/cdn.vox-cdn.com/uploads/chorus_image/image/72185379/1251802975.0.jpg",
            "previewText": "During Sunday's game, the Cardinals traded the flamethrower to the Blue Jays for AA pitching prospects Sem Robberse and Adam Kloffenstein. ",
            "articleActive": false,
            "articleText": [""]
        },


        {
            "sport": "MLB",
            "title": "Cardinals Trade Montgomery and Stratton to Rangers for Prospects",
            "imageURL": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/07/30/USAT/70495348007-montgomery.jpg",
            "previewText": "With just over 48 hours to the trade deadline, the Cardinals acquired MLB reliever John King, pitching prospect Tekoah Roby, and infielder prospect Thomas Saggese from Texas.",
            "articleActive": false,
            "articleText": [""]
        },
        
        {
            "sport": "MLS",
            "title": "CITY Acquires 23-year-old left back Anthony Markanich from Colorado",
            "imageURL": "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/mls-col-prd/ur9fortyx5dlkhljvncp",
            "previewText": "CITY traded away $75K in 2023 General Allocation Money and their first round selection in the 2024 SuperDraft for Markanich, who bolsters their back line depth.",
            "articleActive": false,
            "articleText": [""]
        },
        
        
        {
            "sport": "MLB",
            "title": "Donovan to Undergo Season-Ending Elbow Surgery",
            "imageURL": "https://www.al.com/resizer/gFxoKJfdqRZYWAhti_8CvCJHSlU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/UWGMW65G2BEBVMXSN5AYXE43BQ.jpg",
            "previewText": "Donovan had previously been limited to only hitting duties due to this injury, but both sides have now opted for surgery and he will not play again this season. ",
            "articleActive": false,
            "articleText": [""]
        },

        {
            "sport": "MLB",
            "title": "DeJong traded to Blue Jays for High-A Pitching Prospect",
            "imageURL": "https://cdn.vox-cdn.com/thumbor/zPyGw71DaN4RKL-5HHrxtSs3yhQ=/0x0:1692x2048/1200x800/filters:focal(679x529:949x799)/cdn.vox-cdn.com/uploads/chorus_image/image/72503894/licensed_image.5.jpeg",
            "previewText": "This trade is the Cards' second with Toronto in three days, and in return they received 24-year-old RHP Matt Svanson, who has a 1.11 ERA across A and High-A this season.",
            "articleActive": false,
            "articleText": [""]
        },

        {
            "sport": "MLB",
            "title": "Jack Flaherty traded to Baltimore Orioles",
            "imageURL": "https://images2.minutemediacdn.com/image/upload/c_crop,w_4097,h_2304,x_0,y_175/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/17/01h6j16nk0t15amvapnc.jpg",
            "previewText": "Minutes before the trade deadline passed, multiple sources reported that Flaherty was being sent to Baltimore for infield prospect Cesar Prieto, LHP prospect Drew Rom, and RHP prospect Zack Showalter.",
            "articleActive": false,
            "articleText": [""]
        },

        {
            "sport": "MLS",
            "title": "St. Louis CITY SC Beat Austin FC, Extend Conference Lead",
            "imageURL": "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls-stl-prd/qcypmyu54wyqsuzezd3s.jpg",
            "previewText": "CITY SC's offense exploded early again versus Austin FC and put up six goals in an impressive showing. Despite lackluster defense, Roman B\u00FCrki valiantly held Austin to just three goals.",
            "articleActive": true,
            "articleText": ["Niko Gioacchini, Sam Adeniran, and star goalkeeper Roman B\u00FCrki all put up impressive showings on Sunday, August 20 against Austin FC despite intense heat and humidity that held steady throughout the match. Gioacchini and Adeniran each scored twice and B\u00FCrki held Austin to three goals, including one on a penalty kick. Austin FC's offense had 3.5 expected goals throughout the match, greatly exceeding St. Louis CITY SC's 1.5. CITY SC overcame this issue with some incredible execution on poor chances to win the match 6-3."]
        },


    ]
}

// console.log(document.URL)


for (i = 1; i <= 7; i++) {
    let curNews = newsData.news[newsData.news.length - i]
    // console.log(curNews)
    // console.log("newsLogo"+String(i))
    // console.log("newsTeamText"+String(i))
    // console.log("newsTitle"+String(i))
    // console.log("newsImg"+String(i))
    // console.log("newsText"+String(i))

    document.getElementById("newsBox"+String(i)).style.border = ` 3px solid ${allTeamData.colors[curNews.sport][getColorIndex("STL", curNews.sport)].color1}`
    document.getElementById("newsLogo"+String(i)).src = curNews.sport + " SVGs/STL.svg"
    document.getElementById("newsTeamText"+String(i)).textContent = teamNames[curNews.sport]
    document.getElementById("newsTitle"+String(i)).textContent = curNews.title
    document.getElementById("newsImg"+String(i)).src = curNews.imageURL
    document.getElementById("newsText"+String(i)).textContent = curNews.previewText

    if (!curNews.articleActive) {
        document.getElementById("clickBox"+String(i)).style.display = "none"
    }
}

function getArticleText(paragraphList) {
    let fullHTML = ""
    paragraphList.forEach(element => {
        fullHTML += "<p>"
        fullHTML += element
        fullHTML += "</p>"
    });
    return fullHTML
}

function openArticle(id) {
    let newsInfo = newsData.news[newsData.news.length - id]
    if (newsInfo.articleActive) {
        document.getElementById("articleTitle").textContent = newsInfo.title
        document.getElementById("articleImg").src = newsInfo.imageURL
        document.getElementById("articleText").innerHTML = getArticleText(newsInfo.articleText)

        document.getElementById("articleLogo").src = newsInfo.sport + " SVGs/STL.svg"
        document.getElementById("articleTeamText").textContent = teamNames[newsInfo.sport].toUpperCase()

        document.getElementById("articleContainer").style.border = "solid 5px " + allTeamData.colors[newsInfo.sport][getColorIndex("STL", newsInfo.sport)].color1 
        document.getElementById("articleBox").style.display = "flex"

        document.getElementById("articleBox").style.opacity = "100%"
    }

}



function closeArticle() {
    document.getElementById("articleBox").style.display = "none"
    document.getElementById("articleBox").style.opacity = "0"

}

