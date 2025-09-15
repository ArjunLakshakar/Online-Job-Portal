import React, { useEffect, useState } from 'react';
import { Checkbox, CheckIcon, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../Slices/FilterSlice';


const MultiInput = (props) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(()=>{
    setData(props.options);
  },[])
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex(),
  });

  const exactOptionMatch = data.some((item) => item.toLowerCase() === search.trim().toLowerCase());

  const handleValueSelect = (val) => {
    setSearch('');
    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
      dispatch(updateFilter({[props.title] : [...value, search]}));
    } else {
      dispatch(updateFilter({ [props.title] : value.includes(val)?value.filter((v)=> v !== val) : [...value, val]}));
      
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val) => {
    setValue((current) => current.filter((v) => v !== val));
    dispatch(updateFilter({ [props.title] : value.filter((v) => v !==val)}));
    }

  const values = value
    .slice(0,1 )
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  const options = data.filter((item) => item.toLowerCase().includes(search.trim().toLowerCase())).map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)}>
      <Group gap="sm">
        <Checkbox size='xs' color='brightSun.4'
          checked={value.includes(item)}
          onChange={() => {}}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <span className='text-mine-shaft-300'>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput variant='unstyled' rightSection={<FontAwesomeIcon icon={faSort} />} onClick={() => combobox.toggleDropdown()} 
        leftSection={
          <div className='text-bright-sun-400 p-1 bg-mine-shaft-600 rounded-full mr-1'> <FontAwesomeIcon icon={props.icon}/> </div>
        }>

<Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && (
                  <Pill>+{value.length - 1} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className='!text-mine-shaft-300'>{props.title}</Input.Placeholder>
            )}
          </Pill.Group>

        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
      <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder={props.title}
          />
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
        
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;

