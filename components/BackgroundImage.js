import React from 'react';
import {
  AppRegistry,
  Image,
} from 'react-native';

const remote = 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg';

export default class BackgroundImage extends React.Component {
  render() {
    const resizeMode = 'center';

    return (
      <Image
        style={{
          flex: 1,
          resizeMode,
        }}
        source={{ uri: remote }}
      />
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);