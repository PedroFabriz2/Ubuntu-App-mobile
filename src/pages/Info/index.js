import React from 'react';
import { View, Linking, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Info/styles';
import { Feather } from '@expo/vector-icons';

import middle from '../../assets/middle.png';
import top from '../../assets/top.png';
import logoubuntu from '../../assets/logoubuntu.png';
import { ScrollView } from 'react-native-gesture-handler';

export default function Info(){

    function goToInsta(){
        Linking.openURL(`https://www.instagram.com/fabriz_pedro/`);
    }

    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={top} style={styles.image} />
            </View>
            <View>
                <TouchableOpacity style={styles.subHeader} onPress={navigateBack}>
                    <Feather name="arrow-left" size={25} />
                    <Text style={styles.arrowLeft}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.middle}>
                <View style={styles.middleContainer}>
                    <Image source={middle} style={styles.imagemiddle}/>
                    <Text style={styles.textmiddle}>
                        TreeApp é idealizado e produzido pela ONG Ubuntu com o objetivo de dar visibilidade à iniciativas do 3º setor do Brasil.
                    </Text>

                    <View style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 10}}>
                        <Feather name="award" size={35} />
                    </View>
                    

                    
                </View>
            </View>
            <View style={styles.end}>
                <Image source={logoubuntu}/>
                <TouchableOpacity
                    onPress={goToInsta}
                >
                    <Text style={{fontSize: 10}}>App desenvolvido por <Text style={{textDecorationLine: "underline"}}>FabrizPedro</Text></Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    )
}