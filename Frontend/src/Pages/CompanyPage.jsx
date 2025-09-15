import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Drawer } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Company from '../CompanyProfile/Company'
import SimilarCompanies from '../CompanyProfile/SimilarCompanies'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

const CompanyPage = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      {/* <Button onClick={() => navigate(-1)} className="my-4" leftSection={<FontAwesomeIcon size={20} icon={faArrowLeft} />} variant="outline"  color="brightSun.4"> Back </Button> */}
      
      { matches && <div className="flex justify-end"> <Button className='items-end justify-end mb-2' mt='1'  variant="light" size='md' autoContrast color='brightSun.4' onClick={open}> Similar Companies </Button> </div>}
      <Drawer opened={opened} onClose={close} size={250} position="right" title="Similar Companies">
       <SimilarCompanies />
      </Drawer>

      <div className="flex gap-5 justify-between">
        <Company /> {/* Ensure this correctly fetches & displays data */}
        {
          !matches && <SimilarCompanies />
        }  
      </div>
      
    </div>
  )
}

export default CompanyPage;











// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button } from '@mantine/core'
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Company from '../CompanyProfile/Company'
// import SimilarCompanies from '../CompanyProfile/SimilarCompanies'

// const CompanyPage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        
//         <Button onClick={()=>navigate(-1)}  my="md" leftSection={<FontAwesomeIcon size={20} icon={faArrowLeft}/>} variant="outline" color="brightSun.4"> Back </Button>
        
//         <div className='flex gap-5 justify-between'>
//           <Company/>
//           <SimilarCompanies/>
    
//         </div>
        
//     </div>
//   )
// }

// export default CompanyPage
