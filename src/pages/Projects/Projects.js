import React from "react";
import { Section, Columns, Column, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, Icon, CardImage, Image, CardContent, Content, Tag, Title } from "bloomer";
import "./Projects.css";

class Projects extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Section>
                    <Columns isCentered>
                        <Column>
                            <Card>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        <Title><span className="header"><a target="_blank" rel="noopener noreferrer" href="https://shredditmern.herokuapp.com/">Shreddit</a></span></Title>
                                    </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkat44/Shreddit"><Icon className="fas fa-music fa-lg" /></a>
                                    </CardHeaderIcon>
                                </CardHeader>
                                <CardImage>
                                    <Image isRatio='4:3' src={window.location.origin + '/images/Shreddit.png'} />
                                </CardImage>
                                <CardContent>
                                    <Content>
                                        <p>A React.js web application that allows users to create and share clips of music called "Shreds". Shreds can be voted upon and comments can be left by users. There is route encryption with Passport and a Mongo database that stores users, posts, and Shreds.</p>
                                        <Tag isColor='black'>React.js</Tag> <Tag isColor='black'>Materialize</Tag> <Tag isColor='black'>MongoDB</Tag> <Tag isColor='black'>Express</Tag> <Tag isColor='black'>Node.js</Tag> <Tag isColor='black'>Tone.js</Tag> <Tag isColor='black'>NexusUI</Tag>
                                    </Content>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        <Title><span className="header"><a target="_blank" rel="noopener noreferrer" href="http://madly-carpenter.surge.sh/">PikminClicky</a></span></Title>
                                    </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkat44/PikminClicky"><Icon className="fas fa-leaf fa-lg" /></a>
                                    </CardHeaderIcon>
                                </CardHeader>
                                <CardImage>
                                    <Image isRatio='4:3' src={window.location.origin + '/images/PikminClicky.png'} />
                                </CardImage>
                                <CardContent>
                                    <Content>
                                        <p>A React.js web application that allows users to play a game using characters from Nintendo's Pikmin games. Utilizes state so that the game is reset if an image is clicked twice, and shuffles images after every click. A game is won by clicking on all the images only once.</p>
                                        <Tag isColor='black'>React.js</Tag> <Tag isColor='black'>Bootstrap</Tag> 
                                    </Content>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        <Title><span className="header"><a target="_blank" rel="noopener noreferrer" href="https://dnd-campaign-ss.herokuapp.com/">D&D Campaign</a></span></Title>
                                    </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkat44/DnD-Campaign"><Icon className="fas fa-feather fa-lg" /></a>
                                    </CardHeaderIcon>
                                </CardHeader>
                                <CardImage>
                                    <Image isRatio='4:3' src={window.location.origin + '/images/DND.png'} />
                                </CardImage>
                                <CardContent>
                                    <Content>
                                        <p>A website built with Javascript and jQuery which allows users to create a character from the Dungeons and Dragons franchise. They can give them a name and have their stats rolled as if they're playing a real game. They can then start a campaign and fight an enemy which uses phaser.io.</p>
                                        <Tag isColor='black'>Javascript</Tag> <Tag isColor='black'>jQuery</Tag> <Tag isColor='black'>phaser.io</Tag> <Tag isColor='black'>Bootstrap</Tag> <Tag isColor='black'>SQL</Tag> <Tag isColor='black'>Node.js</Tag> <Tag isColor='black'>Express.js</Tag>
                                    </Content>
                                </CardContent>
                            </Card>
                        </Column>
                    </Columns>
                    <Columns isCentered>
                        <Column>
                            <Card>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        <Title><span className="header"><a target="_blank" rel="noopener noreferrer" href="https://catlateral-mini.herokuapp.com/">Catlateral Mini</a></span></Title>
                                    </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkat44/catlateral-mini"><Icon className="fas fa-paw fa-lg" /></a>
                                    </CardHeaderIcon>
                                </CardHeader>
                                <CardImage>
                                    <Image isRatio='4:3' src={window.location.origin + '/images/CatlateralMini.png'} />
                                </CardImage>
                                <CardContent>
                                    <Content>
                                        <p>A web application built using Handlebars.js which pays homage to the Catlateral Damage game by Fire Hose Games and Chris Chung which is available on Steam. It allows users to add objects and knock them off ledges. Users can then reset the item to do it again, or choose to add more items.</p>
                                        <Tag isColor='black'>Handlebars.js</Tag> <Tag isColor='black'>Node.js</Tag> <Tag isColor='black'>Express.js</Tag> <Tag isColor='black'>Bootstrap</Tag> <Tag isColor='black'>SQL</Tag>
                                    </Content>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        <Title><span className="header"><a target="_blank" rel="noopener noreferrer" href="https://coding-bootcamp-project-1.herokuapp.com/index.html">Git Outta Town</a></span></Title>
                                    </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkat44/Git_outta_town"><Icon className="fas fa-suitcase fa-lg" /></a>
                                    </CardHeaderIcon>
                                </CardHeader>
                                <CardImage>
                                    <Image isRatio='4:3' src={window.location.origin + '/images/GitOut.png'} />
                                </CardImage>
                                <CardContent>
                                    <Content>
                                        <p>A travel website that allows users to pick a destination and a range of dates, and then provides them with events happening in the area. From sports to concerts to boardgame meetups, users can see what's happening around their travel destination if they'd like to fill a free weekend or plan an unforgettable vacation.</p>
                                        <Tag isColor='black'>Materialize</Tag> <Tag isColor='black'>APIs</Tag> <Tag isColor='black'>Javascript</Tag> <Tag isColor='black'>jQuery</Tag>
                                    </Content>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        <Title><span className="header"><a target="_blank" rel="noopener noreferrer" href="https://mkat44.github.io/Getting-Giphy-With-It/">Getting Giphy With It</a></span></Title>
                                    </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkat44/Getting-Giphy-With-It"><Icon className="far fa-grin-stars fa-lg" /></a>
                                    </CardHeaderIcon>
                                </CardHeader>
                                <CardImage>
                                    <Image isRatio='4:3' src={window.location.origin + '/images/GiphyWithIt.png'} />
                                </CardImage>
                                <CardContent>
                                    <Content>
                                        <p>A website that's all about the gifs. Whether you pronounce it with a hard G or a soft G, you can find a gif for whatever you're looking for with Giphy. This website utilizes their API to find gifs and allows users to search for even more gifs by adding keywords to the search lists. It also breaks up the gifs into different webpages for ease of use.</p>
                                        <Tag isColor='black'>Bootstrap</Tag> <Tag isColor='black'>APIs</Tag> <Tag isColor='black'>Javascript</Tag> <Tag isColor='black'>jQuery</Tag> 
                                    </Content>
                                </CardContent>
                            </Card>
                        </Column>
                    </Columns>
                </Section>
            </div>
        )
    }
}

export default Projects;