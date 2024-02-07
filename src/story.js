document.addEventListener('DOMContentLoaded', () => {
    // Json파일 외부에서 불러올 때, 브라우저 보안 이슈로 fetch요청 거부되어 직접 선언 방식으로 변경
    // import  해서도 해봤는데 cors 에러
    const data = [
        {
            "id": "1",
            "name": "user_name_1",
            "profileImg" : "./asset/testImg/test1.png",
            "postImg": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            "postDate":"2024-01-30",
            "isLiked": false,
            "isStoryViewed": false
        },
        {
            "id": "2",
            "name": "user_name_2",
            "profileImg" : "./asset/testImg/test2.png",
            "postImg": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            "postDate":"2024-01-28",
            "isLiked": false,
            "isStoryViewed": false
        },
        {
            "id": "3",
            "name": "user_name_3",
            "profileImg" : "./asset/testImg/test3.png",
            "postImg": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            "postDate":"2024-01-31",
            "isLiked": false,
            "isStoryViewed": false
        }
    ]

    const profileContainer = document.getElementsByClassName('profileContainer')[0];
    const userName = document.getElementsByClassName('userName')[0];

    // img가 불러와질 때 마다 간격을 유지하며 오도록 설정해주는 변수
    let offset_img = 2.2;
    const space_img =  6.125;

    let offset_name = 1.6;

    data.forEach(user => {
        const img = document.createElement('img');
        // 이미지를 감싸는 요소들
        const imgBack = document.createElement('div');
        const imgStroke = document.createElement('div');

        const nameSpan = document.createElement('span');

        img.src = user.profileImg;
        img.alt = `${user.name}의 프로필 사진`;
        img.style.cursor = 'pointer';
        img.style.left = `${offset_img}rem` 

        imgBack.classList.add("imgBack");
        imgStroke.classList.add("imgStroke");

        imgBack.style.left = `${offset_img}rem`
        imgStroke.style.left = `${offset_img}rem` 

        offset_img += imgStroke.offsetWidth + space_img;
        
        profileContainer.appendChild(img);
        profileContainer.appendChild(imgBack);
        profileContainer.appendChild(imgStroke);
        
        nameSpan.textContent = user.name;
        nameSpan.classList.add(`name${user.id}`);

        nameSpan.style.marginRight = `${offset_name}rem`

        userName.appendChild(nameSpan);

        img.addEventListener('click', () => {
            user.isStoryViewed = true;
            console.log(`${user.name}의 스토리 방문`, user.isStoryViewed);

            // 스토리 방문 시, style 변경
            if (user.isStoryViewed) {
                imgStroke.style.width = `4.125rem`;
                imgStroke.style.height = `4.125rem`;
                imgStroke.style.background = '#DEDDDD';

                // name${user.id}인 span 요소 찾기
                const nameTrue = document.querySelector(`.name${user.id}`);
                if (nameTrue) {
                    nameTrue.style.color = '#9D9D9D';
                }
            }
        });

    });

});

function updateImageSrc() {
    var image = document.getElementById('navBarLogoImg');
    if (window.innerWidth < 601) {
        image.src = './asset/navBarLogo.svg';
        image.style.width = `7.5rem`;
        image.style.height = `4.2rem`;
        image.style.transform = `rotate(90deg)`;
        image.style.margin = `6rem 0 0 75vh`;
  
    } else if (window.innerWidth < 1231) {
      image.src = './asset/instagramIcon.svg';
      image.style.width = `1.8rem`;
      image.style.height = `1.8rem`;
      image.style.margin = `4vh 0 7vh 0`;
      
    } else {
      image.src = './asset/navBarLogo.svg';
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