function updateImageSrc() {
    var image = document.getElementById('navBarLogoImg');
    if (window.innerWidth < 601) {
        image.src = './asset/navIcon/navBarLogo.svg';
        image.style.width = `7.5rem`;
        image.style.height = `4.2rem`;
        image.style.transform = `rotate(90deg)`;
        image.style.margin = `6rem 0 0 75vh`;
  
    } else if (window.innerWidth < 1231) {
      image.src = './asset/navIcon/instagramIcon.svg';
      image.style.width = `1.8rem`;
      image.style.height = `1.8rem`;
      image.style.margin = `4vh 0 7vh 0`;
      
    } else {
      image.src = './asset/navIcon/navBarLogo.svg';
      image.style.width = `7.5rem`;
      image.style.height = `4.2rem`;
      image.style.margin = `2vh 0 3vh 0`;
      image.style.transform = `rotate(360deg)`;
    }
  }
  
  // 창 크기가 변경될 때마다 updateImageSrc 함수를 호출
  window.addEventListener('resize', updateImageSrc);
  
  // 초기 로드 시에도 함수를 호출
  updateImageSrc();