import React from 'react';
import { FullstackPage, FullstackContainer, JavascriptSkill, NodejsSkill, ReactjsSkill, BootstrapSkill } from './Fullstack.Style';

const Fullstack = () => {
    return (
        <FullstackPage>
            <FullstackContainer>
                <JavascriptSkill></JavascriptSkill>
                <NodejsSkill></NodejsSkill>
                <ReactjsSkill></ReactjsSkill>
                <BootstrapSkill></BootstrapSkill>
            </FullstackContainer>
        </FullstackPage>
    );
}

export default Fullstack