const commentCounter = async (comments) => {
  let count = 0;
  for (let i = 0; i < comments.length; i += 1) {
    count += 1;
  }
  return count;
};

export default commentCounter;
