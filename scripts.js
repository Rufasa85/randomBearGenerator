$(document).ready(function(){
    console.log('hello hello');
    $('#bearButton').click(function(e) {
        e.preventDefault();
        var bearNumber = Math.floor(Math.random()*1000);
        console.log(bearNumber);
        $('#bearDiv').show();
        if(bearNumber === 69) {
            $('#bearName').html('San Francisco Bear');
        }
        else if(bearNumber === 666) {
            $('#bearName').html('Gare-Bear, Jewel of the Met Market Deli');
        }
        else if(bearNumber === 1) {
            $('#bearName').html('Water Bear, Tardigrades');
        }
        else if (bearNumber < 125) {
            $('#bearPic').attr('src', 'assets/images/AmericanBlackBear.jpg');
            $('#bearName').html('American Black Bear');
        }
        else if (bearNumber < 250) {
            $('#bearPic').attr('src', 'assets/images/AsiaticBlackBear.jpg');
            $('#bearName').html('Asiatic Black Bear');
        }
        else if (bearNumber < 375) {
            $('#bearPic').attr('src', 'assets/images/BrownBear.jpg');
            $('#bearName').html('Brown Bear');
        }
        else if (bearNumber < 500) {
            $('#bearPic').attr('src', 'assets/images/PolarBear.jpg');
            $('#bearName').html('Polar Bear');
        }
        else if (bearNumber < 625) {
            $('#bearPic').attr('src', 'assets/images/SlothBear.jpg');
            $('#bearName').html('Sloth Bear');
        }
        else if (bearNumber < 750) {
            $('#bearPic').attr('src', 'assets/images/SunBear.jpg');
            $('#bearName').html('Sun Bear');
        }
        else if (bearNumber < 875) {
            $('#bearPic').attr('src', 'assets/images/GiantPanda.jpg');
            $('#bearName').html('Giant Panda Bear');
        }
        else if (bearNumber < 1000) {
            $('#bearPic').attr('src', 'assets/images/SpectacledBear.jpg');
            $('#bearName').html('Spectacled Bear');
        }

    })
})
