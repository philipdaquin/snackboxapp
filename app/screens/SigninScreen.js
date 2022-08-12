import { View, Text, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SigninScreen = () => {

  const navigation = useNavigation()

  return (
    <ScrollView className="bg-white min-h-white">
        <SafeAreaView className="px-4">
            {/* Welcome Page  */}
            <View className="mt-32 flex justify-center items-center">
                <Text className="font-medium text-3xl">Welcome Back!👋</Text>
            </View>

            <View className="space-y-4 mt-14">
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Email</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg">
                        <TextInput 
                            style={
                                {
                                outlineStyle: 'none'
                                }
                            }
                            placeholder="Email" 
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Password</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg ">
                        <TextInput 
                            style={
                                {
                                outlineStyle: 'none'
                                }
                            }
                            placeholder="Password" 
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
            </View>
            <Text className="mt-2 flex-row-reverse font-medium text-right text-base">Forgot Password?</Text>
            
            {/* Login Button  */}
            <TouchableOpacity 
                // Temporary login to root 
                onPress={() => {navigation.navigate("Home")}}
                className="bg-black items-center rounded-xl p-5 mt-24">
                <Text className="text-white text-lg font-bold ">Login</Text>
            </TouchableOpacity>
            
            <View className="mt-14">
                <Text className="text-gray-400 font-normal text-sm text-center">
                    Don't have an account? 
                    <Text className="font-medium text-sm text-blue-500 underline"
                        onPress={() => {navigation.navigate("Signup")}}
                    > Sign Up Here</Text>
                </Text> 
                <View className="mt-5 flex flex-row items-center justify-center space-x-2 ">
                    <View className="border-b border-gray-300/80 flex-grow"/>
                    <Text className=" bg-white text-xs font-normal text-center text-gray-500">or you can sign in using</Text>
                    <View className="border-b border-gray-300/80 flex-grow"/>
                </View>

                <View className="flex flex-row space-x-5 items-center  justify-center mt-7">
                    <TouchableOpacity className="p-5 bg-[#e6e6e6] rounded-xl">
                        <Image source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                        }}
                        className="p-4"
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-4 bg-[#e6e6e6] rounded-xl">
                        <Image source={{
                            uri: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
                        }}
                        className="h-[40px] w-[40px]"
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-5 bg-[#e6e6e6] rounded-xl">
                        <Image source={{
                            uri: "https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.svg"
                        }}
                        className="p-4"
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>

  )
}

export default SigninScreen