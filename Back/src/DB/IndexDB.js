import mongoose from "mongoose";

// Function to connect to MongoDB database
const indexDb = async (req, res) => {
  try {
    // Establish a connection to the MongoDB database using the MONGODBURI environment variable
    const MongoDbInstance = await mongoose.connect(process.env.MONGODB_URI);
    // Log a success message with the MongoDB host
    console.log(
      "\n- CONNECTED TO MONGODB FROM INDEXdb OF CONFIG",
      MongoDbInstance.connection.host
    );
  } catch (error) {
    // Log an error message if the connection fails
    console.log(
      "\n- ERROR WHILE CONNECTING TO MONGODB FROM INDEXdb OF CONFIG",
      error
    );
  }
};

// Export the indexDb function as the default export
export default indexDb;