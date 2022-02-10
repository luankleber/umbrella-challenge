import { Heading, HStack, Text } from "@chakra-ui/react";

export function DateComponent() {
  const d = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "may",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <>
      <div>
        <div>
          <Heading fontSize="45px">{day}</Heading>
          <HStack paddingTop="25px" spacing="4px">
            <Text fontSize="25px" as="sup">
              {date}
            </Text>
            <Text fontSize="25px" as="sup">
              {month}
            </Text>
            <Text fontSize="25px" as="sup">
              {year}
            </Text>
          </HStack>
        </div>
      </div>
    </>
  );
}
