import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, Theme, Typography } from '@material-ui/core';

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
        paddingRight: '15px !important'
    }
}));

const MyCv = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Typography className={classes.textHeader}>My RESUME</Typography>
            <Typography className={classes.textIntroduction}>Check out my resume below:</Typography>

            <a target="_blank" href="https://www.dropbox.com/s/jz51xc19jh47zns/Le%20Thanh%20Hoan%20042020%20g.pdf?dl=0">Download</a>
            
        </Container>
    )
}

export default MyCv;