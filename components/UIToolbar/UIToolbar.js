import React from 'react';
import { Image } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import styles from './UIToolbar.scss';

class UIToolbar extends React.Component {
    render() {
        return (
            <Toolbar
                leftElement={
                    <Image style={{width: 85, height: 30, resizeMode: 'contain'}}  source={require('./numixIcon.png')} />
                }
                // centerElement="MLBPARK"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
                rightElement={{
                    menu: {
                        icon: "create",
                        labels: ["item 1", "item 2"]
                    }
                }}
                onRightElementPress={ (label) => { console.log(label) }}
            />
        );
    }
}

export default UIToolbar;