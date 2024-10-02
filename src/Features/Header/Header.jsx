import React, { useRef, useState } from "react";
import asd from "../../assets/dog.jpg"
import './Header.css'
import Textfield from "../Primary/Textfield/Textfield"
import Button  from "../Primary/Button/Button";
// import {manditeray,passManditeray} from "../constants"
import Mailfield from "../Primary/Mailfield/Mailfield";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Basehooks from "../Primary/Basehooks/Basehooks";
import Baseeffect from "../Primary/Baseeffect/Baseeffect";
import Apiprop from "../Apiprop/Apiprop";
import Basic from '../Basic/Basic';
import Counter from '../Counter/Counter';
import Display from '../Display/Display';
import Home from '../Home/Home'


const Header = () => {
    const [regError, setRegError] = useState(null);
    const [numError, setNumError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const textRef = useRef(null);
    const numRef = useRef(null);
    const emailRef = useRef(null);
    let usedReg = /^[a-zA-Z]+$/;
    let numReg = /^(0|[1-9][0-9]*|[1-9][0-9]{0,2}(,[0-9]{3,3})*)$/;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const manditeray = 'please fill field';
    const passManditeray = 'please enter right input';
    
    


    const doClick = () => {
        if (textRef.current.value === '' && !usedReg.test(textRef.current.value)) {
            if (textRef.current.value === '') {
                setRegError(manditeray);
            }
            else if (!usedReg.test(textRef.current.value)) {
                setRegError(passManditeray);
            }
        }
        
        if (numRef.current.value === '' || !numReg.test(numRef.current.value)) {
            if (numRef.current.value === '' ) {
                setNumError(manditeray);
            }
            else if (!numReg.test(numRef.current.value)) {
                setNumError(passManditeray);
            }
        } 

        if (
            usedReg.test(textRef.current.value) ||
            numReg.test(numRef.current.value)
          ) {
            if (usedReg.test(textRef.current.value)) {
                setRegError('');
            }
      
            if (numReg.test(numRef.current.value)) {
                setNumError('');
            }
          }

          if (
            usedReg.test(textRef.current.value) &&
            numReg.test(numRef.current.value)
          ) {
            // history.push("/Textfield");
          }
        
    }






    const doSubmit = () => {
        if (emailRef.current.value === '' || !emailReg.test(emailRef.current.value)) {
            if (emailRef.current.value === '') {
                setEmailError(manditeray);
            }
            else if (!emailReg.test(emailRef.current.value)) {
                setEmailError(passManditeray);
            }
        }

        if (emailReg.test(emailRef.current.value)) {
            setEmailError(null);
        }
        
    }
        

    return (
        <>
        <div>
        <img className="container_wrapper"src={asd} alt="dog"/>
        <Textfield label="FirstName" textType="text" placeholderText='Enter your name' textFieldRef={textRef} errSms ={regError}/>
        <Textfield label="number" textType="text" placeholderText='Enter your number' textFieldRef={numRef}  errSms ={numError}/>
        <Button content="click" btnType="primary" onClickFn={doClick}/>
        <Mailfield label="email" textType="email" placeholderText='Enter your Email' textFieldRef={emailRef} errSms ={emailError}/>
        <Button content="submit" btnType="primary" onClickFn={doSubmit}/>
        <Navbar/>
        <Footer/>
        <Card/>
        <Basehooks/>
        <Baseeffect/>
        <Basic/>
        <Counter/>
        <Apiprop num={1}/>
        <Apiprop num={2}/>
        <Apiprop num={3}/>
        <Display />
        <Home />
        
        </div>
        </>
    )
}


export default Header;