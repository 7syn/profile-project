import { ToastAndroid } from 'react-native';

const toast = async ({ title }: any) => {
    ToastAndroid.show(title, ToastAndroid.SHORT);
}

export default toast