import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { bpMinSM, bpMinMD, bpMinLG } from '../utils/breakpoints'
import Link from './link'

export default function ResourceBook(props) {
  return (
    <>
      <div
        css={css({
          padding: '5px',
          margin: '10px',
          borderRadius: '5px',
          background: 'white',
          //   position: 'relative',
          boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.05)',
          justifyContent: 'space-between',
          '.gatsby-image-wrapper': {
            width: '100%',
            height: '100%',
          },
          ':hover': {
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            transition: 'all 250ms ease',
          },
          transition: 'all 250ms ease',
        })}>
        <div
          css={css({
            [bpMinSM]: {
              padding: '25px',
            },
            padding: '10px',
            justifyContent: 'space-between',
            h1: {
              fontSize: '1.6em',
              color: '#464E55',
            },
            h5: {
              textAlign: 'right',
              fontSize: '0.9em',
              letterSpacing: '0.1em',
            },
            '.description': {
              lineHeight: '1.3em',
              fontSize: '1em',
            },
            ':hover': {
              transition: 'all 1s ease-in',
              h1: { color: '#8748C7' },
            },
          })}>
          <Link to={props.url}>
            <h1>{props.title}</h1>
          </Link>
          <p>{props.description}</p>
          <h5>{props.author}</h5>
          <Img fluid={props.image} />
        </div>
      </div>
    </>
  )
}
