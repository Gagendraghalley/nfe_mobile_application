import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import PublicRepo from './PublicRepo';
import Dashboard from './Dashboard';
import OTPNumber from './OTPNumber';
import Repository from './Repository';
import PLC_Repo from './PLC_Repo';
import BLC_Repo from './BLC_Repo';
import ALC_Repo from './ALC_Repo';
import REF_Repo from './REF_Repo';
import Publication from './Publication';
import ManagementOfNfeEmis from './ManagementOfNfeEmis';
import RoyalEducationCouncil from './RoyalEducationCouncil';
import DzongkhaDevelopmentCommision from './DzongkhaDevelopmentCommision';
import SupplymentryReading from './SupplymentryReading';
import MobileNumber from './MobileNumber';
import Login from './Login'; //
import registeration from './registeration';

const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="OTPNumber" component={OTPNumber} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="registeration" component={registeration} />
    <RootStack.Screen name="PublicRepo" component={PublicRepo} />
    <RootStack.Screen name="Dashboard" component={Dashboard} />
    <RootStack.Screen name="MobileNumber" component={MobileNumber} />
    <RootStack.Screen name="Repository" component={Repository} />
    <RootStack.Screen name="PLC_Repo" component={PLC_Repo} />
    <RootStack.Screen name="BLC_Repo" component={BLC_Repo} />
    <RootStack.Screen name="ALC_Repo" component={ALC_Repo} />
    <RootStack.Screen name="REF_Repo" component={REF_Repo} />
    <RootStack.Screen name="Publication" component={Publication} />
    <RootStack.Screen name="ManagementOfNfeEmis" component={ManagementOfNfeEmis}/>
    <RootStack.Screen name="RoyalEducationCouncil" component={RoyalEducationCouncil}/>
    <RootStack.Screen name="DzongkhaDevelopmentCommision" component={DzongkhaDevelopmentCommision}/>
    <RootStack.Screen name="SupplymentryReading" component={SupplymentryReading}/>
  </RootStack.Navigator>
);

export default RootStackScreen;
