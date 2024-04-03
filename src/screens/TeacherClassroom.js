import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BottomMenuTeacher from '../components/MenuTeacher';
import ButtonBlue from '../components/ButtonBlue';
import IconNera from '../components/IconNera';

const TeacherClassroom = () => {
    const students = [
        { name: 'Aluno 1    ', score: 9, imageUrl: require('../assets/profileIcon.png') },
        { name: 'Aluno 2    ', score: 9, imageUrl: require('../assets/profileIcon.png') },
        { name: 'Aluno 3    ', score: 8, imageUrl: require('../assets/profileIcon.png') },
        { name: 'Aluno 4    ', score: 7, imageUrl: require('../assets/profileIcon.png') },
    ];
    const handleCheckPerformanceOfEachStudent = () => {

    };

    // Ordenando os alunos pelo score, do maior para o menor
    students.sort((a, b) => b.score - a.score);

    return (
        <View style={styles.container}>
            <View style={styles.topIcon}>
                <IconNera />
            </View>

            <View style={styles.containerStudentsRanking}>
            {students.map((student, index) => (
                <View key={student.name} style={[styles.podiumContainer, index === 0 && styles.gold]}>
                    <Text style={styles.rank}>{index + 1}</Text>
                    <Image source={student.imageUrl} style={styles.studentImage} />
                    <Text style={styles.studentName}>{student.name}</Text>
                    <Text style={styles.score}>{student.score} pontos</Text>
                </View>
            ))}
            </View>
            <View style={styles.containerCheckPerformanceOfEachStudent}>
                <ButtonBlue onPress={handleCheckPerformanceOfEachStudent}
                 title="Desempenho" 
                 accessibilityLabel="Desempenho"
                />
            </View>
            <BottomMenuTeacher />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    containerStudentsRanking: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        height: '60%',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    containerCheckPerformanceOfEachStudent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        left: '10%',
        width: '80%',
        height: '10%',
        borderRadius: 40,
        shadowColor: '#000',
        //transform: [{ translateX: '50%' }],
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    podiumContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    gold: {
        backgroundColor: '#FFD700',
    },
    rank: {
        fontSize: 10,
        marginRight: 10,
    },
    studentImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    studentName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 'auto',
    },
    score: {
        fontSize: 16,
    },
});

export default TeacherClassroom;