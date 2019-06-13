import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import styles from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArrowBackComponent from '../others/ArrowBackComponent';
import TextInputComponent from '../others/TextInputComponent';
import ButtonComponent from '../others/ButtonComponent';
import {kabhubData, experienceData} from '../../backend/data/HelpScreenData';



export default class HelpScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={styles.marginLeft10}>
          <ArrowBackComponent onPress={() => navigation.toggleDrawer()} />
        </View>
      ),
    }
  };

  render() {
    return (
      <ScrollView style={styles.scrollviewContainer} contentContainerStyle={styles.scrollviewContainer}>

        <Text style={[styles.bigTextBold, styles.marginLeft10, styles.marginBottom20]}>FAQs</Text>

        <View style={styles.container}>
          <FlatList
            data={kabhubData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) =>

              <View style={[styles.padding10, styles.borderBottom]}>
                <Text style={[styles.normalTextBold, styles.marginBottom10]}>
                  {item.key}. {item.data.question}
                </Text>
                <Text style={[styles.smallText, styles.marginBottom10]}>
                  {item.data.answer}
                </Text>
              </View>
            }
          />
        </View>

        <Text style={[styles.bigTextBold, styles.margin10, styles.marginBottom20]}>ABOUT US</Text>

        <View style={styles.container}>
          <FlatList
            data={experienceData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) =>

              <View style={[styles.padding10, styles.borderBottom]}>
                <Text style={[styles.normalTextBold, styles.marginBottom10]}>
                  {item.key}. {item.data.question}
                </Text>
                <Text style={[styles.smallText, styles.marginBottom10]}>
                  {item.data.answer}
                </Text>
              </View>
            }
          />
        </View>

        <View style={styles.marginBottom20}></View>

      </ScrollView>
    );
  }
}
