import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PostCard({title, postID}) {
    return (
        <Card sx={{ width: 500 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/posts/${postID}`}>Read More</Button>
            </CardActions>
        </Card>
    );
}
