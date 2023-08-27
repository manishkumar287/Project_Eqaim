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
import { ChevronDownIcon, AddIcon} from "@chakra-ui/icons";
import feedBackStyle from "../styles/newfeedback.module.css";
import { useState } from "react";
import { factchecktools_v1alpha1 } from "@/../../../node_modules/googleapis/build/src/index";
import { json } from "stream/consumers";
import {useRouter} from "next/navigation";


const NewFeedBack = () => {
  const [optionsState, setOptionsState] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  // const options = [
  //   { label: "Feature" },
  //   { label: "UI" },
  //   { label: "UX" },
  //   { label: "Enhancement" },
  //   { label: "Bug" },
  // ];

  const [headline,setHeadline]=useState("");
  const [disc,setDisc]=useState("");   //for discription

  const handleOptionsChange = (event: any) => {
    setOptionsState(event.target.value);
    setShowDropDown(!showDropDown);
  };

  const handleCardClick = () => {
    setShowDropDown(false);
  };
  
  const router=useRouter();

  const onSubmit= async (e)=>{
      e.preventDefault();
      // console.log(headline,disc);
      const obj={title:headline,category:optionsState,description:disc};

      const response=await fetch("http://localhost:8080/create",{method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(obj)});
      const abc= await response.json();
      router.push('/allfeedback')

      

  }

  return (
    <div>
      <div className={feedBackStyle.addicon}>
        <AddIcon className={feedBackStyle.addiconbtn} />
      </div>

      <form action="POST" onSubmit={onSubmit}>
           <Card className={feedBackStyle.card}>
        <CardHeader className={feedBackStyle.header}>
          <Heading className={feedBackStyle.feedbackHeading}>
            Create New Feedback
          </Heading>
          <div className={feedBackStyle.content}>
            <Heading className={feedBackStyle.feedbackTitle}>
              Feedback Title
            </Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Add a short, descriptive headline
            </Text>
            <input type="text" className={feedBackStyle.descriptionInput} 
            onChange={(e) => setHeadline(e.target.value)}/>
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

            <Heading className={feedBackStyle.feedbackTitle}>
              Feedback Detail
            </Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Include any specific comments on what should be
              improved,added,etc.
            </Text>
            <input type="text" className={feedBackStyle.detailInput}
            onChange={(e) => setDisc(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardFooter className={feedBackStyle.feedbackfooter}>
          <ButtonGroup spacing="4">
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
              type="submit"
            >
              Add Feedback
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
      </form>
    </div>
  );
};

export default NewFeedBack;
