import { Heading, Text, Image, useColorMode } from "@chakra-ui/react";
import { ReactNode, useState, useEffect } from "react";
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

  const maxWidth = "650px";

  const isClientMobile = () => {
    return typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${maxWidth})`).matches
      ? true
      : false;
  };
  const [mobile, setMobile] = useState(isClientMobile());

  useEffect(() => {
    function handleResize() {
      setMobile(isClientMobile());
    }

    window.addEventListener("resize", handleResize);
  });

  const sideMargin = mobile ? "10px" : "20px";
  const titleMarginTop = mobile ? "1.5em" : "1em";

  const TagsDiv = styled.div`
    margin-left: ${sideMargin};
  `;

  const TagsSpan = styled.span`
    background-color: ${conColor[colorMode]};
    border-radius: 50px;
    padding: 0.5em 1em 0.5em 1em;
    margin: ${mobile ? "1em 0.3em 0.5em 0" : "0 1em 0 0"};
    float: left;
    font-size: 0.9em;
  `;

  const StyledLink = styled.a`
    margin-top: 1em;
    display: ${mobile ? "inline-block" : "flex"};
    background-color: ${bgColor[colorMode]};
    padding: 1em;
    border-radius: 25px;
    maxwidth: 800px;
    width: 100%;
  `;

  return (
    <>
      <StyledLink href={props.href}>
        <Image
          src={props.thumbnail}
          height={mobile ? "auto" : "10em"}
          width={mobile ? "100%" : "auto"}
          alt="Video on Odysee"
          borderRadius="10px"
        />
        <div>
          <TagsDiv>
            {props.tags?.map((tag) => (
              <TagsSpan>{tag}</TagsSpan>
            ))}
          </TagsDiv>

          <br />
          <Heading ml={sideMargin} mr={sideMargin} mt={titleMarginTop}>
            {props.title}
          </Heading>
          <Text ml={sideMargin} mr={sideMargin} mt="1em">
            {props.children}
          </Text>
        </div>
      </StyledLink>
    </>
  );
};

export default VideoLink;
