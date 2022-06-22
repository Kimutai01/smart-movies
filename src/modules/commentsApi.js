const commentPost = () => {
  document.querySelector('.modal1').addEventListener('click', (e) => {
    const userName = document.querySelector('.userName');
    const commentMsg = document.querySelector('.CommentMsg');
    const dataId = document.querySelector('.id');
    if (e.target.classList.contains('send-data')) {
      const commentObj = {
        comment: commentMsg.value,
        username: userName.value,
        item_id: dataId.value,
      };
      postComment(commentObj);
      commentMsg.value = '';
      userName.value = '';
    }
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
