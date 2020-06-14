import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    outerRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '50px !important'
    },
    noPadding: {
        paddingLeft: '10px !important',
        paddingRight: '10px !important',
        color: 'white'
    },
    icon: {
        paddingLeft: '0px !important',
        paddingRight: '15px !important',
        '&:hover': {
            color: "brown",
        }
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
        paddingBottom: 10
    },
    bigMarginTop: {
        marginTop: 20,
    },
}));

const MobileNavbar = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const emailMe = () => {
        window.open("mailto:lehoan0212@gmail.com", "_blank")
    }

    const linkedInMe = () => {
        window.open("https://www.linkedin.com/in/lehoan/", "_blank")
    }

    const switchMenu = () => {
        setShow(!show);
    }
    return (
        <Container className={`${classes.outerRoot}`}>
            <Container className={`${classes.root} ${classes.noPadding}`}>
                <Container className={classes.noPadding}>
                    <FontAwesomeIcon icon={faEnvelope} className={classes.icon} onClick={emailMe} />
                    <FontAwesomeIcon icon={faLinkedin} className={classes.icon} onClick={linkedInMe} />
                </Container>
                <IconButton edge="start" className={classes.noPadding} color="inherit" aria-label="menu">
                    <MenuIcon onClick={switchMenu}/>
                </IconButton>
            </Container>
            {
                show ?
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
                    : <div></div>
            }
        </Container>

    );
}

export default MobileNavbar;