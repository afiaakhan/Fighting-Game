let left = 0

function startGame() {
    var start = document.getElementById('start');
    start.style.display = 'none'
   
    function game() {
        console.log(left)
        console.log(event.keyCode);
        var character = document.getElementById('character');
        if (event.keyCode === 39 && left< 930) {   //forward-right key
            left = left + 10;
            character.style.left = left + 'px'
            character.src = "Animations/forward-2.gif"
        }

        if (event.keyCode === 37 && left>37) {  //left key
            left = left - 10;
            character.style.left = left + 'px'
            character.src = "Animations/forward-2.gif"
        }

        if (event.keyCode === 32) {  //spacebar  
            character.src = "Animations/shoot-2.gif"
        }

        if (event.keyCode === 40 && left < 1600) {  //left key 
            character.src = "Animations/sit-2.gif"
        }

        if (event.keyCode === 38) {      //up key
            // character.style.left = left + 'px'
            character.src = "Animations/jump-2.gif"
        }

        if (event.keyCode === 70) {      //k key to kick
            character.src = "Animations/flip-2.gif"
        }

        if (event.keyCode === 72) {  // h key to hide
            character.style.display = "block"
            character.style.top = 0 + 'px'
            character.src = "Animations/hide-2.gif"
            setTimeout(function () {
                character.src = "Animations/forward-2.gif"
                // character.style.top = 340 + 'px'
            }, 10000)
        }
    }
    window.onkeydown = game;
}

