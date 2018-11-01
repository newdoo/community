import React from 'react';
import { WebView } from 'react-native';

import styles from './UIWebView.scss';

class UIWebView extends React.Component {
    render() {
        return (
            <WebView
                source={{uri: 'http://portfolio.numixent.com/'}}
                style={{marginTop: 0}}
            />
        );
    }
}

export default UIWebView;