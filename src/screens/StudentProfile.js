import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import CircleConquist from '../components/CircleConquist';
import MenuTeacher from '../components/MenuTeacher';


const StudentProfile = ({ navigation }) => {

    return (
        <View style={styles.div_main}>
            <View style={styles.div_perfil}>
                <Image source={require('../assets/ImgProfile.png')}></Image>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>@Nickname</Text>
                    <Text style={{ fontWeight: 'bold' }}>Nome Sobrenome</Text>
                </View>
                <Image source={require('../assets/Icone.png')} style={styles.img_icone} resizeMode="contain"></Image>
            </View>

            <View style={styles.div_conquistas}>
                <View style={styles.view_txt_conquista}>
                    <Text style={{ fontSize: 23 }}>Conquista</Text>
                </View>
                <ScrollView style={styles.scrView_carrouselConqs} horizontal={true}>
                    <CircleConquist img={require('../assets/exp_fracao.png')} txt={"Explorador de frações"}></CircleConquist>
                    <CircleConquist img={require('../assets/camp_deno.png')} txt={"Campeão do Denominador"}></CircleConquist>
                    <CircleConquist img={require('../assets/estrela_frac.png')} txt={"Estrela fracionária"}></CircleConquist>
                </ScrollView>
            </View>

            <View style={styles.div_estatisticas}>

            </View>
            <MenuTeacher></MenuTeacher>
        </View>
    )
}

const styles = StyleSheet.create({
    div_main: {
        display: "flex",
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor:'white'
    },

    div_perfil: {
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        height: '20%',
        width: '100%',
        paddingLeft: 20,
        gap: 10
    },

    img_icone: {
        width: '40%',
        height: '40%'
    },



    div_conquistas: {
        width: '100%',
        height: '35%',
    },

    div_estatisticas: {
        width: '100%',
        height: '35%',
        backgroundColor: 'lightgreen'
    },

    view_txt_conquista: {
        alignItems: 'center',
        width: '100%',
        height: '15%',
    },

    scrView_carrouselConqs: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
    },


})


export default StudentProfile;