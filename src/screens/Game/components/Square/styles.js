import { css } from 'lit-element';

export const sharedStyles = css`
  .square {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    margin: 1px;
    padding: 0px;
    display: block;
  }

  .square:focus {
    outline: none;
  }
`;