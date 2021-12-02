import React from "react";


const ShowCase = ({ title, style = {}, children }) => {


  return (
    <section>
      <strong style={{ fontSize: '18px' }}>{ title }</strong>
      <div style={style}>
        { children }
      </div>
    </section>
  )

}

export default ShowCase