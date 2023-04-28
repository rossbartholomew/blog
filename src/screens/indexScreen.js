import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import {FontAwesome5} from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      
      <Button title="Add Post" onPress={addBlogPost} />
      <View style={styles.margin}>
        <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return (
            <TouchableOpacity
              onPress={()=> navigation.navigate("Blog Details", {id: item.id})}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity
                  onPress={()=>deleteBlogPost(item.id)}
                >
                <FontAwesome5 style={styles.icon} name="trash"/>
                </TouchableOpacity>  
              </View>
            </TouchableOpacity>  
            )
          }}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  margin:{
    marginHorizontal: 1.5,
    marginTop:5
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth:1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom:2


  },
  title:{
    fontSize: 18
  },
  icon:{
    fontSize: 25,

  }
});

export default IndexScreen;
