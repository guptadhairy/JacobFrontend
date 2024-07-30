import { Heading, Stack, VStack,  List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'; // You can use any icon from Chakra UI or import your own
import React from 'react';
import dhiru from "../assets/jac2.jpg";
import "../styles/home.css";

const AboutUs = () => {
  return (
    <Stack display={"flex"} flexDirection={["column", "row"]} padding={'40px'}>
      <VStack width={["full", "50%"]}>
        <img className='about_img' src={dhiru} alt='Profile' />
      </VStack>
      <VStack width={["full", "50%"]} display={'flex'} justifyContent={"center"}>
        <Heading>About Us</Heading>
        <List spacing={3} fontSize={'1.2rem'}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Hello! Welcome to JacobWatches! Really happy to see you here.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Welcome to JacobWatches, where time is more than just a measurement—it's an expression of style and sophistication.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            At JacobWatches, we curate a collection of timepieces that blend exquisite craftsmanship with contemporary design, ensuring each piece tells a story of elegance and precision.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Whether you're seeking a classic heirloom piece or a modern statement accessory, our commitment to quality ensures that every watch we offer is a testament to luxury and functionality.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Discover the perfect watch that not only keeps time but defines it, only at JacobWatches.
          </ListItem>
        </List>
      </VStack>
    </Stack>
  );
};

export default AboutUs;
