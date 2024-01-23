
const {userName, password} = process.env
export const connectionStr = "mongodb+srv://"+userName+":"+password+"@cluster0.pqrrrug.mongodb.net/testDB?retryWrites=true&w=majority";

