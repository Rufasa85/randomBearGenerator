$(document).ready(function(){
    console.log('hello hello');
    $('#bearButton').click(function(e) {
        e.preventDefault();
        var bearNumber = Math.floor(Math.random()*1000);
        console.log(bearNumber);
        $('#bearDiv').show();
        if(bearNumber === 69) {
            $('#bearName').html('San Francisco Bear')
        }
        else if(bearNumber === 666) {
            $('#bearName').html('Gare-Bear, Jewel of the Met Market Deli')
        }
        else if(bearNumber === 1) {
            $('#bearName').html('Water Bear, Tardigrades')
        }
        else if (bearNumber < 125) {
            $('#bearName').html('American Black Bear')
        }
        else if (bearNumber < 250) {
            $('#bearName').html('Asiatic Black Bear')
        }
        else if (bearNumber < 375) {
            $('#bearName').html('Brown Bear')
        }
        else if (bearNumber < 500) {
            $('#bearName').html('Polar Bear')
        }
        else if (bearNumber < 625) {
            $('#bearName').html('Sloth Bear')
        }
        else if (bearNumber < 750) {
            $('#bearName').html('Sun Bear')
        }
        else if (bearNumber < 875) {
            $('#bearName').html('Giant Panda Bear')
        }
        else if (bearNumber < 1000) {
            $('#bearName').html('Asiatic Black Bear')
        }

    })
})
