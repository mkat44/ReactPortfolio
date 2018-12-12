import React from "react";
import { Section, Columns, Column, Box, Title, Subtitle, Icon, Field, FieldLabel, FieldBody, Input, Control, Button, Label, TextArea } from "bloomer";
import "./Contact.css";

class Contact extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Section>
                    <Columns isCentered>
                        <Column isSize="1/4">
                            <Box>
                                <Title><span className="header">Find Me</span></Title>
                                <hr></hr>
                                <Subtitle><a href="https://github.com/mkat44"><Icon className='fab fa-github fa-lg' /></a> Github: mkat44</Subtitle>
                                <Subtitle><a href="https://www.linkedin.com/in/mary-carr-a19225170/"><Icon className='fab fa-linkedin fa-lg' /></a> LinkedIn: Mary Carr</Subtitle>
                                <Subtitle><a href="mailto:m.kat44@gmail.com?Subject=[Portfolio]%20Hello%20From%20Your%20Portfolio"><Icon className="far fa-envelope fa-lg" /></a> Email: m.kat44@gmail.com</Subtitle>
                            </Box>
                        </Column>
                        <Column isSize="3/4">
                            <Box>
                                <Title><span className="header">Contact Me</span></Title>
                                <hr></hr>
                                <Field isHorizontal>
                                    <FieldLabel isNormal>
                                        <Label>From</Label>
                                    </FieldLabel>
                                    <FieldBody>
                                        <Field isGrouped>
                                            <Control isExpanded hasIcons='left'>
                                                <Input placeholder='Name' />
                                                <Icon isSize='small' isAlign='left'><span className="fa fa-user" aria-hidden="true"/></Icon>
                                            </Control>
                                        </Field>
                                        <Field>
                                            <Control hasIcons={['left', 'right']}>
                                                <Input placeholder='Email' value='yours@email.com' />
                                                <Icon isSize='small' isAlign='left'><span className='fa fa-envelope' /></Icon>
                                                <Icon isSize='small' isAlign='right'><span className='fa fa-check' /></Icon>
                                            </Control>
                                        </Field>
                                    </FieldBody>
                                    </Field>

                                    <Field isHorizontal>
                                    <FieldLabel isNormal>
                                        <Label>Question</Label>
                                    </FieldLabel>
                                    <FieldBody>
                                        <Field>
                                            <Control>
                                                <TextArea placeholder='Want to hire me? Have a project you want to talk about? Email me!' />
                                            </Control>
                                        </Field>
                                    </FieldBody>
                                    </Field>

                                    <Field isHorizontal>
                                    <FieldLabel /> {/* empty for spacing */}
                                    <FieldBody>
                                        <Field>
                                            <Control>
                                                <a href="mailto:m.kat44@gmail.com"><Button>Submit</Button></a>
                                            </Control>
                                        </Field>
                                    </FieldBody>
                                </Field>
                            </Box>
                        </Column>
                    </Columns>
                </Section>
            </div>
        )
    }
}

export default Contact;