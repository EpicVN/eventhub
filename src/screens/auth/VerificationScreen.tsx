import { ArrowRight } from 'iconsax-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components';
import { appColors } from '../../constants/appColors';
import { fontFamilies } from '../../constants/fontFamilies';
import { globalStyles } from '../../styles/globalStyles';
import authenticationAPI from '../../apis/authApi';
import { LoadingModal } from '../../modals';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerificationScreen = ({navigation, route}: any) => {
  const { code, email, password, username } = route.params;

  const [ currentCode, setCurrentCode ] = useState<string>(code);
  const [ codeValues, setCodeValues ] = useState<string[]>([]);
  const [ newCode, setNewCode ] = useState('');
  const [ limit, setLimit ] = useState(120);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();

  const dispatch = useDispatch();

  useEffect(() => {
    ref1.current.focus();
  }, []);

  useEffect(() => {
    let item = ``;
    codeValues.forEach(val => (item += val));

    setNewCode(item);
  }, [codeValues]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLimit(limit => {
        if (limit <= 0) {
          clearInterval(interval);
          return 0;
        }
        return limit - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [limit]);

  const handleChangeCode = (val: string, index: number) => {
    const data = [...codeValues];
    data[index] = val;

    setCodeValues(data);
  };

  const handleResendVerification = async () => {
    setCodeValues(['', '', '', '']);
    setNewCode("");
    setErrorMessage("");

    const api = `/verification`;
    setIsLoading(true);
    try {
      const res: any = await authenticationAPI.HandleAuthentication(api, {email}, "post");

      setLimit(120);
      setCurrentCode(res.data.code);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(`Can not send verification code ${error}`);
    }
  }

  const handleVerification = async () => {
    if (limit > 0) {
      if (parseInt(newCode) !== parseInt(currentCode)) {
        setErrorMessage("Invalid code !")
      } else {
        setErrorMessage('');

        const api = `/register`;
        const data = {
          email,
          password,
          username: username ?? '',
        };

        try {
          const res: any = await authenticationAPI.HandleAuthentication(
            api,
            data,
            'post',
          );
          dispatch(addAuth(res.data));
          await AsyncStorage.setItem('auth', JSON.stringify(res.data));

          console.log(res);
        } catch (error) {
          setErrorMessage('The user already exists !')
          console.log(`Can not create new user: ${error}`);
        }
      }
    } else {
      setErrorMessage("Your request timed out. Please try again");
    }
  }

  return (
    <ContainerComponent
      isImageBackground
      back
    >
      <SectionComponent>
        <TextComponent text='Verification' size={24} title/>

        <SpaceComponent height={12}/>

        <TextComponent 
          text={`We've send you the verification code on ${email.replace(
            /.{1,5}/,
            (m: any) => '*'.repeat(m.length),
          )}`} 
          size={15}/>
        <SpaceComponent height={26}/>

        <RowComponent justify='space-around'>
          <TextInput
            keyboardType='number-pad'
            ref={ref1}
            maxLength={1}
            value={codeValues[0]}
            onChangeText={val => {
              val.length > 0 && ref2.current.focus();
              handleChangeCode(val, 0);
            }}
            placeholder='-'
            placeholderTextColor={appColors.text}
            style={styles.input}
          />

          <TextInput
            keyboardType='number-pad'
            ref={ref2}
            maxLength={1}
            value={codeValues[1]}
            onChangeText={val => {
              val.length > 0 && ref3.current.focus();
              handleChangeCode(val, 1);
            }}
            placeholder='-'
            placeholderTextColor={appColors.text}
            style={styles.input}
          />

          <TextInput
            keyboardType='number-pad'
            ref={ref3}
            maxLength={1}
            value={codeValues[2]}
            onChangeText={val => {
              val.length > 0 && ref4.current.focus();
              handleChangeCode(val, 2);
            }}
            placeholder='-'
            placeholderTextColor={appColors.text}
            style={styles.input}
          />

          <TextInput
            keyboardType='number-pad'
            ref={ref4}
            maxLength={1}
            value={codeValues[3]}
            onChangeText={val => {
              handleChangeCode(val, 3);
            }}
            placeholder='-'
            placeholderTextColor={appColors.text}
            style={styles.input}
          />
        </RowComponent>

        <SpaceComponent height={40}/>

        <ButtonComponent 
          type='primary' 
          text='CONTINUE'
          onPress={handleVerification}
          icon={
            <View style={[
              globalStyles.iconContainer,
              {
                backgroundColor:
                  newCode.length !== 4 ? appColors.gray : appColors.primary
              },
            ]}>
              <ArrowRight size={13} color={appColors.white}/>
            </View>
          }
          iconFlex='right'
          disable={newCode.length !== 4}
        />
      </SectionComponent>

      <SectionComponent>
        {errorMessage && (
          <TextComponent 
            flex={0}
            styles={{textAlign: 'center'}}
            text={errorMessage}
            color={appColors.danger}
          />
        )}
      </SectionComponent>

      <SectionComponent>
        { limit > 0 ? (
            <RowComponent justify='center'>
              <TextComponent text='Re-send code in' flex={0}/>
              <SpaceComponent width={5}/>
              <TextComponent 
                text={`${Math.floor(limit / 60) < 10 ? '0' : ''}${Math.floor(limit / 60)}:${(limit % 60) < 10 ? '0' : ''}${(limit % 60)}`}
                flex={0} 
                color={appColors.link}/>
            </RowComponent>
          ) : (
            <RowComponent>
              <ButtonComponent 
                type='link'
                text='Resend email verification'
                onPress={handleResendVerification}
              />
            </RowComponent>
          )
        }
      </SectionComponent>
      <LoadingModal visible={isLoading}/>
    </ContainerComponent>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    width: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: fontFamilies.bold,
    color: appColors.text,
    textAlign: 'center',
  }
})

export default VerificationScreen