import { View, Text, Button } from 'react-native'
import axios from 'axios';
import styles from "../styles";

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;



    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://192.168.30.137:8081/registration/api/register/", formData
            );
            console.log(response.data)
        }catch (error) {
            console.error(error.response?.data || error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Information</Text>

            <View style={styles.reviewBox}>
                <View style={styles.reviewRow}>
                    <Text style={styles.reviewLabel}>FirstName</Text>
                    <Text style={styles.reviewValue}>{formData.first_name}</Text>
                </View>
                <View style={styles.reviewRow}>
                    <Text style={styles.reviewLabel}>Lastname</Text>
                    <Text style={styles.reviewValue}>{formData.last_name}</Text>
                </View>
                <View style={styles.reviewRow}>
                    <Text style={styles.reviewLabel}>Email</Text>
                    <Text style={styles.reviewValue}>{formData.email}</Text>
                </View>
                <View style={styles.reviewRow}>
                    <Text style={styles.reviewLabel}>Gender</Text>
                    <Text style={styles.reviewValue}>{formData.gender}</Text>
                </View>
                <View style={[styles.reviewRow, { borderBottomWidth: 0 }]}> 
                    <Text style={styles.reviewLabel}>Password</Text>
                    <Text style={styles.reviewValue}>{formData.password}</Text>
                </View>
            </View>

            <View style={styles.ButtonContainer}>
                <Button title='Go back to edit' onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.ButtonContainer1}>
                <Button title='Submit' onPress={handleSubmit} />
            </View>

        </View>
    );
}