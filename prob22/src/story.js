document.addEventListener('DOMContentLoaded', () => {
    // Json파일 외부에서 불러올 때, 브라우저 보안 이슈로 fetch요청 거부되어 직접 선언 방식으로 변경
    const data = [
        {
            "id": "test1",
            "name": "사람1",
            "profileImg" : "https://via.placeholder.com/30",
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
            "name": "사람2",
            "profileImg" : "https://via.placeholder.com/30",
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
            "name": "사람3",
            "profileImg" : "https://via.placeholder.com/30",
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

    const profileContainer = document.getElementById('profileContainer');
    const userName = document.getElementById('userName')

    data.forEach(user => {
        const img = document.createElement('img');
        const name = document.createElement('div');

        img.src = user.profileImg;
        img.alt = `${user.name}의 프로필 사진`;
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            user.isStoryViewed = true;
            console.log(`${user.name}의 스토리 방문`, user.isStoryViewed);
        });
        profileContainer.appendChild(img);

        name.textContent = user.name;
        userName.appendChild(name);

    });

});