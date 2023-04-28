import React, {useContext}from "react";
import {StyleSheet, View, Text} from "react-native";
import { useRoute } from '@react-navigation/native';
import { Context } from "../context/BlogContext";


const ShowScreen = () =>{
    const {state} = useContext(Context)

     

    const blogPost = state.find(blogPost => blogPost.id === useRoute().params.id)

    return(
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ShowScreen;