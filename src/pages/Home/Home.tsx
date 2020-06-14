import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'blue',
    }
})
const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            This is Home
        </Container>
    )
}

export default Home;
