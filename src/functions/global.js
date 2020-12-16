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