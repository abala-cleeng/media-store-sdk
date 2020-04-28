import styled, { css } from 'styled-components';
import {
  MainTextColor,
  ErrorColor,
  CheckboxBorderColor,
  FocusColor,
  MyAccountMenuActive
} from 'styles/variables';
import tickIcon from 'assets/images/input/tick.svg';

export const CheckboxStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin-top: 10px;

  align-items: center;
  font-size: 13px;
  color: ${MainTextColor};

  &:focus {
    outline: none;
  }
`;

export const ConsentDefinitionStyled = styled.div`
  padding-left: 10px;
  margin-top: 0;

  font-family: 'Geomanist';
  font-weight: 400;
  text-align: left;
  a {
    color: ${MainTextColor};

    text-decoration: underline;
    &:focus {
      outline: 2px solid ${FocusColor};
    }
  }
  opacity: 0.8;
  ${props =>
    props.checked &&
    css`
      opacity: 1;
    `}
`;

export const CheckFrameStyled = styled.div`
  position: relative;
  box-sizing: border-box;

  border: 1px solid ${CheckboxBorderColor};
  border-radius: 2px;
  width: 20px;
  min-width: 20px;
  height: 20px;

  &:focus {
    outline: 2px solid ${FocusColor};
  }
  ${props =>
    props.error &&
    css`
      border-color: ${ErrorColor};
    `}
  ${props =>
    props.isMyAccount &&
    css`
      border-radius: 50%;
    `}
  ${props =>
    props.isMyAccount &&
    props.checked &&
    css`
      border: 1px solid ${MyAccountMenuActive};
    `}
`;

export const CheckMarkStyled = styled.div`
  position: absolute;

  width: 13px;
  height: 10px;
  top: 4px;
  left: 3px;

  background-image: url(${tickIcon});
  background-repeat: no-repeat;
  ${props =>
    props.isMyAccount &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 12px;
      height: 12px;

      background: ${MyAccountMenuActive};
      border-radius: 50%;
    `}
`;

export const ErrorFieldStyled = styled.div`
  position: relative;

  width: 100%;
  margin-top: 10px;

  color: ${ErrorColor};

  font-size: 12px;
  font-family: 'Geomanist';
  font-weight: 300;
  text-align: center;
`;
