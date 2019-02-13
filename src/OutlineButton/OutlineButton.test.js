import OutlineButton from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

describe('OutlineButton component sanity', () => {
  it('has name', () => {
    expect(OutlineButton.displayName).toBe('OutlineButton')
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <OutlineButton />
      </ThemeProvider>
      )
    expect(component).toMatchSnapshot()
  })
})
