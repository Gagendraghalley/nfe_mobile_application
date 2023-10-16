// import React from 'react';
import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import Repository from './Repository';
import MonitoringTools from './MonitoringTools';
import EditProfileScreen from './EditProfileScreen';
import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const MonitoringStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RepoStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = props => {
  const [role, setRole] = useState(null);
  const roleName = async () => {
    let staff_id = await AsyncStorage.getItem('roleName');
    setRole(staff_id);
    //  console.log(staff_id)
  };
  useEffect(() => {
    roleName();
  });

  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#262626',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      {role === 'Instructor' && (
        <>
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="RepoStack"
            component={RepoStackScreen}
            options={{
              tabBarLabel: 'Repo',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </>
      )}

      {role === 'Principal' && (
        <>
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="MonitoringStack"
            component={MonitorStackScreen}
            options={{
              tabBarLabel: 'Monitorging',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-wallet" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="RepoStack"
            component={RepoStackScreen}
            options={{
              tabBarLabel: 'Repo',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </>
      )}

      {role === 'Gup' && (
        <>
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="MonitoringStack"
            component={MonitorStackScreen}
            options={{
              tabBarLabel: 'Monitorging',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-wallet" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="RepoStack"
            component={RepoStackScreen}
            options={{
              tabBarLabel: 'Repo',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </>
      )}
      {role === 'DEO/TEO' && (
        <>
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="MonitoringStack"
            component={MonitorStackScreen}
            options={{
              tabBarLabel: 'Monitorging',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-wallet" color={color} size={26} />
              ),
            }}
          />
        </>
      )}
      {role === 'NFCED' && (
        <>
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="MonitoringStack"
            component={MonitorStackScreen}
            options={{
              tabBarLabel: 'Monitorging',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-wallet" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="RepoStack"
            component={RepoStackScreen}
            options={{
              tabBarLabel: 'Repo',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </>
      )}
      {role === 'NFCED-DG' && (
        <>
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="MonitoringStack"
            component={MonitorStackScreen}
            options={{
              tabBarLabel: 'Monitorging',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-wallet" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="RepoStack"
            component={RepoStackScreen}
            options={{
              tabBarLabel: 'Repo',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </>
      )}
      {role === 'NFE-Admin' && (
        <>
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="MonitoringStack"
            component={MonitorStackScreen}
            options={{
              tabBarLabel: 'Monitorging',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-wallet" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="RepoStack"
            component={RepoStackScreen}
            options={{
              tabBarLabel: 'Repo',
              tabBarColor: '#262626',
              tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 30, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                {/* <Avatar.Image
                  source={{
                    uri:
                      'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7',
                  }}
                  size={40}
                /> */}
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18,
        },
      }}>
      <NotificationStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notification',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </NotificationStack.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18,
        },
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'User Profile',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
const MonitorStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <MonitoringStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18,
        },
      }}>
      <MonitoringStack.Screen
        name="monitoring"
        component={MonitoringTools}
        options={{
          title: 'Monioring Tools',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </MonitoringStack.Navigator>
  );
};
const RepoStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <RepoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18,
        },
      }}>
      <RepoStack.Screen
        name="Repo"
        component={Repository}
        options={{
          title: 'Repository Management',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </RepoStack.Navigator>
  );
};
