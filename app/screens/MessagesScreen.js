import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';


const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={messages} 
                keyExtractor={messages => messages.id.toString()} 
                renderItem={({item}) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.subTitle}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={ListItemDeleteAction}
                    />} 
                    ItemSeparatorComponent={ListItemSeperator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;