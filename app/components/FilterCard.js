import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FilterCard = ({name}) => {
   
//   const [selected, setSelected] = useState(false)
  return (
    <TouchableOpacity 
        // onPress={() => setSelected(!selected)}
        className={`border-2 border-[#d9d9d9] 
        rounded-xl flex flex-wrap mr-2
        justify-center`}>
      <Text className="font-medium text-sm items-center py-1 px-2">{name}</Text>
    </TouchableOpacity>
  )
}

export default FilterCard