import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { postID } = useParams();
    return <div>Post Details for {postID}</div>;
};

export default PostDetails;
