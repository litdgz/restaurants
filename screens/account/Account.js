import React, { useState, useEffect } from 'react';
import { StyleSheet} from 'react-native';

import UserLogged from './UserLogged';
import UserGuest from './UserGuest';
import { getCurrentUser, isUserLogged } from '../../utils/actions';
import Loading from '../../components/Loading';

const Account = () => {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        setLogin(isUserLogged)
        login ? setLogin(true) : setLogin(false)
    }, [])

    if (login == null) {
        return <Loading isVisible={true} text="Cargando.."/>
    }
    return login ? <UserLogged /> : <UserGuest />
}

export default Account;

const styles = StyleSheet.create({});
