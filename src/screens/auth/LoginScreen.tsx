import { View, Text, Button } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/ButtonComponent';
import { globalStyles } from '../../styles/globalStyles';
import TextComponent from '../../components/TextComponent';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container, {padding: 16}]}>
      <Text>LoginScreen</Text>
      {/* <Button 
        title='login'
        onPress={async () => 
          await AsyncStorage.setItem('assetToken', 'fafafa')
        }
      
      /> */}
      <ButtonComponent
        type='link'
        text='LOGIN' 
        onPress={() => console.log('Login')}
        icon={<View>
          <TextComponent text='ICON'/>
        </View>}
      />
    </View>
  );
};

export default LoginScreen;