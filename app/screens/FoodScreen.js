import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { StarIcon, MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import BackButton from '../components/BackButton'
import LikeButton from '../components/LikeButton'
import AddOn from '../components/AddOn'
import AddToCart from '../components/AddToCart'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, add_to_basket, remove_from_basket, select_basket_item_with_id } from '../redux/basketSlice'
import { useState } from 'react'


const FoodScreen = () => {

  const { params: {
    id,
    name,
    description,
    avg_person,
    delivery,
    avg_waiting,
    restaurant_name,
    image,
    price,
} } = useRoute();

const items = useSelector(state => select_basket_item_with_id(state, id));
  const [pressed, setPressed] = useState(false);
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch();
 
  const add_item_to_basket = () => { 
      dispatch(add_to_basket({
        id,
        name,
        description,
        avg_person,
        delivery,
        avg_waiting,
        restaurant_name,
        image,
        price,
      }));
  
  }

  const remove_item_basket = () => { 
    if (!items.length) return ;  
    dispatch(remove_from_basket({ id }))
  }


  const navigation = useNavigation()
  return (
    <>
      <AddToCart id={id}/>
      <ScrollView className="bg-white min-h-screen pb-24">
        <View className="h-[412px] bg-white ">
        <Image source={{ uri: image }}
            className="h-[412px]"/>
          {/* Backbutton */}
          <View className="m-5 z-50 absolute ">
            <BackButton />

          </View>
          <View className="absolute bottom-1 right-1 mb-7 mr-6">
            <LikeButton />
          </View>
        </View>
        <SafeAreaView className="px-4 mt-6">

  {/* Headers */}
          <View className="flex flex-row justify-between space-x-1">
            <Text className="text-3xl font-medium text-left w-[60%] mb-6">{name}</Text>
            <View className="flex flex-row space-x-1 items-center realtive bottom-3">
              <View className="
                flex items-center 
                justify-center">
                <Text className="text-black font-bold text-[14px] items-center flex ">
                    5.0
                    <StarIcon size={18} color={"#ffc107"}/> 
                    <Text className="text-[8px] text-gray-500 font-medium">{`(100+)`}</Text>
                </Text>
              </View>
            {/* See ALl Reviews  */}
            <Text className="text-sm font-medium ">See all reviews</Text>
            </View>
          </View>
          

{/* Sample Data linking to Restaurant  */}
          <TouchableOpacity onPress={() => {navigation.navigate("RestaurantStack", {
            id: 1,
            avg_waiting:"10 - 15min",
            name:"Nando's",
            short_description:"Chicken, Sauce, Pork",
            avg_person:"2" ,
            ratings:"5.0",
            total_reviews:"100",
            delivery_price:"Free Delivery",
            address:"Nandos UK",
            thumbnail:"",
            profile_pic: ""
          })} }>
            <Text className="relative bottom-3 text-left text-xl font-medium text-[#575757]">
              From {restaurant_name}
            </Text>
          </TouchableOpacity>

  {/* Price */}
          <View className="flex flex-row justify-between">
            <View className="flex flex-row items-center space-x-4">
              <Text className="font-bold text-left text-4xl">${price}</Text>
              <Text className="text-lg flex-bold text-gray-600 line-through ">$13.00</Text>
            </View>

            <View className="flex flex-row space-x-4 items-center">
              <TouchableOpacity 
                disabled={items.length === 0 }
                onPress={remove_item_basket}>
                <MinusCircleIcon size={45} color={
                  items.length > 0 ? "#5887FF" : "#aeaeae" }/>
              </TouchableOpacity>
              <Text className="font-medium text-2xl">{items.length}</Text>

              <TouchableOpacity onPress={add_item_to_basket}>
                <PlusCircleIcon 
                  size={45} 
                  color={"#55DF8E"}/>
              </TouchableOpacity>            
            </View>
          </View>

          <Text className="w-[323px] mt-2 text-gray-500 font-normal">
            {description}
          </Text>
  {/* Sizes */}
          <View className="mt-5 flex flex-row items-center justify-between">
            <Text className="font-semibold text-xl text-left">Select Size</Text>
            
            <View className="flex flex-row space-x-3">
              <TouchableOpacity 
                className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
                  <Text className="font-medium text-lg">S</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
                  <Text className="font-medium text-lg">M</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
                  <Text className="font-medium text-lg">L</Text>
              </TouchableOpacity>
            </View>
          </View>
  {/* Frequently Bought Together */}
          <View className="mt-9">
            <Text className="font-medium text-lg text-left mb-5">Frequently Bought Together</Text>
            <View className="mb-2">

              <AddOn title={"Steam Jasmine Rice"} price={"$4.5"} />
              <AddOn title={"Coca Cola"} price={"$2.5"} />
              <AddOn title={"Sweet Potato"} price={"$10.5"} />
              <AddOn title={"Cheese"} price={"$1.5"} />

            </View>
          </View>

  {/* Additional Request  */}
          <View className="mt-3 space-y-3">
              <Text className="font-medium text-lg text-left">Additional Request</Text>
              
              <View className="mt-2  h-[100px] bg-[#f3f3f3] rounded-2xl font-medium ">
                <TextInput 
                  style={
                    {
                      outlineStyle: 'none'
                    }
                  }
                  underlineColorAndroid={'transparent'}
                  caretHidden={true}
                  textAlign='left'
                  textBreakStrategy='balanced'
                  multiline={true}
                  className="rounded-2xl mr-4 ml-4 mt-3 font-normal text-sm flex flex-grow "
                  placeholder='Add special Request Here!'/>
              </View>
          </View>


            {/* Footer */}
          <View className=" flex flex-col-reverse justify-center items-center mt-32">
              <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>

  )
}

export default FoodScreen