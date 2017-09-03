import React from 'react';
import { Link } from 'react-router-dom';
import { SkillsPage, SkillsContainer, CardText, FrontendCard, GamedevCard } from './Skills.Style';

const Skills = () => {
    return(
        <SkillsPage>
            <SkillsContainer>
                <Link to="skills/fullstack" style={ { textDecoration: 'none', height: '100%' } }><FrontendCard><CardText cyan>F<br/>R<br/>O<br/>N<br/>T<br/>E<br/>N<br/>D<br/></CardText></FrontendCard></Link>
                <Link to="skills/gamedev" style={ { textDecoration: 'none', height: '100%' } }><GamedevCard><CardText>G<br/>A<br/>M<br/>E<br/>D<br/>E<br/>V<br/></CardText></GamedevCard></Link>
            </SkillsContainer>
        </SkillsPage>
    );
}

export default Skills