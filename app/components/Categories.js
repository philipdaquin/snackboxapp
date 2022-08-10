import { View, Text } from 'react-native'
import React from 'react'
import {ScrollView} from 'react-native-web'
import CategoryCard from './CategoryCard'
import { useState } from 'react'


const Categories = () => {
    const [categories, setCategories] = useState([])

    return (
        <ScrollView 
            contentContainerStyle={{
                paddingTop: 15
            }}
            horizontal 
            showsHorizontalScrollIndicator={false}>
            <CategoryCard img="" title="Burger" />
            <CategoryCard img="" title="Coffee" />
            <CategoryCard img="" title="Pasta" />
            <CategoryCard img="" title="Desserts" />
            <CategoryCard img="" title="Desserts" />
        </ScrollView>
  )
}

export default Categories