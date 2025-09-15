import React, { useEffect, useState } from 'react';
import { talents as talentData } from '../Data/TalentData';
import Sort from '../FindJobs/Sort';
import TalentCard from './TalentCard';
import { getAllProfiles } from '../Services/ProfileService';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../Slices/FilterSlice';
import { resetSort } from '../Slices/SortSlice';

const Talents = () => {
  const [talents, setTalents] = useState([]);
  const filter = useSelector((state) => state.filter);
  const [filteredTalents, setFilteredTalents] = useState([]);
  const sort = useSelector((state)=>state.sort);
  const dispatch = useDispatch();

  useEffect(()=>{
       if(sort == "Experience (Low to High)"){
        setTalents([...talents].sort((a ,b)=> a.totalExp - b.totalExp));
      }
      else if(sort == "Experience (High to Low)"){
        setTalents([...talents].sort((a ,b)=> b.totalExp - a.totalExp));
      }
    },[sort])

  // Fetching talent profiles only once
  useEffect(() => {
    dispatch(resetFilter())
    dispatch(resetSort())
    getAllProfiles()
      .then((res) => {
        setTalents(res);
        setFilteredTalents(res); // Ensure initial state is set
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array ensures it runs only once

  // Filtering talents when `filter` state changes
  useEffect(() => {
    let filtered = talents;

    if (filter.name) {
      filtered = talents.filter((t) =>
        t.name?.toLowerCase().includes(filter.name.toLowerCase()));
    }
    if(filter["Job Title"] && filter["Job Title"].length>0){
      filtered = filtered.filter((talent) =>
        filter["Job Title"]?.some((title)=>talent.jobTitle.toLowerCase().includes(title.toLowerCase())));
    }
    if(filter["Location"] && filter["Location"].length>0){
      filtered = filtered.filter((talent) =>
        filter["Location"]?.some((location)=>talent.location.toLowerCase().includes(location.toLowerCase())));
    }
    if(filter.Skills && filter.Skills.length>0){
      filtered = filtered.filter((talent) =>
        filter.Skills?.some((skill)=>talent.skills?.some((talentSkill)=>talentSkill.toLowerCase().includes(skill.toLowerCase()))));
    }
    if(filter.exp && filter.exp.length>0){
      filtered = filtered.filter((talent)=>
        filter.exp[0]<=talent.totalExp && talent.totalExp<= filter.exp[1]);
    }

    setFilteredTalents(filtered);
  }, [filter, talents]); // Runs when `filter` or `talents` change

  return (
    <div className="px-5 py-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="flex mt-10 flex-wrap gap-5 justify-center">
        {
        filteredTalents.length?filteredTalents.map((talent, index) => (
          <TalentCard key={index} {...talent} />))
          :<div className='text-2xl font-semibold'> No Talents Found </div>
      }
      </div>
    </div>
  );
};

export default Talents;
