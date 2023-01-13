import styled from 'styled-components';

export const Container = styled('div')`
  width: 100%;
`;


export const TabletWrapper = styled('div')`
  font-family: Trebuchet MS, sans-serif;
  height: 150px;
  margin: 20px;
  display: inline-block;
  border-left: 8px solid #32c747;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  text-align: initial;
  
  &:after {
    content: "";
    border: 9px solid transparent;
    border-top: 11px solid #fff;
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    bottom: -20px;
    right: 50%;
  }
`;
