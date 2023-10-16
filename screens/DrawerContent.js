import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text,Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
    useTheme,
    Avatar,
    Title,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../components/context';

export function DrawerContent(props) {
const paperTheme = useTheme();
const { signOut, toggleTheme } = React.useContext(AuthContext);
const [role, setRole] = useState(null);
const [name, setName] = useState(null);

const roleName = async () => {
        let staff_id = await AsyncStorage.getItem('roleName');
        setRole(staff_id);
    }
const Name = async () => {
        let full_Name = await AsyncStorage.getItem('full_Name');
        setName(full_Name);
    }
    useEffect(()=>{
        roleName()
    })
    useEffect(()=>{
        Name()
    })
    
    return (
        <View style={{ flex: 1,backgroundColor:'#D6DBDF',fontSize:20, }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View>
                        <Text style={styles.userInfoSection}>{name}</Text>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        {role === "Principal" &&
                            <>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline" 
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Home" 
                            onPress={() => { props.navigation.navigate('Home') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Centre Lists"
                            onPress={() => { props.navigation.navigate('CentreList') }}
                        />
                            <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="comment"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('FeedbackForms') }}
                        />
                            </>
                        }

                    {role === "Instructor" &&
                    <>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="pen"
                                        color={'#3F95ED'}
                                        size={35}
                                    />
                                )}
                                label="Attendance"
                                onPress={() => { props.navigation.navigate('Attendence') }}
                                />
                          
                           <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Centre Lists"
                            onPress={() => { props.navigation.navigate('CentreList') }}
                        />
                          <DrawerItem
                                icon={({ color, size }) => (
                                <Icon
                                    name="comment"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('FeedbackForms') }}
                        />
                            </>
                        }
                    
                    {role === "Gup" &&
                        <>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                            <DrawerItem
                                    icon={({ color, size }) => (
                                        <Icon
                                            name="pen"
                                            color={'#3F95ED'}
                                            size={35}
                                        />
                                    )}
                                    label="Literacy Rate"
                                    onPress={() => { props.navigation.navigate('Literacy') }}
                                />
                            <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Centre Lists"
                            onPress={() => { props.navigation.navigate('CentreList') }}
                        />
                        <DrawerItem
                                icon={({ color, size }) => (
                                <Icon
                                    name="comment"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('FeedbackForms') }}
                        />
                            </>
                        }
                        {role === "DEO/TEO" &&
                        <>
                            <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                            <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Centre Lists"
                            onPress={() => { props.navigation.navigate('CentreList') }}
                        />
                          <DrawerItem
                                icon={({ color, size }) => (
                                <Icon
                                    name="comment"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('FeedbackForms') }}
                        />
                         
                            </>
                        }

                        {role === "NFCED-DG" &&
                         <>
                             <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                            <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Centre Lists"
                            onPress={() => { props.navigation.navigate('CentreList') }}
                        />
                          <DrawerItem
                                icon={({ color, size }) => (
                                <Icon
                                    name="comment"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('FeedbackForms') }}
                        />
                         
                            </>
                        }
                        {role === "NFCED" &&
                         <>
                             <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                            <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Centre Lists"
                            onPress={() => { props.navigation.navigate('CentreList') }}
                        />
                          <DrawerItem
                                icon={({ color, size }) => (
                                <Icon
                                    name="comment"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('FeedbackForms') }}
                        />
                         
                            </>
                        }

                        {role === "NFE-Admin" &&
                         <>
                             <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                            <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Centre Lists"
                            onPress={() => { props.navigation.navigate('CentreList') }}
                        />
                          <DrawerItem
                                icon={({ color, size }) => (
                                <Icon
                                    name="comment"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('FeedbackForms') }}
                        />
                         
                            </>
                        }
                        <DrawerItem
                                icon={({ color, size }) => (
                                <Icon
                                    name="account"
                                    color={'#3F95ED'}
                                    size={35}
                                />
                            )}
                            label="About Us"
                            onPress={() => { props.navigation.navigate('AboutUs') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Log Out"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        height: 30,
        fontSize: 17,
        borderColor: '#76b3db',
        marginLeft:30,
        marginTop:10,
        color: '#111',
        fontWeight: 'bold',

    },
    labelname:{
        fontSize: 22,
        marginTop: 3,
        fontWeight: 'bold',

    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        fontSize:20,

    },
  
    
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});