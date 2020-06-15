import React from 'react'
import { Container, Avatar, Theme, Typography } from '@material-ui/core';
import { makeStyles, } from '@material-ui/styles';
import { Fade } from 'react-awesome-reveal';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: 20,
    },

    textHeader: {
        fontFamily: "sans-serif",
        fontSize: 30,
    },
    textLeading: {
        fontFamily: "sans-serif",
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20
    },
    textContent: {
        fontFamily: "sans-serif",
        fontSize: 14,
    },
    textFinal: {
        fontFamily: "sans-serif",
        fontSize: 14,
    }
}));

const MyOffer = () => {
    const classes = useStyles();
    return (
        <Fade>
            <Container className={classes.root}>
                <Typography className={classes.textHeader}>MY OFFER</Typography>
                <Typography className={classes.textLeading}>I have maintained, developed and launched multiple projects from scratch.</Typography>
                <Typography className={classes.textContent}>
                    <br></br>
                My current tech stacks includes:

                <ul>
                        <li>Android: Kotlin, Java, MVVM, Dagger, Koin, RxJava, RxKotlin, Room, Retrofit...</li>
                        <li>Flutter: Dart, BLoC, Stacked, mobx, provider...</li>
                        <li>React Native, ReactJS: Js, Typescript, Redux, Recoil, Bootstrap, Material-ui...</li>
                        <li>Rails: Active Admin, Devise, Fast_jsonapi...</li>
                        <li>iOS: Swift, MVVM</li>
                    </ul>

                    <br></br>
                I can help you with all the sides of your project:
                <ul>
                        <li>Verifying final products</li>
                        <li>Mentoring the team</li>
                        <li>Estimating tasks</li>
                        <li>Esearching possible techs</li>
                        <li>Leading, launching and monitoring the project</li>
                    </ul>
                </Typography>
                <Typography className={classes.textFinal}>
                    In cases when you already have an existing team, but you would still use some help, contact me as well. I’ll fit in very quickly.
                </Typography>
            </Container>
        </Fade>
    )
}

export default MyOffer;