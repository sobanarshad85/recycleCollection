import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native';


export default class CardImageComponent extends Component<Props> {
  //TODO getdata function in another file and import to this file to fetch data according to the category

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <FlatList
        data={this.props.data}
        extraData={this.props.extraData}
        onRefresh={this.props.refreshFunction}
        refreshing={this.props.loader}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <TouchableOpacity style={styles.listCardContainer} onPress={() => navigate('ListingDescription', {title: item.title, image: item.imageUrl, dateTime: item.dateTimePosted, description: item.description})}>
            {this.props.isDirectory ?
              <View style={styles.directoryListings}>
                <View style={styles.row1}>
                  <View style={[styles.imageContainer, {borderRadius: 10}]}>
                    <Image
                      style={{width: '100%', height: 100, borderRadius: 10}}
                      source={item.imageUrl}
                    />
                  </View>
                </View>
                <View style={styles.row2}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={[styles.titleContainer, {flex: 0.85}]}>
                      <Text style={{fontSize: 20, color: 'black'}}>{item.title}</Text>
                    </View>
                  </View>
                  <Text style={styles.footerText}>{item.pickup_location}</Text>
                </View>
              </View>
              :
              <View style={styles.mainListings}>
                <View style={styles.header}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    style={{width: Dimensions.get('window').width - 22, height: 200}}
                    source={item.imageUrl}
                  />
                </View>
                <View style={styles.footerContainer}>
                  <View style={styles.userContainer}>
                    <Text style={styles.footerText}>{item.userName}</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    {item.price == 0 ?
                      <Text style={styles.footerText}>Free</Text>
                      :
                      <Text style={styles.footerText}>{item.price}</Text>
                    }
                  </View>
                  <View style={styles.distanceContainer}>
                    <Text style={styles.footerText}>{item.socialMediaPlatform}</Text>
                  </View>
                </View>
              </View>
            }
          </TouchableOpacity>
        }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  directoryListings:{
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  row1:{
    flex: 0.3,
  },
  row2:{
    flex: 0.7,
    marginLeft: 5,
  },
  mainListings:{
    flex: 1,
    flexDirection: 'column',
  },
  listCardContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  titleContainer:{
    flex: 0.9,
  },
  shareIconContainer:{
    flex: 0.1,
  },
  imageContainer: {
    flex: 0.5,
    backgroundColor: 'grey',
  },
  footerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: '#94bcfc',
  },
  titleText: {
    fontSize: 25,
  },
  footerText: {
    fontSize: 15,
  },
});
