import React from 'react'
/**
 * Header
 */
const Header = ({ title }) => {
  return (
    <header data-am-widget='header' className='am-header am-header-default'>
      <div className='am-header-left am-header-nav'>
        <h1>基本页面</h1>
      </div>
      <h1 className='am-header-title'>
        {title}
      </h1>
    </header>
  )
}

export default Header
