import { Badge, Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import JobDesc from '../JobDesc/JobDesc'
import TalentCard from '../FindTalent/TalentCard'

const PostedJobDesc = (props) => {
    const [tab,setTab] = useState("overview");
    const [arr,setArr] =useState([]);
    const handleTabChange=(value)=>{
        setTab(value);
         if(value=="applicants"){
            setArr(props.applicants?.filter((x) => x.applicationStatus === "APPLIED"));
        }else if(value=="invited"){
            setArr(props.applicants?.filter((x)=>x.applicationStatus=="INTERVIEWING"));
        }else if(value=="offered"){
            setArr(props.applicants?.filter((x) => x.applicationStatus === "OFFERED"));
        }else if(value=="rejected"){
            setArr(props.applicants?.filter((x) => x.applicationStatus === "REJECTED"));
        }
    }
    useEffect(()=>{
        handleTabChange("overview")
    },[props])
    
  return (
    <div className='mt-5 w-3/4 px-5  md-mx:w-full  md-mx:p-0' > 
      {props.jobTitle ? (
        <>
          <div className='text-2xl font-semibold flex items-center  xs-mx:text-xl'>
            {props.jobTitle} 
            <Badge variant="light" ml="sm" color='brightSun.4' size="sm"> 
              {props.jobStatus}
            </Badge> 
          </div>
          <div className='font-medium text-mine-shaft-400 mb-5  xs-mx:text-sm'>{props.location}</div>
          <div>
            <Tabs variant="outline" color="mineShaft.3" value={tab} onChange={handleTabChange} radius="lg">
              <Tabs.List className='font-semibold mb-5 [&_button]:!text-lg [&_button[data-active="true"]]:!text-bright-sun-400  sm-mx:[&_button]:!text-lg   xs-mx:[&_button]:!text-base  xs-mx:[&_button]:!px-1.5  xs-mx:font-medium  xs-mx:[&_button]:!py-1.5  xsm-mx:[&_button]:!text-s'>
                <Tabs.Tab value="overview">Overview </Tabs.Tab>
                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="invited">Invited </Tabs.Tab>
                <Tabs.Tab value="offered">Offered</Tabs.Tab>
                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview" className='[&>div]:w-full'>
                <JobDesc {...props} closed={props.jobStatus === "CLOSED"} edit={true} />
              </Tabs.Panel>

              <Tabs.Panel value="applicants">
                <div className='flex flex-wrap mt-10 gap-5 justify-around'>
                  {
                    arr?.length?arr
                    .map((talent, key) =>
                      <TalentCard key={key} {...talent} posted />)
                    :<div className='text-2xl font-semibold text-mine-shaft-400' >No Applicants</div>
                }
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="invited">
                <div className='flex flex-wrap mt-10 gap-5 justify-around'>
                  {
                  arr?.length?arr
                    .map((talent, key) =>
                      <TalentCard key={key} {...talent} invited />)
                      :<div className='text-2xl font-semibold text-mine-shaft-400' >No Invited Candidates</div>
                  }
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="offered">
                <div className='flex flex-wrap mt-10 gap-5 justify-around'>
                  {
                   arr?.length?arr 
                    .map((talent, key) => 
                      <TalentCard key={key} {...talent} offered />)
                    :<div className='text-2xl font-semibold text-mine-shaft-400' >No Offered Candidated</div>
                  }
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="rejected">
                <div className='flex flex-wrap mt-10 gap-5 justify-around'>
                  {
                  arr?.length?arr
                    .map((talent, key) => 
                      <TalentCard key={key} {...talent} rejected />)
                    :<div className='text-2xl text-mine-shaft-400 font-semibold' >No Rejected Candidated</div>
                  }
                </div>

              </Tabs.Panel>

            </Tabs>
          </div>
        </>
      ) : (
        <div className='text-2xl font-semibold min-h-[70vh] flex justify-center items-center'>
          No job Selected 
        </div>
      )}
    </div>
  )
}

export default PostedJobDesc
