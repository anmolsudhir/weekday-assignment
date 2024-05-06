import {
  useAutocomplete,
  UseAutocompleteProps,
} from "@mui/base/useAutocomplete";
import { Box, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { Input, InputActions, InputWrapper } from "./Input";
import { Listbox } from "./Listbox";
import { FilterIdType, OptionsType } from "@/lib";
import Tag from "./Tag";
import { useAppDispatch } from "@/redux";
import { filterIdToReducerMapping } from "@/config/siteConfig";

export default function AutoComplete(
  props: UseAutocompleteProps<OptionsType[number], boolean, false, false> & {
    lable: string;
    filterId: FilterIdType;
  },
) {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    multiple,
    lable,
    options,
    filterId,
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
    id: "customized-hook",
    ...props,
    getOptionLabel: (option) => `${option}`,
  });

  const dispatch = useAppDispatch();
  const noOptionSelected = !disableClearable && !disabled && dirty && !readOnly;

  useEffect(() => {
    dispatch(filterIdToReducerMapping[filterId](value));
    // eslint-disable-next-line
  }, [value]);

  return (
    <Box>
      <Box {...getRootProps(other)} ref={setAnchorEl}>
        {noOptionSelected ? (
          <Label {...getInputLabelProps()}>{lable}</Label>
        ) : (
          <Box sx={{ height: "20px", opacity: 0 }} />
        )}
        <InputWrapper focused={focused}>
          {multiple
            ? (value as typeof options)?.map((option, index: number) => (
                <Tag
                  label={`${option}`}
                  {...getTagProps({ index })}
                  key={index}
                />
              ))
            : null}
          <Input
            disabled={disabled}
            readOnly={readOnly}
            placeholder={!noOptionSelected ? `Select ${lable}` : ""}
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
          {(groupedOptions as typeof options).map((option, index) => (
            <Box
              component={"li"}
              {...getOptionProps({ option, index })}
              key={index}
            >
              <Typography my={0.5} variant="body2" fontWeight={200}>
                {option}
              </Typography>
            </Box>
          ))}
        </Listbox>
      ) : null}
    </Box>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <Box component={"label"} fontSize={"13px"} fontWeight={400}>
      {children}
    </Box>
  );
}
