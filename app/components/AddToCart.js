import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {ShoppingBagIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { select_basket_item_with_id } from '../redux/basketSlice'

const AddToCart = ({id}) => {
  const navigation = useNavigation()  
  const items = useSelector(state => select_basket_item_with_id(state, id));

  return (
    <View 
        style={{
            shadowColor: "black",
            shadowOpacity: 90,
        }}
        className="bg-white w-full mt-32 h-28 shadow-t-3xl shadow-2xl px-4 absolute bottom-0 z-50">
        <TouchableOpacity 
            disabled={items.length === 0}
            onPress={() => {
                navigation.navigate("Root");
            }}
            className="bg-black items-center rounded-2xl p-5 mt-4">
            <View className="items-center space-x-1 flex flex-row">
                <ShoppingBagIcon size={22} color={"white"}/>
                <Text className="text-white text-lg font-bold ">
                    Add {items.length } items to Cart
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default AddToCart