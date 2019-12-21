import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { bpMinSM } from '../utils/breakpoints'
import Link from './link'

export default function ResourceBook(props) {
  return (
    <>
      <Link to={props.url}>
        <div
          css={css({
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
              padding: '8px',
              color: '#464E55',
              justifyContent: 'space-between',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              h1: {
                fontSize: '1.6em',
                marginBottom: '16px',
                lineHeight: '1.1em',
              },
              h5: {
                fontSize: '0.9em',
                letterSpacing: '0.1em',
                lineHeight: '1.3em',
              },
              img: {
                maxWidth: '100%',
                borderRadius: '4px',
              },
              '.dataBlock': {
                paddingLeft: '20px',
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
            <img src={props.img} />
            <div class='dataBlock'>
              <h1>{props.title}</h1>
              <h5>{props.author}</h5>
              <p class='description'>{props.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
