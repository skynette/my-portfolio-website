import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { VscTools } from "react-icons/vsc";
const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I work with a variety of different technologies in the
            development world. From Back-end to front-end.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        HTML, Tailwind CSS, Javascript, React Js, NextJs, Material UI
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Python, Django, Django rest framework, and databases
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <VscTools size="3rem" />
                <ListContainer>
                    <ListTitle>Tools</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Postgresql, MySQL, Redis, Celery, Selenium, Docker etc.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
