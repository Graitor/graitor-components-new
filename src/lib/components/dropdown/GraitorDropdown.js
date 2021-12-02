import React, { useEffect, useState } from "react";
import './GraitorDropdown.css'


const GraitorDropdown = ({
                           title,
                           options = [],
                           defaultItem = null,
                           open = false,
                           multiple = false,
                           onChange = () => {}
                         }) => {

  const [activeIndex, setActiveIndex] = useState(-1)
  const [isDropdownOpen, setDropdownOpen] = useState(open)

  const getActiveItem = () => {
    return activeIndex >= 0 ? options[activeIndex] : null
  }

  useEffect(() => {
    if (options.length > 0) {
      if (!defaultItem) return
      const initActiveIndex = options.findIndex(item => item.key === defaultItem.key)
      if (initActiveIndex >= 0) {
        setActiveIndex(initActiveIndex);
      }
    }
  }, [])

  const toggle = (value) => {
    setDropdownOpen(value === true || value === false ? value : !isDropdownOpen)
  }

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener('click', toggle, { once: true })
    } else {
      window.removeEventListener('click', toggle, { once: true })
    }
  }, [isDropdownOpen])

  const selectItem = (item, index) => {
    const oldValue = activeIndex >= 0 ? options[activeIndex] : null
    setActiveIndex(index)
    onChange(oldValue, options[index])
    toggle(false)
  }

  return (
    <div className="dropdown-wrapper">
      <button className={ "dropdown-header" }
              style={ isDropdownOpen ? { cursor: 'default' } : {} }
              onClick={ (event) => {
                event.stopPropagation()
                toggle()
              } }
      >
        <span className="dropdown-title">{ title }</span>
        { activeIndex >= 0 &&
        <span className="dropdown-active">: <strong>{ getActiveItem().value }</strong></span>
        }
      </button>
      <div className="dropdown-list" style={ isDropdownOpen ? { border: 'solid 1px black' } : {} }>
        { isDropdownOpen && options.map((item, index) =>
          <div key={ item.key }
               title={ 'x' }
               className="dropdown-list-item"
               style={ activeIndex === index ? { fontWeight: '600' } : {} }
               onClick={ (event) => {
                 event.stopPropagation()
                 selectItem(item, index)
               } }
          >
            { item.value }
          </div>
        ) }
      </div>
    </div>
  )
}

export default GraitorDropdown