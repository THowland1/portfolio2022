import React, { FormEvent, useState } from "react";

import {
  ChatIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  MailIcon,
} from "@heroicons/react/solid";
const inputClass = `
  w-full
  rounded
  border
  py-1
  px-3
  resize-none
  leading-6
  outline-none
  text-base
  
  bg-white dark:bg-gray-800
  
  focus:ring-2
  focus:ring-indigo-300 dark:focus:ring-indigo-900
  invalid:focus:ring-red-300 dark:invalid:focus:ring-red-900
  
  border-gray-400 dark:border-gray-700
  focus:border-indigo-500 dark:focus:border-indigo-500
  invalid:focus:border-red-500
  dark:invalid:focus:border-red-800
  
  text-gray-700 dark:text-gray-100
  
  transition-colors
  duration-200
  ease-in-out`;
const textareaClass = `${inputClass} h-32`;

async function submit(e: FormEvent, data: any) {
  e.preventDefault();

  const response = await fetch("/form-submit", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  if (response.status !== 200) {
    throw new Error("Not 200");
  }
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errored, setErrored] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="relative">
      <div className="container text-center lg:max-w-5xl px-5 lg:px-40 py-10 mx-auto">
        <div className="relative">
          <form
            onSubmit={(e) => {
              setLoading(true);
              submit(e, { name, email, message })
                .then((_) => setSubmitted(true))
                .catch((_) => setErrored(true))
                .finally(() => setLoading(false));
            }}
            name="contact"
            className="flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <ChatIcon className="mx-auto inline-block w-10 mb-4" />
            <h2 className="text-gray-900 dark:text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Get in touch!
            </h2>
            <p className="leading-relaxed mb-5">
              My inbox is always open.
              <br />
              Whether you have a question or just want to say hi, I&apos;ll try
              my best to get back to you!
            </p>
            <div
              className="text-left transition duration-700"
              style={
                !submitted && !errored
                  ? { opacity: 1 }
                  : { opacity: 0.1, pointerEvents: "none" }
              }
            >
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-500 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  disabled={submitted}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-500 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  disabled={submitted}
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-500 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  disabled={submitted}
                  onChange={(e) => setMessage(e.target.value)}
                  className={textareaClass}
                  required
                />
              </div>
              <button
                disabled={submitted || loading || errored}
                type="submit"
                className={`
                flex gap-2 justify-center items-center text-white disabled:opacity-70 w-full  border-0 py-2 px-6 focus:outline-none  rounded text-lg
                bg-indigo-500 hover:bg-indigo-600 disabled:hover:bg-indigo-500
                `}
              >
                {loading ? (
                  <>
                    <LoadingSpinner /> Submitting...
                  </>
                ) : submitted ? (
                  <>Submitted!</>
                ) : (
                  <>Submit</>
                )}
              </button>
            </div>
          </form>
          <div
            style={
              submitted
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    pointerEvents: "none",
                    transform: "translateY(2rem)",
                  }
            }
            className="flex flex-col items-center justify-center absolute inset-0 transition delay-1000 duration-700"
          >
            <span className="relative flex justify-center items-center w-10 h-10 rounded-full">
              <span className="beacon z-0 w-8 h-8 bg-green-300 dark:bg-gray-800 absolute inset-0 m-auto rounded-full"></span>
              <span className="absolute flex z-1 justify-center items-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full ring-8 ring-green-200/50 dark:ring-gray-800">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-200 mt-2">
              Form submitted
            </span>
            <span>I&apos;ll be sure to take a look ASAP</span>
          </div>
          <div
            style={
              errored
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    pointerEvents: "none",
                    transform: "translateY(2rem)",
                  }
            }
            className="flex flex-col items-center justify-center absolute inset-0 transition delay-1000 duration-700"
          >
            <span className="relative flex justify-center items-center w-10 h-10 rounded-full">
              <span className="beacon z-0 w-8 h-8 bg-red-300 dark:bg-gray-800 absolute inset-0 m-auto rounded-full"></span>
              <span className="absolute flex z-1 justify-center items-center w-6 h-6 bg-red-100 dark:bg-red-900 rounded-full ring-8 ring-red-200/50 dark:ring-gray-800">
                <ExclamationCircleIcon className="w-4 h-4 text-red-500" />
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-200 mt-2">
              Uh oh, this is embarrassing
            </span>
            <span>
              Something appears to have not worked submitting the form
            </span>
            <span>Please reach out via email instead</span>
            <span>
              (and let me know that the form needs some TLC while you&apos;re at
              it)
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-2 items-center my-4">
          <span className="bg-gray-300 dark:bg-gray-800 h-[1px] flex-1"></span>
          <span className="text-gray-400 dark:text-gray-600">or</span>
          <span className="bg-gray-300 dark:bg-gray-800 h-[1px] flex-1"></span>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:tomhowland9@gmail.com"
            className={`w-12 h-12 p-2 transition-transform rounded-full border-gray-300 dark:border-white border hover:scale-110  inline-block hover:bg-[#BB011C] text-gray-700 dark:text-white hover:text-white`}
          >
            <MailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/tomhowland9"
            className={`w-12 h-12 p-2 transition-transform rounded-full border-gray-300 dark:border-white border hover:scale-110  inline-block hover:bg-[#0A66C2] text-gray-700 dark:text-white hover:text-white`}
          >
            <LinkedinLettersIcon />
          </a>
          <a
            href="https://github.com/THowland1"
            className={`w-12 h-12 p-2 transition-transform rounded-full border-gray-300 dark:border-white border hover:scale-110  inline-block hover:bg-[#242A2E] text-gray-700 dark:text-white hover:text-white`}
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// doctoring of the 'github' SVG from https://devicon.dev/
const GithubIcon = (props: React.ComponentProps<"svg">): JSX.Element => (
  <svg viewBox="0 0 128 128" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
      ></path>
      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
    </g>
  </svg>
);

// doctoring of the 'linkedin' SVG from https://devicon.dev/
const LinkedinLettersIcon = (
  props: React.ComponentProps<"svg">
): JSX.Element => (
  <svg viewBox="0 0 128 128" {...props}>
    <path
      fill="currentColor"
      d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
    ></path>
  </svg>
);

// Lovingly copied from the example in https://tailwindcss.com/docs/animation
const LoadingSpinner = (props: React.ComponentProps<"svg">): JSX.Element => (
  <svg
    className="animate-spin h-5 w-5 text-gray-900 dark:text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
