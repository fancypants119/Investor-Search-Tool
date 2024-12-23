import { useState } from "react";
import { geographyOptions, participationOptions, seriesOptions, techMediumOptions } from "./Datalist/options";
import "./Addinvestor.css"

const InvestorProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firm: "",
    video: "",
    geography: [],
    city: "",
    investmentMin: "",
    investmentMax: "",
    investmentSweetSpot: "",
    participation: [],
    propTechOnly: "no",
    sectorsOfInterest: [],
    series: [],
    state: "",
    techMedium: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked, multiple } = e.target;
    if (type === "checkbox" || type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? value : ""
      }));
    } else if (multiple && type === "select-one") {
      const options = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: options
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleAddTag = (e, field) => {
    if (e.key === "Enter" && e.target.value) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: [...prevData[field], e.target.value],
      }));
      e.target.value = ""; // clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Firm:
        <input
          type="text"
          name="firm"
          value={formData.firm}
          onChange={handleChange}
        />
      </label>

      <label>
        Video:
        <input
          type="text"
          name="video"
          value={formData.video}
          onChange={handleChange}
        />
      </label>

      <label>
        Geography:
        <select
          name="geography"
          multiple
          value={formData.geography}
          onChange={handleChange}
        >
          {geographyOptions.map((geo, index) => (
            <option key={index} value={geo}>
              {geo}
            </option>
          ))}
        </select>
      </label>

      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>

      <label>
        Investment Min:
        <input
          type="number"
          name="investmentMin"
          value={formData.investmentMin}
          onChange={handleChange}
        />
      </label>

      <label>
        Investment Max:
        <input
          type="number"
          name="investmentMax"
          value={formData.investmentMax}
          onChange={handleChange}
        />
      </label>

      <label>
        Investment Sweet Spot:
        <input
          type="text"
          name="investmentSweetSpot"
          value={formData.investmentSweetSpot}
          onChange={handleChange}
        />
      </label>

      <label>
        Participation:
        <select
          name="participation"
          multiple
          value={formData.participation}
          onChange={handleChange}
        >
          {participationOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        PropTech-Only:
        <label>
          <input
            type="radio"
            name="propTechOnly"
            value="yes"
            checked={formData.propTechOnly === "yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="propTechOnly"
            value="no"
            checked={formData.propTechOnly === "no"}
            onChange={handleChange}
          />
          No
        </label>
      </label>

      <label>
        Sectors of Interest:
        <input
          type="text"
          onKeyDown={(e) => handleAddTag(e, "sectorsOfInterest")}
          placeholder="Press Enter to add"
        />
        <ul>
          {formData.sectorsOfInterest.map((sector, index) => (
            <li key={index}>{sector}</li>
          ))}
        </ul>
      </label>

      <label>
        Series:
        <select
          name="series"
          multiple
          value={formData.series}
          onChange={handleChange}
        >
          {seriesOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>

      <label>
        Tech Medium:
        <select
          name="techMedium"
          multiple
          value={formData.techMedium}
          onChange={handleChange}
        >
          {techMediumOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default InvestorProfileForm;
