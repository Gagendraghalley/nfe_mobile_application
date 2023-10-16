import React, { useRef } from "react";
import {

    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Animated
} from 'react-native';


import { COLORS, FONTS, SIZES, icons } from '../constants';

const MonitoringTools = () => {


    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "PLC Materials",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Dzongkha",
                    location: "24-10-2020",

                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "English",

                    location: "24-10-2020",

                    status: pendingStatus
                },


            ],
        },
        {
            id: 2,
            name: "BLC Materials",
            icon: icons.education,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "English",

                    location: "24-10-2020",

                    status: pendingStatus,
                },
                {
                    id: 6,
                    title: "Dzongkha",

                    location: "24-10-2020",

                    status: pendingStatus,
                },



            ],
        },
        {
            id: 3,
            name: "ALC Materials",
            icon: icons.education,
            color: COLORS.darkgreen,
            expenses: [

                {
                    id: 8,
                    title: "English",

                    location: "24-10-2020",

                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Dzongkha",

                    location: "24-10-2020",

                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Practical",

                    location: "24-10-2020",

                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Others  ",
            icon: icons.education,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Subject A",

                    location: "24-10-2020",

                    status: pendingStatus,
                },

                {
                    id: 13,
                    title: "Subject B",

                    location: "24-10-2020",

                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Subject C",

                    location: "24-10-2020",
                    status: pendingStatus,
                },
            ],
        },

    ]

    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;

    const [categories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)

    function renderCategoryHeaderSection() {
        return (
            <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Title */}

                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Reading Materials</Text>

                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row' }}>


                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "list                                                                                              " ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            marginLeft: SIZES.base
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderCategoryList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>


            </View>
        )
    }

    function renderIncomingExpensesTitle() {
        return (
            <View style={{ height: 80, backgroundColor: COLORS.lightGray2, padding: SIZES.padding }}>
                {/* Title */}

            </View>
        )
    }

    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        const renderItem = ({ item, index }) => (
            <View style={{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow
            }}>
                {/* Title */}
                <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: SIZES.base
                        }}
                    >
                        <Image
                            source={selectedCategory.icon}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />
                    </View>

                    <Text style={{ ...FONTS.h3, color: selectedCategory.color, }}>{selectedCategory.name}</Text>
                </View>

                {/* Expense Description */}
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    {/* Title and description */}

                    <Text style={{ ...FONTS.h2, }}>{item.title}</Text>


                    {/* Location */}
                    <Text style={{ marginTop: SIZES.padding, ...FONTS.h4, }}>Date of Post</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: COLORS.darkgray,
                                marginRight: 5,
                                marginTop: 3,
                            }}
                        />
                        <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.location}</Text>
                    </View>
                </View>

                {/* download button */}
                <TouchableOpacity>
                    <View
                        style={{
                            height: 40,
                            backgroundColor: '#1e90ff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomStartRadius: SIZES.radius,
                            borderBottomEndRadius: SIZES.radius,

                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Download</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        style={{
                            height: 40,
                            marginTop: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomStartRadius: SIZES.radius,
                            borderBottomEndRadius: SIZES.radius,
                            backgroundColor: selectedCategory.color,
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>View</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )

        return (
            <View>
                {renderIncomingExpensesTitle()}

                {
                    incomingExpenses.length > 0 &&
                    <FlatList
                        data={incomingExpenses}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }

                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
                    </View>
                }

            </View>

        )
    }






    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>

            {/* Category Header Section */}
            {renderCategoryHeaderSection()}

            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default MonitoringTools;