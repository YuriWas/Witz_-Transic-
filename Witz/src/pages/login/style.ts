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
        height: height / 4,
        width: '100%',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinha botão e rodapé no topo do boxBottom
        paddingTop: 20
    },
    logo: {
        width: 300,
        height: 300,
        transform: [{ translateY: 20 }] 
    },
    text: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#000',
        marginTop: 5,
        transform: [{ translateY: -50 }] // Mantido seu ajuste de subir o texto principal
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
    textBottom: {
       fontSize: 16,
       color: themas.colors.gray,
       marginTop: 35, // Espaço base em relação ao botão
       transform: [{ translateY: -15 }] // Sobe o texto em direção ao botão
    },
});