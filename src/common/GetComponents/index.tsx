import CardList from "components/CardList";
import Header from "components/Header";
import { WrapContainer } from "components/WrapContainer";
import React from "react";
import { IApiContent } from "types";
import * as Chakra from "@chakra-ui/react";

const Components: any = {
  header: Header,
  cardList: CardList,
  wrapContainer: WrapContainer,
};

type ComponentType =
  | "Accordion"
  | "AccordionItem"
  | "AccordionButton"
  | "AccordionPanel"
  | "AccordionIcon"
  | "Alert"
  | "AlertIcon"
  | "AlertTitle"
  | "AlertDescription"
  | "AspectRatio"
  | "AvatarBadge"
  | "AvatarGroup"
  | "Avatar"
  | "Badge"
  | "Box"
  | "Breadcrumb"
  | "BreadcrumbItem"
  | "BreadcrumbLink"
  | "Button"
  | "Center"
  | "Checkbox"
  | "CircularProgress"
  | "CloseButton"
  | "Code"
  | "Container"
  | "Divider"
  | "Editable"
  | "Flex"
  | "FormControl"
  | "FormLabel"
  | "FormHelperText"
  | "FormErrorMessage"
  | "Grid"
  | "Heading"
  | "Highlight"
  | "Icon"
  | "IconButton"
  | "Image"
  | "Input"
  | "InputGroup"
  | "InputLeftAddon"
  | "InputRightAddon"
  | "InputLeftElement"
  | "InputRightElement"
  | "Link"
  | "List"
  | "ListItem"
  | "ListIcon"
  | "Kbd"
  | "Menu"
  | "NumberInput"
  | "Progress"
  | "Radio"
  | "RadioGroup"
  | "Select"
  | "SimpleGrid"
  | "Spinner"
  | "Skeleton"
  | "SkeletonCircle"
  | "SkeletonText"
  | "Stack"
  | "Stat"
  | "StatLabel"
  | "StatNumber"
  | "StatHelpText"
  | "StatArrow"
  | "StatGroup"
  | "Switch"
  | "Tab"
  | "Tabs"
  | "TabList"
  | "TabPanel"
  | "TabPanels"
  | "Tag"
  | "Text"
  | "Textarea";

export const GetComponents = (block: any) => {
  console.log("block", block.component, Chakra[block.component as ComponentType], block.payload);
  const { children } = block.payload;
  if (typeof Chakra[block.component as ComponentType] !== "undefined") {
    return React.createElement(
      Chakra[block.component as ComponentType],
      {
        key: block._uid,
        ...block.payload,
      },
      children
        ? [children, block.nestedComponents.map((x: any) => GetComponents(x))]
        : block.nestedComponents.map((x: any) => GetComponents(x))
    );
  }
  return React.createElement(
    () => (
      <div>
        The component <span style={{ color: "red" }}> {block.component}</span> has not been created yet.
      </div>
    ),
    { key: block._uid }
  );
};
