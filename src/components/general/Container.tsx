import React from 'react';

export default (props: any) => {
  const classes = props.className ? props.className : ''
  
  return (
    <div id={props.id} className={classes}>
      {props.children}
    </div>
  )
}