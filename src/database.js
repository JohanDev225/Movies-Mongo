import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(
      "mongodb+srv://root:CQnmNTNfRtQb1SIG@cluster0.dxjqx.mongodb.net/JWT-App",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;