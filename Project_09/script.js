/* =========================================
   APOLOGY WEBSITE
   Rohan Verma → Avika & Kinza
   ========================================= */


/* Change between pages */

function changePage(currentId, nextId) {

    const current = document.getElementById(currentId);
    const next = document.getElementById(nextId);

    current.classList.remove("active");

    setTimeout(() => {

        current.classList.add("hidden");

        next.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 200);
}


/* ===============================
   HOME → REVEAL
   =============================== */

function startInvestigation() {

    changePage("home", "reveal");

}


/* ===============================
   REVEAL → APOLOGY
   =============================== */

function showApology() {

    changePage("reveal", "apology");

}


/* ===============================
   APOLOGY → EXCUSE
   =============================== */

function showExcuse() {

    changePage("apology", "excuse");

}


/* ===============================
   EXCUSE METER
   =============================== */

function revealExcuse() {

    const meter = document.getElementById("meter-fill");
    const percentage = document.getElementById("percentage");

    const result = document.getElementById("excuse-result");

    const button = document.getElementById("excuse-btn");

    const continueBtn = document.getElementById("continue-btn");


    button.disabled = true;
    button.innerText = "Calculating... 💀";


    let value = 0;

    const interval = setInterval(() => {

        value++;

        percentage.innerText = value + "%";

        meter.style.width = value + "%";


        if (value >= 2) {

            clearInterval(interval);

            setTimeout(() => {

                result.style.display = "block";

                button.style.display = "none";

                continueBtn.style.display = "inline-block";

            }, 500);

        }

    }, 500);

}


/* ===============================
   EXCUSE → FORGIVENESS
   =============================== */

function showForgiveness() {

    changePage("excuse", "forgive");

}


/* ===============================
   NO BUTTON
   =============================== */

let noClicks = 0;

const funnyMessages = [

    "Are you sure? 😭",

    "Think again... 🥲",

    "Please yaar... 😭",

    "I already apologized! 💀",

    "One more chance? 🥺",

    "Don't do this to me 😂",

    "Okay okay... I'll behave! 😭"

];


function moveNoButton() {

    const button =
        document.getElementById("noBtn");

    const message =
        document.getElementById("no-message");


    noClicks++;


    message.innerText =
        funnyMessages[
            Math.min(
                noClicks - 1,
                funnyMessages.length - 1
            )
        ];


    /*
       If they click NO many times,
       actually record NO.
    */

    if (noClicks >= 5) {

        submitResponse(
            selectedFriend,
            "No"
        );


        message.innerText =
            "Okay... I understand. 🥲";


        button.style.position =
            "static";

        button.innerText =
            "NO 😭";


        return;
    }


    /*
       Move button after second click
    */

    if (noClicks >= 2) {

        button.classList.add("moving");


        const maxX =
            window.innerWidth -
            button.offsetWidth -
            20;

        const maxY =
            window.innerHeight -
            button.offsetHeight -
            20;


        const randomX =
            Math.floor(
                Math.random() *
                Math.max(maxX, 50)
            );


        const randomY =
            Math.floor(
                Math.random() *
                Math.max(maxY, 50)
            );


        button.style.left =
            randomX + "px";

        button.style.top =
            randomY + "px";

    }

}


/* ===============================
   YES → SURPRISE
   =============================== */

function forgiveMe() {

    /*
       Make sure a friend has been selected
    */

    if (!selectedFriend) {
        alert("First tell me who you are! 😂");
        return;
    }


    /*
       Submit the response to Google Forms
    */

    submitResponse(
        selectedFriend,
        "Yes"
    );


    /*
       Show the surprise ending
    */

    changePage("forgive", "success");


    setTimeout(() => {

        createConfetti();

        createFloatingEmojis();

    }, 500);

}


/* ===============================
   CONFETTI
   =============================== */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");


    const symbols = [
        "🎉",
        "🎊",
        "🥳",
        "✨",
        "⭐",
        "💫",
        "🫂"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        piece.style.fontSize =
            12 + Math.random() * 20 + "px";


        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}


/* ===============================
   FLOATING EMOJIS
   =============================== */

function createFloatingEmojis() {

    const emojis = [
        "🎉",
        "🥳",
        "😭",
        "🫂",
        "✨",
        "😂"
    ];


    for (let i = 0; i < 20; i++) {

        const emoji =
            document.createElement("div");

        emoji.innerText =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        emoji.style.position = "fixed";

        emoji.style.left =
            Math.random() * 100 + "vw";

        emoji.style.bottom = "-50px";

        emoji.style.fontSize =
            20 + Math.random() * 30 + "px";

        emoji.style.zIndex = "101";

        emoji.style.pointerEvents = "none";

        document.body.appendChild(emoji);


        const animation =
            emoji.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translateY(-110vh) rotate(${Math.random() * 360}deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        3000 + Math.random() * 3000,

                    easing: "ease-out"
                }
            );


        animation.onfinish = () => {

            emoji.remove();

        };

    }

}

/* =========================================
   GOOGLE FORM CONNECTION
   ========================================= */


/*
   Google Form URL
*/

const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfaJZOA3mk_71Rd9TFnNfyNgSAQlxA22KJMSSwM2nUKgLY6ZQ/formResponse";


/*
   Google Form Entry IDs
*/

const NAME_ENTRY =
    "entry.938103713";

const FORGIVENESS_ENTRY =
    "entry.1655331592";


/*
   Store selected friend
*/

let selectedFriend = "";


/*
   Select Avika or Kinza
*/

function selectFriend(name) {

    selectedFriend = name;


    /*
       Show selected friend's name
    */

    document.getElementById("friend-name").innerText =
        name;


    /*
       Hide name selection
    */

    document.getElementById("name-selection")
        .classList.add("hidden");


    /*
       Show forgiveness question
    */

    document.getElementById("forgiveness-question")
        .classList.remove("hidden");

}


/*
   Send response to Google Forms
*/

function submitResponse(name, answer) {

    /*
       Create invisible form
    */

    const form =
        document.createElement("form");


    form.method = "POST";

    form.action =
        GOOGLE_FORM_URL;

    form.target =
        "hidden_iframe";


    /*
       Name field
    */

    const nameInput =
        document.createElement("input");

    nameInput.type = "hidden";

    nameInput.name =
        NAME_ENTRY;

    nameInput.value =
        name;


    /*
       Forgiveness field
    */

    const answerInput =
        document.createElement("input");

    answerInput.type = "hidden";

    answerInput.name =
        FORGIVENESS_ENTRY;

    answerInput.value =
        answer;


    /*
       Add fields
    */

    form.appendChild(nameInput);

    form.appendChild(answerInput);


    /*
       Add form to page
    */

    document.body.appendChild(form);


    /*
       Submit
    */

    form.submit();


    /*
       Remove form
    */

    setTimeout(() => {

        form.remove();

    }, 1000);

}