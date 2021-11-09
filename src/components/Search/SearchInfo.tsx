import React from 'react';
//@ts-ignore
import styled from "@emotion/styled/macro";
import {BodyTextSmall} from "../Styles/Typo";

const InfoBox = styled.div`
  width: 270px;
`;

const TextSection = styled.p`
  ${BodyTextSmall};
  color: rgba(0, 0, 0, 0.9);
  margin: 15px 20px;
`;

export const SearchInfo = () => (
    <InfoBox>
        <TextSection>Här är en förklarande text på hur sökrutan fungerar. Löksås ipsum enligt för tre gamla.</TextSection>
        <TextSection>Där sällan faktor kunde precis dunge, söka mjuka hela annan. Hwila faktor regn och dimmhöljd mot och där björnbär och.</TextSection>
    </InfoBox>
);