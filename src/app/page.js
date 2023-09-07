"use client";
import Card from "@/components/Card";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import rocketSvg from "../../public/rocket.svg";
import flowerPng from "../../public/flower.png";
import ghostPng from "../../public/ghost.png";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  const container = useRef();

  function getFromLeft(className) {
    gsap.from(className, {
      opacity: 0,
      x: -100,
      y: -10,
      duration: 5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: className,
        start: "-50% 70%",
        end: "+=250",
        scrub: 1,
      },
    });
  }

  function getFromRight(className) {
    gsap.from(className, {
      opacity: 0,
      x: +80,
      y: -10,
      duration: 5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: className,
        start: "-50% 70%",
        end: "+=250",
        scrub: 1,
      },
    });
  }
  function getFromBottom(className) {
    gsap.from(className, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0,
      scrollTrigger: {
        trigger: className,
        start: "-250 70%",
        end: () => `+=150px`,
        scrub: 1,
      },
    });
  }

  function getFromTop(className) {
    gsap.from(className, {
      opacity: 0,
      y: 150,
      duration: 1,
      scrollTrigger: {
        trigger: className,
        start: "top 70%",
        end: () => `+=150px`,
        scrub: 1,
      },
    });
  }

  function getStaggered(className) {
    gsap.from(className, {
      opacity: 0,
      y: 150,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: className,
        start: "top 70%",
        end: () => `+=150px`,
        scrub: 1,
      },
    });
  }
  function rotate360deg(className) {
    gsap.to(className, {
      rotateZ: 360,
      duration: 3,
      delay: 0.5,
      scrollTrigger: {
        trigger: className,
        start: "-50% 70%",
        end: () => `+=${window.innerHeight}`,
        scrub: 1,
      },
    });
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // hero_rext
      gsap.from(".hero_text", {
        x: -100,
        opacity: 0,
        delay: 0.6,
        duration: 2,
        ease: "power3.out",
      });
      // circle_round
      gsap.from(".circle_round", {
        rotateZ: "100%",
        delay: 0.5,
        duration: 1.5,
        ease: "power3.out",
      });

      // rocket timeline
      let test = gsap.timeline({
        scrollTrigger: {
          trigger: ".rocketSvg",
          start: "-50% 70%",
          end: () => "+=" + 350,
          scrub: true,
        },
      });
      // rocket animation
      test.to(".rocketSvg", {
        duration: 3,
        ease: "none",
        motionPath: {
          path: "#path",
          start: 1,
          end: 0,
          autoRotate: true,
        },
      });
      //emoji cards animation
      let emojiCards = gsap.utils.toArray(".emoji_card");
      gsap.to(emojiCards, {
        xPercent: -50 * (emojiCards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".emoji_cards",
          start: "-20% center",
          end: "bottom 30%",
          scrub: 1,
          snap: 1 / (emojiCards.length - 1),
        },
      });
      //emoji title
      getFromLeft(".emoji_cards_title");
      //meet_app_title
      getFromLeft(".meet_app_title");
      //open_position_title
      getFromLeft(".open_position_title");
      //meet_app_para
      getFromRight(".meet_app_para");
      // rotating svg
      rotate360deg(".flowerSvg");
      //typing text
      gsap.from(".typing-text", {
        width: 0,
        duration: 3,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".typing-text",
          start: "-50% 70%",
          end: () => `+=110px`,
          scrub: 1,
        },
      });
      getFromLeft(".self_improvement_title");
      // start test button
      getFromBottom(".start-test-btn");
      getFromLeft(".working_with_us_left");
      getFromRight(".working_with_us_right");
      getFromTop(".think_about_you");
      getStaggered(".hori_timeline_circle");
      getStaggered(".hori_timeline_circle_item");
    }, container);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <div className="mx-auto w-11/12 max-w-7xl " ref={container}>
        {/* navbar */}
        <header className="sticky left-0 top-0 z-10 w-full bg-white p-4">
          <div className=" w-full items-center justify-between sm:mx-auto sm:w-3/4 md:flex ">
            <div className="">
              <img
                src="https://www.ahead-app.com/favicon.ico"
                className="w-16 rounded-xl"
                alt="logo"
              />
            </div>
            <nav>
              <ul className=" hidden items-center justify-center gap-3 md:flex lg:gap-14">
                <li className="text-sm lg:text-base">Emotions</li>
                <li className="text-sm lg:text-base">Manifesto</li>
                <li className="text-sm lg:text-base">Self-awareness test</li>
                <li className="text-sm lg:text-base">Work With Us</li>
              </ul>
            </nav>
            <button className="hidden rounded-3xl bg-black p-3 text-sm text-white  md:block lg:px-6 lg:text-base">
              Download app
            </button>
          </div>
        </header>

        <main className="w-full">
          <section className="relative overflow-hidden rounded-xl bg-purple-50 px-8 py-24">
            <img
              width="64"
              height="64"
              className="absolute left-[6rem] top-[3rem]"
              src="https://img.icons8.com/dusk/64/leaf.png"
              alt="leaf"
            />
            <div className="absolute left-[37rem] top-[2.5rem] h-8 w-8 rounded-full bg-red-100"></div>
            <div className="absolute h-10 w-10 rounded-full bg-red-100"></div>
            <div className="absolute -left-3 bottom-10 h-20 w-20 rounded-full bg-red-100"></div>
            <div className="absolute -bottom-5 left-1/4 h-20 w-20 rounded-full bg-red-400"></div>
            <div className="flex h-[inherit] items-center justify-between gap-5 ">
              <div className=" flex  flex-col items-center justify-center">
                <div className="ml-8 ">
                  <div className=" hero_text mb-8">Ahead app</div>
                  <h2 className="hero_text mb-4 text-5xl font-bold md:text-6xl ">
                    Master your life <br />
                    by mastering
                    <br /> emotions
                  </h2>
                  <div className="flex items-center">
                    <img
                      src="https://w7.pngwing.com/pngs/506/939/png-transparent-app-store-logo-iphone-app-store-get-started-now-button-electronics-text-telephone-call.png"
                      alt="applelogo"
                      className="w-1/4"
                    />
                    <div className="relative">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png"
                        alt="rating"
                        className=" w-[12rem] "
                      />
                      <span className="absolute bottom-5 left-7 box-content block text-sm text-gray-500">
                        100+ App reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="circle_round relative hidden h-[32rem] w-[32rem] rounded-full border-[8px] border-dashed border-white	 bg-transparent  text-white md:block">
                  <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100"></div>

                  <Image
                    priority
                    src={ghostPng}
                    alt="ghost"
                    className="absolute right-8 w-16"
                  />
                  <Image
                    priority
                    src={ghostPng}
                    alt="ghost"
                    className="absolute bottom-0 w-16"
                  />
                  <Image priority src={ghostPng} alt="ghost" className="w-16" />
                  <img
                    src="https://freesvg.org/img/1527145993.png"
                    alt="phone"
                    className="absolute left-1/2 top-1/2  w-56  -translate-x-1/2 -translate-y-1/2 "
                  />
                </div>
              </div>
            </div>
          </section>

          <section className=" pb-40 pt-20">
            <div className="grid grid-cols-1 gap-12 px-12 md:grid-cols-3 md:gap-0">
              <div className="text-4xl font-bold">EQ beats IQ</div>
              <div className="w-3/4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, doloribus? Lorem ipsum dolor sit amet. Lorem ipsum,
                dolor sit amet consectetur adipisiciDolore,{" "}
              </div>
              <div className="w-3/4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, doloribus? Lorem ipsum dolor sit amet. Lorem ipsum,
                dolor sit amet consectetur{" "}
              </div>
            </div>

            <div className="emoji_cards mt-32">
              <div className="flex items-center justify-start">
                <div className="emoji_cards_title mb-6 text-6xl font-bold ">
                  Does this sound familiar...
                </div>
                <Image
                  priority
                  src={rocketSvg}
                  alt="rocket"
                  className="rocketSvg  hidden w-24 md:inline "
                />

                <path
                  id="path"
                  d="M154.268,2.226 C198.167,71.304 205.91,61.522 240.144,82.727 280.291,107.595 272.616,108.019 334.371,97.058 "
                />
              </div>
              <div className="no-scrollbar relative  flex	h-72 items-center gap-10 overflow-y-hidden overflow-x-scroll">
                <Card emoji={`😎`} classes="emoji_card bg-yellow-100" />
                <Card emoji={`😇`} classes="emoji_card bg-lime-100" />
                <Card emoji={`🤩`} classes="emoji_card bg-orange-100" />
                <Card
                  emoji={`😉`}
                  classes="emoji_card bg-purple-200 -rotate-[15deg]"
                />
                <Card emoji={`😉`} classes="emoji_card bg-rose-100" />
                <Card emoji={`😉`} classes="emoji_card bg-teal-100" />
                <Card emoji={`😉`} classes="emoji_card bg-lime-100" />
              </div>
            </div>
          </section>

          <section className=" pb-30">
            <div className="relative grid h-full grid-cols-1 overflow-hidden rounded-xl bg-orange-50 px-4 py-10 md:h-[36rem] md:grid-cols-3 md:px-8">
              <Image
                priority
                src={flowerPng}
                alt="flower"
                className="flowerSvg absolute right-12 top-4 w-24 "
              />
              <svg
                viewBox="0 0 200 200"
                className="absolute -bottom-[200px] -left-[150px] w-[40rem]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFDFB7"
                  d="M43.5,-34.9C56,-19,65.5,-0.9,62.9,15.9C60.3,32.7,45.5,48.2,27.5,56.8C9.5,65.3,-11.8,66.9,-28.9,59C-46,51.1,-59,33.8,-65.5,12.9C-71.9,-8.1,-71.8,-32.6,-59.8,-48.4C-47.7,-64.2,-23.9,-71.2,-4.2,-67.8C15.5,-64.5,31,-50.8,43.5,-34.9Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className=" mb-8 md:col-span-2 md:mb-0 md:ml-8 md:py-24">
                <div className="meet_app_title mb-10 text-lg">
                  Built out of frustation
                </div>
                <div className="meet_app_title text-6xl font-bold">
                  Meet the ahead app
                </div>
                <div className="relative mt-8">
                  <div className="relative h-[10rem] w-[10rem]  rounded-full bg-slate-100 md:translate-x-28">
                    <div className="absolute right-0 h-[9rem] w-[9rem]  rounded-full bg-white "></div>
                    <Image
                      priority
                      src={ghostPng}
                      alt="ghost"
                      className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 "
                    />
                  </div>
                </div>
              </div>

              <div className="mr-8 flex flex-col items-start justify-center gap-6">
                <p className="meet_app_para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                  totam odio dolore eaque culpa ipsam doloribus amet libero
                  tempore molestiae?
                </p>
                <p className="meet_app_para">
                  Lorem ipsum dolor sit amet consectet
                </p>
              </div>
            </div>
          </section>

          {/* vertical timeline */}
          <section className="pb-10 pt-40">
            <div className="mb-16">
              <p className="self_improvement_title mb-6">
                Wrong with self-improvement & how we're fixing it
              </p>
              <h3 className="self_improvement_title text-6xl font-bold">
                Self-improvement. Ugh.{" "}
              </h3>
            </div>

            <div className=" mx-auto flex w-full flex-col  p-2 md:w-1/2">
              <div className="-my-6">
                {/* <!-- Item #1 --> */}
                <div className="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div className="text-xl font-bold text-slate-900">
                      Acme was founded in Milan, Italy
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>

                {/* <!-- Item #2 --> */}
                <div className="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div className="text-xl font-bold text-slate-900">
                      Reached 5K customers
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>

                {/* <!-- Item #3 --> */}
                <div className="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div className="text-xl font-bold text-slate-900">
                      Acquired various companies, inluding Technology Inc.
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>
                {/* <!-- Item #4 --> */}
                <div className="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div className="text-xl font-bold text-slate-900">
                      Acme went public at the New York Stock Exchange
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 pb-20">
            <div className="grid grid-cols-1 gap-12 px-12 md:grid-cols-3 md:gap-0">
              <div className="text-4xl font-bold">
                Be the best you <br /> with EQ
              </div>
              <div className="w-3/4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, doloribus? Lorem ipsum dolor sit amet. Lorem ipsum,
                dolor sit amet consectetur adipisiciDolore,{" "}
              </div>
              <div className="w-3/4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, doloribus? Lorem ipsum dolor sit amet. Lorem ipsum,
                dolor sit amet consectetur{" "}
              </div>
            </div>
          </section>

          {/* what others think of you */}
          <section className="pb-40">
            <div className="rounded-2xl bg-blue-50 px-2 py-12 md:px-10 ">
              <p className="think_about_you mb-7 text-center text-lg">
                Let your friends, and co-workers (anonymously) rate your social
                skills.
              </p>
              <p className="think_about_you mb-24 text-center text-5xl font-bold">
                Ever wondered what others thinks about you?
              </p>

              <div className="mx-auto mb-40 flex w-full items-center justify-center">
                <div className="grid w-full grid-cols-2 md:w-3/4">
                  <div className="relative border-t-4 border-dashed border-yellow-400">
                    <span className="hori_timeline_circle absolute left-[-16px] top-[-16px] box-content  flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-center  font-bold text-white">
                      1
                    </span>
                    <span className="hori_timeline_circle_item absolute bottom-[-70px] left-[-120px] box-content block px-5 py-3 text-sm text-black">
                      Answer questions on your social skills
                    </span>
                  </div>
                  <div className=" relative border-t-4 border-dashed border-yellow-400">
                    <span className="hori_timeline_circle absolute left-[-16px] top-[-16px] box-content  flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-center  font-bold text-white">
                      2
                    </span>
                    <span className="hori_timeline_circle_item absolute bottom-[-80px] left-[-150px] box-content block px-5 py-3 text-center text-sm text-black">
                      Let others anonymously answer the same <br /> questions
                      about you.
                    </span>
                    <span className="hori_timeline_circle  absolute right-[0px] top-[-16px] box-content flex h-8 w-8  items-center justify-center rounded-full bg-yellow-400 text-center font-bold text-white">
                      3
                    </span>
                    <span className="hori_timeline_circle_item absolute bottom-[-80px] right-[-120px] box-content block px-5 py-3 text-center text-sm text-black">
                      Find out where you and others see things <br /> the same
                      way - and where not
                    </span>
                  </div>
                </div>
              </div>

              <div className="mx-auto flex h-72 w-3/4 items-center justify-center rounded-md bg-white py-6 shadow-md">
                <div className="grid w-full grid-cols-3 md:w-3/4">
                  <div className="relative border-t-2 border-slate-400">
                    <span className="hori_timeline_circle absolute left-[-16px] top-[-16px] box-content block h-8 w-8 rounded-full bg-indigo-600"></span>
                    <span className="hori_timeline_circle_item absolute left-[-61px] top-[-84px] box-content block rounded-lg bg-indigo-600 px-5 py-3 text-white">
                      {" "}
                      You
                    </span>
                  </div>
                  <div className="relative border-t-2 border-slate-400">
                    <span className="hori_timeline_circle absolute left-[-16px] top-[-16px] box-content block h-8 w-8 rounded-full bg-cyan-400"></span>
                    <span className="hori_timeline_circle_item absolute bottom-[-80px] left-[0px] box-content block rounded-lg bg-cyan-400 px-5 py-3 text-white">
                      Anonymonos 1
                    </span>
                  </div>
                  <div className="relative border-t-2 border-slate-400">
                    <span className="hori_timeline_circle absolute left-[-16px] top-[-16px] box-content block h-8 w-8 rounded-full bg-amber-400"></span>
                    <span className="hori_timeline_circle_item absolute left-[-10px] top-[-80px] box-content block rounded-lg bg-amber-400 px-5 py-3 text-white">
                      Anonymonos 2
                    </span>
                    <span className="hori_timeline_circle absolute right-[0px] top-[-16px] box-content block h-8 w-8 rounded-full bg-teal-400"></span>
                    <span className="hori_timeline_circle_item absolute bottom-[-80px] right-[-120px] box-content block rounded-lg bg-teal-400 px-5 py-3 text-white">
                      Anonymonos 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* start a test */}
          <section className="flex items-center justify-center pb-40">
            <div>
              <p className="mb-3 text-center">We privacy seriously</p>
              <p className="mb-3 text-center text-3xl font-bold">
                Before you get started
              </p>
              <p className="text-center text-gray-400">
                "We share your answers with anyone (and won't ever tell <br />{" "}
                you which friends said what about you)"
              </p>
              <p className="my-6 flex items-center justify-center text-center font-mono text-2xl ">
                with love,{" "}
                <span className="typing-text inline-block overflow-hidden whitespace-nowrap">
                  Team ahead
                </span>
              </p>
              <button className="start-test-btn mx-auto block rounded-3xl bg-black p-3 px-6 text-center text-xs text-white">
                {" "}
                Start a test
              </button>
              <p className="mt-3 text-center text-xs text-slate-400">
                Take only 5 minutes
              </p>
            </div>
          </section>

          {/* working with us */}
          <section className="grid grid-cols-1 gap-20 rounded-2xl bg-purple-200 py-40 pb-0 md:grid-cols-2 md:px-12 md:py-16">
            <div className="px-5">
              <h3 className="working_with_us_left mb-16 text-6xl font-bold">
                Working with us
              </h3>
              <div>
                <div className="w-11/12 rounded-xl bg-white px-5 py-12 shadow-md">
                  <h5 className="mb-4 text-3xl font-bold">
                    👻
                    <br />
                    About
                  </h5>
                  <p className="text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus mollitia harum eveniet quae, iusto architecto
                    dolorem odit alias dolore nostrum excepturi. Cum provident
                    molestiae nulla!
                  </p>
                </div>
                <div className="relative -top-5 w-11/12 rounded-xl bg-orange-50 px-5 py-12 shadow-md">
                  <h5 className="mb-4 text-3xl font-bold">Products</h5>
                  <p className="text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus mollitia harum eveniet quae, iusto architecto
                    dolorem odit alias dolore nostrum excepturi. Cum provident
                    molestiae nulla!
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" working_with_us_right mb-16 text-right text-6xl font-bold text-purple-600">
                  ahead
                </h3>
                <div className="h-[40rem] space-y-8 overflow-x-hidden overflow-y-scroll">
                  <div className="mx-auto w-full rounded-lg bg-white p-9 text-gray-400 shadow-md md:w-2/3">
                    <h4 className="mb-4 font-semibold text-black">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                    Dolore optio voluptatibus placeat perspiciatis aliquid
                    excepturi labore mollitia repellendus quam molestias.
                  </div>
                  <div className="mx-auto w-full rounded-lg bg-white p-9 text-gray-400 shadow-md md:w-2/3">
                    <h4 className="mb-4 font-semibold text-black">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                    Dolore optio voluptatibus placeat perspiciatis aliquid
                    excepturi labore mollitia repellendus quam molestias.
                  </div>
                  <div className="mx-auto w-full rounded-lg bg-white p-9 text-gray-400 shadow-md md:w-2/3">
                    <h4 className="mb-4 font-semibold text-black">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                    Dolore optio voluptatibus placeat perspiciatis aliquid
                    excepturi labore mollitia repellendus quam molestias.
                  </div>
                  <div className="mx-auto w-full rounded-lg bg-white p-9 text-gray-400 shadow-md md:w-2/3">
                    <h4 className="mb-4 font-semibold text-black">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                    Dolore optio voluptatibus placeat perspiciatis aliquid
                    excepturi labore mollitia repellendus quam molestias.
                  </div>
                  <div className="mx-auto w-full rounded-lg bg-white p-9 text-gray-400 shadow-md md:w-2/3">
                    <h4 className="mb-4 font-semibold text-black">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                    Dolore optio voluptatibus placeat perspiciatis aliquid
                    excepturi labore mollitia repellendus quam molestias.
                  </div>
                  <div className="mx-auto w-full rounded-lg bg-white p-9 text-gray-400 shadow-md md:w-2/3">
                    <h4 className="mb-4 font-semibold text-black">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                    Dolore optio voluptatibus placeat perspiciatis aliquid
                    excepturi labore mollitia repellendus quam molestias.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* open positions */}
          <section className="pb-24 pt-32">
            <h2 className="open_position_title mb-8 text-6xl font-bold">
              Open vacanies
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:flex-row">
              <div className="group rounded-lg bg-yellow-50 p-10 transition-all hover:scale-105 hover:bg-yellow-100">
                <h6 className="mb-3 text-xl font-bold">
                  Senior Full Stack Engineer
                </h6>
                <ul className="mb-8 list-disc space-y-4	">
                  <li className="text-sm ">Full-time position</li>
                  <li className="text-sm ">Berlin or remote</li>
                  <li className="text-sm ">
                    $60-$80, 0.5% equity share options
                  </li>
                </ul>
                <button className="hidden rounded-md bg-black px-6 py-2 text-white transition-all group-hover:block">
                  Apply now
                </button>
              </div>
              <div className="group rounded-lg bg-yellow-50 p-10 transition-all hover:scale-105 hover:bg-yellow-100">
                <h6 className="mb-3 text-xl font-bold">
                  Senior Full Stack Engineer
                </h6>
                <ul className="mb-8 list-disc space-y-4	">
                  <li className="text-sm ">Full-time position</li>
                  <li className="text-sm ">Berlin or remote</li>
                  <li className="text-sm ">
                    $60-$80, 0.5% equity share options
                  </li>
                </ul>
                <button className="hidden rounded-md bg-black px-6 py-2 text-white transition-all group-hover:block">
                  Apply now
                </button>
              </div>
              <div className="group rounded-lg bg-yellow-50 p-10 transition-all hover:scale-105 hover:bg-yellow-100">
                <h6 className="mb-3 text-xl font-bold">
                  Senior Full Stack Engineer
                </h6>
                <ul className="mb-8 list-disc space-y-4	">
                  <li className="text-sm ">Full-time position</li>
                  <li className="text-sm ">Berlin or remote</li>
                  <li className="text-sm ">
                    $60-$80, 0.5% equity share options
                  </li>
                </ul>
                <button className="hidden rounded-md bg-black px-6 py-2 text-white transition-all group-hover:block">
                  Apply now
                </button>
              </div>
            </div>
          </section>

          {/* horizontal rule */}
          <div className="h-[2px] w-full bg-gray-300"></div>

          {/* footer */}
          <footer className="grid grid-cols-1 py-32">
            <div className="mb-4 flex flex-col items-center justify-center">
              <img
                src="https://www.ahead-app.com/favicon.ico"
                className="w-16 rounded-xl"
                alt="logo"
              />
              <p className="mt-2 text-lg font-semibold text-purple-500 ">
                ahead
              </p>
            </div>
            <div className="mb-6 flex flex-row items-center justify-center gap-12">
              <div className="flex items-center gap-3">
                <img
                  src="https://img.icons8.com/ios-filled/50/marker.png"
                  alt="location"
                  className="w-8"
                />
                <p className="text-sm">Augutro,26 10017 Berlin</p>
              </div>
              <div className="flex  items-center  gap-3">
                <img
                  src="https://img.icons8.com/ios-filled/50/new-post.png"
                  alt="email"
                  className="w-8"
                />
                <p className="text-sm">hi@ahead-app.com</p>
              </div>
            </div>
            <div className="mb-6 flex flex-row justify-center">
              <img
                src="https://w7.pngwing.com/pngs/506/939/png-transparent-app-store-logo-iphone-app-store-get-started-now-button-electronics-text-telephone-call.png"
                alt="applelogo"
                className="w-32"
              />
            </div>
            <div className="mb-6 flex flex-row justify-center text-xs text-gray-400">
              &#169; 2022 Ahead app. All right reserved
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
