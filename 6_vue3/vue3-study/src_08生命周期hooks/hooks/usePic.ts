import axios from 'axios'
import {reactive} from 'vue'

export default function() {
    let picList = reactive([
        'https://picsum.photos/200/300'
    ])

    async function getPic() {
        try {
            let result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1');
            console.log(result.data[0].url)

            picList.push(result.data[0].url)
        } catch (error) {
            alert(error)
        }
    }
    
    return {picList, getPic}
}