import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const StyledPill = styled(Text)`
  & {
    position: relative;
    background: none;
    overflow: hidden;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: currentColor;
    opacity: 0.12;
    pointer-events: none;
  }
`;

const Pill = React.forwardRef((props, ref) => (
  <StyledPill ref={ref} {...props} />
));

Pill.defaultProps = {
  color: 'dark-gray',
  fontFamily: 'sansSerif',
  fontSize: 1,
  fontWeight: 2,
  lineHeight: 'solid',
  height: 2,
  px: 3,
  py: 1,
  borderRadius: 3,
  display: 'inline-flex',
  alignItems: 'center',
};

Pill.propTypes = {
  ...Text.propTypes,
  theme: PropTypes.object,
};

Pill.displayName = 'Pill';

export default Pill;
