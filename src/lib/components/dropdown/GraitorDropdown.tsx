import { FC, useEffect, useRef, useState } from "react";
import '../../styles/GraitorDropdown.css'
import { generateId } from "../../helpers/generator";
import { getElementsWidth } from "../../helpers/element";

export interface DropdownItem {
  key: string,
  value: string,
}

interface Props {
  id?: string,
  title: string,
  options: DropdownItem[],
  defaultItem?: DropdownItem,
  multiple?: boolean,
  onChange?: (oldValue: DropdownItem|null, newValue: DropdownItem) => void,
}

const GraitorDropdown: FC<Props> = ({
                                      id = generateId(),
                                      title,
                                      options = [],
                                      defaultItem = null,
                                      onChange = () => {}
                                    }): JSX.Element => {

  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const innerId = useRef<string>()

  const getActiveItem = (): DropdownItem|null => {
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

  useEffect(() => {
    if (!innerId.current) {
      innerId.current = id
    }
  }, [id])

  const toggle = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener('click', toggle, { once: true })
    } else {
      window.removeEventListener('click', toggle)
    }
  }, [isDropdownOpen])

  const selectItem = (_item: DropdownItem, index: number) => {
    const oldValue = activeIndex >= 0 ? options[activeIndex] : null
    setActiveIndex(index)
    onChange(oldValue, options[index])
    toggle()
  }

  return (
    <div className="dropdown-wrapper">
      <button id={innerId.current}
              className={ "dropdown-header" }
              style={ isDropdownOpen ? { cursor: 'default' } : {} }
              onClick={ (event) => {
                event.stopPropagation()
                toggle()
              } }
      >
        <div className={"dropdown-header-text"}>
          <span className="dropdown-title">{ title }</span>
          { activeIndex >= 0 &&
          <span className="dropdown-active">: <strong>{ getActiveItem()!.value }</strong></span>
          }
        </div>
      </button>
      <div className="dropdown-list" style={ isDropdownOpen ? { border: 'solid 1px black', minWidth: `${getElementsWidth(innerId.current!)}px` } : {} }>
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