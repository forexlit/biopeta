import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Container } from "@mui/material";
import { Heading } from "@/components/Heading";
import { Grid } from "@mui/material";
import Image from "next/image";

export const About = () => {
  return (
    <AboutContainer>
      <Container>
        <Heading title="My Own Story" />
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Story>
              <p>My name is Jessica and I am the one behind this website.</p>
              <p>
                When my child was around 14-16 months old, I began to notice
                that something was not quite right. My child did not make eye
                contact, did not respond to her name, and seemed to struggle
                with social interactions. At first, we thought that she was just
                shy. I talked to my pediatrician and this was the first time
                that I've heard that my child might be on the autism spectrum.
                Even though it was too early to diagnose it.
              </p>
              <p>
                As the months went by, my child's development continued to lag
                behind. I began to notice that my child had repetitive
                behaviors, and became fixated on certain objects. At this point
                I knew that It is an autism spectrum disorder and soon after we
                got official confirmation. This is where our journey started...
              </p>
              <p>
                I delved into numerous online sources, read countless books on
                the subject, and engaged in conversations with therapists. The
                process demanded an immense amount of time and effort, but I was
                determined to gain a deeper understanding of autism. Through
                this dedicated pursuit of knowledge and collaboration with
                professionals, I gradually discovered invaluable insights and
                strategies that have made a profound impact on our journey.
              </p>
              <p>
                This is exactly why I created this website. So that families
                like mine get the answers and resources they need to help their
                children thrive. Start with the autism screening tool and get
                step by step plan based on your results.
              </p>

              <p>
                <strong>Jessica B. </strong>
              </p>
            </Story>
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export const AboutContainer = styled.div`
  background: #fff;
  padding: 60px 0px;
`;
export const Story = styled.div`
  background: ${COLORS.black};
  padding: 30px;
  border-radius: 10px;
  color: #fff;
  p {
    padding: 10px 0px;
    font-size: 18px;
    line-height: 1.6;
    font-size: 16px;
    font-weight: 300;
  }
`;
export const AboutImage = styled(Image)`
  width: 500px;
  height: auto;
  max-width: 100%;
  border-radius: 10px;
`;
