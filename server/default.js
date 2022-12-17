import { data } from "./constants/data.js"
import News from './modal/news.js'
import Connection from "./connection/db.js";

const DefaultData=async()=>{
    try {
        await Connection();
        await News.deleteMany({})
     await News.insertMany(data)
     console.log('Data imported successfully')
    }catch(error){
        console.log('Error ',error.message)
    }
}

export default DefaultData