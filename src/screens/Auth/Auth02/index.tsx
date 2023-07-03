import React, {memo} from 'react';
import {ImageBackground} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  CheckBox,
  Button,
} from '@ui-kitten/components';

// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import {
  Container,
  Text,
  VStack,
  HStack,
  RoundedButton,
  LinearGradientText,
} from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';

// ----------------------------- KeyboardAwareScrollView -----------------------------------
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Auth02 = memo(() => {
  const {goBack, navigate} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [saveLogin, setSaveLogin] = React.useState(false);
  return (
    <Container style={styles.container}>
      <ImageBackground
        // source={Images.auth.background_01}
        style={styles.background}>
        <TopNavigation
          // accessoryLeft={<ThemeLogo size={80} onPress={goBack} />}
          // accessoryRight={
          //   <Text category="h5" status="error" marginRight={16}>
          //     Star
          //   </Text>
          // }
        />
        <KeyboardAwareScrollView contentContainerStyle={styles.content}>
          <LinearGradientText
            text={
              <Text category="header" marginBottom={0}>
                {`Eingeben Sie Ihre \nAnmeldedaten, um \nzu beginnen.`}
              </Text>
            }
          />
          <Input
            placeholder={'E-Mail'}
            accessoryLeft={<Icon pack="assets" name="user" />}
            style={styles.userInput}
          />
          <Input
            placeholder={'Passwort'}
            accessoryLeft={<Icon pack="assets" name="key" />}
            style={styles.passwordInput}
          />
          <VStack>
            <HStack mb={16}>
              <CheckBox
                children={'Save login'}
                onChange={setSaveLogin}
                checked={saveLogin}
              />
              <Text category="body">Passwort vergessen?</Text>
            </HStack>
            <HStack>
              <Button
                style={styles.buttonLogin}
                children={'Fortfahren'}
                onPress={() => {
                  navigate('Social', { screen: 'Social04' })
                }}
                accessoryRight={<Icon pack="assets" name="arrow-right" />}
              />
              {/* <RoundedButton
                icon="fingerprint"
                status="transparent"
                onPress={goBack}
              /> */}
            </HStack>
          </VStack>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </Container>
  );
});

export default Auth02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  background: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  userInput: {
    flex: 1,
    marginBottom: 16,
    marginTop: 24,
  },
  passwordInput: {
    flex: 1,
    marginBottom: 24,
  },
  buttonLogin: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'transparent',
    borderColor:'white'
  },
});
