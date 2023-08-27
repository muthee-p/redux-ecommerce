import mongoose from 'mongoose'

let isConnected = false;//track connection

export const connectToDB = async () => {
	mongoose.set('strictQuery', true);

	if(isConnected) {
		console.log('Mongo connected')
		return;
	}
	try{
		await mongoose.connect(process.env.MONGO_URI, {
			dbName: 'donations',
			userNewUrlParser: true,
			useUnifiedTopology: true,
		})
		isConnected = true;

		console.log('MongoDB connected')
	}catch (error) {
		console.log(error);
	}
}