import React from 'react';
import {MoreTags, TopTag, TopTagName, TopTagsSection, NewString} from "./styles/TopSection";

type TagNamesType = {
  t: any;
  tagNames: string[];
  shownTagNames: number;
}

const TagNames = ({ t, tagNames, shownTagNames }: TagNamesType) => {
  const restOfTags = tagNames.length - shownTagNames;

  return ( <>
    <TopTagsSection>
      {tagNames.slice(0, shownTagNames).map((name: string) => (
        <TopTag key={name}>
          <TopTagName>{t('Tablet.TagName', { name })}</TopTagName>
        </TopTag>
      ))}
      <MoreTags>{ restOfTags <= 0 ? '0' : restOfTags }</MoreTags>
      <NewString />
    </TopTagsSection>
  </> );
};

export default TagNames;