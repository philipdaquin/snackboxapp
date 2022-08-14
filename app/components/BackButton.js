import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { remove_all_items, select_basket_item, select_basket_total } from '../redux/basketSlice'


const BackButton = () => {
  const navigation = useNavigation();
  const total_basket = useSelector(select_basket_total)
  const dispatch = useDispatch()
  const items = useSelector(select_basket_item)


  const clearCart = (cart) => { 
    if (cart.length !== 0) { 
      console.log(`cart is not empty, clearing cart and going back`)
      dispatch(remove_all_items({id:  cart[0]}))
      navigation.goBack()
    } else { 
      console.log(`going back to the previous page`)
      navigation.goBack()
    }
  }
  return (
    <TouchableOpacity 
        onPress={() => {clearCart(items)}}
        className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
      <ChevronLeftIcon size={24} />
    </TouchableOpacity>
  )
}

export default BackButton