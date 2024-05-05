import { Paper, Typography } from "@mui/material";

function JobCardChip() {
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: "20px",
        boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
        border: "1px solid rgb(230, 230, 230)",
        width: "fit-content",
        padding: "4px 6px",
        marginBottom: "12px",
      }}
    >
      <Typography variant="body1" sx={{ fontSize: 10 }} fontWeight={300}>
        ⏳ Posted Recently
      </Typography>
    </Paper>
  );
}

export default JobCardChip;
