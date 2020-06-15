import React from 'react'
import { Container, Theme, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Fade } from 'react-awesome-reveal';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: 20,
    },

    textHeader: {
        fontFamily: "sans-serif",
        fontSize: 30,
    },
    textIntroduction: {
        fontFamily: "sans-serif",
        fontSize: 14,
        marginTop: 20
    },
    icon: {
        paddingLeft: '0px !important',
        paddingRight: '15px !important',
        '&:hover': {
            color: "brown",
        }
    }
}));

const Contact = () => {
    const classes = useStyles()
    const emailMe = () => {
        window.open("mailto:lehoan0212@gmail.com", "_blank")
    }

    const linkedInMe = () => {
        window.open("https://www.linkedin.com/in/lehoan/", "_blank")
    }

    return (
        <Fade className={classes.root}>
            <Container>
                <Typography className={classes.textHeader}>CONTACT ME</Typography>
                <Typography className={classes.textIntroduction}>I am open for hire and open to any ideas of cooperation</Typography>

                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button onClick={emailMe}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </ListItemIcon>
                        <ListItemText secondary="Email" />
                    </ListItem>
                    <ListItem button onClick={linkedInMe} >
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </ListItemIcon>
                        <ListItemText secondary="LinkedIn" />
                    </ListItem>
                </List>
            </Container>
        </Fade>
    )
}

export default Contact;