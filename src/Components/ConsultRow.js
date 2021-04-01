import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import imagePath from '../constants/imagePath';
import en from '../constants/lang/en';
// import colors from '../styles/colors';
import Button from './Button';

const windowWidth = Dimensions.get('window').width;

export default function ConsultRow({item = {}, key, colors, theme}) {
  return (
    <View
      style={{
        marginBottom: 20,
        backgroundColor: colors.themeCard,
        marginHorizontal: 15,
        borderRadius: 15
      }}
      key={key}>
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}>
          <Image
            source={
              item.profileImg[0].original
                ? {uri: item.profileImg[0].original}
                : {
                    uri:
                      'https://cdn3.iconfinder.com/data/icons/online-states/150/Photos-512.png',
                  }
            }
            style={{height: 100, width: 100, margin: 25, borderRadius: 15}}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{fontWeight: 'bold', color: colors.apiTheme, fontSize: 18}}>
            {item.fullName}{' '}
            <Text
              style={{
                fontWeight: 'normal',
                fontSize: 13,
                color: colors.textGrey,
              }}>
              {' '}
              {item.gender}{' '}
            </Text>
          </Text>
          <Text
            style={{
              fontWeight: 'normal',
              color: colors.apiTheme,
              fontSize: 14,
            }}>
            {item.dob.date}/{item.dob.month}/{item.dob.year}
          </Text>
          <View style={{width: windowWidth / 2, height: 50}}>
            <Text
              numberOfLines={2}
              style={{marginTop: 5, color: colors.textGrey}}>
              {item.bio}
            </Text>
          </View>
        </View>
        <View></View>
      </View>
      <View></View>
      <View
        style={{
          paddingLeft: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: colors.apiTheme}}>
            {item.height == 0 ? 'Not Available |' : `${item.height} cms |`}
            <Text
              style={{
                color: colors.textGrey,
                borderLeftColor: colors.textGrey,
                borderLeftWidth: 0.5,
              }}>
              {' '}
              {item.addressDetails.city}
            </Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.textGrey,
              marginRight: 20,
            }}>
            {' '}
            Looking for {''}
            {item.lookingFor.charAt(0).toUpperCase() +
              item.lookingFor.toLowerCase().slice(1)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 25,
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <Image source = {imagePath.mailIcon} style = {{width: 40, height: 40, marginRight: 5,  tintColor: colors.apiTheme}} /> 
        <Text numberOfLines={1} style={{marginTop: -4, color: colors.themeText, fontSize: 15}}>
          {item.email.length > 20
            ? `${item.email.substring(0, 15)}...`
            : item.email}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopColor: colors.textGrey,
          borderTopWidth: 0.5,
          paddingVertical: 7,
          paddingHorizontal: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
          source = {imagePath.heartIcon}
          style = {{width: 32, height: 32, resizeMode: 'contain',  tintColor: colors.apiTheme, marginLeft: 5, marginTop: -2}}
          />
          <Image source = {imagePath.messageIcon} style = {{width: 32,
            height: 32, marginLeft: 10,
            resizeMode: 'contain', tintColor: colors.apiTheme}} />
        </View>
        <View>
          <Button
            label={en.GET_DETAILS}
            styleText={{fontWeight: 'bold', color: colors.themeCard}}
            styleButton={{
              backgroundColor: colors.apiTheme,
              paddingHorizontal: 25,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 2
            }}
          />
        </View>
      </View>
    </View>
  );
}
