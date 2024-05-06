import { Box, Stack, Divider } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { InputProp, InputActionsProps, InputWrapperProps } from "@/lib";
import "./css/Input.css";

export function InputWrapper({ focused, children }: InputWrapperProps) {
  return (
    <Box
      component={"div"}
      className={"input-wrapper " + (focused ? "focused" : "")}
    >
      {children}
    </Box>
  );
}

export function Input(props: InputProp) {
  const { getInputProps, ...others } = props;
  return (
    <input {...getInputProps()} {...others} className="autocomplete-input" />
  );
}

export function InputActions({
  noOptionSelected,
  focused,
  getClearProps,
  getPopupIndicatorProps,
  popupOpen,
}: InputActionsProps) {
  return (
    <Stack direction={"row"} spacing={1} display={"flex"} alignItems={"center"}>
      {noOptionSelected && (
        <Box component={"button"} {...getClearProps()} className="clear-btn">
          <ClearRoundedIcon
            fontSize="small"
            className={"autocomplete-icon-svg " + (focused ? "focus" : "")}
          />
        </Box>
      )}
      <Divider orientation="vertical" flexItem />
      <Box
        {...getPopupIndicatorProps()}
        className={"popup-btn " + (popupOpen ? "popupOpen" : undefined)}
        component={"button"}
      >
        <KeyboardArrowDownRoundedIcon
          fontSize="small"
          className={"autocomplete-icon-svg " + (focused ? "focus" : "")}
        />
      </Box>
    </Stack>
  );
}
