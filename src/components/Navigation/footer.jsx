import React from "react";
import up from "../../assets/uparrow.png";
import email from "../../assets/SocialMediaLogos/emaillogo.png";
import linkedln from "../../assets/SocialMediaLogos/linkedInlogo.png";
import github from "../../assets/SocialMediaLogos/githublogo.png";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, Stack } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
export default function Footer() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
  const [emailSubject,setEmailSubject] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [emailSender, setSenderSubject] = useState('');


    const goBackUp = (sectionID) => {

        const section = document.getElementById(sectionID);

        if (section) {
            section.scrollIntoView({behavior:'smooth'});
        }
    }


    return (
        <div id="background-color-footer">

            
<Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} isCentered size="xl" id="emailModal" >
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Email Details (Not functional, Use Linkedin or email me directly)</ModalHeader>
    <ModalCloseButton />
    <ModalBody className="flex flex-col gap-4">

        <h1>From: 
            <span className="email">
               <Input variant='flushed' name="emailSubject" onChange={(e)=>setSenderSubject(e.target.value)}/>
            </span>
        </h1>

        <div>
            <span className="emailFlex">
        <h1>To: </h1>

                  <p>
                    Rouyce23@gmail.com
                  </p>
                  </span>
        </div>
        <span className="emailSubject">
        <label htmlFor="emailSubject">Subject:</label>
        <Input variant='flushed' width='20rem' name="emailSubject emailInput" onChange={(e)=>setEmailSubject(e.target.value)}/>
        </span>
        <div className="emailMsg">
        <label htmlFor="emailMsg">Message:</label>
        <Input variant='outline' name="emailMsg" onChange={(e)=>setEmailMsg(e.target.value)}/>
        </div>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="gray" mr={3} onClick={onClose}>
        Close
      </Button>
      <Button colorScheme="twitter" onClick={()=>{sendEmailFunction()}}>Send 📫</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

            <div className="container footer">
                <button className="footer-btn" onClick={() => goBackUp('hero-section')}>
                    <img src={up} alt="Up button" className="restart-btn" id="gobackup" />
                </button>
                <div className="mediaListContainer">
                        <ul className="mediaList">
                            <li className="mediaItem" onClick={onOpen}><img src={email} alt="Email" className="mediaImage"/></li>
                            <li className="mediaItem"><a href="https://www.linkedin.com/in/royceescalona/" target="_blank"><img src={linkedln} alt="Linkedln" className="mediaImage" /></a></li>
                            <li className="mediaItem"><a href="https://github.com/RoycejChan" target="_blank"><img src={github} alt="Github" className="mediaImage"/></a></li>
                        </ul>
                </div>
                <button className="portfolio-btn"><a href="https://github.com/rroyceee/Portfolio-website" target="blank_">Portfolio Repo</a></button>
                <p className="footerLLC">Royce Escalona @2023</p>
            </div>
        </div>
    )
}