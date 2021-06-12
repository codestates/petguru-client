import { useRouter } from 'next/router';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, unloadPost } from '../../redux/modules/missing_post';
import PostDetail from '../components/missing/PostDetail';
import PostActionButtons from '../components/missing/PostActionButtons';
import { setOriginalPost } from '../../redux/modules/missing_write';

const PostDetailContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { postId } = router.query;
  // 첫 마운트 시에 포스트 읽기 API 요청
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading,
    // user: user.user,
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트 시에 스토어에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    router.push('/missing/write');
  };

  // const ownPost = (user && user.id) === (post && post.user.id)

  return (
    <>
      <PostDetail post={post} loading={loading} error={error} actionButtons={<PostActionButtons onEdit={onEdit} />}/>
    </>
  );
}

export default PostDetailContainer;
