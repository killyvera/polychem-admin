import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Images from '../constants/Images'

export const RawMateriallist = ({ rawMaterials }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                rawMaterials.length > 0 ? rawMaterials.map((item, key) => (
                    <div key={key}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={item.image ? item.image : Images.ProductPlaceholder} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {item.description}
                                        </Typography>

                                        {item.quantity}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))
                    : (
                        <Typography
                            sx={{ display: 'inline', textAlign: 'center' }}
                            style={{ marginLeft: 120 }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            No items to display
                        </Typography>
                    )
            }

        </List>
    );
}