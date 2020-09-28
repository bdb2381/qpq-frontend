import React from "react";



const ProfileForm = (props) => {

    return (
        <div >
            <form>
                <div className="two-column-grid">
                    <div className="profile-form-row">
                        <label for="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="First Name" value={null} />
                        <label for="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" value={null} />
                        <label for="birth_year">Birth Year</label>
                        <input type="number" name="birth_year" placeholder="Birth Year" value={null} />
                        <label for="img_url">Image</label>
                        <input type="text" name="img_url" placeholder="Image URL" value={null} />
                    </div>

                    <div className="profile-form-row">
                        <label for="street">Street</label>
                        <input type="text" name="street" placeholder="Street" value={null} />
                        <label for="city"> City</label>
                        <input type="text" name="city" placeholder="City" value={null} />
                        <label for="state">State</label>
                        <input type="text" name="state" placeholder="State" value={null} />
                        <label for="zipcode">Zip Code</label>
                        <input type="text" name="zipcode" placeholder="Zip Code" value={null} />
                    </div>
                    <div className="profile-form-row">
                        <label for="email">Email</label>
                        <input type="text" name="email" placeholder="Email" value={null} />
                        <label for="password"> Password</label>
                        <input type="password" name="password" placeholder="Password" value={null} />
                        <label for="password_conformation"> Password Conformation</label>
                        <input type="password" name="password_conformation" placeholder="password Conformation" value={null} />


                    </div>



                </div>
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>



    );
};



export default ProfileForm

