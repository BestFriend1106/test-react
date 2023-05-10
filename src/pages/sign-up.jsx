import { Link } from "react-router-dom";
import * as XLSX from 'xlsx'
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";

export function SignUp() {
  const [gender, handleGender] = useState("");
  const [vote, handleVote] = useState("");
  const [age, handleAge] = useState("");
  const [location, handleLocation] = useState("");
  const data = [
    gender,
    vote,
    age,
    location,
  ]
  function Submit () {
    
  }
  function setGender (event) {
    handleGender(event)
  }
  function setLocation (event) {
    handleLocation(event)
  }
  function setVote (event) {
    handleVote(event)
  }
  function setAge (event) {
    handleAge(event.target.value)
  }
  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Welcome to here
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input 
              variant="standard" 
              label="Age" 
              size="lg" 
              value = {age}
              onChange = {setAge}/>
            <Select 
              label = "Select Gender"
              value = {gender}
              onChange = {setGender}
              >
              <Option value = "1">Male</Option>
              <Option value = "2">Female</Option>
            </Select>
            <Select 
              label="Location"
              value = {location}
              onChange = {setLocation}>
              <Option value = "1">North</Option>
              <Option value = "2">South</Option>
              <Option value = "3">East</Option>
              <Option value = "4">Center</Option>
            </Select>
            <Select 
              label="Vote"
              value={vote}
              onChange={setVote}>
              <Option value = "1">Man1</Option>
              <Option value = '2'>Man2</Option>
            </Select>
          </CardBody>
          <CardFooter className="pt-0">
            <Button 
              variant="gradient" 
              fullWidth
              onClick={Submit}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
