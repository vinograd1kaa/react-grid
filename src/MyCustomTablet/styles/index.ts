import styled from 'styled-components';

export const Container = styled('div')`
  font-family: Trebuchet MS, sans-serif;
  width: 350px;
  margin: 20px;
  display: inline-block;
  border-left: 8px solid #32c747;
  border-radius: 5px;
  box-shadow: -1px -3px 5px rgb(202 197 197 / 20%), -3px 10px 6px rgb(202 197 197 / 20%);
  position: relative;
  
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
