    var focus = document.querySelector('.form_div')
    var lass = document.getElementsByClassName('form_div')

    focus.addEventListener('click', function() {
        style = lass[0].style;
        style.background = 'red';
    });