import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StarIcon, MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import BackButton from '../components/BackButton'
import LikeButton from '../components/LikeButton'
import AddOn from '../components/AddOn'
import AddToCart from '../components/AddToCart'



const FoodScreen = () => {
  return (
    <>
      <AddToCart />
      <ScrollView className="bg-white min-h-screen pb-24">
        <View className="h-[412px] bg-[#d9d9d9]] px-4">
          {/* Backbutton */}
          <View className="mt-12">
            <BackButton />

          </View>
          <View className="absolute bottom-1 right-1 mb-7 mr-6">
            <LikeButton />
          </View>
        </View>
        <SafeAreaView className="px-4 mt-6">

  {/* Headers */}
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-start space-x-2">
              <Text className="text-3xl font-medium text-left ">Chicken Nuggets</Text>

              <View className="
                flex items-center 
                justify-center relative
                h-[26px] m-3">
                <Text className="text-black font-bold text-[14px] items-center flex ">
                    5.0
                    <StarIcon size={18} color={"#ffc107"}/> 
                    <Text className="text-[8px] text-gray-500 font-medium">{`(100+)`}</Text>
                </Text>
              </View>
            </View>
            {/* See ALl Reviews  */}
            <Text className="text-sm font-medium ">See all reviews</Text>
          </View>
          
          <Text className="relative bottom-3 text-left text-xl font-medium text-[#575757]">
            From Mcdonald's
          </Text>

  {/* Price */}
          <View className="flex flex-row justify-between mt-2">
            <View className="flex flex-row items-center space-x-4">
              <Text className="font-bold text-left text-4xl">$59.00</Text>
              <Text className="text-lg flex-bold text-gray-600 line-through ">$13.00</Text>
            </View>

            <View className="flex flex-row space-x-4 items-center">
              <TouchableOpacity>
                <MinusCircleIcon size={45} color={"#aeaeae"}/>
              </TouchableOpacity>

              <Text className="font-medium text-2xl">1</Text>
              
              <TouchableOpacity>
                <PlusCircleIcon size={45} color={"#aeaeae"}/>
              </TouchableOpacity>            
            </View>
          </View>

          <Text className="w-[323px] mt-2 text-gray-500 font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A impedit unde iste dolorum fuga tempora amet, velit reiciendis temporibus esse odio doloribus ea pariatur non officia numquam, modi eum consectetur!
          </Text>
  {/* Sizes */}
          <View className="mt-5 flex flex-row items-center justify-between">
            <Text className="font-medium text-xl text-left">Select Size</Text>
            
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