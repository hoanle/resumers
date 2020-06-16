import React from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import { Container, Theme, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import { Fade, Bounce } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

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
        fontSize: 16,
    },
    anchor: {
        color: 'green'
    }
}));

const Porfolio = () => {
    const classes = useStyles();
    return (
        <Fade>
            <Container className={classes.root}>
                <Typography className={classes.textHeader}>TIMELINES</Typography>
                <Timeline
                    style={{ margin: 20, borderRight: 'green solid 1px', borderTop: 'green solid 1px', borderBottom: 'green solid 1px', paddingRight: 20, paddingTop: 20, paddingBottom: 20}}>
                    <Fade>
                        <TimelineEvent title="Open to co-operation on new and existing projects."
                            createdAt="Aug 2020"
                            icon={<i className="material-icons md-48"><FontAwesomeIcon icon={faAnchor} className={classes.anchor}/></i>}>
                            <TimelineEvent title="Joined Fullstack Web Development course @CoderSchool"
                                createdAt="2020"
                                icon={<i className="material-icons md-18">May</i>}>
                            </TimelineEvent>
                            
                            <TimelineEvent title="Revamped apps using React Native"
                                createdAt="2020"
                                icon={<i className="material-icons md-18">Jan</i>}>
                            </TimelineEvent>
                        </TimelineEvent>
                    </Fade>
                    <Fade>
                        <TimelineEvent title={<a href="https://welcome.xtaypro.com/">XtayPro @Viet Nam</a>}
                            createdAt="November 2018 - Present"
                            icon={<i className="material-icons md-18"><FontAwesomeIcon icon={faAnchor} className={classes.anchor}/></i>}>
                            XtayPro is a platform that leverages technology to economically empower travelers around the world to unlock and monetize their luggage spaces.
                            
                            <TimelineEvent title="XtayPro selected for Seoul GSC 2020"
                                createdAt="2020"
                                icon={<i className="material-icons md-18">Apr</i>}>
                            </TimelineEvent>

                            <TimelineEvent title="Revamped XtayPro using Flutter"
                                createdAt="2019"
                                icon={<i className="material-icons md-18">Nov</i>}>
                            </TimelineEvent>
                            <TimelineEvent title=" XtayPro won 3rd position at K-startup Grand Challenge, being the first VietNam startup to do so."
                                createdAt="2018"
                                icon={<i className="material-icons md-18">Dec</i>}>
                            </TimelineEvent>
                        </TimelineEvent>
                    </Fade>
                    
                    <Fade>
                        <TimelineEvent title={<a href="https://www.quantuminventions.com/">Quantum Inventions @Singapore</a>}
                            createdAt="May 2016 - December 2018"
                            icon={<i className="material-icons md-18"><FontAwesomeIcon icon={faAnchor} className={classes.anchor}/></i>}>
                            Quantum Inventions provides mobility intelligence to consumers, automotive corporations, enterprise and government agencies, leveraging on its integrated suite of products in connected navigation, fleet management and location intelligence.

                            <TimelineEvent title="Mobile Team Lead"
                                createdAt="2018"
                                showContent={true}
                                icon={<i className="material-icons md-18">Jan</i>}
                                subtitle="iOS team">
                                    <TimelineEvent 
                                        bubbleStyle={{visibility: 'hidden', display: 'none'}}
                                        title={<a href="https://play.google.com/store/apps/details?id=sg.qi.searchapp">My Drive Plus</a>}
                                        subtitle="MyDrivePlus Destination Search makes searching and navigating with your car multimedia unit so much easier. No more struggles and frustration finding your desired location."
                                        icon={<i className="material-icons md-18"></i>}>
                                    </TimelineEvent>
                                    <TimelineEvent 
                                        bubbleStyle={{visibility: 'hidden', display: 'none'}}
                                        title={<a href="https://slick.sg/">SLICK - Car Key on your Phone</a>}
                                        subtitle="SLICK, powered by Continental’s Key as a Service (KaaS), enables a whole suite of seamless mobility solutions without requiring physical car keys!"
                                        icon={<i className="material-icons md-18"></i>}>
                                    </TimelineEvent>
                            </TimelineEvent>

                            <TimelineEvent title="Android Team Lead"
                                createdAt="2016"
                                icon={<i className="material-icons md-18">May</i>}
                                subtitle="Android team">
                                    <TimelineEvent 
                                        bubbleStyle={{visibility: 'hidden', display: 'none'}}
                                        title={<a href="https://play.google.com/store/apps/details?id=com.galactio.mobile.sg">Galactio - Navigation & Maps for Urban Mobility</a>}
                                        subtitle="Vehicle track & trace capability now at your fingertips!"
                                        icon={<i className="material-icons md-18"></i>}>
                                    </TimelineEvent>
                                    <TimelineEvent 
                                        bubbleStyle={{visibility: 'hidden', display: 'none'}}
                                        title={<a href="https://play.google.com/store/apps/details?id=com.sgtrack.tracker">SGTrack – GPS Fleet management</a>}
                                        subtitle="Galactio is the most advanced mobile navigation app for urban mobility. Real-time traffic updates combined with accurate maps and live traffic camera views get you to your destination on time. "
                                        icon={<i className="material-icons md-18"></i>}>
                                    </TimelineEvent>
                            </TimelineEvent>

                        </TimelineEvent>
                    </Fade>
                    
                    <Fade>
                        <TimelineEvent title={<a href="https://2359media.com/">2359 Media @Viet Nam</a>}
                            createdAt="January 2013 - April 2016"
                            icon={<i className="material-icons md-18"><FontAwesomeIcon icon={faAnchor} className={classes.anchor}/></i>}>
                            An award-winning full-service consultancy that operates at the intersection of Design, Technology, Innovation, and Business.
                            <TimelineEvent title="Ruby On Rails Developer"
                                createdAt="2015"
                                icon={<i className="material-icons md-18">Oct</i>}>
                            </TimelineEvent>
                            <TimelineEvent title="Android Developer"
                                createdAt="2013"
                                icon={<i className="material-icons md-18">Jan</i>}>
                                    <TimelineEvent 
                                        bubbleStyle={{visibility: 'hidden', display: 'none'}}
                                        title={<a href="https://play.google.com/store/apps/details?id=sg.com.laurier.periodtracker">P-Log</a>}
                                        subtitle="Brought to you by Laurier, the No. 1 Sanitary Protection brand in Singapore."
                                        icon={<i className="material-icons md-18"></i>}>
                                    </TimelineEvent>
                                    <TimelineEvent 
                                        bubbleStyle={{visibility: 'hidden', display: 'none'}}
                                        title={<a href="https://www.hungrygowhere.my/">HungryGoWhere Malaysia</a>}
                                        subtitle="HungryGoWhere is Malaysia's definitive food guide. It's the first place to visit for the latest reviews and recommendations on food & drink."
                                        icon={<i className="material-icons md-18"></i>}>
                                    </TimelineEvent>
                            </TimelineEvent>
                        </TimelineEvent>
                    </Fade>
                    
                    <Fade>
                        <TimelineEvent title="GNT Viet Nam @Ho Chi Minh city"
                            createdAt="February 2012 - December 2012"
                            icon={<i className="material-icons md-18"><FontAwesomeIcon icon={faAnchor} className={classes.anchor}/></i>}>
                            Main contributor to Android Game Applications
                                <TimelineEvent 
                                    bubbleStyle={{visibility: 'hidden', display: 'none'}}
                                    title={<a href="https://play.google.com/store/apps/details?id=jp.mobigame.ayakashi">Ayakashi</a>}
                                    subtitle="Authentic Japanese style RPG!"
                                    icon={<i className="material-icons md-18"></i>}>
                                </TimelineEvent>
                            
                        </TimelineEvent>
                    </Fade>
                    
                </Timeline>
            </Container>
        </Fade>
        
    )
}

export default Porfolio;