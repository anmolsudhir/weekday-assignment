import CloseIcon from "@mui/icons-material/Close";
import { AutocompleteGetTagProps, Box, Typography } from "@mui/material";
import "./css/Tag.css";

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <Box {...other} className="autoselect-tag">
      <Typography variant="body2" fontWeight={200} fontSize={"12px"}>
        {label}
      </Typography>
      <CloseIcon onClick={onDelete} className="close-btn" />
    </Box>
  );
}

export default Tag;
