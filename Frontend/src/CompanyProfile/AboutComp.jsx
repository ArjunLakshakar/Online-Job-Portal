import { companyData } from '../Data/CompanyData';

const AboutComp = ({ companyName }) => {
    const company = companyData[companyName];

    if (!company) {
      return <div className="text-red-500">Company data not found.</div>;
    }

    return (
      <div className="flex flex-col gap-5">
        
      {Object.keys(company).map((key, index) => (
          <div key={index}>
            <div className="text-xl mb-3 font-semibold">{key}</div>
              {key === "Website" ? (
              <div className="text-sm text-mine-shaft-300 text-justify">
                <a href={company[key]} target="_blank" rel="noopener noreferrer" className="text-bright-sun-400 underline">
                    {company[key]}
                </a>
                </div>
                ) : key === "Specialties" ? (
                  <div className="text-sm text-mine-shaft-300 text-justify">
                      {company[key].map((item, idx) => (
                          <span key={idx}>&bull; {item} </span>
                      ))}
                  </div>
                ) : (
                  <div className="text-sm text-mine-shaft-300 text-justify">{company[key]}</div>
                )}
                   </div>
                ))}
        </div>
    );
};

export default AboutComp;











// import React from 'react';
// import { companyData } from '../Data/CompanyData';

// const AboutComp = (props) => {
//   const company: { [key: string]: any } = companyData;

//   return (
//     <div className="flex flex-col gap-5" >
//       {Object.keys(company).map((key, index) => (
//         <div key={index}>
//           <div className="text-xl mb-3 font-semibold">{key}</div>
//           {key !== "Website" && (
//             <div className="text-sm text-mine-shaft-300 text-justify">
//               {key !== "Specialties"
//                 ? company[key]
//                 : company[key].map((item: string, idx: number) => (
//                     <span key={idx} >&bull; {item} </span>
//                   ))}
//             </div>
//           )}
//           {key === "Website" && (
//             <a
//               href={company[key]}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm text-bright-sun-400 text-justify"
//             >
//               {company[key]}
//             </a>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AboutComp;
