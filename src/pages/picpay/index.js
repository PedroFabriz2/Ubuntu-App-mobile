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
    const route = useRoute();
    const incident = route.params.incident;

    
    return (
        <View>
            <Text>Oi</Text>
        </View>
    );
   
}