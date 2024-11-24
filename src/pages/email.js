// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useRouter } from "next/router";
// import { SmallContainer } from "@/components/SmallContainer";
// import lock from "../assets/icons/lock.svg";
// import Image from "next/image";
// import { Link } from "next/link";
// import { Button } from "@/components/Button";
// import { TopNavigation } from "@/components/TopNavigation";
// import { FONTS } from "@/styles/fonts";
// import { COLORS } from "@/styles/colors";
// import shield from "../assets/icons/shield.svg";
// import { sizes } from "@/styles/breakpoints";
// import Head from "next/head";
// import MyContext from "@/context/MyContext";
// import { useContext } from "react";
// import Cookies from "js-cookie";

// export default function Email() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(false);
//   const [risk, setRisk] = useState("");
//   const { finalScore, setFinalScore } = useContext(MyContext);
//   const genderCookies = Cookies.get("gender")?.replace(/"/g, "");
//   const concernCookies = Cookies.get("concern")?.replace(/"/g, "");
//   const router = useRouter();

//   const emailChange = (e) => {
//     setEmail(e.target.value);
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
//       setError(false);
//     } else {
//       setError(true);
//     }
//   };

//   useEffect(() => {
//     if (finalScore >= 8) {
//       setRisk("High");
//     } else if (finalScore >= 3) {
//       setRisk("Medium");
//     } else {
//       setRisk("Low");
//     }
//   }, [finalScore]);

//   function validateEmail(mail) {
//     const options = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: email,
//         gender: genderCookies,
//         concern: concernCookies,
//         score: finalScore,
//         risk: risk,
//       }),
//     };

//     fetch(`/api/subscribe`, options)
//       .then((response) => response.json())
//       .then((response) => Cookies.set("email", email))
//       .catch((err) => console.error(err));
//     router.push(`/summary`);
//   }
//   return (
//     <>
//       <Head>
//         <title>Cortiway.com - Enter your email </title>
//         <meta name="description" content="Autism Outreach Community" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <TopNavigation />
//       <SmallContainer>
//         <EmailContainer>
//           <h1 className="text-3xl">Enter Your Email To Get Quiz Results</h1>
//           <h4>
//             Enter your email address to get your results delivered directly to
//             your inbox.
//           </h4>
//           <Label>Your email</Label>
//           <Input
//             type="email"
//             placeholder="Email"
//             required
//             onChange={emailChange}
//           />
//           {errorMessage && <Error>Please enter your e-mail address</Error>}

//           {error ? (
//             <Button onClick={() => validateEmail(email)} full disabled>
//               See Results
//             </Button>
//           ) : (
//             <Button onClick={() => validateEmail(email)} full>
//               See Results
//             </Button>
//           )}
//           <Disclaimer>
//             <Lock>
//               <Image width={15} height={15} src={shield} alt="Lock" />
//             </Lock>
//             <div>
//               We respect your privacy and use your email only to send you test
//               results and other important emails. You won&apos;t receive spam.
//             </div>
//           </Disclaimer>
//         </EmailContainer>
//       </SmallContainer>
//     </>
//   );
// }

import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { SmallContainer } from "@/components/SmallContainer";
import lock from "../assets/icons/lock.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import { TopNavigation } from "@/components/TopNavigation";
import { FONTS } from "@/styles/fonts";
import { COLORS } from "@/styles/colors";
import shield from "../assets/icons/shield.svg";
import { sizes } from "@/styles/breakpoints";
import Head from "next/head";
import MyContext from "@/context/MyContext";
import Cookies from "js-cookie";

export default function Email() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [risk, setRisk] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { finalScore } = useContext(MyContext);

  const ageCookie = Cookies.get("age")?.replace(/"/g, "");
  const genderCookie = Cookies.get("gender")?.replace(/"/g, "");

  const currentWeightKg = Cookies.get("currentWeightKg")?.replace(/"/g, "");
  const currentWeightLb = Cookies.get("currentWeightLb")?.replace(/"/g, "");
  const goalWeightKg = Cookies.get("goalWeightKg")?.replace(/"/g, "");
  const goalWeightLb = Cookies.get("goalWeightLb")?.replace(/"/g, "");
  const weightMetric = Cookies.get("weightMetric")?.replace(/"/g, "");

  const feetCookie = Cookies.get("feet")?.replace(/"/g, "");
  const inchesCookie = Cookies.get("inches")?.replace(/"/g, "");
  const height = Cookies.get("height")?.replace(/"/g, "");
  const heightMetric = Cookies.get("heightMetric")?.replace(/"/g, "");

  const router = useRouter();

  const emailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      value
    );
    setError(!isValidEmail);
    setErrorMessage(isValidEmail ? "" : "Please enter a valid email address.");
  };

  useEffect(() => {
    if (finalScore >= 8) {
      setRisk("High");
    } else if (finalScore >= 3) {
      setRisk("Medium");
    } else {
      setRisk("Low");
    }
  }, [finalScore]);

  function validateEmail() {
    if (error) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        gender: genderCookie,
        age: ageCookie,
        height:
          heightMetric === "cm"
            ? height
            : feetCookie + "ft " + inchesCookie + "in",
        weight: weightMetric === "kg" ? currentWeightKg : currentWeightLb,
        goalWeight: weightMetric === "kg" ? goalWeightKg : goalWeightLb,
      }),
    };

    setIsLoading(true);
    fetch(`/api/subscribe`, options)
      .then((response) => response.json())
      .then(() => {
        Cookies.set("email", email);
        router.push(`/summary`);
        setIsLoading(false);
      })

      .catch((err) => console.error(err));
  }

  return (
    <>
      <Head>
        <title>Cortiway.com - Enter your email </title>
        <meta name="description" content="Autism Outreach Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopNavigation />
      <SmallContainer>
        <EmailContainer>
          <h1 className="text-4xl mt-3">Your results are ready </h1>
          <h4>
            We will let you know when Cortiway free samples are available.
          </h4>
          <Label>Your email</Label>
          <Input
            type="email"
            placeholder="Email"
            required
            onChange={emailChange}
            value={email}
          />
          {errorMessage && <Error>{errorMessage}</Error>}

          <Button
            onClick={validateEmail}
            full
            disabled={error || isLoading}
            isLoading={isLoading}
          >
            Unlock my results
          </Button>

          <Disclaimer>
            <Lock>
              <Image width={15} height={15} src={shield} alt="Lock" />
            </Lock>
            <div>We respect your privacy. You won&apos;t receive spam.</div>
          </Disclaimer>
        </EmailContainer>
      </SmallContainer>
    </>
  );
}

export const EmailContainer = styled.div`
  text-align: center;
  color: ${COLORS.black};
  h1 {
    padding: 20px 0px;
    font-family: ${FONTS.primary};
    line-height: 1.2;
    font-weight: 600;
    @media (max-width: ${sizes.sm}) {
      padding-top: 0px;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 23px;
    line-height: 1.5;
    font-weight: 300;
  }
`;
export const Label = styled.span`
  color: ${COLORS.black};
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: left;
`;
export const Error = styled.span`
  color: red;
  display: block;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #e5e6eb;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const Lock = styled.div`
  width: 15px;
  margin-right: 15px;
  text-align: center;
  margin: 0 auto;
  padding: 10px 0px;
`;
export const Disclaimer = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  margin-top: 20px;
  font-weight: 300;
`;
