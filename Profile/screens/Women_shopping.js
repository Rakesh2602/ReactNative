import { Image,View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React , {useState}from 'react'
import { Icon } from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

const Women_shopping = () => {

  const DATA = [
    {
      imgUrl:
        'https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0001_7_8cda1974-6487-4d1e-82a2-730e1009b35c_1452x1799.jpg?v=1632894998',
        title: 'HOODEY price - Rs. 450'
      },
    {
      imgUrl:
        'data:image/jpeg;base64,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',
        title: 'Jean Shirt - Rs 350'
    },
    {
      imgUrl:
        'data:image/jpeg;base64,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',
        title: 'Lycra -Gray Rs-520'
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoVMUsQngM2zPFe5uuXdm6Nmo-04aFUaKxA&usqp=CAU',
        title: ' blackStripes - Rs 670'
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJ5SKTmg15umZ6NbsZNB-uUzDKAoyyq4CsQ&usqp=CAU',
        title: 'Printed Shirt - Rs 450'
    },
  ];
  
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#357AF5', height: 50, flexDirection: 'row' }}>
        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            color='white'
          />
        </View>
        <View>
          <Text style={{ marginLeft: 25, color: 'white', fontSize: 20, paddingTop: 10 }}>Mens_Shopi...</Text>
        </View>
        <View style={{ justifyContent: 'center', paddingLeft: 50}}>
          <MaterialIcons
            name="search"
            size={25}
            color='white'
          />
        </View>
        <View style={{ justifyContent: 'center', paddingLeft: 25 }}>
          <MaterialCommunityIcons
            name="microphone"
            size={25}
            color='white'
          />
        </View>
        <View style={{ justifyContent: 'center', paddingLeft: 25 }}>
          <MaterialCommunityIcons
            name="cards-heart"
            size={25}
            color='white'
          />
        </View>
        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={25}
            color='white'
          />
        </View>
      </View>
      <View style={styles.header2}>
        <View style={{ flex: 1, alignItems: 'center',borderEndWidth:0.2}}>
          <MaterialCommunityIcons
            name="sort"
            size={20}
            color='#040405'
          />
          <View>
            <Text style={{fontWeight:'bold'}}>sort</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="filter-variant"
            size={20}
            color='#040405'
          />
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              Filter
            </Text>
          </View>
        </View>
      </View>
      
  <FlatList
        style={{ flex: 1 }}
        numColumns={2}
        data={DATA}
        inverted
        keyExtractor={(time, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.FlatList}>
                <View style={{ backgroundColor: 'white', margin: 3 }}>
                {item.imgUrl && (
                    <Image
                      source={{ uri: item.imgUrl }}
                      style={{ height: 230, width: 200 }}
                    />
                  )}
                  {!!item.title && (
                    <Text
                      style={{
                        paddingVertical: 8,
                        fontSize: 15,
                        paddingStart: 4,
                        paddingEnd: 10,
                        color: 'black',
                      }}>
                      {item.title}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
);
}
//itemWidth={(ITEM_WIDTH-(10*columns))/columns}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header2: {
    flexDirection: 'row',
   // flex: 1,
    padding: 10,
    //borderWidth:1,
    height:55,
    borderColor:'#E2E5EA ',
    borderBottomWidth:0.2,
    backgroundColor:'white'
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 100
  },
  Flatlist: {
    flex: 1
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 42,
  },
})
export default Women_shopping