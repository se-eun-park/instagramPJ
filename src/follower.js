document.addEventListener('DOMContentLoaded', () => {
    renderFollowerList(); // 팔로워 리스트 렌더링
    renderStory();
});

function renderFollowerList() {
    const followerList = document.getElementsByClassName('followerList')[0];

    data.forEach(user => {
        if (!user.Follower) {
            const followerItemId = `followerItem${user.id}`;

            if (!document.getElementById(followerItemId)) {
                const followerItem = document.createElement('div');
                followerItem.id = followerItemId;

                const followerInfo = document.createElement('div');
                followerInfo.classList.add('followerInfo');

                const followerImg = document.createElement('img');
                followerImg.src = user.profileImg;
                followerImg.alt = `${user.name}의 프로필 사진`;
                followerInfo.appendChild(followerImg);

                const followerName = document.createElement('div');
                followerName.classList.add('followerName');
                followerName.textContent = user.name;

                const forYouText = document.createElement('span');
                forYouText.textContent = '회원님을 위한 추천';

                const followText = document.createElement('span');
                followText.classList.add(`followText${user.id}`);
                followText.textContent = '팔로우';
                followText.style.cursor = 'pointer';
                followText.addEventListener('click', () => {
                    user.Follower = true;
                    renderStory();
                    updateFollowerItem(user.Follower, user.id);
                })

                followerName.appendChild(forYouText);
                followerInfo.appendChild(followerName);
                followerInfo.appendChild(followText);

                followerItem.appendChild(followerInfo);
                
                followerList.appendChild(followerItem);
                
            }
        }
    });
}

function updateFollowerItem(Follower, id) {
    const followTrue = document.querySelector(`.followText${id}`);
    
    if (Follower) {
        followTrue.style.color = '#373737';
        followTrue.textContent = '팔로워';
    }
}