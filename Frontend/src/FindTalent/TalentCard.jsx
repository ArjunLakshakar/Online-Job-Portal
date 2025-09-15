import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DateInput, TimeInput } from '@mantine/dates';
import { IconHeart, IconMapPin } from '@tabler/icons-react';
import { getProfile } from '../Services/ProfileService';
import { changeAppStatus } from '../Services/JobService';
import { successNotification, errorNotification } from '../Services/NotificationService';
import { formatInterviewTime, openBase64PDF } from '../Services/Utilities';

const TalentCard = (props) => {
    const { id } = useParams();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [opened, { open, close }] = useDisclosure(false);
    const [app, { open: openApp, close: closeApp }] = useDisclosure(false);
    const ref = useRef(null);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        if (props.applicantId) {
            getProfile(props.applicantId)
                .then((res) => {
                    setProfile(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setProfile(props);
        }
    }, [props]);

    const handleOffer = (status) => {
        let interview = {
            id,
            applicantId: profile?.id,
            applicationStatus: status,
            interviewTime: date,
        };

        if (status === "INTERVIEWING" && time) {
            const [hours, minutes] = time.split(":").map(Number);
            if (date) {
                date.setHours(hours, minutes);
                interview = { ...interview, interviewTime: date };
            }
        }

    changeAppStatus(interview)
        .then(() => {
            if (status === "INTERVIEWING") successNotification("Interview Scheduled", "Interview Scheduled Successfully");
            else if (status === "OFFERED") successNotification("Offered", "Offer has been Sent Successfully");
            else successNotification("Rejected", "Applicant has been Rejected");
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
            errorNotification("Error", err.response?.data?.errorMessage || "Something went wrong");
        });
    };

    const openResume = (resume) => {
        if (!resume) return;

        if (resume.startsWith("data:application/pdf;base64,")) {
            openBase64PDF(resume.split(",")[1]); // Pass only the Base64 data
        } else {
            window.open(resume, "_blank"); // Directly open URL
        }
    };

    return (
        <div className="bg-mine-shaft-700 w-96 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0__5px_1px_yellow] !shadow-bright-sun-400  bs-mx:w-[48%]  md-mx:w-full">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 rounded-full bg-mine-shaft-800">
                    <Avatar 
                        size="lg" 
                        src={profile?.picture ? `data:image/jpeg;base64,${profile.picture}` : "/avatar-9.png"} 
                        onError={(e) => (e.target.src = "avatar-9.png")}
                        alt="Profile Picture"
                    />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-lg">{profile.name}</div>
                        <div className="text-sm text-mine-shaft-300">{profile.jobTitle} &#x2022; {profile.company} </div>
                    </div>
                </div>
                <IconHeart className="cursor-pointer text-mine-shaft-300" stroke={1.5} />
            </div>

            <div className="flex gap-2 flex-wrap">
                {profile?.skills?.slice(0, 4).map((skill, index) => (
                    <div key={index} className="py-1 p-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
                        {skill}
                    </div>
                ))}
            </div>

            <div>
                <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                    {profile.about}
                </Text>
            </div>

            <Divider color="mineShaft.4" size="sm" mx="md" />

            {props.invited ? (
                <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                    <FontAwesomeIcon icon={faCalendar} />
                    Interview: {formatInterviewTime(props.interviewTime)}
                </div>
            ) : (
                <div className="flex justify-between">
                    <div className="text-mine-shaft-300">Exp: {props.totalExp || 1} Years</div>
                    <div className="flex text-xs gap-1 items-center text-mine-shaft-300">
                        <IconMapPin className="h-5 w-5" /> {profile?.location}
                    </div>
                </div>
            )}

            <Divider color="mineShaft.4" size="sm" mx="md" />

            <div className="flex items-center [&>*]:w-1/2 [&>*]:p-1">
                {!props.invited && (
                    <>
                        <Link to={`/talent-profile/${profile?.id}`}>
                            <Button variant="outline" color="brightSun.4" fullWidth>
                                Profile
                            </Button>
                        </Link>
                        {props.posted ? (
                            <Button onClick={open} rightSection={<FontAwesomeIcon icon={faCalendar} />} variant="light" color="brightSun.4" fullWidth>
                                Schedule
                            </Button>
                        ) : (
                            <Button variant="light" color="brightSun.4" fullWidth>
                                Message
                            </Button>
                        )}
                    </>
                )}
                {
                    props.invited&& <>
                    <div>
                    <Button variant="outline" onClick={()=>handleOffer("OFFERED")} color="brightSun.4" fullWidth>
                        Accept
                    </Button>
                    </div>
                    <div>
                    <Button variant="light" color="brightSun.4" onClick={()=>handleOffer("REJECTED")} fullWidth>
                        Reject
                    </Button>
                    </div>
                    
                    </>
                }
            </div> 

            {(props.invited || props.posted) && (
                <Button onClick={openApp} variant="light" color="brightSun.4" autoContrast fullWidth>
                    View Application
                </Button>
            )}

            <Modal opened={app} onClose={closeApp} radius="lg" title="Application" centered>
                <div className="flex flex-col gap-4">
                    <div>Email: <a className="text-bright-sun-400 hover:underline cursor-pointer" href={`mailto:${props.email}`}>{props.email}</a></div>
                    <div>Website: <a target="_blank" className="text-bright-sun-400 hover:underline cursor-pointer" href={props.website}>{props.website}</a></div>
                    <div>Resume: <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={() => openResume(props.resume)}>{props.name}</span></div>
                    <div>Cover Letter: &emsp; <div> {props.coverLetter} </div></div>
                   
                </div>
            </Modal>

        <Modal opened={opened} onClose={close} radius="lg" title="Schedule Interview" centered>
        <div className="flex flex-col gap-4">
          <DateInput value={date} onChange={setDate} minDate={new Date()} label="Date" placeholder="Enter Date" />
          
          <TimeInput label="Time" value={time} onChange={(event) => setTime(event.currentTarget.value)} ref={ref} minTime=""
            onClick={() => ref.current?.showPicker()}
          />

          <Button onClick={() => handleOffer("INTERVIEWING")} color="brightSun.4" variant="light" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
        </div> 
    );
};

export default TalentCard;

