import { v4 as uuidv4 } from 'uuid';



export const toArray = (text) => {
    text = text.replace('  ', ' ')
    const array = text.split(' ')
    let new_array = [] 
    array.map(item => {
        if (item != '') {
            new_array.push(item)
        }
    })
    return new_array
}

export const format_tri_posts = (posts) => {
    let tri_post = []
    let tri_posts = []
    for (var i = 0; i < posts.length; i++) {
        tri_post.push(posts[i])
        if((i+1)%3==0){
            const tri_post_with_key = {key: uuidv4(),tri_post}
            tri_posts.push(tri_post_with_key)
            tri_post = []
        }
    }
    if(tri_post.length!=0){
        const tri_post_with_key = {key: uuidv4(),tri_post}
        tri_posts.push(tri_post_with_key)    
    }
    return tri_posts
}

export const format_hashtags = (hashtags) => {
    const hashtags_with_key = hashtags.map((hashtag) => {
        hashtag.key = uuidv4()
        return hashtag
    })
    return hashtags_with_key
}