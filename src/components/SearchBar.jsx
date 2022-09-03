import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';

import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function SearchBar() {
  return (
    <Box
      sx={{
        display: {
          sm: "flex",
          xs: "none",
        },
        width: {
          sm: "30%",
          md: "70%",
        },
      }}
    >
      
        <FormControl sx={{ width: "50%" }}>
          <OutlinedInput placeholder="Search" />
          <FormHelperText />
        </FormControl>{" "}
      
      <Button
        variant="outlined"
        sx={{ color: "gray", borderColor: "gray", borderRadius: 1 }}
      >
        <SearchOutlinedIcon />
      </Button>
    </Box>
  );
}

export default SearchBar;
