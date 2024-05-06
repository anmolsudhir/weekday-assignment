import { autocompleteClasses } from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";

export const Listbox = styled("ul")(
  () => `
  width: 300px;
  margin: 8px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: white;
  overflow: auto;
  max-height: 250px;
  border: 1px solid #dadada;
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
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: #ddebff;
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);
