import React, { useState } from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { bpMinSM, bpMinMD, bpMinLG } from '../utils/breakpoints'
import Link from './link'

export default function ResourceCard(props) {
  // const [coursesOpen, setCoursesOpen] = useState(false)

  // const handleDrawerOpen = () => {
  //   coursesOpen ? setCoursesOpen(false) : setCoursesOpen(true)
  // }

  return (
    <>
      <div
        css={css({
          padding: '5px',
          margin: '8px',
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
        <Link to={props.url}>
          <div
            css={css({
              [bpMinSM]: {
                padding: '25px',
              },
              padding: '10px',
              justifyContent: 'space-between',
              color: '#464E55',
              transition: 'all 2s ease-in',
              h1: {
                fontSize: '1.6em',
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
                h1: { color: '#8748C7' },
              },
            })}>
            <h1>{props.title}</h1>
            <Img fluid={props.image} />
            <p class='description'>{props.description}</p>
            <h5>{props.cost}</h5>
          </div>
        </Link>
      </div>
    </>
  )
}
