import { useRouter } from "next/router";
import Navbar from "../../parts/components/Navbar";
import PostDetailContainer from "../../parts/containers/PostDetailContainer";

const Post = () => {

  return (
    <>
      <Navbar />
      <PostDetailContainer />
    </>
  );
}

export default Post;