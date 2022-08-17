import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import BottomTab from '../Navigation/BottomTab'
import {TruckIcon, ClockIcon, BadgeCheckIcon} from 'react-native-heroicons/solid'
import { StarIcon } from 'react-native-heroicons/solid'
import { AdjustmentsIcon, SearchIcon, ChevronDownIcon } from 'react-native-heroicons/outline'
import { TextInput } from 'react-native-web'
import HitsOfTheWeek from '../components/HitsOfTheWeek'
import HitsOfTheWeekRow from '../components/HitsOfTheWeekRow'
import FilterCard from '../components/FilterCard'
import Menu from '../components/Menu'
import BackButton from '../components/BackButton'
import { useRoute } from '@react-navigation/native'
import BasketIcon from '../components/BasketIcon'
import TempNavigation from '../components/TempNavigation'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../redux/restaurantSlice'


const RestaurantProfile = () => {
  const dispatch = useDispatch();
  const { params: {
    id,
    avg_waiting, 
    name, 
    short_description,
    avg_person, 
    ratings, 
    total_reviews, 
    delivery_price,
    address,
    thumbnail,
    profile_pic
  }} = useRoute();

  useEffect(() => { 
    dispatch(setRestaurant({
      id,
      avg_waiting, 
      name, 
      short_description,
      avg_person, 
      ratings, 
      total_reviews, 
      delivery_price,
      address,
      thumbnail,
      profile_pic
    }))
  }, [dispatch])

  return (
    <> 
     
    <ScrollView className="bg-white min-h-screen ">
{/* Thumbnail */}
  
        <View className="h-[311px] bg-[#d9d9d9]">
          <Image source={{ uri: thumbnail }}
            className="h-[311px] "/>
            <View className="m-5 z-50 absolute">
              <BackButton />
            </View>
        </View>
      <SafeAreaView className="px-4 relative bottom-16 pb-[200px]">
        <View className="items-end flex flex-row justify-between relative
          space-x-6  ">
{/* Profile Picture */}
          <View 
         
            className=" 
              bg-[#d9d9d9] 
            rounded-full h-[120px] w-[120px] 
            border-white border-[11px]
            ">
              <View className="relative bottom-3 right-3 ">
                <Image 
                  source={{
                  uri: profile_pic
                  }}
              className="   rounded-full h-[120px] w-[120px] 
              border-white border-[11px]
              "/>
              </View>

              <View className="absolute bottom-0 right-0 bg-white rounded-full ">
                <BadgeCheckIcon size={30} color={"#325FFE"}/>
              </View>
          </View>
{/* Attributes */}
          <View className="flex flex-row space-x-4 relative bottom-2">
            <View className="space-x-1 flex flex-row items-center ">
              <TruckIcon size={22} color={"#c8c8c8"}/>
              <Text className="text-sm font-medium text-left">{delivery_price}</Text>
            </View>
            <View className="space-x-1 flex flex-row items-center ">
              <ClockIcon size={22} color={"#c8c8c8"}/>
              <Text className="text-sm font-medium text-left">{avg_waiting}</Text>
            </View>
          </View>
        </View>
{/* Name, Rating, Address */}
        <View className="relative top-2 flex flex-row items-start">
          <View>
            <Text className="text-3xl font-medium text-left mr-4">{name}</Text>
            <Text className="text-sm font-medium text-gray-500 text-left">{short_description}</Text>
            <Text className="text-xl font-medium text-gray-500 text-left mt-2">{address}</Text>
          </View>
          <View className="
            flex items-start 
            justify-center relative
            h-[26px] top-3 right-2">
            <Text className="text-black font-bold text-[14px] items-center flex ">
                {ratings}
                <StarIcon size={18} color={"#ffc107"}/> 
                <Text className="text-[8px] text-gray-500 font-medium">{`(${total_reviews}+)`}</Text>
            </Text>
          </View>
        </View>

{/* Input Search field */}
        <View className="flex-row items-center space-x-2  pt-3 mt-5">
          <View className="flex-row space-x-2 flex-1 bg-[#d9d9d9] px-3 py-1 items-center rounded-xl">
              <SearchIcon color="gray" size={30}/>
              <TextInput 
                  style={
                    {
                      outlineStyle: 'none'
                    }
                  }
                  placeholder="Search Restaurant's Menu" 
                  className="w-[100%] h-11 rounded-sm text-lg font-medium outline-none border-none"
              />
            <AdjustmentsIcon size={24} color={"#777777"} />
          </View>
                  
        </View>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex flex-row mt-5 mb-6">
          
{/* Category card  */}
          <TouchableOpacity className="fkex flex-row space-x-1 bg-[#c8c8c8] rounded-xl items-center mr-2 px-2">
            <Text className="text-sm font-medium text-left">Categories</Text>
            <ChevronDownIcon height={20} width={10} strokeWidth={4}/>
          </TouchableOpacity>
          
{/* Filter Cards  */}
          <FilterCard name={"Offers"} />
          <FilterCard name={"Rating 4.0"} />
          <FilterCard name={"Popular"} />
          <FilterCard name={"Trending"} />
          <FilterCard name={"Nearest"} />
        </ScrollView>

        <Text className="text-2xl font-semibold text-left mt-4">Hits of the week</Text>
{/* Hits of the WEek */}
        <HitsOfTheWeekRow id={id}/>
{/* Browse Restaurant's Menu */}
        <Text className="text-2xl font-semibold text-left mt-9">Browse Restaurant's Menu</Text>

        <View className="border-y border-gray-300/80 my-4 rounded"/>
{/* Restaurant Menu */}
        <View>
          <Menu />
        </View>

      </SafeAreaView>
    </ScrollView>
      
    <View className="relative bottom-[84px]">
      <BasketIcon />
    </View>
    <TempNavigation />
    </>
  )
}

export default RestaurantProfile