import React, {useContext, useState}from "react";
import {StyleSheet, View, Text, TextInput, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/BlogContext";

const CreateScreen = () =>{
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const {addBlogPost} = useContext(Context)
    const navigation = useNavigation()

    const NavigateTo = () =>{
        navigation.navigate("Blog")
    }

    return(
        <View style={styles.containerStyles}>
            <Text style={styles.titleStyles}>Enter Title</Text>
            <TextInput 
                style={styles.inputStyles}
                value={title}
                onChangeText={text => setTitle(text) }
            
            />
            <Text style={styles.titleStyles}>Enter Content</Text>
            <TextInput 
            style={styles.inputStyles}
            value={content}
            onChangeText={text => setContent(text)}     
            />
            <Button
                title="Add Blog Post"
                size="medium"
                onPress={()=>{
                addBlogPost(title, content)
                NavigateTo()
                }}
/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    inputStyles:{
        borderWidth: 2,
        marginHorizontal: 5,
        fontSize: 18,
        marginBottom:15,
        padding:5
    },
    titleStyles:{
        fontSize:18,
        marginBottom:5,
        marginLeft:5,
        fontWeight:"500"
    },
    containerStyles:{
        marginTop:15
    }
})

export default CreateScreen