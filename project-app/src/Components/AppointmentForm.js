import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({ name, date });
        setName("");
        setDate("");
    };

    return (
        <div className="container">
            <h1>Add Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Full Name</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="appointment-date">Appointment Date</label>
                    </div>
                    <div className="col-75">
                        <input
                            id="appointment-date"
                            name="appointment-date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <input className="btn btn-submit" type="submit" value="Add Appointment" />
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;

