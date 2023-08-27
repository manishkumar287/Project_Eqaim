"use client";
import {
  Card,
  CardHeader,
  Image,
  StackDivider,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

import { ChatIcon, ChevronUpIcon,EditIcon} from "@chakra-ui/icons";
import feedBackStyle from "../styles/newfeedback.module.css";
import { useState } from "react";
import AddComment from "./AddComment";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';


const EditFeedBack = () => {
   const router = useRouter();
  // console.log(props.router.query._id);
  const [optionsState, setOptionsState] = useState("");
  const [status, setStatus] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [headline,setHeadline]=useState("");
  const [disc,setDisc]=useState("");   //for discription
  // const options = [
  //   { label: "Feature" },
  //   { label: "UI" },
  //   { label: "UX" },
  //   { label: "Enhancement" },
  //   { label: "Bug" },
  // ];

  const handleOptionsChange = (event: any) => {
    setOptionsState(event.target.value);
    setShowDropDown(!showDropDown);
  };

  const handleCardClick = () => {
    setShowDropDown(false);
  };

  const [id,setId]=useState();
 
   const {pathname}=router;
  useEffect(() => {
        
        getFeedbackById();
        
    }, []);

  
  const getFeedbackById=async()=>{
    
       const response=await fetch(`http://localhost:8080/editfeedback?_id=${window.location.search.split('=')[1]}`);
      const abc= await response.json(); 
      console.log(abc);
      setHeadline(abc.data.title);
      setDisc(abc.data.description);
      setStatus(abc.data.status);
      setOptionsState(abc.data.category);      
  }

  const handleEdit=async()=>{
   
    const obj = {title:headline,category:optionsState,status:status,description:disc};
       const response=await fetch("http://localhost:8080/editfeedback",{method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({_id:window.location.search.split('=')[1],obj})});
      const abc= await response.json(); 
       console.log(abc);
       router.push('/allfeedback')
      
  }


  return (
    <div>
      <div className={feedBackStyle.addicon}>
        <EditIcon className={feedBackStyle.addiconbtn} />
      </div>
       

      <Card className={feedBackStyle.card}>
        <CardHeader className={feedBackStyle.header}>
          <Heading className={feedBackStyle.feedbackHeading}>
            Editing {headline}
          </Heading>
          <div className={feedBackStyle.content}>
            <Heading className={feedBackStyle.feedbackTitle}>
              Feedback Title
            </Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Add a short, descriptive headline
            </Text>
            <input type="text" className={feedBackStyle.descriptionInput} value={headline} onChange={(e)=>{
                setHeadline(e.target.value);
            }}
            />
            <Heading className={feedBackStyle.feedbackTitle}>Category</Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Choose a Category for your feedback
            </Text>
            <select
              className={feedBackStyle.descriptionInput}
              type="text"
              value={optionsState}
              // onClick={() => setShowDropDown(!showDropDown)}
              onChange={(e)=>{setOptionsState(e.target.value)}}
            >
              <option value="Feature">
                Feature
              </option>
              <option value="UI">
                UI
              </option>
              <option value="UX">
                UX
              </option>
              <option value="Enhancement">
                Enhancement
              </option>
              <option value="Bug">
                Bug
              </option>
              </select>
              <Heading className={feedBackStyle.feedbackTitle}>Update Status</Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Choose a Category for your feedback
            </Text>
            <select
              className={feedBackStyle.descriptionInput}
              type="text"
              value={status}
              // onClick={() => setShowDropDown(!showDropDown)}
              onChange={(e)=>{setStatus(e.target.value)}}
            >
              <option value="Planned">
                Planned
              </option>
              <option value="In-Process">
                In-Process
              </option>
              <option value="Live">
                Live
              </option>
              </select>
            
            <Heading className={feedBackStyle.feedbackTitle}>
              Feedback Detail
            </Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Include any specific comments on what should be
              improved,added,etc.
            </Text>
            <input type="text" className={feedBackStyle.detailInput} value={disc} onChange={(e)=>{
                setDisc(e.target.value);
            }}/>
          </div>
        </CardHeader>
        <CardFooter className={feedBackStyle.feedbackfooter}>
          <ButtonGroup spacing="4">
            <Button
              className={feedBackStyle.deletebtn}
              variant="solid"
              colorScheme="red"
              
            >
              Delete
            </Button>
            <Button
              className={feedBackStyle.cancelbtn}
              variant="solid"
              colorScheme="blue"
              onClick={()=>router.push('/allfeedback')}
            >
              Cancel
            </Button>
            <Button
              className={feedBackStyle.addfeedback}
              variant="solid"
              color="white"
              backgroundColor="#AD1FEA"
              onClick={handleEdit}
            >
              Edit Feedback
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      {
        showDropDown && (
          <Card
            className={feedBackStyle.selectOptions}
            onClick={handleCardClick}
          >
            <CardBody>
              <Stack divider={<StackDivider />} spacing="2">
                {options.map((option) => (
                  <Text pt="1" key={option.label} fontSize="sm">
                    {option.label}
                  </Text>
                ))}
              </Stack>
            </CardBody>
          </Card>
        )
                // {options.map((option) => (
        //   <option id={feedBackStyle.options} key={option.label}>
        //     {option.label}
        //   </option>
        // ))}
      }
     
    </div>

  );
};

export default EditFeedBack;
