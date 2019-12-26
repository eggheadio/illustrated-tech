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
          margin: '18px auto',
          maxWidth: '100%',
        },
        h5: {
          display: 'inline-block',
        },
        button: {
          display: 'inline-block',
        },
      })}>
      <hr />
      <h5>Recommended Courses</h5>
      <button
        aria-label='Click to view recommended courses'
        onClick={toggleDropdown}>
        <img src={downArrow} />
      </button>
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
