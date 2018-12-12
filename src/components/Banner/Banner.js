import React from "react";
import { Hero, HeroBody, Container, Title, Subtitle, HeroFooter, Tabs, TabList, TabLink } from "bloomer";
import "./Banner.css";

class Banner extends React.Component {
    state={

    }

    render() {
        return(
            <Hero className="banner" isColor='info' isSize='medium'>
                <HeroBody>
                    <Container hasTextAlign='centered'>
                        <Title><span className="title">Hello, world.</span></Title>
                        <Subtitle>I'm <span className="name"><strong>Mary K Carr</strong></span>, a Full-stack Web Developer.</Subtitle>
                    </Container>
                </HeroBody>

                <HeroFooter>
                    <Tabs isBoxed isFullWidth>
                        <TabList>
                            <TabLink href="/">About</TabLink>
                            <TabLink href="/resume">Resume</TabLink>
                            <TabLink href="/projects">Projects</TabLink>
                            <TabLink href="/contact">Contact</TabLink>
                        </TabList>
                    </Tabs>
                </HeroFooter>
            </Hero>
        )
    }
}

export default Banner;