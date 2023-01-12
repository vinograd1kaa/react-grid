import React, {useState} from 'react';
import {WithTranslation} from 'react-i18next';
import {Container} from "./styles";
import {
  TopWrapper, TopTextSection, TopScoreCounter,
  TopTextTitleScore, TopTextTitleNames, TopTagsSection,
  TopTag, TopTagName, MoreTags } from "./styles/TopSection";
import { BottomWrapper, BottomTitleCall, BottomTitleManage, Padding } from "./styles/BottomSection";
import Icon from "./icon";
import TagNames from "./TagNames";

const Tablet: React.FC<WithTranslation> = ({ t }) => {
  const tagNames: string[] = [
    'Tag Name 1',
    'Tag Name 2',
    'Tag Name 3',
    'Tag Name 4',
    'Tag Name 5',
    'Tag Name 6',
    'Tag Name 7',
    'Tag Name 8',
    'Tag Name 9',
    'Tag Name 10',
    'Tag Name 11',
  ];
  const [shownTagNames, setShownTagNames] = useState(3);

  const handleShowTagNames = () => {
    if (tagNames.length <= shownTagNames) {
      return setShownTagNames(tagNames.length);
    }

    setShownTagNames(shownTagNames + 3);
  }

  return (
    <Container>
      <TopWrapper>
        <TopTextSection>
          <Icon></Icon>
          <TopTextTitleNames>{t('Tablet.Name')}</TopTextTitleNames>
          <TopTextTitleScore>{t('Tablet.Score')}</TopTextTitleScore>
          <TopScoreCounter onClick={handleShowTagNames}>{t('Tablet.ShowTags')}</TopScoreCounter>
        </TopTextSection>
        {<TagNames t={t} tagNames={tagNames} shownTagNames={shownTagNames} />}
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