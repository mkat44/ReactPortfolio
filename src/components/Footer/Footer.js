import React from "react";
import { Footer, Container, Content, Icon } from "bloomer";
import "./Footer.css";

const Footsy = () => (
    <Footer id='footer'>
        <Container>
            <Content isSize='small'>
                <p><Icon className="far fa-copyright" />Mary K Carr 2018 || Made with <a href="https://bulma.io/">Bulma</a> && <a href="https://bloomer.js.org/">Bloomer</a> &&<Icon className="fab fa-react" /></p>
            </Content>
        </Container>
    </Footer>
)

export default Footsy;