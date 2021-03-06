let data = [
    {
        "rgb(141,38,5)": [
            "rgb(230,90,138)",
            "rgb(154,194,201)",
            "rgb(201, 191, 9)",
            "rgb(141,38,5)"
        ]
    },
    {
        "rgb(41, 100, 99)": [
            "rgb(140, 207, 69)",
            "rgb(130, 120, 149)",
            "rgb(143, 138, 200)",
            "rgb(41, 100, 99)"
        ]
    },
    {
        "rgb(35, 252, 165)": [
            "rgb(242, 111, 12)",
            "rgb(89, 8, 132)",
            "rgb(39, 221, 132)",
            "rgb(35, 252, 165)",
        ]
    },
    {
        "rgb(82, 166, 172)": [
            "rgb(25, 107, 30)",
            "rgb(134, 24, 208)",
            "rgb(78, 2, 58)",
            "rgb(82, 166, 172)"
        ]
    },
    {
        "rgb(31, 98, 201)": [
            "rgb(32, 70, 35)",
            "rgb(76, 185, 138)",
            "rgb(164, 59, 89)",
            "rgb(31, 98, 201)",
        ]
    },
    {
        "rgb(195, 178, 137)": [
            "rgb(30, 237, 97)",
            "rgb(236, 87, 62)",
            "rgb(55, 42, 122)",
            "rgb(195, 178, 137)",
        ]
    },
    {
        "rgb(236, 224, 135)": [
            "rgb(68, 72, 2)",
            "rgb(169, 181, 245)",
            "rgb(81, 89, 32)",
            "rgb(236, 224, 135)"
        ]
    },
    {
        "rgb(130, 12, 116)": [
            "rgb(196, 237, 154)",
            "rgb(56, 226, 244)",
            "rgb(91, 183, 162)",
            "rgb(130, 12, 116)"
        ]
    },
    {
        "rgb(53, 156, 191)": [
            "rgb(165, 205, 192)",
            "rgb(71, 126, 30)",
            "rgb(144, 146, 224)",
            "rgb(53, 156, 191)"
        ]
    },
    {
        "rgb(25, 107, 30)": [
            "rgb(144, 146, 224)",
            "rgb(242, 111, 12)",
            "rgb(164, 59, 89)",
            "rgb(25, 107, 30)",
        ]
    }
]

var options = document.getElementById("flex")
var q = document.getElementById("q")
var colors = []
var i = 0
var randomOptions = []
var correct = 0

function checkingTheResponse(res) {
    if (res == Object.values(data[colors[i]])[0][3]) {
        correct += 1
    }
    if (i == 4) {
        q.innerHTML = ""
        options.innerHTML = `<h1 style="color: grey">Your result is: - ${correct}/5</h1>`
        return
    }
    i += 1
    q.innerHTML = ""
    options.innerHTML = ""
    randomOptions = []
    loadQuestion()
}

function loadQuestion() {
    q.innerHTML = Object.keys(data[colors[i]])[0]
    for (var j = 0; j < 4; j++) {
        do {
            var ind = Math.round(Math.random() * 3)
        } while (randomOptions.includes(ind))
        randomOptions.push(ind)
        var box = document.createElement("div")
        box.setAttribute("style", `background-color: ${Object.values(data[colors[i]])[0][randomOptions[j]]
}`)
        box.setAttribute("class", "flexBox")
        box.setAttribute("onclick",`checkingTheResponse('${Object.values(data[colors[i]])[0][randomOptions[j]]}')`)
        options.appendChild(box)
    }
}

function loadData() {
    for (var j = 0; j < 5; j++) {
        do {
            var ind = Math.round(Math.random() * 9)
        } while (colors.includes(ind))
        colors.push(ind)
    }
    loadQuestion()
}