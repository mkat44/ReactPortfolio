import React from "react";
import { Section, Image, Columns, Column, Box, Heading, Content, Icon, Title } from "bloomer";
import "./Resume.css";

class Resume extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Section>
                    <Columns isCentered>
                        <Column isSize="3/4">
                            <Box>
                                <Title><span className="header">The Woman Behind the Keyboard</span></Title>
                                <hr></hr>
                                <p>I'm a Full-stack Web Developer with an eye for creative design and a passion for bringing ideas to life through code. I learn quickly and am always eager for an opportunity to expand my coding horizons. I live for the moments when my applications can connect people to one another, their passions, or just a bit of fun.</p>
                                <br></br>
                                <p>Although I formally began my path toward web development later in life in 2018, I spent my teenage years expressing my creativity through HTML blog layouts and forums. I enjoyed tinkering with websites and creating something that reflected my personality and allowed me to showcase my passions. I am learning and growing exponentially, and with coding there's always a chance to build something better - and in turn become someone better - than yesterday.</p>
                                <br></br>
                                <p>Never one to let pain darken my mood, I aim to brighten workplaces with smiles. I am someone who is caring and will stop at nothing to accomplish her goals. I leverage my passion for the English language, editing, and writing to help create dynamic and well-designed user interfaces. I enjoy working with the front end and creating well-crafted web applications, but I don't mind getting my hands dirty on the backend, too.</p>
                                <br></br>
                                <p>I have a special place in my heart for databases, as well. They may not get as much love as the flashier sides of web development, but they provide a structured, disciplined side that I've come to appreciate. SQL or noSQL, I've found beauty within their files and rows.</p>
                            </Box>
                        </Column>
                        <Column>
                            <Image className="profile-pic" src={window.location.origin + '/images/me_2_squared.jpg'} isRatio="square" />
                        </Column>
                    </Columns>
                    <Columns isCentered>
                        <Column isSize="1/3">
                            <Box>
                                <Heading>Languages, Libraries, & Frameworks:</Heading>
                                    <Content>
                                        <ul>
                                            <li>HTML<Icon className="fab fa-html5" />CSS<Icon className="fab fa-css3-alt" /></li>
                                            <li>Bootstrap, Materialize, Bulma</li>
                                            <li>Javascript<Icon className="fab fa-js-square" /> & jQuery & React.js<Icon className="fab fa-react" /></li>
                                            <li>Handlebars.js</li>
                                            <li>Express.js</li>
                                            <li>Node.js<Icon className="fab fa-node-js" /> & NPM<Icon className="fab fa-npm" /></li>
                                            <li>SQL, mySQL, Sequelize</li>
                                            <li>Mongo & Mongoose</li>
                                            <li>Firebase</li>
                                        </ul>
                                    </Content>
                            </Box>
                        </Column>
                        <Column isSize="1/3">
                            <Box>
                                <Heading>Skills:</Heading>
                                    <Content>
                                        <ul>
                                            <li>Knowledge & proficiency with GitHub</li>
                                            <li>Calling & creating APIs</li>
                                            <li>MVC Design Standard</li>
                                            <li>Familiarity with Algorithms & lodash</li>
                                            <li>Deployment with Heroku & surge</li>
                                            <li>Technical Writing & Editing</li>
                                            <li>Transcription with accurate & speedy typing</li>
                                            <li>Excellent organizational skills & highly motivated learner</li>
                                            <li>Passionate, dependable, & caring</li>
                                        </ul>
                                    </Content>
                            </Box>
                        </Column>
                        <Column isSize="1/3">
                            <Box>
                                <Heading>Education:</Heading>
                                    <Content>
                                        <ul>
                                            <li>Bachelor of Arts: English Literature</li>
                                            <ul>
                                                <li>University of North Texas</li>
                                            </ul>
                                            <li>Full-stack Web Development Certificate</li>
                                            <ul>
                                                <li>University of Minnesota - Twin Cities</li>
                                            </ul>
                                        </ul>
                                    </Content>
                            </Box>
                        </Column>
                    </Columns>
                </Section>
            </div>
        )
    }
}

export default Resume;