import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExpandMore from 'rmdi/lib/ExpandMore';
import { StyledInput } from '../Input';

const StyledWrapper = styled.div`
  & {
    position: relative;
    display: inline-block;
  }

  > ${ExpandMore} {
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const Select = React.forwardRef(({ options, children, ...props }, ref) => {
  const renderChildren = () => {
    if (children) {
      return children;
    } else if (options) {
      return options.map((option, i) => (
        <option key={i} value={option.value} children={option.label} />
      ));
    } else {
      return null;
    }
  };

  return (
    <StyledWrapper>
      <StyledInput
        as={'select'}
        children={renderChildren()}
        ref={ref}
        py={0}
        pl={3}
        pr={'3rem'}
        {...props}
      />
      <ExpandMore my={'auto'} mx={3} />
    </StyledWrapper>
  );
});

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
};

Select.displayName = 'Select';

export default Select;
