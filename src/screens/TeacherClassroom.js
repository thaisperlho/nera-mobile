import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BottomMenuTeacher from '../components/MenuTeacher';
import ButtonBlue from '../components/ButtonBlue';
import IconNera from '../components/IconNera';
import profileIcon from '../assets/profileIcon.png';

const TeacherClassroom = () => {
    const mockStudents = [
        { name: 'Amanda    ', score: 9, imageUrl: profileIcon},
        { name: 'Kedsson   ', score: 7, imageUrl: profileIcon},
        { name: 'Larissa   ', score: 8, imageUrl: profileIcon},
        { name: 'Thais     ', score: 9, imageUrl: profileIcon},
        { name: 'Vinicius  ', score: 2, imageUrl: profileIcon},
        { name: 'Mario     ', score: 6, imageUrl: profileIcon},
    ];
    const handleCheckPerformanceOfEachStudent = () => {
        
    };

    // Ordenando os alunos pelo score, do maior para o menor
    mockStudents.sort((a, b) => b.score - a.score);

    return (
        <View style={styles.page}>
            <View style={styles.topIcon}>
                <IconNera />
            </View>
            {/* <View>
                <Text>6 ano</Text>
            </View> */}
            <View style={styles.containerStudentsRanking}>
                {mockStudents.map((student, index) => (
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
                    style={styles.buttonCreateClassCustomization}
                />
            </View>
            <BottomMenuTeacher />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F6F7FF',
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '80%',
        height: '50%',
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: 600,
        left: 35,
        right:5,
        width: '80%',
        height: '10%',
        borderRadius: 30,
        transform: [{ translateX: 10 }],
        shadowColor: '#000',
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
        padding: 5,
        marginBottom: 5,
    },
    gold: {
        backgroundColor: '#FFD700',
    },
    rank: {
        fontSize: 8,
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
        fontWeight: '600',
        marginRight: 'auto',
    },
    score: {
        fontSize: 18,
    },
});

export default TeacherClassroom;