import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, StyledBadge } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>(
        <BlogCard>
			{project.inDevelopment ? <StyledBadge color="#22a4c9">In Development</StyledBadge>:<StyledBadge color="#4CFF00">Completed</StyledBadge>} 
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.source}>Code</ExternalLinks>
            <ExternalLinks href={project.visit}>Live site</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;