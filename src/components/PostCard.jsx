import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
export default function PostCard({title}) {
    return (
        <Card sx={{ width: 500 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}
