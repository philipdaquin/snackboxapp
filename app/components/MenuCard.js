import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const MenuCard = ({
  id,
  name,
  description,
  avg_person,
  delivery,
  avg_waiting,
  restaurant_name,
  image,
  price,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate("FoodStack", { 
        id,
        name,
        description,
        avg_person,
        delivery,
        avg_waiting,
        restaurant_name,
        image,
        price,
      })}
      className="flex flex-row justify-between mb-6 items-end">
        <View className="space-y-1">
{/* Name of the item */}
            <Text className="font-medium text-lg text-left mb-3">{name}</Text>
{/* Price */}
            <View className="flex flex-row space-x-2 items-center">
              <View className="px-2 py-1 rounded-lg bg-[#e4e4e4] flex flex-row justify-center ">
                <Text className="font-bold items-center text-sm">${price}</Text>
              </View>
{/* Free Delivery */}
              <View className="flex items-center justify-center px-2 h-[23px] bg-[#e4e4e4] rounded-lg">
                <Text className="font-bold text-sm">{delivery}</Text>
              </View>
            </View>
            <Text className="w-[250px] flex-shrink flex mt-2 font-normal">
            {description}
          </Text>
        </View>
        <View className="rounded-lg ">
{/* <Image/>  */}
              <Image 
                  source={{
                  uri: image
                  }}
              className="h-[101px] w-[111px]
              "/>
        </View>
    </TouchableOpacity>
  )
}

export default MenuCard

