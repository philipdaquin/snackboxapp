import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// const ModalPopUp = ({visible, children}) => { 
//   const [showModal, showShowModal] = useState(visible)
//   return (
//     <Modal transparent visible={showModal}>
//       <View className="">
//         <Text>Hello</Text>
//       </View>
//     </Modal>
//   ) 
// }
const ConfirmationButton = () => {
  const [visible, setShowModal] = useState(false)
  const openModal = () => { 
    setShowModal(!visible)
  }
  const navigation = useNavigation()

  return (
    <>
      <View className="absolute bottom-4  z-50 w-full px-4 ">
          <TouchableOpacity 
              onPress={() => {navigation.navigate("BottomUpPopup")}}
              className="p-5 rounded-2xl h-[64px]
              flex flex-row justify-center items-center bg-black mt-4">
          <View>
              <Text className="text-white font-medium text-2xl ">Continue</Text>
          </View>
          </TouchableOpacity>

      </View>

    </>

  )
}

export default ConfirmationButton