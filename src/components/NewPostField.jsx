import { Button, TextField } from '@mui/material';

const NewPostField = () => {
    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '500px',
                gap: '4px',
                marginBottom: '20px',
            }}
        >
            <TextField
                placeholder="Post title"
                multiline
                variant="filled"
                required
                inputProps={{ maxLength: 32 }}
                maxRows={2}
            />
            <TextField
                placeholder="Post content"
                multiline
                variant="filled"
                required
                inputProps={{ maxLength: 250 }}
                maxRows={4}
            />
            <Button variant="contained">Post</Button>
        </form>
    );
};

export default NewPostField;
