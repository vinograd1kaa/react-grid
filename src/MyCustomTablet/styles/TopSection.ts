import styled from "styled-components";

export const TopWrapper = styled('div')`
  display: inline-block;
  height: 50%;
`;

export const TopTextSection = styled('div')`
  display: flex;
  font-family: Trebuchet MS, sans-serif;
  padding: 10px 15px 8px 15px;
  line-height: 25px;
`;

export const TopTextTitleNames = styled('h1')`
 font-size: 18px;
  margin-left: 7px;
  white-space: normal;
`;

export const TopTextTitleScore = styled('h3')`
  color: #777;
  font-size: 13px;
  text-transform: uppercase;
  position: absolute;
  right: 75px;
`;

export const TopScoreCounter = styled('span')`
  height: 25px;
  padding: 0 2px;
  color: #fff;
  background: #3596cc;
  border-radius: 7px;
  position: absolute;
  right: 30px;
  top: 11px;
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

export const ShowTag = styled('span')`
  width: 30%;
  height: 26px;
  position: relative;
  
  margin: 0 4px auto;
  margin-top: 3px;
  margin-bottom: 3px;
  
  border-radius: 13px;
  background: #e8f2fa;
  
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

export const MoreTagsNum = styled('h2')`
  position: absolute;
  right: 12px;
  top: 48px;
  color: #8076b7;
`;

export const ShowMoreTags = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top: -30px;
  right: -133px;
  text-align: center;

  box-shadow: 0 0 1px 2px #ebe7e7;
  background: #fff;

  width: 300px;
  height: 68px;
  border-radius: 5px;
  z-index: 999;
`;