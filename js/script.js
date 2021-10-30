    var work=[
        ["5hrs", "Last Day - 7hrs"],
        ["32hrs","Last Week - 36hrs"],
        ["103hrs","Last Month - 128hrs"]
    ]
    var play=[
        ["1hrs", "Last Day - 2hrs"],
        ["10hrs","Last Week - 8hrs"],
        ["23hrs","Last Month - 29hrs"]
    ]
    var study=[
        ["0hrs", "Last Day - 1hrs"],
        ["4hrs", "Last Week - 7hrs"],
        ["13hrs","Last Month - 19hrs"]
    ]
    var exercise=[
        ["1hrs", "Last Day - 1hrs"],
        ["4hrs", "Last Week - 5hrs"],
        ["11hrs","Last Month - 18hrs"]
    ]
    var social=[
        ["1hrs", "Last Day - 3hrs"],
        ["5hrs", "Last Week - 10hrs"],
        ["21hrs","Last Month - 23hrs"]
    ]
    var selfCare=[
        ["0hrs", "Last Day - 1hrs"],
        ["2hrs", "Last Week - 2hrs"],
        ["7hrs", "Last Month - 11hrs"]
    ]
    
function daily(){
    document.getElementById("daily-btn").classList.add("active")
    document.getElementById("weekly-btn").classList.remove("active")
    document.getElementById("monthly-btn").classList.remove("active")

    document.getElementById("work-time").innerText=work[0][0]
    document.getElementById("work-last-time").innerText=work[0][1]

    document.getElementById("play-time").innerText=play[0][0]
    document.getElementById("play-last-time").innerText=play[0][1]

    document.getElementById("study-time").innerText=study[0][0]
    document.getElementById("study-last-time").innerText=study[0][1]

    document.getElementById("exercise-time").innerText=exercise[0][0]
    document.getElementById("exercise-last-time").innerText=exercise[0][1]

    document.getElementById("social-time").innerText=social[0][0]
    document.getElementById("social-last-time").innerText=social[0][1]

    document.getElementById("selfcare-time").innerText=selfCare[0][0]
    document.getElementById("selfcare-last-time").innerText=selfCare[0][1]
}
function weekly(){
    document.getElementById("daily-btn").classList.remove("active")
    document.getElementById("weekly-btn").classList.add("active")
    document.getElementById("monthly-btn").classList.remove("active")

    document.getElementById("work-time").innerText=work[1][0]
    document.getElementById("work-last-time").innerText=work[1][1]

    document.getElementById("play-time").innerText=play[1][0]
    document.getElementById("play-last-time").innerText=play[1][1]

    document.getElementById("study-time").innerText=study[1][0]
    document.getElementById("study-last-time").innerText=study[1][1]

    document.getElementById("exercise-time").innerText=exercise[1][0]
    document.getElementById("exercise-last-time").innerText=exercise[1][1]

    document.getElementById("social-time").innerText=social[1][0]
    document.getElementById("social-last-time").innerText=social[1][1]

    document.getElementById("selfcare-time").innerText=selfCare[1][0]
    document.getElementById("selfcare-last-time").innerText=selfCare[1][1]
}
function monthly(){
    document.getElementById("daily-btn").classList.remove("active")
    document.getElementById("weekly-btn").classList.remove("active")
    document.getElementById("monthly-btn").classList.add("active")

    document.getElementById("work-time").innerText=work[2][0]
    document.getElementById("work-last-time").innerText=work[2][1]

    document.getElementById("play-time").innerText=play[2][0]
    document.getElementById("play-last-time").innerText=play[2][1]

    document.getElementById("study-time").innerText=study[2][0]
    document.getElementById("study-last-time").innerText=study[2][1]

    document.getElementById("exercise-time").innerText=exercise[2][0]
    document.getElementById("exercise-last-time").innerText=exercise[2][1]

    document.getElementById("social-time").innerText=social[2][0]
    document.getElementById("social-last-time").innerText=social[2][1]

    document.getElementById("selfcare-time").innerText=selfCare[2][0]
    document.getElementById("selfcare-last-time").innerText=selfCare[2][1]
}

