import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import {HomeIcon, SearchIcon, NewspaperIcon, UserIcon, TagIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const TempNavigation = () => {
  const navigation = useNavigation()
  return (
    <View className="">
        <View 
            style={{
                backgroundColor: 'white',
                marginRight: 3,
                height: 84,
                shadowColor: "black",
                shadowOpacity: 90,
                shadowOffset: {
                width: 0,
                height: 20,
                },
                
                
            }}
            className="
            bottom-0 absolute
            bg-white w-full h-28 shadow-t-3xl shadow-2xl px-4 z-50">
            <View className="flex flex-row justify-between mt-4">
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Root")}
                    className="items-center px-2 font-medium">
                    <HomeIcon size={35} strokeWidth={1.5} color={"#000"} />
                    <Text>Home</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Search")}
                    className="items-center">
                    <SearchIcon size={35} strokeWidth={1.5} color={"#000"} />
                    <Text>Search</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Orders")}
                    className="items-center">
                    <NewspaperIcon size={35} strokeWidth={1.5} color={"#000"} />   
                    <Text>Orders</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Today")}
                    className="items-center">
                    <TagIcon size={35} strokeWidth={1.5} color={"#000"} />   
                    <Text>Today</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Accounts")}
                    className="items-center">
                    <UserIcon size={35} strokeWidth={1.5} color={"#000"} />   
                    <Text>Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

  )
}

export default TempNavigation