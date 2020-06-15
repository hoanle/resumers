import React from 'react';
import { Container, Theme, Typography } from '@material-ui/core';
import { makeStyles, } from '@material-ui/styles';
import AvatarSection from '../AvatarSection/AvatarSection';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import Hidden from '@material-ui/core/Hidden';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Slide } from 'react-awesome-reveal';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: `linear-gradient(90deg, rgba(103,101,221,1) 0%, rgba(23,202,238,0.27682948179271705) 100%)`,
        display: 'flex',
        position: 'sticky',
        top: 0,
        bottom: 0,
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    bigRoot: {
        height: '100vh'
    },
    large: {
        width: '150px',
        height: '150px',
    },
    link: {
        fontFamily: "sans-serif",
        textTransform: 'uppercase',
        fontWeight: 200,
        fontSize: 13,
        marginTop: 10,
        '&:hover': {
            color: 'brown',
            fontWeight: 'bold'
        }
    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
    },
    bigMarginTop: {
        marginTop: 20,
    },
    icon: {
        paddingLeft: '0px !important',
        paddingRight: '15px !important',
        '&:hover': {
            color: "brown",
        }
    },
    noPadding: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
        color: 'white'
    },
    smallHeader: {
        fontSize: 10,
    },
    iconContainer: {
        marginTop: 10
    },
    inTouchContainer: {
        paddingTop: 20,
    }
}));

const SideSection = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    const emailMe = () => {
        window.open("mailto:lehoan0212@gmail.com", "_blank")
    }

    const linkedInMe = () => {
        window.open("https://www.linkedin.com/in/lehoan/", "_blank")
    }

    return (
        <Slide className={matches ? `${classes.root} ${classes.bigRoot}` : `${classes.root}`}>
            <Container>
                <AvatarSection />
                <Hidden smUp>
                    <MobileNavbar />
                </Hidden>
                <Hidden smDown>
                    <Container className={classes.linkContainer}>
                        <Link to="/" color="inherit" className={classes.link}>
                            TIMELINES
                    </Link>
                        <Link to="/offer" color="inherit" className={classes.link}>
                            MY OFFER
                    </Link>
                        <Link to="/contact" color="inherit" className={classes.link}>
                            CONTACT ME
                    </Link>
                        <Link to="/media" color="inherit" className={`${classes.link} ${classes.bigMarginTop}`}>
                            MEDIA
                    </Link>
                        <Link to="/cv" color="inherit" className={classes.link}>
                            MY CV
                    </Link>
                    </Container>
                </Hidden>
                <Hidden smDown>
                    <Container className={classes.inTouchContainer}>
                        <Typography variant="h5" className={classes.smallHeader}>GET IN TOUCH</Typography>
                        <Container className={`${classes.noPadding} ${classes.iconContainer} `}>
                            <FontAwesomeIcon icon={faEnvelope} className={classes.icon} onClick={emailMe} />
                            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} onClick={linkedInMe} />
                        </Container>
                    </Container>

                </Hidden>
            </Container>
        </Slide>
    );
}

export default SideSection;