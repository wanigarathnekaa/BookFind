import React from "react";
import Navbar from "../components/Navbar";
import { TextField, Button, Box } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';

const BooksPage = () => {
  return (
    <div>
      <Navbar />
      <Box display="flex" justifyContent="center" m={2}>
        <TextField label="Search" variant="outlined" style={{width: '40%'}} />
        <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
          Search
        </Button>
      </Box>
    </div>
  );
};

export default BooksPage;
