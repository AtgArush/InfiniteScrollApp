import React from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';

export default function DrawerComponent(props) {
  const navigation = useNavigation();
  //   const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image source={imagePath.profile} size={50} />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Arush Sharma</Title>
                <Caption style={styles.caption}>atg041299@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{height: 30, width: 30}}
                  source={imagePath.home}
                />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate(navigationStrings.HOME);
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{height: 30, width: 30}}
                  source={imagePath.search}
                />
              )}
              label="Search"
              onPress={() => {
                navigation.navigate(navigationStrings.SEARCH_PAGE);
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{height: 30, width: 30}}
                  source={imagePath.mailIcon}
                />
              )}
              label="Notification"
              onPress={() => {
                navigation.navigate(navigationStrings.NOTIFICATION);
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{height: 30, width: 30}}
                  source={imagePath.charts}
                />
              )}
              label="Charts"
              onPress={() => {
                navigation.navigate(navigationStrings.CHART);
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <View style={styles.signOutButtonView}>
        <Button title={'Sign Out'}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  signOutButtonView: {
    bottom: 0,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
