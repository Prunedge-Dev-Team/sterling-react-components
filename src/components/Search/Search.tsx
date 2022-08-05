import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import theme from "../theme";

interface IsearchProps {
  searchText: string;
  placeholderText: string;
  onChangeText: any;
}

function CustomSearch(props: IsearchProps) {
  const { searchText, onChangeText, placeholderText } = props;

  return (
    <TextField
      size="small"
      variant="standard"
      sx={{ padding: theme.spacing(1), border: "none" }}
      placeholder={placeholderText}
      fullWidth
      value={searchText}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => onChangeText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key !== "Escape") {
          e.stopPropagation();
        }
      }}
    />
  );
}

export default CustomSearch;
