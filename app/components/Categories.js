import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
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
            <CategoryCard img="🍔" title="Burger" selected={true}/>
            <CategoryCard img="🍕" title="Pizza" selected={false}/>
            <CategoryCard img="🍿" title="Movies" selected={false}/>
            <CategoryCard img="🧇" title="Waffles" selected={false}/>
            <CategoryCard img="🌭" title="American" selected={false}/>
        </ScrollView>
  )
}

export default Categories