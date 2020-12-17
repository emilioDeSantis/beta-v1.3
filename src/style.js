import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        top: 90,
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_bar: {
        height:90,
        flexDirection: 'row',
        backgroundColor: '#f98',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    top_bar_button: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 55,
    },
    home_top_bar: {
        height:90,
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
        justifyContent: 'center',
    },
    home_bar_button: {
        width: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 55,
    },
    search_button: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: 100,
        height: '100%',
        paddingTop: 55,
        paddingLeft: 30,
        left: 0,
    },
    bottom_bar: {
        height:90,
        flexDirection: 'row',
        backgroundColor: '#f98',
        width: '100%',
        borderTopColor: '#dddfe0',
        borderTopWidth: .3,
    },
    bottom_bar_button: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
    },
    post_stream: {
        backgroundColor: '#fee',
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 90,
    },
    feed_container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 60, 
    },
    search_feed_container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 120, 
    },
    post: {
        marginBottom: 100,
        alignSelf: 'stretch',
        width,
        height: width*1.25+200,
        flex:1,
        backgroundColor: '#fff'
    },
    recipe_button: {
        position: 'absolute',
        top: 70,
        backgroundColor: '#f38',
        width,
        height: width*1.25,
    },
    chef_thumbnail: {
        backgroundColor: '#f32',
        marginTop: 10,
        marginLeft: 30,
        width: 90,
        height: 90,
        borderRadius: 3000,
        borderColor: '#fa4',
        borderWidth: 3,
    },
    search_tab_bar: {
        height:60,
        flexDirection: 'row',
        backgroundColor: '#f98',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    search_tab_bar_button: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    tri_post_row: {
        width,
        height: (width*1.25)/3,
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fab',
    },
    tri_post: {
        margin: 2,
        flex: 1,
        backgroundColor: '#f34',
    },
    tri_recipe_button: {

    },
    chef_tab_bar: {
        height:60,
        flexDirection: 'row',
        backgroundColor: '#f98',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    chef_tab_bar_button: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    hashtag_post: {
        alignSelf: 'stretch',
        width: 200,
        height: 250,
        backgroundColor: '#fff'
    },
    hashtag_stream: {
        width,
        height: 350,
    },
    chef: {
        height: 100,
        width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    like_button_container: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: 400,
        left: 10,
        flexDirection: 'row',
    },
    like_button: {
        backgroundColor: '#f95',
        height: 20,
        width: 20,
        top: 5,
        left: 5,
    },
    number: {
        top: 5,
        left: 10,
    },
    number_text: {
        color: '#f94',
    },
    comment_button_container: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: 450,
        left: 10,
        flexDirection: 'row',
    },
    comment_button: {
        backgroundColor: '#f95',
        height: 20,
        width: 20,
        top: 5,
        left: 5,
    },
    tip_button_container: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: 500,
        left: 10,
        flexDirection: 'row',
    },
    tip_button: {
        backgroundColor: '#f95',
        height: 20,
        width: 20,
        top: 5,
        left: 5,
    },
});

export default style