import React from 'react';
import { Container, Avatar, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { LightSpeed } from 'react-awesome-reveal';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 20,
        padding: 0,
    },
    large: {
        width: '150px',
        height: '150px',
      },
    name: {
        fontFamily: "sans-serif",
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20
    },
    position: {
        fontFamily: "sans-serif",
        textTransform: 'uppercase',
        fontWeight: 200,
        fontSize: 13,
        textAlign: 'center',
    }
}));

const AvatarSection = () => {
    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <LightSpeed>
                <Avatar alt="Hoan Le" src="https://welcome.xtaypro.com/images/hoan.jpg" className={classes.large} />
            </LightSpeed>
            <Typography variant="h5" className={classes.name}>Hoan Le</Typography>
            <Typography className={classes.position}>Full Stack Software Engineer</Typography>
        </Container>
    );
}

export default AvatarSection;