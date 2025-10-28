import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f5f5f5',
    },

    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:40,

    },
    buttonContainer:{
        marginVertical:10,
    },

    ButtonContainer: {
        marginVertical: 10,
    },

    input:{
        borderWidth:1,
        borderColor:"#ccc",
        padding:12,
        borderRadius:8,
        marginBottom:12,
    },

    ButtonContainer1:{
        marginTop:20,
    },   

    reviewBox: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
        marginVertical: 12,
    },

    reviewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },

    reviewLabel: {
        fontWeight: '600',
        color: '#333',
        marginRight: 8,
    },

    reviewValue: {
        color: '#555',
        flex: 1,
        textAlign: 'right',
    },
})