import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

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
        <Animatable.View 
          animation="slideInUp"
          iterationCount={1}
          className="absolute bottom-4  z-50 w-full px-4 ">
            <TouchableOpacity 
                // DeliveryPage
                onPress={() => {navigation.navigate("BottomUpPopup")}}
                className="p-5 rounded-2xl h-[64px]
                flex flex-row justify-center items-center bg-black mt-4">
            <View>
                <Text className="text-white font-medium text-2xl ">Continue</Text>
            </View>
            </TouchableOpacity>

        </Animatable.View>
    </>

  )
}

export default ConfirmationButton