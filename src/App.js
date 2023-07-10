import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./App.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
import { Shield } from "@mui/icons-material";

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pixelmon Tactics</h1>
      </header>
      <div className="pokemonSearchBar">
        <TextField
          label="Pokemon o id"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CatchingPokemonIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Grid container>
        <Grid item xs={6}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            height={200}
            width={200}
            alt="Imagen Pokemon"
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel>Forma</InputLabel>
            <Select
              id="form-selector"
              value="Charizard"
              label="Forma"
              fullWidths
            >
              <MenuItem value={"Charizard"}>Charizard</MenuItem>
              <MenuItem value={"Mega Charizard"}>Mega Charizard</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {
          //Lado derecho
        }
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={4}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3892/3892597.png"
                style={{ width: "100%" }}
              />
              <h1>Fisico</h1>
            </Grid>
            <Grid item xs={4}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8024/8024108.png"
                style={{ width: "100%" }}
              />
              <h1>Especial</h1>
            </Grid>
            <Grid item xs={4}>
              <img
                src="https://static.thenounproject.com/png/89837-200.png"
                style={{ width: "100%" }}
              />
              <h1>4</h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
