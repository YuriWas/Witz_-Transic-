import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

const { height } = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    boxTop: {
        height: height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    boxMid: {
        width: '100%',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30
    },
    logo: {
        width: 400,
        height: 300,
        transform: [{ translateY: 20 }] 
    },
    text: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#000',
        marginTop: 5,
        transform: [{ translateY: -50 }]
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20,
        fontSize: 13
    },
    boxInput: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: themas.colors.ligthGray,
        borderColor: themas.colors.ligthGray,
    },
    input: {
        flex: 1,
        height: '100%',
        paddingLeft: 5
    },
    forgotPasswordContainer: {
        alignItems: 'flex-start',
        marginTop: 10,
        paddingLeft: 209
    },
    textForgotPassword: {
        color: themas.colors.primary,
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        elevation: 5
    },
    textButton: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: 'bold'
    },
    boxBottomText: {
        flexDirection: 'row',
        marginTop: 35,
        alignItems: 'center'
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray,
    },
    textCreateNow: {
        fontSize: 16,
        color: themas.colors.primary,
        fontWeight: 'bold'
    }
});