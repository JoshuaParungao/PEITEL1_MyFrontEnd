import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, FlatList, Button, Alert, ActivityIndicator, Platform } from 'react-native';

export default function UserListPage({ navigation }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_BASE = "http://192.168.30.137:8081/registration/api/users/";

    const fetchUsers = () => {
        setLoading(true);
    axios.get(API_BASE)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);w
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#2b17a5" />
                <Text>Loading users...</Text>
            </View>
        );
    }

    const confirmDeleteWeb = async (id) => {
    
        const ok = typeof window !== 'undefined' ? window.confirm('Are you sure you want to delete this user?') : true;
        if (!ok) return;
        try {
            await axios.delete(`${API_BASE}${id}/`);
            if (Platform.OS === 'web') {
                window.alert('User deleted successfully');
            } else {
                Alert.alert('User deleted successfully');
            }
            fetchUsers();
        } catch (error) {
            console.error(error);
          
            if (Platform.OS === 'web') {
                if (error.response) {
                    
                    window.alert(`Failed to delete user: ${error.response.status} ${error.response.statusText}`);
                } else if (error.request) {
                
                    window.alert('Failed to delete user: Network error or CORS blocked the request. Check backend CORS settings and that the server is reachable from the browser.');
                } else {
                    window.alert(`Failed to delete user: ${error.message}`);
                }
            } else {
                Alert.alert('Failed to delete user');
            }
        }
    };

    const handleDelete = (id) => {
      
        if (Platform.OS === 'web') {
            confirmDeleteWeb(id);
            return;
        }

        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this user?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => confirmDeleteWeb(id) },
            ]
        );
    };


    const handleEdit = ( user ) => {

        navigation.navigate("EditUser",{ user });
    }

    return (
        <View>
            <Text>Welcome to users list</Text>
            <FlatList 
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View>
                    <Text>{item.last_name} {item.first_name}</Text>
                    <Text>Password: {item.password}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Gender: {item.gender}</Text>
                    <Text>-----------------------------</Text>


                    <Button 
                        title="edit user"
                        onPress={() => handleEdit(item)}
                        color={"#841584"}
                    />
                    <Button 
                        title="delete user"
                        color={"#ff0000"}
                        onPress={() => handleDelete(item.id)}
                    />
                </View>
            )}/>
        </View>
    )

}

