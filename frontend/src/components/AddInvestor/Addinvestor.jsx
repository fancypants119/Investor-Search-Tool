  import { useState } from "react";
  import { geographyOptions, participationOptions , techMediumOptions } from "./Datalist/options";

  import { sectors, fundingStages, basedIn, basedInCity } from '../Searchbar/Datalist/options'

  import { styled, lighten, darken } from '@mui/material';


  import "./Addinvestor.css"

  import { Autocomplete } from '@mui/material';
  import { TextField } from '@mui/material';


  const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.primary.light, 0.85),
    ...theme.applyStyles('dark', {
      backgroundColor: darken(theme.palette.primary.main, 0.8),
    }),
  }));
  
  const GroupItems = styled('ul')({
    padding: 0,
  });



  const InvestorProfileForm = () => {
    const [formData, setFormData] = useState({
      name: "", // String
      email: "", // String
      firm: "", // String
      video: "", // String
      geography: [], // Array of strings
      city: "", // String
      state: [], // Array of strings
      investment_min: 0, // Number
      investment_max: 0, // Number
      investment_sweet_spot: 0, // Number
      participation: [], // Array of strings
      proptech_only: false, // Boolean
      sectorsofinterest: [], // Array of strings
      series: [], // Array of strings
      tech_medium: [], // Array of strings
      flag: "fr", // String
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
    
      setFormData((prevData) => {
        if (type === "checkbox" || type === "radio") {
          return {
            ...prevData,
            [name]: checked,
          };
        } else if (!isNaN(value) && ["investment_min", "investment_max", "investment_sweet_spot"].includes(name)) {
          return {
            ...prevData,
            [name]: Number(value), // Convert to number
          };
        } else {
          return {
            ...prevData,
            [name]: value, // Handle as string
          };
        }
      });
    };
    

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch("http://localhost:3000/api/add-investor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Convert formData to JSON
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        const result = await response.text(); // Read response text (success message)
        alert(result); // Notify user of success
        setFormData({
          name: "",
          email: "",
          firm: "",
          video: "",
          geography: [],
          city: "",
          investment_min: null,
          investment_max: null,
          investment_sweet_spot: null,
          participation: [],
          proptech_only: false,
          sectorsofinterest: [],
          series: [],
          state: "",
          tech_medium: [],
        }); // Reset form
      } catch (error) {
        console.error("Error adding investor:", error);
        alert("Failed to add investor. Please try again.");
      }
    };

    return (
      <form 
      className="investor-form"
      onSubmit={handleSubmit}>

        <label
        className="label-investor-name"
        >
          Name:

  <TextField 
  className="input-investor-name"
              id="name"
              type="text"
            placeholder="Investor Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{
            }}
          />

        </label>

        <label
        className="label-investor-email"
        >
          Email:
  <TextField 
  className="input-investor-email"
              id="email"
              type="text"
            placeholder="Investor Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
            }}
          />





        </label>

        <label
        className="label-investor-firm"
        >
          Firm:
  <TextField 
  
className="input-investor-firm"
              id="firm"
              type="text"
            placeholder="Investor Firm"
            variant="outlined"
            name="firm"
            value={formData.firm}
            onChange={handleChange}
            sx={{
            }}
          />



        </label>

        <label
        className="label-investor-video"
        >
          Video:

          <TextField 
          className="input-investor-video"
              id="video"
              type="text"
            placeholder="Intro Video"
            variant="outlined"
            name="video"
            value={formData.video}
            onChange={handleChange}
            sx={{
            }}
          />
        </label>

        <label
        className="label-investor-geo"
        >
          Geography:

          <Autocomplete 
             className="input-investor-geo"
          id="geography"
          multiple
          options={geographyOptions}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          value={formData.geography}
          onChange={(event, newValue) => {
            setFormData({ ...formData, geography: newValue });
          }}
                renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Geography'
                  sx={{ 
                      width: 200,
                      }} 
                />
          )}
          />
        </label>

        <label
        className="label-investor-city"
        >
          City:



          <Autocomplete id="city"
          className="input-investor-city"
          options={basedInCity}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          value={formData.city}
          onChange={(event, newValue) => {
            setFormData({ ...formData, city: newValue });
          }}
                renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='City'
                  sx={{ 
                      width: 200,
                      }} 
                />
          )}
          />
        </label>

        <label
        className="label-investor-min"
        >
          Investment Min:


          <TextField 
          className="input-investor-min"
              id="investment_min"
              type="text"
            placeholder="Investment Min"
            variant="outlined"
            name="investment_min"
            value={formData.investment_min}
            onChange={handleChange}
            sx={{
            }}
          />


        </label>

        <label
        className="label-investor-max"
        >
          Investment Max:
          <TextField
          className="input-investor-max"
          id="investment_max"
              
              type="text"
            placeholder="Investment Max"
            variant="outlined"
            name="investment_max"
            value={formData.investment_max}
            onChange={handleChange}
            sx={{
            }}
          />
        </label>

        <label
        className="label-investor-sweetspot"
        >
          Investment Sweet Spot:

  <TextField 
              id="investment_sweet_spot"
              className="input-investor-sweetspot"
              type="text"
            placeholder="Investment Sweet Spot"
            variant="outlined"
            name="investment_sweet_spot"
            value={formData.investment_sweet_spot}
            onChange={handleChange}
            sx={{
            }}
          />
        </label>

        <label
        className="label-investor-part"
        >
          Participation:

          <Autocomplete id="participation"
          className="input-investor-part"
          multiple
          options={participationOptions}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          value={formData.participation}
          onChange={(event, newValue) => {
            setFormData({ ...formData, participation: newValue });
          }}
                renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Participation'
                  sx={{ 
                      width: 200,
                      }} 
                />
          )}
          />
        </label>

        <label
        className="label-investor-proptech"
        >
          PropTech-Only:
          <label>
  <input
    type="radio"
    name="proptech_only"
    value="true"
    checked={formData.proptech_only === true}
    onChange={handleChange}
  />
  Yes
</label>

<label>
  <input
    type="radio"
    name="proptech_only"
    value="false"
    checked={formData.proptech_only === false}
    onChange={handleChange}
  />
  No
</label>

        </label>

        <label
        className="label-investor-sectors"
        >
          Sectors of Interest:

          
          <Autocomplete id="sectorsofinterest"
          className="input-investor-sectors"
          multiple
          options={sectors}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          value={formData.sectorsofinterest}
          onChange={(event, newValue) => {
            setFormData({ ...formData, sectorsofinterest: newValue });
          }}
                renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Sectors Of Interest'
                  sx={{ 
                      width: 200,
                      }} 
                />
          )}
          />
        </label>

        <label
        className="label-investor-series"
        >
          Series:

          <Autocomplete id="series"
          className="input-investor-series"
          multiple
          options={fundingStages}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          value={formData.series}
          onChange={(event, newValue) => {
            setFormData({ ...formData, series: newValue });
          }}
                renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Series'
                  sx={{ 
                      width: 200,
                      }} 
                />
          )}
          />
        </label>

        <label
        className="label-investor-state"
        >
          State / Country

          <Autocomplete 
           className="input-investor-state"
          
          id="state"
              options={basedIn.sort((a, b) => {
          if (a.type !== b.type) {
            return a.type === 'state' ? -1 : 1; 
          }
          return a.name.localeCompare(b.name);
        })}

        groupBy={(option) => option.type}
        getOptionLabel={(option) => (option?.name || '')}
        value={basedIn.find((option) => option.name === formData.state) || null}
        onChange={(event, newValue) => {
          setFormData({ ...formData, 
            state: newValue ? newValue.name : "",
            flag: newValue ? newValue.flag : "",
           });
          console.log(formData.state)
        }}
        isOptionEqualToValue={(option, value) => option.name === value.name}
          renderInput={(params) => (
          <TextField
          {...params}
          placeholder="Based in (State/Country)"
              sx={{ 
                  width: 250,
       }} 
            />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        />
        </label>

        <label
        className="label-investor-techmedium"
        >
          Tech Medium:
          <Autocomplete
          className="input-investor-techmedium"
        multiple
        id="tech_medium"
        options={techMediumOptions}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        value={formData.tech_medium}
        onChange={(event, newValue) => {
        setFormData({ ...formData, tech_medium: newValue });
        }}
              renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Tech Medium'
                sx={{ 
                    width: 200,
                    }} 
              />
        )}
        />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  };

  export default InvestorProfileForm;
