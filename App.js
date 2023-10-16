import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import MonitoringTools from './screens/MonitoringTools'
import ProfileScreen from './screens/ProfileScreen';
import PLC_Repo from './screens/PLC_Repo';
import BLC_Repo from './screens/BLC_Repo';
import ALC_Repo from './screens/ALC_Repo';
import REF_Repo from './screens/REF_Repo';
import Publication from './screens/Publication';
import ManagementOfNfeEmis from './screens/ManagementOfNfeEmis';
import RoyalEducationCouncil from './screens/RoyalEducationCouncil';
import DzongkhaDevelopmentCommision from './screens/DzongkhaDevelopmentCommision';
import SupplymentryReading from './screens/SupplymentryReading';
import Literacy from './screens/Literacy';
import Repository from './screens/Repository';
import EditLiteracy from './screens/EditLiteracy';
import CommunityVitality from './screens/CommunityVitality';
import GeneralCommentFeedback from './screens/GeneralCommentFeedback';
import NfeCenter from './screens/NfeCenter';
import AudioAndVisual from './screens/AudioAndVisual';
import NfeInstructor from './screens/NfeInstructor';
import NfeLearner from './screens/NfeLearner';
import Attendence from './screens/Attendence';
import FeedbackForms from './screens/FeedbackForms';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import AboutUs from './screens/AboutUs';
import PlaningMonitoting from './screens/PlaningMonitoting';
import ClassRoomManagement from './screens/ClassRoomManagement';
import SkillDevelopmentMonotoring from './screens/SkillDevelopmentMonotoring';
import CentreList from './screens/CentreList';
import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const App = () => {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    role: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }
  // To get the value from the TextInput
  const [textInputValue, setTextInputValue] = useState('');

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };

    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      const userToken = String(foundUser.access_token);
      const userName = foundUser.user.email;
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('full_Name', foundUser.user.full_name);
        await AsyncStorage.setItem('roleName', foundUser.roles[0].roleName);
        await AsyncStorage.setItem('staff_id', foundUser.user.staff_id);
        await AsyncStorage.setItem('nfe_center_id', foundUser.user.nfe_center_id);
        await AsyncStorage.setItem('dzon_id', foundUser.user.dzon_id);
        await AsyncStorage.setItem('gewog_id', foundUser.user.gewog_id);
        await AsyncStorage.setItem('Id', foundUser.roles[0].Id);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 300);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
              <Drawer.Navigator drawerContent={props =><DrawerContent {...props} />}>
              <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
              <Drawer.Screen name="HomeScreen" component={HomeScreen} />
              <Drawer.Screen name="MonitoringTools" component={MonitoringTools} />
              <Drawer.Screen name="Literacy" component={Literacy} />
              <Drawer.Screen name="Repository" component={Repository} />
              <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
              <Drawer.Screen name="EditLiteracy" component={EditLiteracy} />
              <Drawer.Screen name="ManagementOfNfeEmis" component={ManagementOfNfeEmis} />
              <Drawer.Screen name="CommunityVitality" component={CommunityVitality} />
              <Drawer.Screen name="PLC_Repo" component={PLC_Repo} />
              <Drawer.Screen name="BLC_Repo" component={BLC_Repo} />
              <Drawer.Screen name="ALC_Repo" component={ALC_Repo} />
              <Drawer.Screen name="AudioAndVisual" component={AudioAndVisual} />
              <Drawer.Screen name="SupplymentryReading" component={SupplymentryReading} />
              <Drawer.Screen name="REF_Repo" component={REF_Repo} />
              <Drawer.Screen name="RoyalEducationCouncil" component={RoyalEducationCouncil} />
              <Drawer.Screen name="Dashboard" component={Dashboard} />
              <Drawer.Screen name="NfeCenter" component={NfeCenter} />
              <Drawer.Screen name="NfeInstructor" component={NfeInstructor} />
              <Drawer.Screen name="DzongkhaDevelopmentCommision" component={DzongkhaDevelopmentCommision} />
              <Drawer.Screen name="NfeLearner" component={NfeLearner} />
              <Drawer.Screen name="Attendence" component={Attendence} />
              <Drawer.Screen name="PlaningMonitoting" component={PlaningMonitoting} />
              <Drawer.Screen name="SkillDevelopmentMonotoring" component={SkillDevelopmentMonotoring} />
              <Drawer.Screen name="ClassRoomManagement" component={ClassRoomManagement} />
              <Drawer.Screen name="FeedbackForms" component={FeedbackForms} />
              <Drawer.Screen name="CentreList" component={CentreList} />
              <Drawer.Screen name="Publication" component={Publication} />
              <Drawer.Screen name="AboutUs" component={AboutUs} />
              
              <Drawer.Screen name="GeneralCommentFeedback" component={GeneralCommentFeedback} />

            </Drawer.Navigator>
          )
            :
            <RootStackScreen />
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;
