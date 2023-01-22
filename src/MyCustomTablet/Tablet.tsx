import React, {useEffect, useRef, useState} from 'react';
import {WithTranslation} from 'react-i18next';
import {TabletWrapper, Container} from "./styles";
import {
  TopWrapper,
  TopTextSection,
  TopScoreCounter,
  TopTextTitleScore,
  TopTextTitleNames,
  TopTagsSection,
  TopTag,
  TopTagName,
  MoreTagsNum,
  ShowMoreTags, ShowTag
} from "./styles/TopSection";
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

  const [numShowingTagNames, setNumShowingTagNames] = useState(3);
  const [hiddenTags, setHiddenTags] = useState(false);
  const refTag = useRef<HTMLSpanElement>(null);
  let widthOfTablet = 300;

  useEffect(() => {
    if (refTag.current !== null) {
      const tagWidth = refTag.current.getBoundingClientRect().width;

      widthOfTablet = widthOfTablet - tagWidth;
      setNumShowingTagNames(Math.floor(widthOfTablet/tagWidth));
    }
  })

  const tagNamesToShow: string[] = tagNames.slice(0, numShowingTagNames);

  const numHiddenTagNames = tagNames.length - numShowingTagNames;
  const hiddenTagNames: boolean | string[] =
    numShowingTagNames === tagNames.length
      ? false
      : tagNames.slice(-numHiddenTagNames);

  return (
    <Container>
      <TabletWrapper style={{width: widthOfTablet}}>
        <TopWrapper>
          <TopTextSection>
            <Icon></Icon>
            <TopTextTitleNames>{t('Tablet.Name')}</TopTextTitleNames>
            <TopTextTitleScore>{t('Tablet.Score')}</TopTextTitleScore>
            <TopScoreCounter>{t('Tablet.Counter')}</TopScoreCounter>
          </TopTextSection>
          <TopTagsSection>
            {tagNamesToShow.map((sName) => (
              <TopTag ref={refTag} key={sName}>
                <TopTagName>{t('Tablet.TagName', { sName })}</TopTagName>
              </TopTag>
            ))}
            <MoreTagsNum
              onMouseEnter={() => setHiddenTags(hiddenTagNames && true)}
              onMouseLeave={() => setHiddenTags(false)}>
              {`+ ${numHiddenTagNames}`}
            </MoreTagsNum>
            {hiddenTags &&
              <ShowMoreTags>
                {hiddenTagNames && hiddenTagNames.map((hName) => (
                  <ShowTag key={hName}>
                    <TopTagName>{t('Tablet.HiddenTagName', { hName })}</TopTagName>
                  </ShowTag>
                ))}
              </ShowMoreTags>
            }
          </TopTagsSection>
        </TopWrapper>
        <BottomWrapper>
          <Padding>
            <BottomTitleCall>{t('Tablet.Call')}</BottomTitleCall>
            <BottomTitleManage>{t('Tablet.Manage')}</BottomTitleManage>
          </Padding>
        </BottomWrapper>
      </TabletWrapper>
    </Container>
  );
};

export default Tablet;