import { Box, List, ListItem } from "@mui/material";
import { useQuery } from '@tanstack/react-query';
import PostCard from "./postCard";

const Home = () => {

    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await fetch('https://dummyjson.com/posts');
            const result = await response.json();
            return result;
        },
        staleTime: 10000,
    });

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
            
    {postsQuery.isFetching ? (
        <div>loading...</div>
    ) : (
        <List
            sx={{
                width: '100%',
                maxWidth: 600,
                bgcolor: 'background.paper',
            }}
        >
            {postsQuery.data.posts.map((post) => {
                return (
                    <ListItem key={post.id}>
                        <PostCard title={post.title} postID={post.id}/>
                    </ListItem>
                );
            })}
        </List>
    )}
</Box>
  )
}

export default Home