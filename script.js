let total = 0;
let mode = "normal";

function startGame() {
    let choice = prompt("Enter 1 for Normal Mode, 2 for Impossible Mode:");
    if (choice === "1") {
        mode = "normal";
        document.getElementById("modeTitle").innerText = "Normal Mode";
    } else if (choice === "2") {
        mode = "impossible";
        document.getElementById("modeTitle").innerText = "Impossible Mode";
    } else {
        alert("Invalid choice! Please enter 1 or 2.");
        return;
    }
    document.getElementById("game").style.display = "block";
}

function playerTurn() {
    let playerInput = parseInt(document.getElementById("playerInput").value);
    if (playerInput < 1 || playerInput > 10 || playerInput + total > 100) {
        alert("Choose a valid number between 1 and 10.");
        return;
    }

    total += playerInput;
    document.getElementById("total").innerText = total;

    if (total === 100) {
        alert("You won!");
        restartGame();
        return;
    }

    setTimeout(botTurn, 500);
}

function botTurn() {
    let botChoice;
    
    if (mode === "normal") {
        botChoice = Math.floor(Math.random() * 10) + 1;
        while (botChoice + total > 100) {
            botChoice = Math.floor(Math.random() * 10) + 1;
        }
    } else if (mode === "impossible") {
        botChoice = (total < 11) ? (12 - (total % 10)) : (11 - (total % 10));
    }

    total += botChoice;
    document.getElementById("botMove").innerText = `Bot chose: ${botChoice}`;
    document.getElementById("total").innerText = total;

    if (total === 100) {
        alert("Bot wins! Try again.");
        restartGame();
    }
}

function restartGame() {
    total = 0;
    document.getElementById("total").innerText = "0";
    document.getElementById("botMove").innerText = "";
    document.getElementById("game").style.display = "none";
}
