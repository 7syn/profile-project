import React from "react"
import { Text, TextInput as TextInputRN, View } from "react-native"
import Row from "../../Row"
import customStyles from "./styles";

const TextInput = ({ value, error = null, errors = null, hint = null, placeholder = null, label = null, onChange, required = false, isScured = false, autoCapitalize = 'none', isPhone = false, isDecimal = false, isEmail = false }: any) => {
    const styles = customStyles();

    return <React.Fragment>
        <View>
            <View style={styles.label}>
                <Row>
                    <Text>
                        {label}
                    </Text>
                    {
                        required === true ? <Text style={styles.mandatory}> * </Text> : null
                    }
                </Row>
            </View>

            <TextInputRN
                autoCapitalize={autoCapitalize}
                secureTextEntry={isScured}
                placeholder={placeholder}
                aria-label={label}
                aria-describedby={label}
                value={value}
                onChangeText={onChange}
                style={styles.textInput}
                keyboardType={isPhone ? 'phone-pad' : isDecimal ? 'decimal-pad' : isEmail ? 'email-address' : 'default'}
            />
            {
                hint ? <Text>{hint}</Text> : null
            }
            {
                error ? <Text style={styles.textError}>{error}</Text> : null
            }
            {
                errors?.map((val: any, key: any) => {
                    return <Text key={key} style={styles.textError}>{val}</Text>
                })
            }
        </View>
    </React.Fragment >
}

export default TextInput