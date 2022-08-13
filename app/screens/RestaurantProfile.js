import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
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


const RestaurantProfile = () => {
  return (
    <ScrollView className="bg-white min-h-screen ">
{/* Thumbnail */}
        <View className="h-[311px] bg-[#d9d9d9]">
          <View className="m-5">
           <BackButton />

          </View>
          {/* <Image /> */}
        </View>
      <SafeAreaView className="px-4 relative bottom-16">
        <View className="items-end flex flex-row justify-between 
          space-x-6  ">
{/* Profile Picture */}
          <View className=" 
              bg-[#d9d9d9] 
            rounded-full h-[120px] w-[120px] 
            border-white border-[11px]
            ">
              <View className="absolute bottom-0 right-0">
                <BadgeCheckIcon size={28} color={"#325FFE"}/>
              </View>
          </View>
{/* Attributes */}
          <View className="flex flex-row space-x-4 relative bottom-2">
            <View className="space-x-1 flex flex-row items-center ">
              <TruckIcon size={22} color={"#c8c8c8"}/>
              <Text className="text-sm font-medium text-left">Free Delivery</Text>
            </View>
            <View className="space-x-1 flex flex-row items-center ">
              <ClockIcon size={22} color={"#c8c8c8"}/>
              <Text className="text-sm font-medium text-left">10 - 15 mins</Text>
            </View>
          </View>
        </View>
{/* Name, Rating, Address */}
        <View className="relative top-2 flex flex-row items-start">
          <View>
            <Text className="text-3xl font-medium text-left">Restaurant Name</Text>
            <Text className="text-sm font-normal text-gray-500 text-left">Vegan, Healthy, Breakfast, European</Text>
            <Text className="text-lg font-medium text-gray-500 text-left mt-2">Resturant's Address</Text>
          </View>
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

{/* Input Search field */}
        <View className="flex-row items-center space-x-2 pb-2 pt-3 mt-5">
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

        <Text className="text-xl font-medium text-left mt-4">Hits of the week</Text>
{/* Hits of the WEek */}
        <HitsOfTheWeekRow />
{/* Browse Restaurant's Menu */}
        <Text className="text-xl font-medium text-left mt-9">Browse Restaurant's Menu</Text>
        
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex flex-row mt-5">
          
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
        <View className="border-y border-gray-300/80 my-4 rounded"/>
{/* Restaurant Menu */}
        <View>
          <Menu />
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

export default RestaurantProfile