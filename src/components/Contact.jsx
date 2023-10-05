import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { github, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_o9i6omo",
        "template_suu1dan",
        {
          from_name: form.name,
          to_name: "Muhammad Usman",
          from_email: form.email,
          to_email: "Musmant11@gmail.com",
          message: form.message,
        },
        "55iOloYXbh5VBANA8"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="overflow-hidden xl:mt-12">
      <div
        className={`flex overflow-hidden xl:flex-row flex-col-reverse gap-10 `}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <div className=" mt-6 text-start">
            <h4 className="text-violet-300 border-l-4 border-l-purple-500 pl-3">
              I am open for{" "}
              <span className="text-white">freelance projects </span>
              and{" "}
              <span className="text-white">
                full time MERN stack <span className="text-violet-300">|</span>{" "}
                full stack <span className="text-violet-300">|</span> frontend
                developer roles
              </span>
            </h4>
            <p className="mt-4 border-l-4 border-l-green-500 pl-3">
              Contact me through{" "}
              <a
                target="_blank"
                className="text-blue-500 active:text-blue-700 hover:underline"
                href="mailto:Musmant11@gmail.com"
              >
                Musmant11@gmail.com
              </a>{" "}
              or by filling in the fields below.
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              disabled={loading}
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? (
                <span className="relative cursor-not-allowed">
                  <span className=" animate-pulse ">Sending</span>
                  <span className="animate-bounce absolute right-[-15px] bottom-0 duration-500 delay-75">
                    .
                  </span>
                  <span className="duration-300 absolute right-[-10px] bottom-0 animate-bounce delay-300">
                    .
                  </span>
                  <span className="animate-bounce right-[-5px] delay-700 absolute">
                    .
                  </span>
                </span>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className="bg-black-100 mb-10 w-[350px] max-w-full rounded-xl mx-auto space-y-4 px-7 py-5 mt-10"
      >
        <h3 className="max-w-[200px] mx-auto text-center">Follow me on </h3>
        <div className="flex justify-center gap-x-4 items-center">
          <a
            target="_blank"
            className="outline transition-all outline-transparent hover:outline-white hover:outline-offset-1 rounded-full outline-offset-0"
            href="https://github.com/Muhammad-Usman-Official"
          >
            <img
              src={github}
              className="w-12 h-12 object-contain"
              alt="github icon"
            />
          </a>
          <a
            target="_blank"
            className="outline bg-white transition-all outline-transparent hover:outline-white hover:outline-offset-[5px] rounded-full outline-offset-0"
            href="https://www.linkedin.com/in/muhammad-usman-3c/"
          >
            <img
              src={linkedin}
              className="w-10 h-10 object-contain"
              alt="github icon"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
