import { Box, InputProps } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { Input, InputWrapper } from "./Input";
import { FilterIdType } from "@/lib";
import { useAppDispatch } from "@/redux";
import { filterIdToReducerMapping } from "@/config/siteConfig";
import { debounceSearch } from "@/lib";

export default function SearchInput(
  props: InputProps & {
    lable: string;
    filterId: FilterIdType;
  },
) {
  const { lable, filterId } = props;
  const [value, setValue] = useState<string | null>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debouncedFunc = debounceSearch(handleOnChange, 500);

  useEffect(() => {
    dispatch(filterIdToReducerMapping[filterId](value));
    // eslint-disable-next-line
  }, [value]);

  return (
    <Box>
      <Box>
        {value?.length ? (
          <Label>{lable}</Label>
        ) : (
          <Box sx={{ height: "20px", opacity: 0 }} />
        )}
        <InputWrapper focused={focus}>
          <Input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={debouncedFunc}
            variant="search"
            placeholder={!value?.length ? `Search ${lable}` : ""}
          />
        </InputWrapper>
      </Box>
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
