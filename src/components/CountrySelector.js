import React from "react";
import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";
import { Select, MenuItem } from "@material-ui/core";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("PAK");
  if (loading)
    return (
      <p style={{ color: "white", textAlign: "center", fontSize: 20 }}>
        Loading...
      </p>
    );
  if (error)
    return (
      <p style={{ color: "white", textAlign: "center", fontSize: 20 }}>
        Error...
      </p>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "#ffffff", textAlign: "center" }}>
        Currently Showing from {selectedCountry}
      </h1>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCountry}
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
        style={{
          margin: "2rem",
          color: "#ffffff",
          fontSize: 25,
          fontWeight: "bold"
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <MenuItem key={code} value={countries.iso3[code]}>
            {country}
          </MenuItem>
        ))}
      </Select>
      {!error && (
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        ></Stats>
      )}
    </div>
  );
}
