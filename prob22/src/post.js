// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if(this.readyState == 4 && this.status == 200) {
//         //0: uninit, 1: loading, 2: loaded, 3: interactive, 4: completed
//         //status : 서버 응답상태

//     }
// }
// xhttp.open("GET", "data.json", true)
// xhttp.send()

let prev = document.getElementById('leftArrow')
let next = document.getElementById('rightArrow')

let imgs = document.querySelectorAll('#sectionImage ul li')
let bullets = document.querySelectorAll('#sectionImageBullets label')

let imgNum = 0
function showImg(idx) {
    imgs.forEach(function(img, index) {
        if (index == idx) {
            img.style.display = 'block'
        } else {
            img.style.display = 'none'
        }
    })

    // //라디오버튼 받아서 checked 변경

    // let radio = document.getElementById('postImage'+String(idx+1))
    // radio.checked = true

}

function showBullet(idx) {
    bullets.forEach(function(b, index) {
        if (index == idx) {
            b.style.backgroundColor = 'red'
        } else {
            b.style.backgroundColor = 'black'
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