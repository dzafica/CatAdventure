//shows and hides welcome page and game page
        function show(shown, hidden) {
            document.getElementById(shown).style.display = 'block';
            document.getElementById(hidden).style.display = 'none';
            return false;
        }

        //randomizes mazes in the game
        var ImageArray = ['maze1.js', 'maze2.js'];

        function getRandomImage() {
            var num = Math.floor(Math.random() * 2);
            var img = ImageArray[num];
            document.getElementById("randImage").innerHTML = ('<img src="' + './img/' + img + '">')
        }



