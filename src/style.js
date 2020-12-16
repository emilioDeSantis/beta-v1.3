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
});

export default style