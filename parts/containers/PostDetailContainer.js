import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, unloadPost } from "../../redux/modules/missing_post";
import PostDetail from "../components/missing/PostDetail";
import PostActionButtons from "../components/missing/PostActionButtons";
import { setOriginalPost } from "../../redux/modules/missing_write";
import { removePost } from "../../redux/lib/api/missing/posts";
import Swal from 'sweetalert2';

const PostDetailContainer = ({ postId }) => {
  const [remove, setRemove] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // 첫 마운트 시에 포스트 읽기 API 요청
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading["post/READ_POST"],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트 시에 스토어에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    router.push("/missing/write");
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      router.push("/missing");
    } catch (e) {
      console.error(e);
    }
  };

  if (remove === true) {
    Swal.fire({
      icon: "success",
      title: "삭제 성공",
      text: "게시물이 삭제되었습니다.",
      confirmButtonColor: "#798777",
    });
  }

  // const ownPost = (user && user.id) === (post && post.user.id)

  return (
    <>
      <PostDetail
        post={post}
        user={user}
        loading={loading}
        error={error}
        actionButtons={
          <PostActionButtons onEdit={onEdit} onRemove={onRemove} setRemove={setRemove} />
        }
      />
    </>
  );
};

export default PostDetailContainer;
