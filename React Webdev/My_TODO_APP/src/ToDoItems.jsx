import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function ToDoItems({listData, handleOnClick}) {
    const labelId = `checkbox-list-label-${listData.id}`
    
    return(
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="DeleteIcon" onClick={() => handleOnClick(listData.id, "OnDeleteIconClick")}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            } disablePadding>
            <ListItemButton role={labelId} onClick={() => handleOnClick(listData.id, "OnCheckBoxClick")} dense>
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={listData.isCompleted}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={listData.message} />
            </ListItemButton>
        </ListItem>
    );
}