import {
  useAutocomplete,
  UseAutocompleteProps,
} from "@mui/base/useAutocomplete";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { top100Films } from "./Filters";
import { Input, InputActions, InputWrapper } from "./Input";
import { Listbox } from "./Listbox";
import Tag from "./Tag";

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
    getPopupIndicatorProps,
    popupOpen,
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
      <Box {...getRootProps(other)} ref={setAnchorEl}>
        {noOptionSelected && (
          <Label {...getInputLabelProps()}>Customized hook</Label>
        )}
        <InputWrapper focused={focused}>
          {(value as typeof top100Films)?.map(
            (option: FilmOptionType, index: number) => (
              <Tag
                label={option.title}
                {...getTagProps({ index })}
                key={index}
              />
            ),
          )}
          <Input
            disabled={disabled}
            readOnly={readOnly}
            placeholder={!noOptionSelected ? "Label" : ""}
            getInputProps={getInputProps}
          />
          <InputActions
            focused={focused}
            noOptionSelected={noOptionSelected}
            popupOpen={popupOpen}
            getClearProps={getClearProps}
            getPopupIndicatorProps={getPopupIndicatorProps}
          />
        </InputWrapper>
      </Box>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof top100Films).map((option, index) => (
            <Box
              component={"li"}
              key={index}
              {...getOptionProps({ option, index })}
            >
              <Typography my={0.5} variant="body2" fontWeight={200}>
                {option.title}
              </Typography>
            </Box>
          ))}
        </Listbox>
      ) : null}
    </Box>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <label>{children}</label>;
}

interface FilmOptionType {
  title: string;
  year: number;
}
