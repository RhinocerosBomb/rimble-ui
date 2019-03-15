import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Button from '../Button';
import { ReactComponent as Fox } from './icon.svg';

const ProtoButton = ({ className, ...props }) => {
  return (
    <Button className={className} {...props}>
      <Fox />
      {props.children}
    </Button>
  );
};

const StyledButton = styled(ProtoButton)`
  > span {
    display: inherit;
    align-items: center;
  }

  > span > svg:first-child {
    display: block;
    height: ${props => (props.size === 'small' ? '16px' : '24px')};
    width: ${props => (props.size === 'small' ? '16px' : '24px')};
    margin-right: 0.5rem;
  }
`;

const MetaMaskButtonSolid = styled(StyledButton)`
  & {
    color: white;
    background: black;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const MetaMaskButtonOutline = styled(StyledButton)`
  & {
    color: #333333;
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    background-color: #f3f2f2;
  }
  &:active {
    background-color: #e4e4e4;
  }
`;

const MetaMaskButton = MetaMaskButtonSolid;

MetaMaskButton.outline = MetaMaskButtonOutline;

MetaMaskButton.displayName = 'MetaMaskButton';

export default MetaMaskButton;
