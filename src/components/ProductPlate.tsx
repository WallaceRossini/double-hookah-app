import React from 'react';

import { MotiImage } from 'moti';
import { StyleSheet } from 'react-native';

interface Props {
  image: string
}

export function ProductPlate({ image }: Props) {
  return (
    <MotiImage
      style={styles.plate}
      source={{ uri: image }}
      resizeMode="contain"

      from={{
        rotate: '100deg',
        opacity: 0,
      }}

      animate={{
        rotate: '0deg',
        opacity: 1,
      }}

      transition={{
        type: 'timing',
        duration: 2000,
      }}
    />
  );
}

const styles = StyleSheet.create({
  plate: {
    flex: 1,
    right: -70
  },
});