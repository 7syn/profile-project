import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import NonAuthLayout from '../../components/Layout';
import { Text } from 'react-native';
import Section from '../../components/Section';
import customStyles from './styles';
import Row from '../../components/Row';
import Button from '../../components/Button';
import { GREY_COLOR } from '../../constants';

const ProfileDetail = ({ navigation, route }: any) => {
    const styles = customStyles();

    const [data, setData]: any = useState(null)

    useEffect(() => {
        setData(route?.params?.data)
    }, [])

    return (
        <NonAuthLayout>
            <Section style={styles.sectionHeader}>
                <Text style={styles.title}>Detail Profile</Text>
            </Section>
            <Section style={styles.sectionText}>
                <Text style={styles.text}>Information provided from previous page</Text>
            </Section>

            <View style={{ marginTop: 20 }}>
                <Section style={styles.sectionText}>
                    <Row>
                        <Text>Name: </Text>
                        <Text style={{ fontWeight: "bold" }}>{data?.name}</Text>
                    </Row>
                </Section>
                <Section style={styles.sectionText}>
                    <Row>
                        <Text>Phone Number: </Text>
                        <Text style={{ fontWeight: "bold" }}>{data?.phoneNumber}</Text>
                    </Row>
                </Section>
                <Section style={styles.sectionText}>
                    <Row>
                        <Text>Nationality: </Text>
                        <Text style={{ fontWeight: "bold" }}>{data?.nationality}</Text>
                    </Row>
                </Section>
            </View>

            <Section style={styles.sectionButton}>
                <Button title={"Back"} onPress={() => navigation.goBack()} backgroundColor={GREY_COLOR} />
            </Section>
        </NonAuthLayout>
    );
}

export default (ProfileDetail);