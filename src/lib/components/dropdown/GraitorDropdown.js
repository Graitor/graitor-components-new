import React, { useEffect, useState } from "react";


const GraitorDropdown = ({
                           title,
                           options = [],
                           open = false,
                           multiple = false
                         }) => {

  const [active, setActive] = useState()
  const [isOpen, setOpen] = useState(open)

  useEffect(() => {
    if (options.length > 0) {
      setActive(options[0])
    }
  }, [options])

  const toggle = () => {
    setOpen(!isOpen)
  }

  const selectItem = (item) => {
    setActive(item)
    setOpen(false)
  }

  return (
    <div className="dropdown-wrapper">
      <button type={ "button" }
              className="dropdown-header"
              onClick={ toggle }
      >
        <span className="dropdown-title">{ title }: </span>
        <span className="dropdown-active">{ active ? active.value : '' }</span>
      </button>
      <div className="dd-list">
        {isOpen && options.map((item) =>
          <button key={item}
                  className="dd-list-item"
                  onClick={() => selectItem(item)}
          >
            { item.value }
          </button>
        ) }
      </div>
    </div>
  )
}

export default GraitorDropdown