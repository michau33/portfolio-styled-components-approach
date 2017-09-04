import React from 'react';
import { FullstackPage, FullstackSection, FullstackContainer, JavascriptSkill, NodejsSkill, ReactjsSkill, BootstrapSkill, DescriptionSection, Title, Subtitle, Button } from './Fullstack.Style';

const Fullstack = () => {
    return (
        <FullstackPage>
             <DescriptionSection>
                <Title>DLACZEGO FULLSTACK ?</Title>
                <Subtitle>Mam gdzieś zakodowany taki nawyk, że lubię robić maksymalną liczbę rzeczy sam. Spokojnie, to nie duch humanisty. Przy tworzeniu gier mogłem zajmować się programowaniem, modelami, dopracowywaniem środowiska i gameplay'em. 
Kiedy frontend opanowałem jako tako, backend niestety kulał. Dlatego też od kilku miesięcy szkolę się na tak zwanego fullstack developera. Przyjemnie odpowiadać za całość produktu, ale mniej przyjemnie odbierać skargi jak wszystko się krzaczy.
                </Subtitle>
                <Button>More</Button>
            </DescriptionSection>
            <FullstackSection>
                <FullstackContainer>
                    <JavascriptSkill></JavascriptSkill>
                    <NodejsSkill></NodejsSkill>
                    <ReactjsSkill></ReactjsSkill>
                    <BootstrapSkill></BootstrapSkill>
                </FullstackContainer>
            </FullstackSection>
        </FullstackPage>
    );
}

export default Fullstack