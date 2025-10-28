import { View, Text, Button, TextInput } from 'react-native';
import styles from "../styles";
import { useState } from 'react';

export default function RegisterPage({navigation}) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        password: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Page</Text>
            <TextInput
                style={styles.input}
                placeholder='FirstName'
                value={formData.first_name}
                onChangeText={(text) => handleChange("first_name", text)}
            />
            <TextInput
                style={styles.input}
                placeholder='LastName'
                value={formData.last_name}
                onChangeText={(text) => handleChange("last_name", text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Gender'
                value={formData.gender}
                onChangeText={(text) => handleChange("gender", text)}
            />
            <TextInput
                secureTextEntry
                style={styles.input}
                placeholder='Password'
                value={formData.password}
                onChangeText={(text) => handleChange("password", text)}
            />

            <View style={styles.ButtonContainer}>
                <Button
                    title = 'Review and Submit'
                    onPress={()=>navigation.navigate("Review",{formData})}
                />
            </View>
        </View>
    )
}