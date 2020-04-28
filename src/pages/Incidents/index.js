import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import logoTree from '../../assets/tree_app.png';
import logoUbuntu from '../../assets/logoubuntu.png';

import styles from './styles';

export default function Incidents(){
    const navigation = useNavigation();
    const [ incidents, setIncidents ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);


    function navigateToDetail(incident){
        navigation.navigate('Details', { incident });
    }

    function goToInfo(){
        navigation.navigate('Info');
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }
        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);


        const response = await api.get('incidents', {
            params: { page },//para pegar todas as paginas de incidents
        });

        setIncidents([...incidents, ...response.data]);//isso permite carregar pagina 1 e as outras ao msm tempo
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }
    async function loadIncidentsSearch() {
        if (loading) {
            return;
        }
        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);


        const response = await api.get('incidents', {
            params: { page },//para pegar todas as paginas de incidents
        });

        setIncidents([...incidents, ...response.data.name]);//isso permite carregar pagina 1 e as outras ao msm tempo
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(()=>{
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoTree} />
                <View style={styles.saibamais}>
                    <Image source={logoUbuntu} />
                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.textbutton} onPress={goToInfo}>
                                Saiba mais
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.countText}>{total} casos cadastrados</Text>
            <View style={styles.search}>
                <TextInput 
                    placeholder="Buscar por ONG"
                    autoCorrect={false}

                />
            </View>
            <FlatList
                data={incidents}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident.id)}
                //showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident })=>(
                    <View style={styles.incident}>
                    <Text style={styles.incidentUp}>ONG:</Text>
                    <Text style={styles.incidentDown}>{incident.nome}</Text>

                    <Text style={styles.incidentUp}>Título:</Text>
                    <Text style={styles.incidentDown}>{incident.title}</Text>

                    <Text style={styles.incidentUp}>Como ajudar:</Text>
                    <Text style={styles.incidentDown}>{incident.value}</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => navigateToDetail(incident)}
                    >
                        <Text style={styles.detailsButtonText}>Saber mais</Text>
                        <Feather name='info' size={17} color="#688567" />

                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}