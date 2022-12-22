import React from 'react';

import {Container} from "./styles";
import {
  TopWrapper, TopTextSection, TopScoreCounter, TopTextTitleScore,
  TopTextTitleNames, TopTagsSection, TopTag, TopTagName, MoreTags
} from "./styles/TopSection";
import { BottomWrapper, BottomTitleCall, BottomTitleManage, Padding } from "./styles/BottomSection";

import Icon from "./icon";

const MyCustomTablet = () => {
  const tagNames = [
    'Tag Name 1',
    'Tag Name 2',
    'Tag Name 3',
    'Tag Name 4',
    'Tag Name 5',
    'Tag Name 6',
    'Tag Name 7',
  ];

  const threeTagNames = tagNames.slice(0, 3);

  return (
    <Container>
      <TopWrapper>
        <TopTextSection>
          <Icon></Icon>
          <TopTextTitleNames>Random Names</TopTextTitleNames>
          <TopTextTitleScore>Score</TopTextTitleScore>
          <TopScoreCounter>100</TopScoreCounter>
        </TopTextSection>
        <TopTagsSection>
          {threeTagNames.map((name) => (
            <TopTag>
              <TopTagName>{ name }</TopTagName>
            </TopTag>
          ))}
          <MoreTags>{`+ ${tagNames.length - 3}`}</MoreTags>
        </TopTagsSection>
      </TopWrapper>
      <BottomWrapper>
        <Padding>
          <BottomTitleCall>On call</BottomTitleCall>
          <BottomTitleManage>Manage</BottomTitleManage>
        </Padding>
      </BottomWrapper>
    </Container>
  );
};

export default MyCustomTablet;