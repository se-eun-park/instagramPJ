document.addEventListener('DOMContentLoaded', () => {
    // Json파일 외부에서 불러올 때, 브라우저 보안 이슈로 fetch요청 거부되어 직접 선언 방식으로 변경
    const data = [
        {
            "id": "test1",
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
            "id": "test2",
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
            "id": "test3",
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
        img.addEventListener('click', () => {
            user.isStoryViewed = true;
            console.log(`${user.name}의 스토리 방문`, user.isStoryViewed);

            // 스토리 방문 시, style 변경
            if (user.isStoryViewed) {
                imgStroke.style.width = `4.125rem`; // 기존 width에서 0.1rem 감소
                imgStroke.style.height = `4.125rem`; // 기존 height에서 0.1rem 감소
                imgStroke.style.background = '#000'; // 색상을 검은색으로 변경
            }
        });

        
        
        imgBack.classList.add("imgBack");
        imgStroke.classList.add("imgStroke");

        imgBack.style.left = `${offset_img}rem`
        imgStroke.style.left = `${offset_img}rem` 

        offset_img += imgStroke.offsetWidth + space_img;
        
        profileContainer.appendChild(img);
        profileContainer.appendChild(imgBack);
        profileContainer.appendChild(imgStroke);
        
        nameSpan.textContent = user.name;
        nameSpan.classList.add("name");

        nameSpan.style.marginRight = `${offset_name}rem`

        userName.appendChild(nameSpan);

    });

});