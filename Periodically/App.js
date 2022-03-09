import React, { useEffect, useRef, useState , } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button ,TextInput } from "react-native";

function increment(n: any) {
    return n + 1;
}
const HomeScreen = ({ navigation }: any) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    countRef.current = count;

    const [data, setData] = useState<any>([]);
    const length = data.length
    const initialState = 0;
    const [page, setPage] = useState(0)
    const pageRef = useRef(page);
    countRef.current = count;

    const [filteredData, setFilteredData] = useState<any>([])
    const [masterData, setMasterData] = useState([])
    const [name, setName ] = useState('');

    let arr: any = [];
    useEffect(() => {
        getNews();
        const timer = window.setInterval(() => {
            getNews();
            console.log(count, '55555', countRef.current, '======', pageRef.current);
            console.log('10 second has passed');
        }, 10000);
    }, []);

     const getNews = () => {
        let url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${countRef.current}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                const temp = json.hits
                setData([...data, ...json.hits]);
                if (countRef.current > 0) {

                    console.log(arr)
                    let input = json.hits;
                    let tempdata = arr.reverse()
                    let arrr = tempdata.concat(input)
                    setFilteredData(arrr)
                    arr = arrr
                    console.log(filteredData)
                } else {

                    setFilteredData(json.hits)
                    console.log(filteredData)
                    setData(json.hits)
                    arr = json.hits
                }

                setMasterData(temp)
                let activeStep: any = (initialState + 1)
                setPage(increment)
                setCount(increment);
                console.log(page, '_____', count)
            })
}
    const sortByDate = () => {
        var sorted = data
        sorted.sort((a: any, b: any) => (a.created_at > b.created_at ? 1 : -1))
        setFilteredData(sorted)
        console.log(sorted)
    }
    const sortByTitle = () => {

        var sorted = data
        sorted.sort((a: any, b: any) => (a.title > b.title ? 1 : -1))
        console.log(sorted)
        setFilteredData(sorted)
        console.log(sorted)
    }

    const searchButton = (text: any) => {
        console.log(data)
        if (text) {
            setFilteredData(itemsToDisplay);
            const newData = masterData.filter((item:any)=>{
                const itemData = 
                item.title ? item.title.toUpperCase() : ''.toUpperCase()||
                item.author ? item.author.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setData(newData);
            setFilteredData(newData)
            setName(text)
        } else {
            setFilteredData(masterData);
            setName(text)
            setData(data)
        }
    }

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.list} >
                <TouchableOpacity onPress={() => navigation.navigate("DetailsInfo", { show: item })}>
                    <Text><Text style={styles.text}>News Title:- </Text>{item.title}</Text>
                    <Text><Text style={styles.text}>URL:-  </Text>{item.url}</Text>
                    <Text> <Text style={styles.text}>Created at:- </Text>{item.created_at} </Text>
                    <Text><Text style={styles.text}>Author:-</Text>{item.author} </Text>
                 </TouchableOpacity>
            </View>
        )
    }
    return (
         <View style={styles.container}>
            <View>
                 <TextInput 
                     style={styles.input}
                    placeholder='Search  by Title or Author'
                    onChangeText={(text)=>{setName(text)}}
                />
                <View style={{ marginTop: 1, marginBottom: 2, padding: 2 }}></View>
                <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'space-evenly' }}>
                    <Button 
                        title='Search' 
                        onPress={searchButton} 
                        color='red' 
                        disabled={!name}
                    />
                    <View style={{ marginTop: 5, marginBottom: 20 }}>
                <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'space-evenly' }}>
                    <Button 
                       title='Filter by created_at' 
                       color='red'
                       onPress={() => sortByDate()} 
                    />
                    <View style={{ marginTop: 5, marginBottom: 20 }}>
                        <Button 
                            title='Filter by title' 
                            onPress={() => sortByTitle()} 
                            color='red'
                        />
                    </View>
                </View>
              </View>
                </View>
            </View>
            <ScrollView>
                <Text>
                    <FlatList
                        data={filteredData}
                        renderItem={renderItem}
                        keyExtractor={(item: any) => { return item.objectID }}
                    />
                </Text>
            </ScrollView>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    list: {
        color: 'black',
        margin: 5,
        borderWidth: 1,
        padding: 5,
        alignSelf: "center",
        width: 330
    },
    input: {
        height: 50,
        width: 320,
        borderWidth: 2,
        borderRadius: 2
        
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
})

export default HomeScreen
