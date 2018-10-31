import React from 'react';
import { Toolbar } from 'react-native-material-ui';

import styles from './UIToolbar.scss';

class UIToolbar extends React.Component {
    render() {
        return (
            <Toolbar
                style={{titleText: styles["my-dashed-class"]}}
                leftElement="menu"
                centerElement="Searchable"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
                rightElement={{
                    menu: {
                        icon: "more-vert",
                        labels: ["item 1", "item 2"]
                    }
                }}
                onRightElementPress={ (label) => { console.log(label) }}
            />
        );
    }
}

export default UIToolbar;