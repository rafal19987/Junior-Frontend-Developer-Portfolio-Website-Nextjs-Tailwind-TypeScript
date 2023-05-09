import { Permanent_Marker } from 'next/font/google';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const Contact = () => {
  return (
    <section
      id="contact"
      className="snap-center flex flex-col items-center min-h-screen w-screen scroll-my-0"
    >
      <div className="flex items-center justify-center w-3/5 h-full border-b">
        <h2 className="p-4 text-2xl">CONTACT</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-4/5 h-full mt-8">
        <span
          className={`${permamentMarker.className} self-start text-2xl text-[#FFBE1A]`}
        >
          Let`s talk
        </span>
        <span className="mt-2 text-base">
          If you have any questions or potential collaborations, I would be
          thrilled to explore them. Thank you for your attention!
        </span>
        <div className="w-full h-96">
          <form className="flex flex-col w-full">
            <label className=" mt-7" htmlFor="name">
              Name:
            </label>
            <input
              className="mt-2 p-2 bg-[#B8B8B8]/25 rounded-lg text-white text-base placeholder:text-[#fff]/25"
              type="text"
              name="name"
              placeholder="Write your name here...*"
              required
            />
            <label className=" mt-4" htmlFor="email">
              Email:
            </label>
            <input
              className="mt-2 p-2 bg-[#B8B8B8]/25 rounded-lg text-white text-base placeholder:text-[#fff]/25"
              type="text"
              name="email"
              placeholder="Write your email here...*"
              required
            />
            <label className=" mt-4" htmlFor="message">
              Message*:
            </label>
            <textarea
              className="mt-2 p-2 bg-[#B8B8B8]/25 rounded-lg text-white text-base placeholder:text-[#fff]/25"
              cols={40}
              rows={5}
              name="message"
              placeholder="Write your message here...*"
              required
            />
            <button className="self-end w-36 h-10 mt-8 bg-[#FFBE1A] rounded-lg text-black text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
