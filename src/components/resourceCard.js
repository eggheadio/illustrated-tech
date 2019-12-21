import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM, bpMinMD } from '../utils/breakpoints'
import Link from './link'

export default function ResourceCard(props) {
  return (
    <>
      <div
        css={css({
          margin: '10px',
          alignSelf: 'start',
          borderRadius: '6px',
          background: 'white',
          boxShadow: '0px 0.5px 0.5px rgba(52, 61, 68, 0.1)',
          justifyContent: 'space-between',
          '.gatsby-image-wrapper': {
            width: '100%',
            height: '100%',
          },
          ':hover': {
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            transition: 'all 250ms ease',
          },
          transition: 'all 1s ease',
        })}>
        <Link to={props.url}>
          <div
            css={css({
              justifyContent: 'space-between',
              color: '#464E55',
              transition: 'all 1s ease',
              '.dataBlock': {
                [bpMinSM]: { padding: '25px' },
                padding: '10px',
              },
              h1: {
                fontSize: '1.6em',
              },
              h5: {
                textAlign: 'right',
                fontSize: '0.9em',
                letterSpacing: '0.1em',
              },
              img: {
                height: 'auto',
                maxWidth: '100%',
                borderRadius: '6px 6px 0 0 ',
                // [bpMinMD]: { width: '200%' },
              },
              '.description': {
                lineHeight: '1.3em',
                fontSize: '1em',
              },
              ':hover': {
                h1: { color: '#8748C7' },
              },
            })}>
            <img src={props.img} />

            <div class='dataBlock'>
              <h1>{props.title}</h1>
              <p class='description'>{props.description}</p>
              <h5>{props.cost}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
