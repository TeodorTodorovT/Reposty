import { useQuery } from '@tanstack/react-query';
import PostCard from './components/postCard';
import { List, ListItem, Box } from '@mui/material';

function App() {
    const postQuery = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await fetch('https://dummyjson.com/posts');
            const result = await response.json();
            console.log(result);

            return result;
        },
    });

    return (
      <>
      <h1>Reposty</h1>
        <Box display="flex" alignItems="center" justifyContent="center">
            
            {postQuery.isFetching ? (
                <div>loading...</div>
            ) : (
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 600,
                        bgcolor: 'background.paper',
                    }}
                >
                    {postQuery.data.posts.map((post) => {
                        return (
                            <ListItem key={post.id}>
                                <PostCard title={post.title} />
                            </ListItem>
                        );
                    })}
                </List>
            )}
        </Box>
        </>
    );
}

export default App;
