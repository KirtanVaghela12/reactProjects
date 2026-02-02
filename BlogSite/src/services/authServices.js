class AuthService{
    userKey = "users";
    currrentUserKey = "currentUser";

    getAllUsers(){
        return JSON.parse(localStorage.getItem(this.userKey)) || [];
    }

    saveUsers(users){
        localStorage.setItem(this.userKey, JSON.stringify(users));
    }

    signup({name,email,password}){
        const users = this.getAllUsers();

        const userExists = users.find(user => user.email === email);
        if(userExists){
            throw new Error("User Already Exists");
        }

        const newUser ={
            id:crypto.randomUUID(),
            name,
            email,
            password
        };

        users.push(newUser);
        this.saveUsers(users);

         localStorage.setItem(
        this.currrentUserKey,
        JSON.stringify(newUser)    
    );
    return newUser;

    }

    login({ email, password }) {
    const users = this.getAllUsers();

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    localStorage.setItem(
      this.currrentUserKey,
      JSON.stringify(user)
    );

    return user;
  }

   getCurrentUser() {
    return JSON.parse(
      localStorage.getItem(this.currrentUserKey)
    );
  }

   isAuthenticated() {
    return !!this.getCurrentUser();
  }

  async logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }
}   

export default new AuthService();
