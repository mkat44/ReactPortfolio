import React from "react";
import { Section, Image, Columns, Column, Box, Heading, Content, Title } from "bloomer";
import "./Main.css";

class Main extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Section>
                    <Columns isCentered>
                        <Column>
                            <Image className="profile-pic" src={window.location.origin + '/images/me_squared.jpg'} isRatio="square" />
                        </Column>
                        <Column isSize="3/4">
                            <Box>
                                <Title><span className="header">The Girl Behind the Screen</span></Title>
                                <hr></hr>
                                <p>Born in north Texas in the late 80s, I spent most of my childhood outdoors and my Sundays watching football. Whenever I could get a moment for myself I would stick my nose into a book or put pen to paper and create fantasy worlds in my writing. By my youth I traded the outdoors for video games (Texas is hot!) and my pen and paper for a laptop, and while writing and reading remained a focus, I picked up a hobby of coding blog layouts in my spare time.</p>
                                <br></br>
                                <p>For college I remained in Texas, but before long I married a man from the Midwest who I'd met playing a video game. Meeting someone on the internet was a completely novel idea at the time, but thankfully neither of us ended up being serial killers. My husband had gone to college for video game design, which gave birth to a new dream: make a game together.</p>
                                <br></br>
                                <p>However, just a year after getting married I fell ill and all my plans were put on hold. I had been completing my teaching certificate at the time, but after being diagnosed with an incurable condition, I gave up on that plan and fell back on my writing. I spent time as a technical writer and an administrative assistant, but had to give up jobs as fatigue became too much to bear.</p>
                                <br></br>
                                <p>Thankfully in 2016 my husband and our four animals relocated to the Twin Cities and I managed to get myself seen at the Mayo Clinic. Just a couple months later I was scheduled for brain surgery, and I've seen a remarkable turn around in my day-to-day life. Now that my health has returned, I'm ready to get back to making my dreams come true. Step one, turn an old pasttime into a career!</p>
                            </Box>
                        </Column>
                    </Columns>
                    <Columns isCentered>
                        <Column isSize="1/3">
                            <Box>
                                <Heading>Quick Facts:</Heading>
                                    <Content>
                                        <ul>
                                            <li>Animal Lover</li>
                                            <li>Book Hoarder</li>
                                            <li>Space Fanatic</li>
                                            <li>Comic Book Enthusiast</li>
                                            <li>Gigantic Nerd</li>
                                            <li>Horrendous Gardener</li>
                                        </ul>
                                    </Content>
                            </Box>
                        </Column>
                        <Column isSize="1/3">
                            <Box>
                                <Heading>Animals:</Heading>
                                    <Content>
                                        <ul>
                                            <li>Orion</li>
                                            <li>Kira</li>
                                            <li>Procy</li>
                                            <li>Asher</li>
                                            <li>A smattering of woodland creatures I probably shouldn't feed.</li>
                                        </ul>
                                    </Content>
                            </Box>
                        </Column>
                        <Column isSize="1/3">
                            <Box>
                                <Heading>Hobbies:</Heading>
                                    <Content>
                                        <ul>
                                            <li>Writing Fiction</li>
                                            <li>Playing with Felt</li>
                                            <li>Painting with Alcohol Inks</li>
                                            <li>Creating Computer Games</li>
                                            <li>Playing Video Games</li>
                                            <li>Occasionally Reading the Books I Buy</li>
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

export default Main;