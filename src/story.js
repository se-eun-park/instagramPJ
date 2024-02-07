document.addEventListener('DOMContentLoaded', () => {
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