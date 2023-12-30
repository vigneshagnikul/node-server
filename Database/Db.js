import mongoose from 'mongoose'

const createConnection = () =>{
   
    try {
        mongoose.connect(process.env.DB)
        console.log('Your DB as successfully connected');
    } catch (error) {
        console.log(error.message, 'Error Found During Connecting with your DB')
        
    }
}
export default createConnection