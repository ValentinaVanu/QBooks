import { useParams } from '@reach/router'
import React from 'react'

const Item = () => {
  const { itemId } = useParams()

  return (
    <div>Item {itemId}</div>
  )
}

export { Item }
