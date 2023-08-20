import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Row from "../../Row"
import customStyles from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';
import { DARK_COLOR, GREY_COLOR } from "../../../constants";

const DropdownSearch = ({
    value,
    onChange,
    items,
    error = null, errors = null, hint = null, placeholder = null, label = null,
    required = false }: any) => {
    const styles = customStyles();
    const [open, setOpen] = useState(false);
    const [viewValue, setViewValue] = useState(value);

    // const [items, setItems]: any = useState([
    //     { label: 'Spain', value: 'spain' },
    //     { label: 'Italy', value: 'italy' },
    //     { label: 'Finland', value: 'finland' }
    // ]);

    useEffect(() => {
        onChange(viewValue)
    }, [viewValue])

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

            <DropDownPicker
                style={{
                    borderRadius: 0,
                    borderColor: GREY_COLOR
                }}
                placeholderStyle={{
                    color: "#aaa"
                }}
                searchTextInputStyle={{
                    borderRadius: 0,
                    borderColor: GREY_COLOR
                }}
                textStyle={{
                    color: DARK_COLOR
                }}
                searchContainerStyle={{
                    borderBottomColor: GREY_COLOR
                }}
                listMode={"MODAL"}
                multiple={false}
                open={open}
                value={viewValue}
                items={items}
                setOpen={setOpen}
                setValue={setViewValue}

                placeholder={placeholder}
                searchPlaceholder={"Search ..."}
                searchable={true}
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

export default DropdownSearch