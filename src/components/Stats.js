import React from "react";
import useStats from "../utils/useStats";
import { Grid, Paper, Container } from "@material-ui/core";

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading)
    return (
      <p style={{ color: "white", textAlign: "center", fontSize: 20 }}>
        Loading...
      </p>
    );
  if (error)
    return (
      <p style={{ color: "white", textAlign: "center", fontSize: 20 }}>
        No data found for this Country.
      </p>
    );
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <div className="gridContent">
          <h3>Confirmed</h3>
          <span>{stats.confirmed.value}</span>
        </div>
        <Paper></Paper>
      </Grid>
      <Grid item xs={4}>
        <div className="gridContent">
          <h3>Deaths</h3>
          <span>{stats.deaths.value}</span>
        </div>
        <Paper></Paper>
      </Grid>
      <Grid item xs={4}>
        <div className="gridContent">
          <h3>Recovered</h3>
          <span>{stats.recovered.value}</span>
        </div>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
}
