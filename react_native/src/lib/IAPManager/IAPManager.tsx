/* eslint-disable react-native/no-inline-styles */
import {Button, Platform, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import RNIap, {Product, Subscription} from 'react-native-iap';

const items = Platform.select({
  ios: ['nc_vip_199_perma'],
  android: [''],
});

const itemSubs = Platform.select({
  ios: ['premium_699_perma'],
  android: [''],
});

type Props = {};

const IAPManager = (props: Props) => {
  const [purchased, setPurchased] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [subs, setSubs] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      if (!items) {
        console.warn(
          `Error! - IAP items were expected to be an array 
          of strings (skus) but they turned out to be undefined !`,
        );
        return;
      }
      try {
        const able_to_pay = await RNIap.initConnection();
        console.log('connected to store');
        if (!able_to_pay) {
          throw new Error('user cannot pay !');
        }
        /* console.log('fetching items: ', items);
        const _products = await RNIap.getProducts(items);
        console.log('???');
        console.log('fetched products.');
        console.log(_products);
        setProducts(_products); */
      } catch (e) {
        console.log(e);
      }
    };
    fetchItems();
    return () => {
      RNIap.endConnection();
    };
  }, []);

  const getItems = async (): Promise<void> => {
    try {
      const _products = await RNIap.getProducts(items!);
      // const products = await RNIap.getSubscriptions(itemSkus);
      console.log('Products', products);
      setProducts(_products);
    } catch (err) {
      console.warn(err);
    }
  };

  const getSubscriptions = async (): Promise<void> => {
    console.log('AAAARGH');
    try {
      console.log('trying to get subs');
      const _subs = await RNIap.getSubscriptions(itemSubs!);
      console.log('here you go, subs');
      console.log('Subs', _subs);
      setSubs(_subs);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text>IAPManager</Text>
      <View style={{marginVertical: 30}} />
      <Button title="Items" onPress={() => getItems()} />
      <View style={{marginVertical: 30}} />
      <Button title="Subs" onPress={() => getSubscriptions()} />
    </View>
  );
};

/* 
  This is a temporary IAP item metadata picture
  Welcome to Keibo VIP membership
  For Tier 2 price (1.99 euros), you get access to
  ad-free privilege and exclusive features!
*/

/* 
  This is a temporary IAP item metadata picture
  By subscribing, users get ad-free privilege
  and exclusive features.
*/

export default IAPManager;
