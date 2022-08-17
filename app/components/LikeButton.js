import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {UserIcon, HeartIcon} from 'react-native-heroicons/solid'
import { HeartIcon as Heart } from 'react-native-heroicons/outline'


const LikeButton = () => {
  const [liked, setLiked] = useState(false)
  return (
    
    <TouchableOpacity 
        onPress={() => setLiked(!liked)}
        className="
          flex items-center 
          justify-center 
          bg-white h-[51px] 
          w-[54px] rounded-xl
          ">
          {
              liked ? (
                <HeartIcon size={25} color={"#FF3232"}/>

              ) : (
                <HeartIcon size={25} color={"#999797"}/>
                
              )
          }
    </TouchableOpacity>
  )
}

export default LikeButton