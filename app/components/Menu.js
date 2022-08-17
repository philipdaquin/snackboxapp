import { View, Text } from 'react-native'
import React from 'react'
import MenuCard from './MenuCard'

const Menu = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-end">
        <Text className="font-medium text-2xl text-left">New Menu</Text>
        <Text className="text-sm text-[#f53d3d] font-medium">Show All</Text>
      </View>
      
      <View className="mt-2">
        <MenuCard 
          id={1} 
          name="Quarter Pounder with Bacon" 
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio architecto, repudiandae cum at deserunt?"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/HP-NewIn-Quarter-Pounder-Bacon-desktop.png"}
          price={"4.49"}
        />
        <MenuCard 
          id={2} 
          name="Creme Brulee McFlurry" 
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio architecto, repudiandae cum at deserunt?"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/HP-NewIn-Creme-Brulee-McFlurry-desktop_0.png"}
          price={"42.49"}
        />
        <MenuCard 
          id={3} 
          name="Sample Menu Item" 
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio architecto, repudiandae cum at deserunt?"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/HP-NewIn-Mozzarella-Sticks-desktop.png"}
          price={"4.49"}
        />
      
      </View>

      <View className="flex flex-row justify-between items-end">
        <Text className="font-medium text-2xl text-left">Burger</Text>
        <Text className="text-sm text-[#f53d3d] font-medium">Show All</Text>
      </View>
      
      <View className="mt-2">
        <MenuCard 
          id={1} 
          name="Big Mac" 
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio architecto, repudiandae cum at deserunt?"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/product-Big-Mac-desktop.png"}
          price={"4.49"}
        />
        <MenuCard 
          id={2} 
          name="Double Quarter Pounder" 
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio architecto, repudiandae cum at deserunt?"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/product-Quarter-Pounder-Double-desktop.png"}
          price={"42.49"}
        />
        <MenuCard 
          id={3} 
          name="Quarter Pounder" 
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio architecto, repudiandae cum at deserunt?"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/product-Quarter-Pounder-desktop.png"}
          price={"4.49"}
        />
      
      </View>
    </View>
  )
}

export default Menu