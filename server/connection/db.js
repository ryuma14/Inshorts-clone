import mongoose from 'mongoose'

const Connection=async()=>{
 try{ 
     const url = `mongodb://Shreya:SKundu312@inshort-clone-shard-00-00.p1mgc.mongodb.net:27017,inshort-clone-shard-00-01.p1mgc.mongodb.net:27017,inshort-clone-shard-00-02.p1mgc.mongodb.net:27017/?ssl=true&replicaSet=atlas-14gdfc-shard-0&authSource=admin&retryWrites=true&w=majority`;
     await mongoose.connect(url,{useNewUrlParser:true})
     console.log('Database connected successfully')
}catch(error)
{
    console.log('Error while connecting with database',error)
}
}

export default Connection;


