document.getElementById('btn-1').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
})



document.getElementById('btn-2').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
})


document.getElementById('btn-3').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
})


document.getElementById('btn-4').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})


document.getElementById('btn-5').addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple'
})


document.getElementById('btn-6').addEventListener('click', function(){
    document.body.style.backgroundColor = 'cyan'
})


document.getElementById('btn-7').addEventListener('click', function(){
    document.body.style.backgroundColor = 'violet'
})


document.getElementById('btn-8').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightgray'
})


document.getElementById('btn-9').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange'
})

document.getElementById('btn-9-1').addEventListener('click', function(){
    document.body.style.backgroundColor = 'cornflowerblue'
})


document.getElementById('btn-10').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue'
})


document.getElementById('btn-11').addEventListener('click', function(){
    document.body.style.backgroundColor = 'white'
})


document.getElementById('btn').addEventListener('click',
    function(){

        let input = document.getElementById('input');

        let inputValue = input.value;

        let pta = document.getElementById('p');

        pta.innerText = ('Hello ') + inputValue  + (' !')

})
