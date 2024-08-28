import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

const PostDetails = () => {
    const { postID } = useParams();

    const postQuery = useQuery({
        queryKey: ['posts', postID],
        queryFn: async () => {
            const response = await fetch(
                `https://dummyjson.com/posts/${postID}`
            );
            const result = await response.json();
            console.log(result);
            return result;
        },
        staleTime: 10000,
    });

    return (
        <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            {postQuery.isFetching ? (
                <div>loading...</div>
            ) : (
                <>
                    <Typography variant="h2">{postQuery.data.title}</Typography>
                    <Typography variant="body1">
                        {postQuery.data.body}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#808080', display: 'flex', gap: '5px' }}>
                        <VisibilityIcon />
                        {postQuery.data.views}
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default PostDetails;
