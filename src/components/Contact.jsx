import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdPictureAsPdf } from "react-icons/md";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center mb-4 pt-16 p-3 mt-20 "
    >
      <form
        method="POST"
        action="https://getform.io/f/e1e27830-3099-491a-b013-48881ce8c391"
        target="_blank"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Leave a feedback or shoot me an email - rishabhs2897@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect
        </button>
      </form>

      <div className="  bg-[#0a192f] lg:hidden flex flex-row justify-between gap-5 mt-4 ">
        <div className="bg-blue-600 p-1">
          <a
            className=" w-full text-gray-300 bg-blue-600"
            href="https://www.linkedin.com/in/rishabh-kumar-singh-aa4bbb168"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="p-1 bg-[#333333]">
          <a
            className=" w-full text-gray-300"
            href="https://github.com/rishabhsingh12"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="p-1 bg-[#6fc2b0]">
          <a
            className=" w-full text-gray-300"
            href="mailto:rishabhs2897@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={30} />
          </a>
        </div>
        <div className="p-1 bg-[#c90d0d]">
          <a
            className=" w-full text-gray-300"
            href="https://drive.google.com/file/d/1pOyCkgKW5rRognLrLcRa7tgL0XzYgLyV/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <MdPictureAsPdf size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
