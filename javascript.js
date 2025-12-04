const header = document.getElementById("topbar");
const footer = document.querySelector("footer");
const aboutme = document.getElementById("aboutme");
const mode = document.getElementById("mode");
const mode2 = document.getElementById("mode2");
const emailarea = document.getElementById("emailarea");

if (localStorage.getItem("darkmode")) {
    toggleDarkMode();
} else if (localStorage.getItem("christmasmode")) {
    toggleChristmasMode();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    document.body.classList.remove("christmas");

    header.classList.toggle("dark2");
    header.classList.remove("christmas2");

    footer.classList.toggle("dark2");
    footer.classList.remove("christmas2");

    document.querySelectorAll(".button").forEach(b => {
        b.classList.toggle("dark2");
        b.classList.remove("christmas2");
    });

    if (aboutme) {
        aboutme.classList.toggle("dark3");
        aboutme.classList.remove("christmas3");
    }

    document.querySelectorAll(".vl").forEach(v => {
        v.classList.toggle("dark4");
        v.classList.remove("christmas4");
    });

    if (!mode.classList.contains("modesize")) {
        mode.classList.toggle("modesize");
    }

    mode.classList.toggle("dark2");
    mode.classList.remove("christmas2");

    if (!mode2.classList.contains("modesize")) {
        mode2.classList.toggle("modesize");
    }
    mode2.classList.toggle("dark2");
    mode2.classList.remove("christmas2");


    if (!localStorage.getItem("darkmode")) {
        localStorage.removeItem("christmasmode");
        localStorage.setItem("darkmode", "true");
    }

    if (emailarea) {
        emailarea.classList.toggle("dark2");
        emailarea.classList.remove("christmas2")
    }

    if (localStorage.getItem("darkmode")) {
        document.getElementById("mode").addEventListener("click", function (event) {
            localStorage.removeItem("darkmode");
        });
    } else {
        document.getElementById("mode").removeEventListener("click");
    }

}

function toggleChristmasMode() {
    document.body.classList.toggle("christmas");
    document.body.classList.remove("dark");

    header.classList.toggle("christmas2");
    header.classList.remove("dark2");

    footer.classList.toggle("christmas2");
    footer.classList.remove("dark2");

    document.querySelectorAll(".button").forEach(b => {
        b.classList.toggle("christmas2");
        b.classList.remove("dark2");
    });

    if (aboutme) {
        aboutme.classList.toggle("christmas3")
        aboutme.classList.remove("dark3")
    }

    document.querySelectorAll(".vl").forEach(v => {
        v.classList.toggle("christmas4");
        v.classList.remove("dark4");
    });

    if (!mode.classList.contains("modesize")) {
        mode.classList.toggle("modesize");
    }
    mode.classList.toggle("christmas2");
    mode.classList.remove("dark2");

    if (!mode2.classList.contains("modesize")) {
        mode2.classList.toggle("modesize");
    }
    mode2.classList.toggle("christmas2");
    mode2.classList.remove("dark2");

    if (!localStorage.getItem("christmasmode")) {
        localStorage.removeItem("darkmode");
        localStorage.setItem("christmasmode", "true");
    }

    if (emailarea) {
        emailarea.classList.toggle("christmas2");
        emailarea.classList.remove("dark2")
    }

    if (localStorage.getItem("christmasmode")) {
        document.getElementById("mode2").addEventListener("click", function (event) {
            localStorage.removeItem("christmasmode");
        });
    } else {
        document.getElementById("mode2").removeEventListener("click");
    }
}

if (emailarea) {
    document.getElementById("form").addEventListener("submit", function (event) {
        let newParagraph = document.createElement("p")
        event.preventDefault();
        const box = document.createElement("div");
        box.classList.add("emailbox");
        box.innerHTML =
            "Email sent by: " + document.getElementById("name").value +
            ", from " + document.getElementById("email").value +
            " Subject: " + document.getElementById("subject").value +
            " Message: " + document.getElementById("message").value;
        emailarea.appendChild(box);
    });
}

