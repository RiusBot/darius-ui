import { Dialog, 
         Box, 
         Typography, 
         IconButton, 
         Divider, 
         List,
         ListItem,
         ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const PairDetailDialog = (props) => {
    const { open, pairValue, onClose } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    padding: '32px 32px 8px'
                }}>
                <Box >
                    <Typography variant="h5" component="div">
                        {pairValue.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="h6"
                        >
                        {pairValue.lists.length} included
                    </Typography>
                </Box>
                <IconButton
                    style={{marginLeft: '64px'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Divider variant="middle" />
            <List
                sx={{
                    padding: '8px 32px',
                    width: '100%',
                    height: 500,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {pairValue.lists.map((value) => {
                const labelId = `transfer-list-all-item-${value}-label`;

                return (
                    <ListItem
                        key={value}
                        role="listitem"
                        button
                        >
                        <ListItemText id={labelId} primary={`${value + 1}`} />
                    </ListItem>
                );
                })}
                <ListItem />
            </List>
        </Dialog>
    )

}