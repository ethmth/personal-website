import { Heading, Text, Image, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { bgColor, conColor } from "../styles/colors";

interface VideoLinkProps {
  title: string;
  href: string;
  tags?: string[];
  thumbnail?: string;
  children?: ReactNode;
}

const VideoLink: React.FC<VideoLinkProps> = (props) => {
  const { colorMode } = useColorMode();

  const TagsDiv = styled.div`
    margin-left: 1em;
  `;

  const TagsSpan = styled.span`
    background-color: ${conColor[colorMode]};
    border-radius: 50px;
    padding: 0.5em 1em 0.5em 1em;
    margin: 0 1em 0 0;
    float: left;
  `;

  const StyledLink = styled.a`
    display: flex;
    background-color: ${bgColor[colorMode]};
    padding: 1em;
    border-radius: 25px;
    maxwidth: 800px;
    width: 100%;
  `;

  return (
    <>
      <StyledLink href={props.href}>
        <Image src={props.thumbnail} height="10em" borderRadius="10px" />
        <div>
          <TagsDiv>
            {props.tags?.map((tag) => (
              <TagsSpan>{tag}</TagsSpan>
            ))}
          </TagsDiv>

          <br />
          <Heading mt="1em" ml="20px">
            {props.title}
          </Heading>
          <Text ml="20px" mt="1em">
            {props.children}
          </Text>
        </div>
      </StyledLink>
    </>
  );
};

export default VideoLink;
