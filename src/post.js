let prev = document.getElementById('leftArrow')
let next = document.getElementById('rightArrow')

let prev2 = document.getElementById('leftArrow2')
let next2 = document.getElementById('rightArrow2')

let prev3 = document.getElementById('leftArrow3')
let next3 = document.getElementById('rightArrow3')


let imgs = document.querySelectorAll('#sectionImage ul li')
let imgs2 = document.querySelectorAll('#sectionImage2 ul li')
let imgs3 = document.querySelectorAll('#sectionImage3 ul li')

let bullets = document.querySelectorAll('#sectionImageBullets label')
let bullets2 = document.querySelectorAll('#sectionImageBullets2 label')
let bullets3 = document.querySelectorAll('#sectionImageBullets3 label')

window.onload = function() {
    showImg(0)
    showImg2(0)
    showImg3(0)
    showBullet(0)
    showBullet2(0)
    showBullet3(0)
    showArrow()
}

let imgNum = 0
let imgNum2 = 0
let imgNum3 = 0

function showImg(idx) {
    imgs.forEach(function(img, index) {
        if (index == idx) {
            img.style.display = 'block'
        } else {
            img.style.display = 'none'
        }
    })
}
function showImg2(idx) {
    imgs2.forEach(function(img, index) {
        if (index == idx) {
            img.style.display = 'block'
        } else {
            img.style.display = 'none'
        }
    })
}
function showImg3(idx) {
    imgs3.forEach(function(img, index) {
        if (index == idx) {
            img.style.display = 'block'
        } else {
            img.style.display = 'none'
        }
    })
}

function showBullet(idx) {
    bullets.forEach(function(b, index) {
        if (index == idx) {
            b.style.backgroundColor = 'rgba(255,255,255,0.8)'
        } else {
            b.style.backgroundColor = 'rgba(0,0,0,0.5)'
        }
    })
}

function showBullet2(idx) {
    bullets2.forEach(function(b, index) {
        if (index == idx) {
            b.style.backgroundColor = 'rgba(255,255,255,0.8)'
        } else {
            b.style.backgroundColor = 'rgba(0,0,0,0.5)'
        }
    })
}

function showBullet3(idx) {
    bullets3.forEach(function(b, index) {
        if (index == idx) {
            b.style.backgroundColor = 'rgba(255,255,255,0.8)'
        } else {
            b.style.backgroundColor = 'rgba(0,0,0,0.5)'
        }
    })
}

function showArrow() {
    if (imgNum == 0) {
        //right arrow style none
        prev.style.visibility = 'hidden'
        next.style.visibility = 'visible'
    } else if (imgNum == imgs.length - 1) {
        prev.style.visibility = 'visible'
        next.style.visibility = 'hidden'
    } else {
        prev.style.visibility = 'visible'
        next.style.visibility = 'visible'
    }

    if (imgNum2 == 0) {
        //right arrow style none
        prev2.style.visibility = 'hidden'
        next2.style.visibility = 'visible'
    } else if (imgNum2== imgs2.length - 1) {
        prev2.style.visibility = 'visible'
        next2.style.visibility = 'hidden'
    } else {
        prev2.style.visibility = 'visible'
        next2.style.visibility = 'visible'
    }

    if (imgNum3 == 0) {
        //right arrow style none
        prev3.style.visibility = 'hidden'
        next3.style.visibility = 'visible'
    } else if (imgNum3 == imgs3.length - 1) {
        prev3.style.visibility = 'visible'
        next3.style.visibility = 'hidden'
    } else {
        prev3.style.visibility = 'visible'
        next3.style.visibility = 'visible'
    }
}

prev.onclick = function () {
    imgNum--
    if (imgNum < 0) {
        alert('불가능')
        imgNum = 0
    }
    showBullet(imgNum)
    showArrow()
    showImg(imgNum)
}

next.onclick = function () {
    imgNum++
    if (imgNum > 2) {
        alert('불가능')
        imgNum = 2
    }
    showBullet(imgNum)
    showArrow()
    showImg(imgNum)
}

prev2.onclick = function () {
    imgNum2--
    if (imgNum2 < 0) {
        alert('불가능')
        imgNum2 = 0
    }
    showBullet2(imgNum2)
    showArrow()
    showImg2(imgNum2)
}

next2.onclick = function () {
    imgNum2++
    if (imgNum2 > 2) {
        alert('불가능')
        imgNum2 = 2
    }
    showBullet2(imgNum2)
    showArrow()
    showImg2(imgNum2)
}

prev3.onclick = function () {
    imgNum3--
    if (imgNum3 < 0) {
        alert('불가능')
        imgNum3 = 0
    }
    showBullet3(imgNum3)
    showArrow()
    showImg3(imgNum3)
}

next3.onclick = function () {
    imgNum3++
    if (imgNum3 > 2) {
        alert('불가능')
        imgNum3 = 2
    }
    showBullet3(imgNum3)
    showArrow()
    showImg3(imgNum3)
}

// -------------------------footer-----------------------
function toggleLike() {
    let like = document.getElementById('sectionFooterImgLike')
    let like2 = document.getElementById('sectionFooterImgLike2')
    let like3 = document.getElementById('sectionFooterImgLike3')
    
    let imgSrc = like.src
    let imgSrc2 = like.src
    let imgSrc3 = like.src

    if(imgSrc.includes('fill')) {
        like.src = './asset/like.png'
    } else {
        like.src = './asset/like_fill.png'
    }

    if(imgSrc2.includes('fill')) {
        like2.src = './asset/like.png'
    } else {
        like2.src = './asset/like_fill.png'
    }

    if(imgSrc3.includes('fill')) {
        like3.src = './asset/like.png'
    } else {
        like3.src = './asset/like_fill.png'
    }
}