import React, { useEffect, useState } from 'react';
import NonAuthLayout from '../../components/Layout';
import { Text } from 'react-native';
import Section from '../../components/Section';
import customStyles from './styles';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button';
import DropdownSearch from '../../components/Form/DropdownSearch';
import { request } from '../../utils/request';

const initPayload = { name: "", phoneNumber: "", nationality: "" };
const initErrors = { name: null, phoneNumber: null, nationality: null };

const ProfileCreate = (props: any) => {
    const styles = customStyles();

    const [payload, setPayload]: any = useState(initPayload)
    const [errors, setErrors]: any = useState(initErrors)

    const [itemNationality, setItemNationality]: any = useState([]);

    useEffect(() => {
        getCountries()
    }, [])

    const getCountries = async () => {
        const res = await request("https://corona.lmao.ninja/v2/countries?yesterday=&sort=", null);

        let _arr: any = [];

        res?.map((val: any, key: any) => {
            _arr.push({
                label: val?.country,
                value: val?.country
            })
        })

        setItemNationality(_arr)
    }

    const onChange = ((field: any, value: any) => {
        payload[field] = value

        setPayload({
            ...payload,
        })
    })

    const onSubmit = () => {
        if (validate() === true) {
            let _payload = payload
            setPayload(initPayload)
            setErrors(initErrors)
            props.navigation.navigate('ProfileDetail', { data: _payload })
        }
    }

    const validate = () => {
        let jsonErrors: any = {}
        let hasError = false

        if (!payload?.name || payload?.name === "") {
            hasError = true
            jsonErrors["name"] = "Name should be filled"
        }
        if (!payload?.phoneNumber || payload?.phoneNumber === "") {
            hasError = true
            jsonErrors["phoneNumber"] = "Phone number should be filled"
        }
        if (!payload?.nationality || payload?.nationality === "") {
            hasError = true
            jsonErrors["nationality"] = "Nationality should be filled"
        }

        setErrors(jsonErrors)

        if (hasError === true) {
            return false
        } else {
            return true
        }
    }

    return (
        <NonAuthLayout>
            <Section style={styles.sectionHeader}>
                <Text style={styles.title}>Create Profile</Text>
            </Section>
            <Section style={styles.sectionText}>
                <Text style={styles.text}>Please fill in the form below</Text>
            </Section>

            <Section style={styles.sectionForm}>
                <TextInput
                    autoCapitalize={'words'}
                    placeholder={"Input Name"}
                    label={"Name"}
                    onChange={(e: any) => onChange('name', e)}
                    required={true}
                    value={payload?.name}
                    error={errors?.name}
                />
            </Section>

            <Section style={styles.sectionForm}>
                <TextInput
                    isDecimal={true}
                    placeholder={"Input Phone Number"}
                    label={"Phone Number"}
                    onChange={(e: any) => onChange('phoneNumber', e)}
                    required={true}
                    value={payload?.phoneNumber}
                    error={errors?.phoneNumber}
                />
            </Section>

            <Section style={styles.sectionForm}>
                <DropdownSearch
                    placeholder={"Select Nationality"}
                    label={"Nationality"}
                    required={true}
                    value={payload?.nationality}
                    error={errors?.nationality}
                    onChange={(e: any) => onChange('nationality', e)}
                    items={itemNationality}
                />
            </Section>

            <Section style={styles.sectionForm}>
                <Button title={"Create"} onPress={onSubmit} />
            </Section>
        </NonAuthLayout>
    );
}

export default (ProfileCreate);