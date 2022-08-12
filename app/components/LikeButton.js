import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
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
          bg-white h-[43px] 
          w-[46px] rounded-lg
          ">
          {
              liked ? (
                <HeartIcon size={22} color={"#FF3232"}/>

              ) : (
                <Heart size={22} color={"#c8c8c8"}/>
                
              )
          }
    </TouchableOpacity>
  )
}

export default LikeButton