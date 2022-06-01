import React from 'react';

export default (props: any) => {
  const src = "./img/" + props.srcImage
  return (
    <div className="imagem mt-6 col-span-5 h-96 mx-4">
      <img className="object-cover h-full w-full" src={src} />
    </div>
  )
}