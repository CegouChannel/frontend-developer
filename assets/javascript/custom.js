window.onload = function () {
    const elem = document.querySelectorAll('button')
    elem.forEach(el => {
        el.addEventListener('click', function () {
            const elem = document.querySelectorAll('button');
            elem.forEach(el => {
                el.classList.remove('active');
            })
            this.classList.add('active');
            changeImg();
        })
    })

    function changeImg() {
        elemImg = document.querySelector('.menu>img')
        if (document.querySelector('.food').classList.contains('active') == true) {
            elemImg.setAttribute('src', 'assets/images/first_picture.png');
        } else if (document.querySelector('.drinks').classList.contains('active') == true) {
            elemImg.setAttribute('src', 'assets/images/second_picture.png');
        } else if (document.querySelector('.takeaway').classList.contains('active') == true) {
            elemImg.setAttribute('src', 'assets/images/third_picture.png');
        }
    }
}