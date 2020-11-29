import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as Styled from "./ContactStyled.js";

const Contact = (props) => {
  useEffect(() => {
    document.title = "Contact | Portfolio of Zenan Han";
  }, []);

  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const submitForm = (ev) => {
    setSubmitDisabled(true);
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setEmail("");
        setTitle("");
        setMessage("");
        setFormStatus("Success!");
      } else {
        setFormStatus("Error!");
      }
      setTimeout(() => {
        setFormStatus("");
        setSubmitDisabled(false);
      }, 2000);
    };
    xhr.send(data);
  };

  return (
    <>
      <AnimatePresence>
        <Styled.ContactDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Styled.Form
            action={"https://formspree.io/f/xoqpnloo"}
            method={"POST"}
            onSubmit={submitForm}
          >
            <Styled.DescriptionH2>
              Please fill in the form below and I will get back to you
            </Styled.DescriptionH2>
            <Styled.EmailInput
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Styled.TitleInput
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <Styled.MessageInput
              type="text"
              placeholder="Message"
              name="message"
              rows="8"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
            <br></br>

            {formStatus === "" ? (
              <Styled.SubmitInput type="submit" disabled={submitDisabled} />
            ) : (
              <Styled.StatusButton
                style={{
                  backgroundColor:
                    formStatus === "Error!" ? "#f44336" : "#4CAF50",
                }}
              >
                {formStatus}
              </Styled.StatusButton>
            )}
          </Styled.Form>
        </Styled.ContactDiv>
      </AnimatePresence>
    </>
  );
};

export { Contact };
