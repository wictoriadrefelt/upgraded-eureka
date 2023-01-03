import { Box, Flex, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Member } from "./Pages/Members";
import ProfilePicture from "./ProfilePicture";

interface Props {
  member: Member;
}
const MemberCard: FC<Props> = (props) => {
  const imagePath = "/src/assets/" + props.member.image;

  return (
    <Link to={"/members/" + props.member.slug}>
      <Flex
        direction="column"
        align="center"
        pb="xl"
        mt="xl"
        sx={{ width: "100%" }}
      >
        <ProfilePicture imagePath={imagePath} />
        <Title order={3} mt="xs">
          {props.member.name}
        </Title>
        <Text size="xs">{props.member.title}</Text>
      </Flex>
    </Link>
  );
};

export default MemberCard;
