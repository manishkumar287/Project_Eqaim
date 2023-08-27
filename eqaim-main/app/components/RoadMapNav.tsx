"use client";
import navbarStyle from "../styles/navbar.module.css";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const RoadMapNav = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/newfeedback");
  };
  return (
    <div className={navbarStyle.navbarcontainer}>
      <div className={navbarStyle.roadmapnav}>
        <Text className={navbarStyle.goback}>
          <ChevronLeftIcon /> <Link href="/allfeedback">Go Back</Link>{" "}
        </Text>
        <Heading className={navbarStyle.roadmapheading}>Roadmap</Heading>
      </div>
      <div>
        <Button
          className={navbarStyle.feedbtn}
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

export default RoadMapNav;
