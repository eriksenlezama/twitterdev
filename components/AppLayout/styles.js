import css from 'styled-jsx/css'
import { fonts, colors, breakpoints } from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.1);
    width: 100%;
    height: 100%;
  }

  @media (min-width: 530px) {
    main {
      width: ${breakpoints.mobile};
      height: 90vh;
      position: relative;
    }
  }
`

export const globalStyles = css.global`
  html,
  body {
    background: aliceblue;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base}
  }

  * {
    box-sizing: border-box;
  }

  svg {
    display: flex;
    align-items: center;
  }

  svg > g {
    transform: scale(1.3)
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }
`
