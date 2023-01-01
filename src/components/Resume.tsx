import {
  useColorMode,
  Button,
  Flex,
  Box,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import Link from "next/link";

import React from "react";

import Bubble from "./Bubble";

import styled from "@emotion/styled";

const Resume: React.FC = () => {
  const LinkUnderline = styled(Link)`
    text-decoration: underline;
  `;

  return (
    <>
      <Bubble>
        <Heading as="h3">Objective</Heading>
        <Text>
          Student who is passionate about Linux, automation using Bash and
          Python, and front-end development.
        </Text>
        <Text>Seeking a Summer 2023 Software Engineering internship.</Text>
      </Bubble>
      <Bubble>
        <Heading as="h3">Education</Heading>
        <Text>
          <strong>Bachelor of Computer Science (B.S.)</strong>, Columbia
          University (SEAS)
        </Text>
        <Text>
          Relevant Coursework: Data Structures, Advanced Programming, Linear
          Algebra, Discrete Math
        </Text>
        <Text>
          Member of Columbia Space Initiative (CSI) - 2023 NASA Micro-g NExT
          Competition team member
        </Text>
        <Text>
          Member of the Application Development Initiative (ADI) - DevFest
          (Hackathon) organizing committee
        </Text>
      </Bubble>

      <Bubble>
        <Heading as="h3">Skills</Heading>
        <Table>
          <Tbody>
            <Tr className="odd">
              <Td width="40%">
                <strong>Programming Languages</strong>
              </Td>
              <Td>Java, C++, C, Python, Javascript, Typescript, R</Td>
            </Tr>
            <Tr className="even">
              <Td>
                <strong>Libraries &amp; Frameworks</strong>
              </Td>
              <Td>
                Selenium, Flask API, Beautiful Soup, React, NextJS, RPlumber
              </Td>
            </Tr>
            <Tr className="odd">
              <Td>
                <strong>Technical Skills</strong>
              </Td>
              <Td>
                Linux, Docker, Bash, LaTeX, HTML, CSS, Git, CAD (Solidworks),
                Virtual Machines
              </Td>
            </Tr>
            <Tr className="even">
              <Td>
                <strong>Soft Skills</strong>
              </Td>
              <Td>Patience, Curiosity, Organization, Communication</Td>
            </Tr>
          </Tbody>
        </Table>
      </Bubble>
      <Bubble>
        <Heading as="h3">Experience</Heading>
        <Text>
          <strong>Front-End Software Engineer (Club)</strong> Sep 2021 - May
          2022
          <br />
          Georgetown University Baseball Analytics <em>Washington, DC</em>
        </Text>
        <UnorderedList>
          <ListItem>
            <Text>
              Developed web UI that allowed coaches and players to visualize
              catcher framing data using ReactJS and R.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Worked with R Data Analysts to convert their projects into APIs
              using the R Plumber Library.
            </Text>
          </ListItem>
        </UnorderedList>
        <Text>
          <strong>Web Developer/Web Designer (Volunteer)</strong> July 2019 -
          May 2021
          <br />
          Winter Haven Optimist Club <em>Winter Haven, FL</em>
        </Text>
        <UnorderedList>
          <ListItem>
            <Text>
              Developed and designed a new website for an annual Christmas
              5k/10k fundraiser using HTML/CSS.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Achieved 49% growth in registered runners the year my site went
              live.
            </Text>
          </ListItem>
        </UnorderedList>
      </Bubble>
      <Bubble>
        <Heading as="h3">Projects</Heading>
        <Text>
          Personal projects available on{" "}
          <LinkUnderline href="https://github.com/ethmth/" target="_blank">
            GitHub
          </LinkUnderline>
          .
        </Text>
        <Text>
          <strong>
            <LinkUnderline
              href="https://github.com/ethmth/seatgeek-scanner"
              target="_blank"
            >
              Seatgeek Scanner
            </LinkUnderline>
            .
          </strong>{" "}
          Built a tool to continuously search for tickets that fall below a
          target price within a date range for any given show on Seatgeek.
          Integrates with IFTTT webhooks. Uses Python, Selenium, and Docker.
        </Text>
        <Text>
          <strong>
            <LinkUnderline
              href="https://github.com/ethmth/auto-youtuber"
              target="_blank"
            >
              Auto-YouTuber
            </LinkUnderline>
            .
          </strong>{" "}
          Built a tool that creates and uploads daily YouTube videos by scraping
          top posts from Reddit, compiling them into a full-length video, and
          uploading to YouTube completely autonomously. Uses Bash, Python,
          FFmpeg, and Docker.
        </Text>
        <Text>
          <strong>
            <LinkUnderline
              href="https://github.com/ethmth/thingm-blink-api"
              target="_blank"
            >
              ThingM Blink1 API
            </LinkUnderline>
            .
          </strong>{" "}
          Built an API using Python, Flask, and Docker for the ThingM Blink1,
          allowing for network control.
        </Text>
        <Text>
          <strong>C Web Server</strong> (Class Project)<strong>.</strong> Built
          a dynamic HTTP/1.0 Server in C that serves static files and entries
          from a database.
        </Text>
      </Bubble>
      <Bubble>
        <Heading as="h3">Extra-Curricular Activities</Heading>
        <UnorderedList>
          <ListItem>
            <Text>
              Volunteer tutoring in math up to Calculus II through Mu Alpha
              Theta, Schoolhouse.World, and Hatch Tutors.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Create personal projects in the Columbia Engineering Makerspace by
              3D printing models and laser cutting parts designed using
              Solidworks.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Interests: Minecraft Mod Development, Musical Theater, Baseball,
              Reviewing Films, and Tinkering with Linux.
            </Text>
          </ListItem>
        </UnorderedList>
      </Bubble>
      <Bubble>
        <Heading as="h3">Leadership</Heading>
        <UnorderedList>
          <ListItem>
            <Text>
              President of Technology Student Association (TSA) Chapter in high
              school, a club of over 50 students.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Leader of Art of Engineering Common Project group, which created a
              “Smart” Hungry-Hungry Hippos game.
              <br />
              The game uses an Arduino Microcontroller, beam-break sensors, and
              push-pull servos.
            </Text>
          </ListItem>
        </UnorderedList>
      </Bubble>
    </>
  );
};

export default Resume;
