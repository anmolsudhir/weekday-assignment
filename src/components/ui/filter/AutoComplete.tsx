import {
  useAutocomplete,
  UseAutocompleteProps,
} from "@mui/base/useAutocomplete";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import "./AutoComplete.css";
import { top100Films } from "./Filters";
import Tag from "./Tag";

const Label = styled("label")`
  padding: 0 0 4px;
  font-size: 13px;
  line-height: 0.75;
  font-weight: 500;
  display: block;
`;

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 8px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

export default function AutoComplete(
  props: UseAutocompleteProps<
    (typeof top100Films)[number],
    boolean,
    false,
    false
  >,
) {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    ...other
  } = props;

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    getClearProps,
    value,
    dirty,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    ...props,
    getOptionLabel: (option) => option.title,
  });

  const noOptionSelected = !disableClearable && !disabled && dirty && !readOnly;

  return (
    <Box>
      <div {...getRootProps(other)}>
        {noOptionSelected && (
          <Label {...getInputLabelProps()}>Customized hook</Label>
        )}
        <Box
          component={"div"}
          ref={setAnchorEl}
          className={"input-wrapper " + (focused ? "focused" : "")}
        >
          {(value as typeof top100Films)?.map(
            (option: FilmOptionType, index: number) => (
              <Tag
                label={option.title}
                {...getTagProps({ index })}
                key={index}
              />
            ),
          )}
          {!noOptionSelected ? (
            <Typography
              variant="body2"
              fontSize={"12px"}
              fontWeight={300}
              color="text.secondary"
            >
              Label
            </Typography>
          ) : null}
          <input {...getInputProps()} />
          <Stack
            direction={"row"}
            spacing={1}
            display={"flex"}
            alignItems={"center"}
          >
            {noOptionSelected && (
              <button {...getClearProps()} className="clear-btn">
                <ClearRoundedIcon
                  fontSize="small"
                  className="autocomplete-icon-svg"
                />
              </button>
            )}
            <Divider orientation="vertical" variant="middle" flexItem />
            <KeyboardArrowDownRoundedIcon
              fontSize="small"
              className="autocomplete-icon-svg"
            />
          </Stack>
        </Box>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} className="list-box">
          {(groupedOptions as typeof top100Films).map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              key={index}
              style={{ padding: "10px" }}
            >
              <Typography variant="body2" fontWeight={200}>
                {option.title}
              </Typography>
            </li>
          ))}
        </Listbox>
      ) : null}
    </Box>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}
