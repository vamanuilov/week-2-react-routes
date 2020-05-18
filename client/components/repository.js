import React from 'react'

import './repo.scss'

// TODO: Add plugin to convert html to JSX(remove dangerous)

const RepositoryList = (props) => {
  return (
    <div>
      <div
        id="description"
        className="description flex-wrap items-center pt-100px"
        dangerouslySetInnerHTML={{__html: props.description }}
      />
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
