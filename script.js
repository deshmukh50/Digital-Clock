const fromatSwitchBtn = document.querySelector(".format-switch-btn");

fromatSwitchBtn.addEventListener("click", () => {
    fromatSwitchBtn.classList.toggle("active");

    var fromatValue = fromatSwitchBtn.getAttribute("data-format");

    if(fromatValue ==="12"){
        fromatSwitchBtn.setAttribute("data-format", "24");
    }
    else{
       fromatSwitchBtn.setAttribute("data-format", "12"); 
    }
});

function clock(){
        var today = new Date();

        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        let period = "AM";

        //set the time period(am/pm)
        if(hours >=12){
            period = "PM";
        }
        
        //set the 12 hour clock fromt
        var fromatValue = fromatSwitchBtn.getAttribute("data-format");

        if(fromatValue === "12"){
           hours = hours > 12 ? hours % 12 : hours;
        }

        //add the 0 for the values lower than 10
        if(hours < 10){
            hours = "0" + hours;
        }

        if(minutes < 10){
            minutes = "0" + minutes;
        }

        if(seconds < 10){
            seconds = "0" + seconds;
        }

        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
        document.querySelector(".period").innerHTML = period;
    }

    var updateClock = setInterval(clock, 1000);

    //Get the data
    var today = new Date();
    const dayNumber = today.getDate();
    const year = today.getFullYear();
    const dayName = today.toLocaleString("default", {weekday: "long"});
    const monthName = today.toLocaleString("default", {month: "short"});

    document.querySelector(".month-name").innerHTML =monthName;
    document.querySelector(".day-name").innerHTML =dayName;
    document.querySelector(".day-number").innerHTML =dayNumber;
    //document.querySelector(".year").innerHTML =year;

    //javascript for dot menu toggle
    const dotmenuBtn = document.querySelector(".dot-menu-btn");
    const dotMenu = document.querySelector(".dot-meun");

    dotmenuBtn.addEventListener("click", () =>{
        dotMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if(e.target.id !== "active-menu"){
            dotMenu.classList.remove("active");
        }
    });

    // ---------------- DARK / LIGHT MODE ----------------
const themeToggle = document.querySelector(".light-toggle");

// Load saved mode
if(localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.classList.replace("uil-sun", "uil-moon");
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")) {
        themeToggle.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("theme", "dark");
    }
});

