import React from 'react';
import {WithTranslation} from 'react-i18next';
import {Container} from "./styles";
import {TopWrapper, TopTextSection, TopScoreCounter, TopTextTitleScore, TopTextTitleNames, TopTagsSection, TopTag, TopTagName, MoreTags} from "./styles/TopSection";
import { BottomWrapper, BottomTitleCall, BottomTitleManage, Padding } from "./styles/BottomSection";
import Icon from "./icon";

const Tablet: React.FC<WithTranslation> = ({ t }) => {
  const tagNames: string[] = [
    'Tag Name 1',
    'Tag Name 2',
    'Tag Name 3',
    'Tag Name 4',
    'Tag Name 5',
    'Tag Name 6',
    'Tag Name 7',
  ];

  const threeTagNames: string[] = tagNames.slice(0, 3);

  return (
    <Container>
      <TopWrapper>
        <TopTextSection>
          <Icon></Icon>
          <TopTextTitleNames>{t('Tablet.Name')}</TopTextTitleNames>
          <TopTextTitleScore>{t('Tablet.Score')}</TopTextTitleScore>
          <TopScoreCounter>{t('Tablet.Counter')}</TopScoreCounter>
        </TopTextSection>
        <TopTagsSection>
          {threeTagNames.map((name) => (
            <TopTag key={name}>
              <TopTagName>{t('Tablet.TagName', { name })}</TopTagName>
            </TopTag>
          ))}
          <MoreTags>{`+ ${tagNames.length - 3}`}</MoreTags>
        </TopTagsSection>
      </TopWrapper>
      <BottomWrapper>
        <Padding>
          <BottomTitleCall>{t('Tablet.Call')}</BottomTitleCall>
          <BottomTitleManage>{t('Tablet.Manage')}</BottomTitleManage>
        </Padding>
      </BottomWrapper>
    </Container>
  );
};

export default Tablet;