import React, { useState } from 'react'
import { css } from '@emotion/core'
import Link from './link'
import downArrow from './downArrow.svg'

function RecCourses(props) {
  const [isDowndownOpen, setDropdown] = useState(false)

  const toggleDropdown = () => {
    isDowndownOpen ? setDropdown(false) : setDropdown(true)
  }

  console.log(isDowndownOpen)

  return (
    <div
      css={css({
        hr: {
          margin: '18px 0 10px',
          maxWidth: '100%',
          border: '0.5px solid #BECCD6',
        },
        h5: {
          display: 'inline-block',
          fontSize: '0.9em',
          margin: '0',
        },
        button: {
          margin: '0',
          display: 'inline-block',
          background: 'none',
          paddingRight: '10px',
        },
        div: {
          transition: 'all 1s',
        },
      })}>
      <hr />
      <button
        aria-label='Click to view recommended courses'
        onClick={toggleDropdown}>
        <img alt='down arrow' src={downArrow} />
      </button>
      <h5>Recommended Courses</h5>
      {isDowndownOpen
        ? props.props.map((rc, index) => (
            <div key={index}>
              <Link to={rc.url}>
                <p>{rc.title}</p>
              </Link>
              <h5>{rc.instructor}</h5>
            </div>
          ))
        : null}
    </div>
  )
}

export default RecCourses
