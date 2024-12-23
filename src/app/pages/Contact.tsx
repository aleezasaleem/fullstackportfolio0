import { Box, Button, Container, Input, Stack, Text, Grid, GridItem, StackProps } from "@chakra-ui/react"; 
import { Field } from "@/components/ui/field";
import "../styles/Formstyle.css";
import Image from "next/image";
import Logo from "../images/ma.jpg";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Details",
        text: "Please fill in all fields.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://portfolio-6da77-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to store data in Firebase.");
      }

      const responseData = await res.json();
      Swal.fire({
        title: `Good Job ${name}!`,
        text: "We will contact you soon.",
        icon: "success",
      });
      setName("");
      setEmail("");
      setMessage("");
      console.log("Response Data: ", responseData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: error.message || "An unexpected error occurred.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="Contact" py={12}>
      <hr />
      <br />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <GridItem>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src={Logo}
              alt="Contact Illustration"
              width={500}
              height={500}
              layout="intrinsic"
            />
          </Box>
        </GridItem>

        <GridItem>
          <Box className="contact-form">
            {/* Correctly typed Stack component */}
            <Stack spacing={6}>
              <Text fontSize="3xl" fontWeight="bold">
                CONTACT DETAILS
              </Text>
              <Text className="contact-helper-text">
                Please provide your contact details below.
              </Text>

              <Field label="Name">
                <Input
                  className="contact-inputs"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Field>

              <Field label="Email Address">
                <Input
                  className="contact-inputs"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

              <Field label="Message">
                <Input
                  className="contact-inputs"
                  name="message"
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Field>

              <Button
                className="contact-button"
                onClick={submit}
                isLoading={loading}
                loadingText="Submitting"
                colorScheme="teal"
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Contact;
