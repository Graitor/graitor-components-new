import * as React from "react";
import { FC } from "react";

interface Props {
  title: string,
  style?: object,
  children: JSX.Element[]|JSX.Element
}


const ShowCase: FC<Props> = ({
                               title,
                               style = {},
                               children
                             }): JSX.Element => {

  return (
    <section>
      <strong style={ { fontSize: '18px' } }>{ title }</strong>
      <div style={ style }>
        { children }
      </div>
    </section>
  )

}

export default ShowCase