import { View, Text } from 'react-native'
import React from 'react'
import CartRow from './CartRow'

const CartItems = () => {
  return (
    <View>
      <CartRow />
      <CartRow />
      <CartRow />
    </View>
  )
}

export default CartItems