import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs'

export const CreatedForms = ({ forms }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {
                forms.length > 0 ? forms.map((item, key) => (
                    <div key={item.id}>
                        <ListItem alignItems="center">
                            <ListItemText
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                            style={{ whiteSpace: "pre-line" }}
                                        >
                                            {
                                                ` 
                                                ${`Created on :` + ' ' + dayjs(item.createdAt).format('YYYY-MM-DD')}
                                                ${item.expired ? 'expired' : 'expiry date :' + ' ' + item.expirationDate}
                                                ${'active :' + ' ' + item.active}
                                                ${item.expired ? 'expired' : 'expiry date :' + ' ' + item.expirationDate}
                                                ${'active :' + ' ' + item.active}
                                                ${'planned :' + ' ' + item.planned}
                                                ${'sent :' + ' ' + item.sent}
                                                ${'schedule :' + ' ' + item.schedule}
                                                `
                                            }

                                        </Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))
                    : (
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            No items to display
                        </Typography>
                    )
            }

        </List>
    )
}
