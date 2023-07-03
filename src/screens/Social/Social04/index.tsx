import React, { memo } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Text, LinearGradientText, HStack, VStack, ProgressBar } from 'components';
import Information from './Information';
import { Images } from 'assets/images';
import { useNavigation } from "@react-navigation/native";

const Social04 = memo(() => {
  const {goBack, navigate} = useNavigation();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Den Nothelferkurs (NHK)'}
        alignment="center"
        // accessoryLeft={<NavigationAction />}
      />
      <FlatList
        data={DATA}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <>
            <Information
              avatar={Images.avatar.avatar_01}
              name={'Albert Flores'}
              tier={3}
              mmr={'1,468'}
            />
            <LinearGradientText
              text="Tagesplan"
              textStyle={styles.textStyle}
              colors={['#CFE1FD', '#FFFDE1']}
            />
          </>
        )}
        renderItem={({ item }) => {
          return (
            <HStack padding={24} level="2" border={16} mb={8} justify="flex-start" gap={16}>
              <VStack gap={4} ph={16} pv={8} border={8} style={{ backgroundColor: item.color }}>
                <Text category="h3" center lineHeight={40}>
                  🚗
                </Text>
                <Text category="h6" center>
                  {item.level}
                </Text>
              </VStack>
              <VStack style={{ flex: 1 }}>
                <Text category="h4">{item.title}</Text>
                <VStack>
                  {item.progress[0] < item.progress[1] && (
                    <VStack mt={24}>
                      <ProgressBar
                        progress={item.progress[0] / item.progress[1]}
                        style={styles.progress}
                        styleBar={styles.progress}
                      />
                      <HStack mt={4}>
                        <Text category="subhead">{item.progress[0]}</Text>
                        <Text category="subhead" status="grey">
                          {item.progress[1]}
                        </Text>
                      </HStack>
                    </VStack>
                  )}
                  {item.progress[0] === item.progress[1] && (
                    <>
                      <TouchableOpacity
                        style={[styles.buttonReward, item.claimed && styles.disable]}
                        activeOpacity={0.7}
                        onPress={() => {
                          navigate('Social11')
                        }}
                        disabled={item.claimed}>
                        <Text category="h6" opacity={item.claimed ? 0.3 : 1}>
                          {'Gehen'}
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </VStack>
              </VStack>
            </HStack>
          );
        }}
      />
    </Container>
  );
});

export default Social04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingTop: 8,
    marginHorizontal: 14,
    paddingBottom:40
  },
  textStyle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },
  progress: {
    height: 8,
  },
  buttonReward: {
    marginTop: 20,
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'color-primary-default',
    borderRadius: 16,
  },
  disable: {
    backgroundColor: 'background-basic-color-3',
  },
});
const DATA = [
  {
    level: '1.1',
    title: 'Teilnehmer kennenlernen',
    progress: [500, 500],
    claimed: true,
    color: '#A43467',
  },
  {
    level: '1.2',
    title: 'Erwartungen',
    progress: [500, 500],
    claimed: true,
    color: '#853169',
  },
  {
    level: '1.3 ',
    title: 'der Film',
    progress: [100, 100],
    claimed: true,
    color: '#642D6C',
  },
  {
    level: '1.4`',
    title: 'Unfall Vorgehen',
    progress: [100, 100],
    claimed: true,
    color: '#38296F',
  },
  {
    level: '1.5`',
    title: 'Wie geht die Rettungskette',
    progress: [90, 100],
    claimed: true,
    color: '#38296F',
  },
  {
    level: '2.0`',
    title: 'Was weisst du? Sofortmassnahmen',
    progress: [100, 100],
    claimed: false,
    color: '#38296F',
  },
];
