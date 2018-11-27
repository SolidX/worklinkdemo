import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  GestureResponderEvent
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import {
  DocumentPicker,
  DocumentPickerUtil
} from 'react-native-document-picker';

export default class AddImage extends React.Component {
  state = { avatarSource: null, documentSource: null };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: { skipBackup: true }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  selectDocumentTapped(event: GestureResponderEvent) {
    const { pageX, pageY } = event.nativeEvent;
    DocumentPicker.show(
      {
        top: pageY,
        left: pageX,
        filetype: [DocumentPickerUtil.allFiles()]
      },
      (error, url) => {
        alert(url);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[
              styles.avatar,
              styles.avatarContainer,
              { marginBottom: 20 }
            ]}
          >
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={e => this.selectDocumentTapped(e)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Document</Text>
          </View>
        </TouchableOpacity>

        {this.state.documentSource && (
          <Text
            style={{
              margin: 8,
              textAlign: 'center'
            }}
          >
            {this.state.documentSource}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
