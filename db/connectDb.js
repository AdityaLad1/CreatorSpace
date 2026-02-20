// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       `mongodb://localhost:27017//creatorSpace`,
//       {
//         useNewUrlParser: true,
//       },
//     );
//     console.log(`MongoDB Connected:${conn.connection.host}`);
//   } catch (error) {
//     console.error(error.message);
//     process.exit(1);
//   }
// };
// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    const conn = await mongoose.connect(
      "mongodb://localhost:27017/creatorSpace"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
