var newcolor = [0, 1, 2, 3, 4, 5];
var chars = 'A0123456789ABCDEF'.split('');
var hist = [];

$('#main').click(function () {
    changeColor()
})

function changeColor() {

    for (let i = 0; i < newcolor.length; i++) {
        newcolor[i] = chars[Math.floor(Math.random() *  chars.length)];
    }
    $('#h1').text('#' + newcolor.join(''))
    $('#main').css('background-color', '#' + newcolor.join(''))
    if (hist.length < 5) {
        hist.push('#' + newcolor.join(''))
    }
    else {
        $('.histcolors:first').remove()
    }
    $('#historydiv').append('<div class="histcolors #'+ newcolor.join('') +'"><div class="histcolor" style="background-color: '+ '#' + newcolor.join('') +'"></div>' + '#' + newcolor.join('') + '</div>')


    $('.histcolors').click(function(){
        $('#main').css('background-color', this.className.split(' ')[1]);
        $('#h1').text(this.className.split(' ')[1]);
    })
}

$(document).keyup(function (e) {
    if (e.which === 67) {
        copyCode();
    }
    if (e.which === 32) {
        changeColor()
    }
    if(e.which === 72) {
        openHist()
    }
})

function copyCode() {
    $('.copied').slideDown()
    setTimeout(function () {
        $('.copied').slideUp()
    }, 2000)
    var newInput = document.createElement('input');
    newInput.value = document.getElementById('h1').innerHTML;
    document.body.appendChild(newInput);
    newInput.select();
    document.execCommand('copy');
    document.body.removeChild(newInput);
}

function openHist(){
    $('#historydiv').slideToggle();
}