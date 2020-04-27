import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


import styles from './styles';

import logoPicpay from '../../assets/picpay-logo.png';

export default function Details(){
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={logoPicpay} style={styles.image}/>
                <View style={styles.box}>
                    <Text style={styles.textbox}>@{incident.picpay}</Text>
                </View>
                    <Text style={styles.texthelp1}>Obrigado por doar! Você está ajudando muito!</Text>
                    <Text style={styles.texthelp2}>O picpay acima recebe pela {incident.nome}!</Text>
                    
                    <TouchableOpacity style={styles.button} onPress={navigateBack}>
                    <Feather name="arrow-left" size={25} style={{marginTop: 90, marginLeft: 80}} />
                    </TouchableOpacity>
            </View>
        </View>
            
    );
   
}