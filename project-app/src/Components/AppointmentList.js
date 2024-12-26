import React, { useState } from "react";

const AppointmentList = ({
    appointments,
    deleteAppointment,
    editAppointment,
    clearAppointments,
}) => {
    const [editedIndex, setEditedIndex] = useState(null);
    const [editedName, setEditedName] = useState("");
    const [editedDate, setEditedDate] = useState("");

    const handleEdit = (index) => {
        setEditedIndex(index);
        setEditedName(appointments[index].name);
        setEditedDate(appointments[index].date);
    };

    const handleSaveEdit = (index) => {
        editAppointment(index, editedName, editedDate);
        setEditedIndex(null);
        setEditedName("");
    };

    const handleCancelEdit = () => {
        setEditedIndex(null);
        setEditedName("");
    };

    return (
        <div className="container">
            <h1>Appointment List</h1>
            <table id="list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                {editedIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedName}
                                        onChange={(e) =>
                                            setEditedName(e.target.value)
                                        }
                                    />
                                ) : (
                                    appointment.name
                                )}
                            </td>
                            <td>
                                {editedIndex === index ? (
                                    <input
                                        type="date"
                                        value={editedDate}
                                        onChange={(e) =>
                                            setEditedDate(e.target.value)
                                        }
                                    />
                                ) : (
                                    appointment.date
                                )}
                            </td>
                            <td>
                                {editedIndex === index ? (
                                    <>
                                        <button
                                            className="btn btn-save"
                                            onClick={() =>
                                                handleSaveEdit(index)
                                            }
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-cancel"
                                            onClick={handleCancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="btn btn-edit"
                                            onClick={() => handleEdit(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-delete"
                                            onClick={() =>
                                                deleteAppointment(index)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className="btn btn-clear"
                onClick={clearAppointments}
            >
                Clear All Appointments
            </button>
        </div>
    );
};

export default AppointmentList;
