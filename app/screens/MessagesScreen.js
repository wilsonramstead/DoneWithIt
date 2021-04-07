import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import Screen from '../components/Screen';


const initialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        // delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={messages} 
                keyExtractor={messages => messages.id.toString()} 
                renderItem={({item}) => 
                    <ListItem 
                        title={item.title}
                        showChevron
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} /> }
                    />} 
                    ItemSeparatorComponent={ListItemSeperator}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setMessages([
                            {
                                id: 2,
                                title: 'T2',
                                description: 'D2',
                                image: require('../assets/mosh.jpg')
                            }
                        ])
                    }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;