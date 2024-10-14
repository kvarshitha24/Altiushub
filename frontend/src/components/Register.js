

export default function Register (){

 
    
   
    return (
        <div className="container">
          <div className="row justify-content-center m-5">
            <div className="col-md-6 p-4 ">

              <form className="m-2 justify-content-center">
                <div className="form-group">
                  <input type="text" name="first_name" className="form-control hover" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
                </div>

                <div className="form-group">
                  <input type="text" name="phone_number"  className="form-control" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <input type="email" name="email"  className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" name="username"   className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" className="form-control" placeholder="rePassword" />
                </div>
                <button  type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      )
  };