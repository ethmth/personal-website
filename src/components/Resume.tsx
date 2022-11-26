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

const Resume: React.FC = () => {
  return (
    <>
      <Bubble>
        <Heading as="h3">Objective</Heading>
        <Text>
          Student passionate for Linux, automation using Bash and Python, and
          Front-end Development. Seeking a Summer 2023 Software Engineering
          internship.
        </Text>
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
          Member of Columbia Space Initiative - 2023 NASA Micro-g NExT
          Competition Team Member
        </Text>
        <Text>
          Member of the Application Development Initiative - DevFest (Hackathon)
          Organizing Committee
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
                Linux, Docker, Bash, Latex, HTML, CSS, Git, CAD (Solidworks)
              </Td>
            </Tr>
            <Tr className="even">
              <Td>
                <strong>Soft Skills</strong>
              </Td>
              <Td>Communication, Leadership, Organization</Td>
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
              Developed proof-of-concept web UI that allowed coaches and players
              to visualize catcher framing data using ReactJS and R.  
              <Link href="https://gu-baseball.herokuapp.com/catcher_framing">
                gu-baseball.herokuapp.com/catcher_framing
              </Link>
              (Dummy data; API loading times may vary).
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
          <span>
            All projects available on my GitHub. These are personal projects,
            but I&apos;ve done C, C++, and Java projects in class.
          </span>
        </Text>
        <Text>
          <strong>Seatgeek Scanner.</strong>
          <span>
            Built a tool to continuously search for tickets that fall below a
            target price within a date range for any given show on Seatgeek.
            Integrates with IFTTT webhooks. Uses Python, Selenium, and Docker.
          </span>
        </Text>
        <Text>
          <strong>Auto-YouTuber.</strong>
          <span>
            Built a tool that creates and uploads daily YouTube videos by
            scraping top posts from reddit and compiling them into a
            compilation. Uses Bash, Python, ffmpeg, and Docker.
          </span>
        </Text>
        <Text>
          <strong>ThingM Blink1 API.</strong>
          <span>
            Built a simple Rest API for the ThingM Blink1 Device that allows for
            network control using Python, Flask, and Docker.
          </span>
        </Text>
      </Bubble>
      <Bubble>
        <Heading as="h3">Extra-Curricular Activities</Heading>
        <UnorderedList>
          <ListItem>
            <Text>
              Use Computer Aided Design Software (Solidworks) to design and 3D
              print parts for personal and class projects.
            </Text>
          </ListItem>
          <ListItem>
            <Text>Create music using DAW Software (Ardour).</Text>
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
              Leader of my Art of Engineering Common Project group, which is
              currently creating a “Smart” Hungry-Hungry Hippos game that uses a
              microcontroller to keep count of score, and shoot marbles back
              into the field of play.
            </Text>
          </ListItem>
        </UnorderedList>
      </Bubble>
    </>
  );
};

export default Resume;
