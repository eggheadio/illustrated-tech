import React from 'react'
import Link from './link'
import Subbutton from './subbutton'
import {css} from '@emotion/core'
import Container from './container'
import {bpMinMD, bpMinSM, bpMaxMD} from '../utils/breakpoints'
import VisuallyHidden from '@reach/visually-hidden'
import Hamburger from './hamburger'

const Header = ({background, scrollToFooter}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMenu = () => setMenuOpen(value => !value)
  return (
    <header
      css={css({
        background: background,
        [bpMinSM]: {
          paddingTop: '20px',
        },
        paddingTop: '10px',
        a: {
          fontFamily: 'brandon-grotesque, sans-serif',
          fontSize: '14px',
          letterSpacing: '0.1em',
          fontWeight: '700',
          textTransform: 'uppercase',
          margin: 0,
        },
      })}
    >
      <Container
        noVerticalPadding
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <h1>
          <Link
            css={css({
              borderRadius: '4px',
              color: 'rgb(79, 88, 95)',
              [bpMinSM]: {
                border: '2px solid #FFFFFF',
                padding: '15px 20px',
              },
              padding: '0px',
              fontWeight: '700',
            })}
            to="/"
          >
            Illustrated.dev
          </Link>
        </h1>

        {/* Nav Grid Layout */}
        <div
          tabIndex="0"
          onClick={toggleMenu}
          onKeyPress={event => {
            const ENTER_KEY = 13
            const code = event.keyCode || event.which
            if (code === ENTER_KEY) {
              toggleMenu()
            }
          }}
          css={css({
            [bpMinMD]: {display: 'none'},
            [bpMaxMD]: {display: 'block'},
          })}
        >
          <div
            aria-hidden="true"
            css={css({
              width: 50,
              height: 'auto',
              opacity: '.8',
            })}
          >
            <Hamburger />
          </div>
          <VisuallyHidden>Toggle Nav</VisuallyHidden>
        </div>
        <div
          css={css({
            display: 'none',
            [bpMinMD]: {display: 'block'},
          })}
        >
          <NavLinks scrollToFooter={scrollToFooter} />
        </div>
      </Container>
      {menuOpen && (
        <Container
          css={css({
            [bpMinMD]: {display: 'none'},
            [bpMaxMD]: {display: 'block'},
          })}
        >
          <NavLinks scrollToFooter={scrollToFooter} focusFirstLink />
        </Container>
      )}
    </header>
  )
}

const NavLinks = ({scrollToFooter = () => {}, focusFirstLink = false}) => {
  const linkStyle = css({
    float: 'right',
    boxSizing: 'border-box',
    borderRadius: '4px',
    color: 'rgb(79, 88, 95)',
    [bpMinMD]: {
      padding: '15px 20px',
      display: 'block',
    },
    padding: '0px',
    fontWeight: '700',
  })

  const firstNavRef = React.useRef(null)
  React.useEffect(() => {
    if (focusFirstLink) {
      firstNavRef.current.focus()
    }
  }, [focusFirstLink])

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      })}
    >
      <Link to="/about" css={linkStyle}>
        About
      </Link>
      <Subbutton
        css={css({
          [bpMinMD]: {display: 'block'},
          [bpMaxMD]: {display: 'none'},
        })}
        onClick={scrollToFooter}
      />
    </div>
  )
}

export default Header
