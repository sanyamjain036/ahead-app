"use client";
import Card from "@/components/Card";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import rocketSvg from "../../public/rocket.svg";
import flowerPng from "../../public/flower.png";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // hero_rext
      gsap.from(".hero_text", {
        x: -100,
        opacity: 0,
        delay: 0.6,
        duration: 2,
        ease: "power4.out",
      });
      // circle_round
      gsap.from(".circle_round", {
        rotateZ: "50%",
        delay: 0.6,
        duration: 2,
        ease: "power4.out",
      });
      //emoji title
      gsap.from(".emoji_cards_title", {
        opacity: 0,
        x: -50,
        y: -10,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: ".emoji_cards_title",
          start: "top center",
          end: "+=250",
          scrub: 1,
        },
      });
      //setting rocket svg
      gsap.set(".rocketSvg", {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        rotateZ: "30%",
      });
      // rocket timeline
      let test = gsap.timeline({
        scrollTrigger: {
          trigger: ".rocketSvg",
          start: "top center",
          end: () => "+=" + 250,
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

      //meet_app_title
      gsap.from(".meet_app_title", {
        opacity: 0,
        x: -80,
        y: -10,
        duration: 5,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: ".meet_app_title",
          start: "-50% 70%",
          end: "+=250",
          scrub: 1,
        },
      });

      //meet_app_para
      gsap.from(".meet_app_para", {
        opacity: 0,
        x: +80,
        y: -10,
        duration: 5,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: ".meet_app_para",
          start: "-50% 70%",
          end: "+=250",
          scrub: 1,
        },
      });
      // rotating svg
      gsap.to(".flowerSvg", {
        rotateZ: 360,
        duration: 3,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".flowerSvg",
          start: "-50% 70%",
          end: () => `+=${window.innerHeight}`,
          scrub: 1,
        },
      });
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

      gsap.from(".start-test-btn", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: ".start-test-btn",
          start: "-300 center",
          end: () => `+=120px`,
          scrub: 1,
        },
      });
    }, container);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <div className="mx-auto w-11/12" ref={container}>
        {/* navbar */}
        <header className="sticky left-0 top-0 z-10 w-full bg-white p-4">
          <div className=" w-full items-center justify-between sm:mx-auto sm:w-3/4 md:flex ">
            <div className="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhm_KT3CgphazKBiPpOm3jO2e22iQrjw7CA&usqp=CAU"
                className="w-16"
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
          <section className="h-[44rem] rounded-xl bg-purple-50 px-8">
            <div className="flex h-[inherit] items-center justify-between gap-5 ">
              <div className=" flex flex-col items-center justify-center">
                <div className="ml-8">
                  <div className=" hero_text mb-8">Ahead app</div>
                  <h2 className="hero_text mb-4 text-5xl font-bold md:text-6xl ">
                    Lorem, ipsum dolor <br />
                    sit amet
                    <br /> consectetu.
                  </h2>
                  <div className="flex items-center">
                    <img
                      src="https://w7.pngwing.com/pngs/506/939/png-transparent-app-store-logo-iphone-app-store-get-started-now-button-electronics-text-telephone-call.png"
                      alt="applelogo"
                      className="w-1/4"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png"
                      alt="rating"
                      className="w-1/4"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="circle_round relative hidden h-[32rem] w-[32rem] rounded-full border-[8px] border-dashed border-white	 bg-transparent  text-white md:block">
                  <img
                    src="https://uploads-ssl.webflow.com/5f778340ed26b167bd087abe/634979ed000ded7d0b9f4f21_apple.png"
                    alt="apple"
                    className="w-24"
                  />
                  <img
                    src="https://freesvg.org/img/1527145993.png"
                    alt="phone"
                    className="absolute left-1/2 top-1/2  w-56  -translate-x-1/2 -translate-y-1/2 "
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="my-64">
            <div className="grid grid-cols-1 gap-12 px-12 md:grid-cols-3 md:gap-0">
              <div className="text-3xl font-bold">EQ beats IQ</div>
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

            <div className="emoji_cards mt-32">
              <div className="flex items-center justify-start">
                <div className="emoji_cards_title mb-6 text-4xl font-bold ">
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
                <Card emoji={`😎`} classes="emoji_card bg-yellow-200" />
                <Card emoji={`😇`} classes="emoji_card bg-lime-200" />
                <Card emoji={`🤩`} classes="emoji_card bg-orange-200" />
                <Card
                  emoji={`😉`}
                  classes="emoji_card bg-purple-200 -rotate-[15deg]"
                />
                <Card emoji={`😉`} classes="emoji_card bg-rose-200" />
                <Card emoji={`😉`} classes="emoji_card bg-teal-200" />
                <Card emoji={`😉`} classes="emoji_card bg-lime-200" />
              </div>
            </div>
          </section>

          <section className=" my-64">
            <div className="relative grid h-full grid-cols-1 rounded-xl bg-orange-50 px-4 py-10 md:h-[36rem] md:grid-cols-3 md:px-8">
              <Image
                priority
                src={flowerPng}
                alt="flower"
                className="flowerSvg absolute -top-10 right-12 w-24 "
              />
              <div className=" mb-8 md:col-span-2 md:mb-0 md:ml-8 md:py-24">
                <div className="meet_app_title mb-10 text-lg">
                  Built out of frustation
                </div>
                <div className="meet_app_title text-6xl font-bold">
                  Meet the ahead app
                </div>
                <div className="mt-8 flex justify-center">
                  <img
                    src="https://static.wixstatic.com/media/729578_73b7c3a111284b42be7935df60aef924~mv2.png/v1/crop/x_0,y_28,w_1080,h_1024/fill/w_692,h_656,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Artisan-Doodles-Color.png"
                    alt="flower"
                    className=" w-48"
                  />{" "}
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

          <section className="my-56">
            <div className="mb-16">
              <p className="mb-6">
                Wrong with self-improvement & how we're fixing it
              </p>
              <h3 className="text-5xl font-bold">Self-improvement. Ugh. </h3>
            </div>

            <div class=" mx-auto flex w-1/2  flex-col p-2">
              <div class="-my-6">
                {/* <!-- Item #1 --> */}
                <div class="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div class="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div class="text-xl font-bold text-slate-900">
                      Acme was founded in Milan, Italy
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div class="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>

                {/* <!-- Item #2 --> */}
                <div class="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div class="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div class="text-xl font-bold text-slate-900">
                      Reached 5K customers
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div class="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>

                {/* <!-- Item #3 --> */}
                <div class="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div class="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div class="text-xl font-bold text-slate-900">
                      Acquired various companies, inluding Technology Inc.
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div class="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>
                {/* <!-- Item #4 --> */}
                <div class="group relative py-6 pl-8 sm:pl-32">
                  {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                  <div class="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                    <div class="text-xl font-bold text-slate-900">
                      Acme went public at the New York Stock Exchange
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div class="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra pharetra massa
                    massa. Adipiscing enim eu neque aliquam vestibulum morbi
                    blandit cursus risus.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-52">
            <div className="grid grid-cols-1 gap-12 px-12 md:grid-cols-3 md:gap-0">
              <div className="text-3xl font-bold">
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

          <section className="my-56">
            <div className="h-[40rem] rounded-2xl bg-blue-100 px-10 py-12 ">
              <p className=" mb-7 text-center text-lg">
                Let your friends, and co-workers (anonymously) rate your social
                skills.
              </p>
              <p className=" text-center text-5xl font-bold">
                Ever wondered what others thinks about you?
              </p>
            </div>
          </section>

          <section className="my-56 flex items-center justify-center">
            <div className="py-10">
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
              <p className="mt-1 text-center text-xs text-slate-400">
                Take only 5 minutes
              </p>
            </div>
          </section>

          <section className="my-56  grid grid-cols-1 rounded-2xl bg-purple-200 py-8 md:px-24 md:py-16 md:grid-cols-2">
            <div className="px-5 ">
              <h3 className="mb-16 text-6xl font-bold">Working with us</h3>
              <div>
                <div className="rounded-xl bg-white px-5 py-12 shadow-md">
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
                <div className="rounded-xl relative -top-5 bg-orange-50 px-5 py-12 shadow-md">
                  <h5 className="mb-4 text-3xl font-bold">
                    Products
                  </h5>
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
              <h3 className="text-right text-6xl font-bold text-purple-600">
                ahead
              </h3>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
