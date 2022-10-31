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
} from "@chakra-ui/react";

import React from "react";

const Resume: React.FC = () => {
  return (
    <>
      <div>
        <Heading as="h3">Objective</Heading>
        <hr />

        <Text>
          Student passionate for Linux, automation using Bash and Python, and
          Front-end Development. Seeking a Summer 2023 Software Engineering
          internship.
        </Text>
        <Heading as="h3">Education</Heading>
        <hr />
        <UnorderedList>
          <ListItem>
            <strong>Bachelor of Computer Science (B.S.)</strong>, Columbia
            University (SEAS)
          </ListItem>
          <ListItem>
            Relevant Coursework: Data Structures, Advanced Programming, Linear
            Algebra, Discrete Math
          </ListItem>
          <ListItem>
            Member of Columbia Space Initiative - 2023 NASA Micro-g NExT
            Competition Team Member
          </ListItem>
          <ListItem>
            Member of the Application Development Initiative - DevFest
            (Hackathon) Organizing Committee
          </ListItem>
        </UnorderedList>
        <Heading as="h3">Skills</Heading>
        <hr />
        <div className="list">
          <table>
            <tbody>
              <tr className="odd">
                <td>
                  <strong>Programming Languages</strong>
                </td>
                <td>Java, C++, C, Python, Javascript, Typescript, R</td>
              </tr>
              <tr className="even">
                <td>
                  <strong>Libraries &amp; Frameworks</strong>
                </td>
                <td>
                  Selenium, Flask API, Beautiful Soup, React, NextJS, RPlumber
                </td>
              </tr>
              <tr className="odd">
                <td>
                  <strong>Technical Skills</strong>
                </td>
                <td>
                  Linux, Docker, Bash, Latex, HTML, CSS, Git, CAD (Solidworks)
                </td>
              </tr>
              <tr className="even">
                <td>
                  <strong>Soft Skills</strong>
                </td>
                <td>Communication, Leadership, Organization</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Heading as="h3">Experience</Heading>
        <hr />
        <div className="list">
          <p>
            <strong>Front-End Software Engineer (Club)</strong> Sep 2021 - May
            2022
            <br />
            Georgetown University Baseball Analytics <em>Washington, DC</em>
          </p>
          <ul>
            <li>
              <p>
                Developed proof-of-concept web UI that allowed coaches and
                players to visualize catcher framing data using ReactJS and R.  
                <a href="https://gu-baseball.herokuapp.com/catcher_framing">
                  gu-baseball.herokuapp.com/catcher_framing
                </a>
                (Dummy data; API loading times may vary).
              </p>
            </li>
            <li>
              <p>
                Worked with R Data Analysts to convert their projects into APIs
                using the R Plumber Library.
              </p>
            </li>
          </ul>
          <p>
            <strong>Web Developer/Web Designer (Volunteer)</strong> July 2019 -
            May 2021
            <br />
            Winter Haven Optimist Club <em>Winter Haven, FL</em>
          </p>
          <ul>
            <li>
              <p>
                Developed and designed a new website for an annual Christmas
                5k/10k fundraiser using HTML/CSS.
              </p>
            </li>
            <li>
              <p>
                Achieved 49% growth in registered runners the year my site went
                live.
              </p>
            </li>
          </ul>
        </div>
        <Heading as="h3">Projects</Heading>
        <hr />
        <div className="list">
          <p>
            <span>
              All projects available on my GitHub. These are personal projects,
              but I’ve done C, C++, and Java projects in class.
            </span>
          </p>
          <p>
            <strong>Seatgeek Scanner.</strong>
            <span>
              Built a tool to continuously search for tickets that fall below a
              target price within a date range for any given show on Seatgeek.
              Integrates with IFTTT webhooks. Uses Python, Selenium, and Docker.
            </span>
          </p>
          <p>
            <strong>Auto-YouTuber.</strong>
            <span>
              Built a tool that creates and uploads daily YouTube videos by
              scraping top posts from reddit and compiling them into a
              compilation. Uses Bash, Python, ffmpeg, and Docker.
            </span>
          </p>
          <p>
            <strong>ThingM Blink1 API.</strong>
            <span>
              Built a simple Rest API for the ThingM Blink1 Device that allows
              for network control using Python, Flask, and Docker.
            </span>
          </p>
        </div>
        <Heading as="h3">Extra-Curricular Activities</Heading>
        <hr />
        <div className="list">
          <ul>
            <li>
              <p>
                Use Computer Aided Design Software (Solidworks) to design and 3D
                print parts for personal and class projects.
              </p>
            </li>
            <li>
              <p>Create music using DAW Software (Ardour).</p>
            </li>
          </ul>
        </div>
        <Heading as="h3">Leadership</Heading>
        <hr />
        <div className="list">
          <ul>
            <li>
              <p>
                President of Technology Student Association (TSA) Chapter in
                high school, a club of over 50 students.
              </p>
            </li>
            <li>
              <p>
                Leader of my Art of Engineering Common Project group, which is
                currently creating a “Smart” Hungry-Hungry Hippos game that uses
                a microcontroller to keep count of score, and shoot marbles back
                into the field of play.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
