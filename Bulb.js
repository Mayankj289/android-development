
import React, { useState } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

const Bulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);

  const toggleBulb = () => {
    setIsBulbOn(!isBulbOn);
  };

  const bulbImageSource = isBulbOn
    ? 'https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image-thumb.png'
    :'https://www.transparentpng.com/thumb/light-bulb/Mouu2P-light-bulb-free-cut-out.png';

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: bulbImageSource }} />
      <Button
        title={isBulbOn ? 'Turn Off' : 'Turn On'}
        onPress={toggleBulb}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Bulb;