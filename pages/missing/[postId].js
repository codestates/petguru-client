import { useRouter } from "next/router";
import Navbar from "../../parts/components/Navbar";
import PostDetailContainer from "../../parts/containers/PostDetailContainer";

const Post = () => {
  const router = useRouter();
  // petguru.site/missing?1
  const { postId } = router.query;
  
  return (
    <>
      <Navbar />
      <PostDetailContainer postId={postId} />
    </>
  );
}

export default Post;