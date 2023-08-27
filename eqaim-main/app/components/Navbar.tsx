"use client";
import navbarStyle from "../styles/navbar.module.css";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardBody,
  Text,
  Divider,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import {ChevronDownIcon} from "@chakra-ui/icons"


const Navbar = (props) => {
  const [sortData, setSortData] = useState("Most Upvotes");
  const [showSort, setShowSort] = useState(false);
  const router = useRouter();
  const handleRoute = ()=>{
    router.push("/newfeedback")
  }

  console.log("suggestion",props.suggestion);
  


  return (
    <div className={navbarStyle.navbarContainer}>
      <div className={navbarStyle.navleft}>
        <div>
          <Text className={navbarStyle.text}>{props?.suggestion?.length || 0} Suggestions </Text>
        </div>
        <div style={{position: "relative"}}>
          <Text
            className={navbarStyle.sorttext}
            onClick={() => setShowSort(!showSort)}
          >
            Sort By: {sortData} <ChevronDownIcon />
          </Text>
        {showSort && (
          <Card className={navbarStyle.listCard}>
            <CardBody>
              <ul className={navbarStyle.list}>
                <Stack divider={<StackDivider />} spacing="2">
                  <li
                    style={{
                      color:
                        sortData === "Most Upvotes" ? "#AD1FEA" : "#647196",
                    }}
                    className={navbarStyle.listitems}
                    onClick={() => {
                      setSortData("Most Upvotes");
                      setShowSort(false);
                    }}
                  >
                    Most Upvotes
                  </li>
                  <li
                    style={{
                      color:
                        sortData === "Least Upvotes" ? "#AD1FEA" : "#647196",
                    }}
                    className={navbarStyle.listitems}
                    onClick={() => {
                      setSortData("Least Upvotes");
                      setShowSort(false);
                    }}
                  >
                    Least Upvotes
                  </li>

                  <li
                    style={{
                      color:
                        sortData === "Most Comments" ? "#AD1FEA" : "#647196",
                    }}
                    className={navbarStyle.listitems}
                    onClick={() => {
                      setSortData("Most Comments");
                      setShowSort(false);
                    }}
                  >
                    Most Comments
                  </li>

                  <li
                    style={{
                      color:
                        sortData === "Least Comments" ? "#AD1FEA" : "#647196",
                    }}
                    className={navbarStyle.listitems}
                    onClick={() => {
                      setSortData("Least Comments");
                      setShowSort(false);
                    }}
                  >
                    Least Comments
                  </li>
                </Stack>
              </ul>
            </CardBody>
          </Card>
        )}
        </div>
      </div>
      <div className={navbarStyle.navright}>
        {" "}
        <Button
          className={navbarStyle.feedbackbtn}
          variant="solid"
          color="white"
          backgroundColor="#AD1FEA"
          onClick={handleRoute}
        >
          + Add Feedback
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
