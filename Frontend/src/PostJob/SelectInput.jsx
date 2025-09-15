import { useEffect, useState } from "react";
import { Combobox, InputBase, ScrollArea, useCombobox } from "@mantine/core";

const SelectInput = (props) => {
  const [data, setData] = useState(props.options || []); // Initialize with options
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => { 
    setData(props.options || []);
    setValue(props.form.getInputProps(props.name).value);
    setSearch(props.form.getInputProps(props.name).value);
  }, [props.options, props.form, props.name]);
  

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  // Check if search input exactly matches an existing option
  const exactOptionMatch = data.some(
    (item) => item.toLowerCase() === search?.toLowerCase()
  );

  // Filter options based on search input
  const filteredOptions = exactOptionMatch
    ? data
    : data.filter((item) =>
        item.toLowerCase().includes(search?.toLowerCase().trim())
      );

  // Generate option components
  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      
      withinPortal={false}
      onOptionSubmit={(val) => {
        if (val === "$create") {
          const newData = [...new Set([...data, search])]; // Ensure unique entries
          setData(newData);
          setValue(search);
          props.form.setFieldValue(props.name, search);
        } else {
          setValue(val);
          setSearch(val);
          props.form.setFieldValue(props.name, val);
        }
        console.log("Selected Option:", val);
        console.log("Updated Data State:", data);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
        {...props.form.getInputProps(props.name)} 
          withAsterisk
          label={props.label}
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || "");
          }}
          placeholder={props.placeholder}
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown bg="mineShaft.10">
        <Combobox.Options>
          <ScrollArea.Autosize mah={200} type="scroll">
            {options}
            {!exactOptionMatch && search?.trim().length > 0 && (
              <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
            )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
