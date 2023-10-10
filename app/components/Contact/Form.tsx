'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import ValidItem from './ValidItem';
import ValidIcons from './ValidIcons';
import loadingIcon from 'assets/loading.svg';

const EMAIL_REGEX: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Form = () => {
  // name
  const [name, setName] = useState<string | null>(null);
  const [nameValid, setNameValid] = useState<boolean | null>(null);

  // email
  const [email, setEmail] = useState<string | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  // message
  const [message, setMessage] = useState<string | null>(null);
  const [messageValid, setMessageValid] = useState<boolean | null>(null);

  // input refs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // button
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const notify = () => {
    toast.success('Your message delivered.');
  };

  const sendForm = async (e: any): Promise<void> => {
    e.preventDefault();
    if (nameValid && emailValid && messageValid) {
      setIsLoading(true);
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_SEND_MESSAGE_API_ROUTE!,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          },
        );
        clearForm();
        notify();
        setIsLoading(false);
        return await res.json();
      } catch (error) {
        console.error('Wystąpił błąd podczas wysyłania wiadomości:', error);
      }
    }
  };

  const clearForm = () => {
    if (
      nameRef.current != null &&
      emailRef.current != null &&
      messageRef.current != null
    ) {
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
      setName(null);
      setNameValid(null);
      setEmail(null);
      setEmailValid(null);
      setMessage(null);
      setMessageValid(null);
    }
  };

  useEffect(() => {
    if (name) {
      if (name.length > 1 && name.length > 3) {
        setNameValid(true);
      } else {
        setNameValid(false);
      }
    }
  }, [name]);

  useEffect(() => {
    if (email) {
      const result = EMAIL_REGEX.test(email);
      if (result) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    }
  }, [email]);

  useEffect(() => {
    if (message) {
      if (message.length > 1 && message.length > 9) {
        setMessageValid(true);
      } else {
        setMessageValid(false);
      }
    }
  }, [message]);

  useEffect(() => {
    if (nameValid && emailValid && messageValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [nameValid, emailValid, messageValid]);

  return (
    <form className='flex flex-col w-full'>
      <label className=' mt-7 md:mt-0' htmlFor='name'>
        Name:
      </label>
      <input
        className='mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25'
        type='text'
        name='name'
        placeholder='Write your name here...*'
        required
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
      />
      {nameValid !== null && (
        <ValidIcons>
          <ValidItem text='Insert atleast 4 characters' iconValid={nameValid} />{' '}
        </ValidIcons>
      )}

      <label className=' mt-4' htmlFor='email'>
        Email:
      </label>
      <input
        className='mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25'
        type='text'
        name='email'
        placeholder='Write your email here...*'
        required
        onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
      />
      {emailValid !== null && (
        <ValidIcons>
          <ValidItem text='Insert correct email' iconValid={emailValid} />
        </ValidIcons>
      )}

      <label className=' mt-4' htmlFor='message'>
        Message:
      </label>
      <textarea
        className='mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25 caret-[var(--secondary-text-color)]'
        cols={40}
        rows={4}
        name='message'
        placeholder='Write your message here...*'
        required
        onChange={(e) => setMessage(e.target.value)}
        ref={messageRef}
      />
      {messageValid !== null && (
        <ValidIcons>
          <ValidItem
            text='Insert atleast 10 characters'
            iconValid={messageValid}
          />
        </ValidIcons>
      )}

      <button
        onClick={(e) => sendForm(e)}
        disabled={isButtonDisabled}
        className={`flex items-center justify-center self-end w-44 h-12 mt-8 bg-[var(--secondary-bg-color)] border border-[var(--secondary-bg-color)] rounded-lg text-[var(--secondary-text-color)] text-base hover:border-[var(--secondary-text-color)] transition-colors duration-200 disabled:bg-slate-700 disabled:hover:border-[var(--secondary-bg-color)] disabled:text-slate-500 disabled:cursor-not-allowed `}
      >
        {isLoading ? (
          <Image
            className='animate-spin'
            src={loadingIcon}
            alt='loading icon'
            width={30}
            height={30}
          />
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default Form;
