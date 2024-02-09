import React, { useState } from "react";
import Navbar from '../components/Navbar';


const NewMeeting = () => {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    body: "",
    numAttendees: "",
    attendeeNames: [],
    meetingSummary: "",
    positiveApproach: "",
    mainSpeaker: "",
    meetingPhotograph: null,
    additionalInput1: "",
    additionalInput2: "",
    additionalInput3: "",
    // Add more features as needed
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // Check if the input is a file input
    const inputValue = type === "file" ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission, e.g., send data to a server or perform local actions
    console.log("Form data submitted:", formData);
    // Reset form after submission
    setFormData({
      date: "",
      title: "",
      body: "",
      numAttendees: "",
      attendeeNames: [],
      meetingSummary: "",
      positiveApproach: "",
      mainSpeaker: "",
      meetingPhotograph: null,
      additionalInput1: "",
      additionalInput2: "",
      additionalInput3: "",
    });
  };
  
  const handleAttendeeNamesChange = (e) => {
    // Assuming attendee names are selected from a dropdown
    const selectedNames = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      attendeeNames: selectedNames,
    }));
  };

  

  return (
<>
<Navbar></Navbar>
<form className="entry-log-form" onSubmit={handleSubmit}>
    <h1 className="new-header">New Meeting!</h1>
    <p className="new-header">Enter the details!</p>
      <label>
        Date:
        <input className="inputs1"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Meeting Title:
        <input className="inputs1"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Body of the Minutes:
        <textarea className="inputs3"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Upload Files:
        <input className="inputs1"
          type="file"
          name="files"
          onChange={handleChange}
          multiple
        />
      </label>
      <br />
      <br />

     
        <label>
          Number of People Attended:
          <input
            className="inputs1"
            type="number"
            name="numAttendees"
            value={formData.numAttendees}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Names of People Attended (select multiple):
          <select
            multiple
            className="inputs1"
            value={formData.attendeeNames}
            onChange={handleAttendeeNamesChange}
          >
            <option value="John Doe">John Doe</option>
            <option value="shashwat">shashwat</option>
            {/* Add more names as needed */}
          </select>
        </label>
        <br />

        <label>
          Summary of Meeting:
          <textarea
            className="inputs3"
            name="meetingSummary"
            value={formData.meetingSummary}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Positive Approach from the Meeting:
          <input
            className="inputs1"
            type="text"
            name="positiveApproach"
            value={formData.positiveApproach}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        {/* ... other form inputs ... */}

        <button className="submit-log" type="submit">
          Submit
        </button>
        <button className="go-back" type="button">
          Go back
        </button>
      </form>
    </>
  );
};

export default NewMeeting;


