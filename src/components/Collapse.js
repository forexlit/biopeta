import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import down from "../assets/icons/down.svg";
import book from "../assets/icons/communication.svg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const Collapse = ({ title, children, expanded, icon }) => {
  const [open, setOpen] = useState(false);
  const handleCollapse = () => {
    setOpen(!open);
  };
  return (
    <CollapseContainer>
      <CollapseItem defaultExpanded={expanded}>
        <CollapseSummary
          expandIcon={<Image src={down} alt="Down" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CollapseTitle>
            {/* <TitleIcon>
              <Image src={icon} width={25} height={25} alt="Icon" />
            </TitleIcon> */}

            <div>{title}</div>
          </CollapseTitle>
        </CollapseSummary>
        <AccordionDetails style={{ padding: 0 }}>
          <Items>{children}</Items>
        </AccordionDetails>
      </CollapseItem>
    </CollapseContainer>
  );
};

export const CollapseContainer = styled.div`
  margin-bottom: 15px;
`;

export const CollapseItem = styled(Accordion)`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
  background: #fff;
  margin-bottom: 10px;
  box-shadow: none;
  img {
    margin: 0;
    margin-right: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  h3 {
    font-size: 16px;
  }
`;

export const Items = styled.div`
  ul {
    list-style: none;
    li {
      border-top: 1px solid #ddd;
      padding: 20px;
      font-weight: 300;
      display: flex;
      align-items: center;
      font-size: 15px;
      /* justify-content: space-between; */
      span {
        display: block;
        font-size: 14px;
      }
      img {
        margin: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const CollapseSummary = styled(AccordionSummary)`
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const CollapseTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;
export const TitleIcon = styled.div`
  img {
    width: 25px;
    height: 25px;
  }
`;
