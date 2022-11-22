import React, { useState } from 'react';
import { outUser, deleteUser } from '../http/userAPI';
import TableUser from './TableUser';
import Loader from './UI/loader/Loader';

function BlockUser() {

    const [itemsUser, setItemsUser] = useState([]);
    const [load, setLoad] = useState(true);

    React.useEffect(() => {
        setLoad(true);
        getUser();
        setLoad(false);
    }, []);

    const getUser = () => {
        outUser()
            .then((json) => {
                setItemsUser(json);
            });
    }

    const removeUser = async (id) => {
        try {
            let data = await deleteUser(id);

            console.log({ data })

        } catch (e) {
            alert(e.response.data.message);
        }

        getUser();
    }



    return (

        <div className="city">

            {
                load
                    ? <Loader />
                    : <TableUser user={itemsUser} removeUser={removeUser} />
            }
        </div>
    );
}

export default BlockUser;
