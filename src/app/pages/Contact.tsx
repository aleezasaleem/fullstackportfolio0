"use client";
import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field"; // Assuming you're using a custom field component
import "../styles/Formstyle.css";
import Image from "next/image";
import Logo from "../images/ma.jpg";
import { useState } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  // Initialize state with empty strings to avoid uncontrolled input
  const [name, setName] = useState(""); // Start with an empty string
  const [email, setEmail] = useState(""); // Start with an empty string
  const [message, setMessage] = useState(""); // Start with an empty string
  const [loading, setLoading] = useState(false); // To handle loading state

  // Handle form submission and send data to Firebase
  const submit = async () => {
    if (name && email && message) {
      setLoading(true); // Set loading to true while submitting

      try {
        // Send data to Firebase Realtime Database
        const res = await fetch(
          `
https://contact-d435a-default-rtdb.firebaseio.com/UserData.json`, // Make sure this URL is correct
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
            }),
          }
        );

        // Check if the request was successful
        const responseData = await res.json(); // Get response data for debugging

        if (res.ok) {
          // alert("Data successfully stored in Firebase!");
          Swal.fire({
            title: `Good Job ${name}`,
            text: "Will Contact You Soon",
            icon: "success",
          });

          console.log("Response Data: ", responseData); // Log the response data from Firebase
          setName("");
          setEmail("");
          setMessage("");
        } else {
          throw new Error(
            responseData.error || "Failed to store data in Firebase"
          );
        }
      } catch (error) {
        alert(error.message || "An error occurred while submitting the form.");
      } finally {
        setLoading(false);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Please fill in all fields.",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <Container id="Contact" py={12}>
      <hr />
      <br />

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }} // 1 column on small screens, 2 columns on medium and larger
        gap={6}
      >
        {/* Left Column (Image) */}
        <GridItem>
          <br />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src={Logo}
              alt="Contact Illustration"
              width={500} // Adjust image width as needed
              height={500} // Adjust image height as needed
              layout="intrinsic" // This will maintain the aspect ratio of the image
            />
          </Box>
        </GridItem>

        {/* Right Column (Form) */}
        <GridItem>
          <Box className="contact-form">
            <Stack spacing={6}>
              <Text textStyle={"3xl"}>CONTACT DETAILS</Text>
              <Text className="contact-helper-text">
                Please provide your contact details below.
              </Text>

              {/* Form Fields */}
              <div>
                <Field label="Name">
                  <Input
                    className="contact-inputs"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.currentTarget.value);
                    }}
                  />
                </Field>
                <br />

                <Field label="Email Address">
                  <Input
                    className="contact-inputs"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                    }}
                  />
                </Field>
                <br />
                <Field label="Message">
                  <Input
                    className="contact-inputs"
                    placeholder="Message"
                    name="message"
                    type="text"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.currentTarget.value);
                    }}
                  />
                </Field>
                <br />

                {/* Submit Button */}
                <Button
                  className="contact-button"
                  onClick={submit} // On click, call submit function
                  isLoading={loading} // Show loading spinner if submitting
                >
                  Submit
                </Button>
              </div>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Contact;
