import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

import { ReactComponent as IconChecked } from '../svg/baseline-radio_button_checked-24px.svg'
import { ReactComponent as IconUnchecked } from '../svg/baseline-radio_button_unchecked-24px.svg'

const StyledWrapper = styled.div`
  & {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  > input {
    position: relative;
    display: block;
    appearance: none;
    background: white;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0;
    font-weight: bold;
  }

  > svg {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    fill: ${theme.colors.grey};
  }

  > svg[name="checked"] {
    display: none;
    z-index: 1;
    fill: ${theme.colors.primary};
  }

  > input:checked ~ svg[name="checked"] {
    display: block;
  }
`

const Radio = (props) => (
  <StyledWrapper className={props.className}>
    <input type="radio" {...props} />
    <IconChecked name='checked' />
    <IconUnchecked />
  </StyledWrapper>
)

Radio.defaultProps = {
  theme: theme
}

Radio.displayName = 'Radio'

export default Radio
