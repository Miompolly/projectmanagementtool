import User from '../../models/userModel.js';
const resolvers = {
  Query: {
      getUser:async (parent,{id})=>{
        try{
          const user = await User.findById(id);
          return user;
        }catch(err){
          console.err("Error fetching user:",err);
          throw new Error('Failed to fetch user');
        }

      },
      getUsers : async ()=>{
        try{
          const users = await User.find();
          return users;
        }catch(err){
          console.err("Error fetching users:",err);
          throw new Error('Failed to fetch users');
        }
      },
    },
    Mutation :{
      createUser: async (parent, { firstName, lastName, phone, email }) => {
        try {
          const user = new User({ firstName, lastName, phone, email });
          const newUser = await user.save();
          return newUser;
        } catch (err) {
          console.error("Error creating user:", err);
          throw new Error('Failed to create user');
        }
      },
      
      updateUser:async (parent,{id,firstName,lastName,phone,email})=>{
        try{
          const updateUser = await User.findByIdAndUpdate(id,{firstName,lastName,phone,email},{new:true});
          return updateUser;

        }catch(err){
          console.err("Error updating user:",err);
          throw new Error('Failed to update user');
          
        }
      },
      deleteUser:async (parent,{id})=>{
       try{
        const deleteUser = await User.findByIdAndDelete(id);
        return deleteUser;
       }catch(err){
        console.err("Error deleting user:",err);
        throw new Error('Failed to delete user');
       }
      }
    }

  };
  export default resolvers