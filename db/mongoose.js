import mongoose from 'mongoose'

const MONGODB_URI = process.env['MONGODB_URI']

export default async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Mongodb connected succesfully!')
  } catch (error) {
    console.error(error)
  }
}

