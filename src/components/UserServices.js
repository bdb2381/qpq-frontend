import React from "react";

const UseServices = ({services, handelChooseService, handelSubmit, handelMessage}) => {

  return (
    <div>
     <label>
<select onChange={handelChooseService} className="service-select">
            <option> Choose the service you will give in return: </option>
            {services.map(service =>
            <option key={service.id} value={service.id}>
            {service.name} ,value: {service.value} credits
            </option>

            )}
                </select>
            </label>
<label> Add your message: </label>
<input className="service-message" type="text" name="message" placeholder="Add your message here" onChange={handelMessage}></input>
<button className="btn-message" type="Submit" onClick={handelSubmit}> Submit </button>

    </div>
  );
};
export default UseServices
    ;
