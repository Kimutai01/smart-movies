const commentPost = () => {
  document.querySelector('.modal1').addEventListener('click', (e) => {
    const userName = document.querySelector('.userName');
    const commentMsg = document.querySelector('.CommentMsg');
    const dataId = document.querySelector('.id').value;
    if (e.target.classList.contains('send-data')) {
      const commentObj = {
        comment: commentMsg.value,
        username: userName.value,
        item_id: dataId,
      };
      postComment(commentObj);

      commentMsg.value = '';
      userName.value = '';
    }
    getComment(dataId);
  });
};

export default commentPost;

const postComment = async (commentObj) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LbawEnU3eIyZSrPUhv4Q/comments',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentObj),
    },
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.text();
  return data;
};

const displayComments = (data) => {
  let output = '';
  const commentNum = data.length;
  data.forEach((item) => {
    const location = document.querySelector('.Load_comment');
    output += `
      <div class="item">
        <div class="s-item">
        <p class="tName">${item.username}</p>
        <p>${item.comment}</p>
        </div>
        <p class="dateId"><small>${item.creation_date}</small></p>
      </div>
    `;
    location.innerHTML = output;
  });
 
};

const getComment = async (dataId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LbawEnU3eIyZSrPUhv4Q/comments?item_id=${dataId}`,
  );
  const data = await response.json();
  displayComments(data);
  commentCounter(data);
};


const commentCounter = async (comments) => {
  let count = 0;
for(let i =0; i< comments.length; i+=1){
   count+=1;
}
const pos = document.querySelector('.comment-count');
  pos.innerHTML = count;
};
