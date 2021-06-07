import styles from '../../styles/MissingPost.module.css';

const MissingPost = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_box}>
          <header className={styles.header}>
            <h1 className={styles.title}>제목</h1>
            <div className={styles.info}>유저이름 + 글 등록일(손영산 2021. 06. 06 10:50)</div>
          </header>
          <div className={styles.body}>
            <p>글 내용이 들어옵니다.</p>
          </div>
          <footer>
            <button>댓글등록</button>
            <div>댓글은 모달 형식으로 버튼 클릭 시 나타났다 사라집니다.</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default MissingPost;
