import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import UserAddress from '../components/UserAddress'
import CancelButton from '../components/CancelButton'
import CartItems from '../components/CartItems'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { TicketIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/restaurantSlice'
import { remove_from_basket, select_basket_item, select_basket_total, remove_all_items, add_to_basket } from '../redux/basketSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import Currency from 'react-currency-formatter'
import ConfirmationButton from '../components/ConfirmationButton'
import Subtotal from '../components/Subtotal'


const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(select_basket_item)
  const dispatch = useDispatch()
  const [groupItemsBasket, setGroupItemsBasket] = useState([])
  const total_basket = useSelector(select_basket_total)

  useEffect(() => { 
    const grouped_items = items.reduce((results, items) => { 
      (results[items.id] = results[items.id] || []).push(items);
      return results
    }, {} );
    setGroupItemsBasket(grouped_items);
  }, [items])

  console.log(groupItemsBasket)

  return (
    <>
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4 pb-[200px]">
        <View className="flex flex-row justify-center">
          <View className="absolute left-1">
            <CancelButton />
          </View>
          <View className="relative top-4">
            <UserAddress />
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-left font-medium text-3xl">Cart Page</Text>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
        </View>
        
        <View className="flex flex-row justify-between items-baseline">
          <Text className="text-left text-sm font-normal text-gray-500">{items.length} Items in the Cart</Text>
          <TouchableOpacity
            onPress={() => dispatch(remove_all_items(items))}
          >
            <Text className="text-red-500 text-right text-xs font-medium relative top-1">REMOVE ALL</Text>
          </TouchableOpacity>
        </View>

{/* Items in the cart  */}
        <View className="mt-5">
          <ScrollView className="divide-y divide-gray-200 ">
            {
              Object.entries(groupItemsBasket).map(([key, items]) => ( 
               
                  <View key={key} className="mb-4 flex flex-row justify-between flex-shrink ">
                      
                      <View className="flex flex-row space-x-3 items-center">
                          <View className="rounded-lg ">
                            <Image 
                                source={{
                                uri: items[0]?.image
                                }}
                            className="h-[61px] w-[61px]
                            "/>
                          </View>
                          
                          <View className="w-[80%]">
                              <Text className="font-medium text-lg text-left ">{items[0]?.name}</Text>
                              <Text className="text-sm font-medium text-gray-500 text-left">{items[0]?.price}</Text>
                          </View>
                      </View>
                      <View className="flex flex-row space-x-4 items-center ">
                          <TouchableOpacity 
                            onPress={() => dispatch(remove_from_basket({id: items[0]?.id}))} 
                          >
                              <MinusCircleIcon size={45} color={ "#aeaeae" }/>
                          </TouchableOpacity>
                          <Text className="font-medium text-2xl">{items.length} x</Text>
                          <TouchableOpacity 
                            onPress={() => dispatch(add_to_basket(items[0]))} 
                          >
                              <PlusCircleIcon 
                              size={45} 
                              color={"#55DF8E"}/>
                          </TouchableOpacity>            
                      </View>
                  </View>
              ))
            }
        </ScrollView>
          <View className="flex flex-row items-center justify-center space-x-1 mt-6">
            <PlusCircleIcon size={20} color={"#aeaeae"}/>
            <Text className="text-xs font-medium text-gray-400">Add More Items</Text>
          </View>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
        </View>

{/* Promotion Code */}
        <View className="flex py-2 justify-between flex-row rounded-lg bg-[#f3f3f3] px-2">
          <View className="items-center flex flex-row space-x-1 relative left-1">
            <TicketIcon color="gray" size={25}/>
            <TextInput placeholder='Add Promo Code' className=" text-base font-medium"/>
          </View>
          <TouchableOpacity className="bg-black relative right-4
            items-center h-[39px] w-[70px] rounded-lg flex justify-center">
            <Text className="text-white font-medium text-sm">Apply</Text>
          </TouchableOpacity>
        </View>

        
        <Subtotal
          subtotal={Math.floor(-total_basket)}
          discount={Math.floor(items[0]?.price/4)}
          shipping_fee={Math.floor(items[0]?.price/4)}
          total={Math.floor(-total_basket + 
            (items[0]?.price/4) + 
            (items[0]?.price/4))}
          items={items.length}
        />

      </SafeAreaView>
    </ScrollView>

{/* Continue Button */}
            
    <ConfirmationButton/>
    </>

  )
}

export default BasketScreen