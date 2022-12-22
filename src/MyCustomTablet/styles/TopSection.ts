import styled from "styled-components";

export const TopWrapper = styled('div')`
  display: inline-block;
  height: 50%;
`;

export const TopTextSection = styled('div')`
  display: flex;
  padding: 10px 15px 8px 15px;
  line-height: 25px;
`;

export const TopTextTitleNames = styled('h1')`
 font-size: 18px;
  margin-left: 7px;
`;

export const TopTextTitleScore = styled('h3')`
  margin-left: 80px;
  color: #777;
  font-size: 13px;
  text-transform: uppercase;
`;

export const TopScoreCounter = styled('span')`
  width: 28px;
  height: 25px;
  color: #fff;
  background: #3596cc;
  border-radius: 7px;
  margin-left: 18px;
`;

export const TopTagsSection = styled('div')`
  display: flex;
  padding: 0 8px;
`;

export const TopTag = styled('span')`
  border-radius: 13px;
  background: #e8f2fa;
  margin-right: 8px;
  width: 92px;
  height: 26px;
  position: relative;
  
  &:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 5px;
    top: 43%;
  }
`;

export const TopTagName = styled('h2')`
  font-size: 14px;
  float: right;
  padding: 6px 7px 0 0;
`;

export const MoreTags = styled('h2')`
  color: #8076b7;
  line-height: 22px;
  margin-left: 5px
`;