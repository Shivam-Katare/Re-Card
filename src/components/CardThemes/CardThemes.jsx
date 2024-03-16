import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import useStore from "../../store";
import { themeOptions } from "../../lib/constant";
import { IoColorPaletteSharp } from "react-icons/io5";

export function CardTheme() {
  const setSelectedTheme = useStore(state => state.setSelectedTheme);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme.className);
  };

  return (
    <Menu>
      <MenuHandler>
        <div className="tooltip tooltip-bottom cursor-pointer" data-tip="Change Card Theme">
          <IoColorPaletteSharp className="text-[white] text-4xl" />
        </div>
      </MenuHandler>
      <MenuList className="max-h-72">
        {themeOptions.map((theme, index) => (
          <MenuItem key={index} onClick={() => handleThemeChange(theme)}>{theme.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
