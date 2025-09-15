import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders';
import { useDispatch } from 'react-redux';
import { updateSort } from '../Slices/SortSlice';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];
const talentSort = ['Relevance', 'Experience (Low to High)', 'Experience (High to Low)'];

const Sort=(props)=> {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = props.sort=="job"?opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  )): talentSort.map((item)=>(
      <Combobox.Option className='!text-xs' value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>

      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(updateSort(val))
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          
          <div onClick={()=>combobox.toggleDropdown()} className='cursor-pointer border text-sm border-bright-sun-400 flex items-center px-2 py-1 rounded-xl gap-2  xs-mx:text-xs  xs-mx:px-1  xs-mx:py-0  xsm-mx:mt-2'>
            {selectedItem} <FontAwesomeIcon className='text-bright-sun-400 h-5 w-5 ' icon={faSliders} />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default Sort