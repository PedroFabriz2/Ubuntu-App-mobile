import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';

import logoTree from '../../assets/tree_app.png';
import logoUbuntu from '../../assets/logoubuntu.png';
import logoPicpay from '../../assets/picpay-logo.png';

export default function Details(){
    const navigation = useNavigation();
    
    const route = useRoute();
    const incident = route.params.incident;
   // const { width } = Dimensions.get('window');
   const message = `Olá ${incident.nome}, achei vocês pelo TreeApp da Ubuntu e gostaria de ajudar no caso ${incident.title}!`

    function navigateBack(){
        navigation.goBack();
    }

    function navigateToPicpay(incident){
        navigation.navigate('picpay', { incident });
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Quero ajudar: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    function goToInsta(){
        Linking.openURL(`https://www.instagram.com/${incident.insta}/`);
    }

    return (
        <ScrollView style={styles.container}
        contentInset={{bottom: 50}}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Image source={logoTree} />
                
            </View>
            <View>
                <TouchableOpacity style={styles.subHeader} onPress={navigateBack}>
                    <Feather name="arrow-left" size={25} />
                    <Text style={styles.arrowLeft}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.incidentInfo}>
                <Text style={styles.incidentUp}>ONG:</Text>
                <Text style={styles.incidentDown}>{incident.nome} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentUp}>Título:</Text>    
                <Text style={styles.incidentDown}>{incident.title}</Text> 
                

                <Text style={styles.incidentUp}>Descrição:</Text>
                <Text style={styles.incidentDown}>{incident.description}</Text> 

                <Text style={styles.incidentUp}>Como ajudar:</Text>
                <Text style={styles.incidentDown}>{incident.value}</Text>            
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.contactText}>Se você gostaria de ajudar a ONG, escolha a forma de entrar em contato com ela!</Text>
                <Text style={styles.contactTextDois}>Você consegue ajudar independente do valor. Entrar em contato já é um grande passo!</Text>
                <View style={styles.all1}>
                        <TouchableOpacity style={styles.button} onPress={goToInsta}>
                        <Feather name="instagram" size={35} style={{color: "#ffffff"}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={sendMail}>
                        <Feather name="mail" size={35} style={{color: "#ffffff"}}/>
                        </TouchableOpacity>   
                </View>
                <View style={styles.all2}>    
                        <TouchableOpacity style={styles.button} onPress={sendWhatsapp}>
                        <Ionicons name="logo-whatsapp" size={35} color="white" />
                        </TouchableOpacity>                                                                          
                        <TouchableOpacity 
                         style={styles.buttonPicpay}
                         onPress={() => navigateToPicpay(incident)}>
                            <Image source={logoPicpay} style={styles.picpay} />
                        </TouchableOpacity>                                                                              
                </View>
            </View>
            <Image source={logoUbuntu} style={styles.imageUbuntu}/>
        </ScrollView>
    );
}