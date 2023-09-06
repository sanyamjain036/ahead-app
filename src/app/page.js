"use client";
import Card from "@/components/Card";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import rocketSvg from "../../public/rocket.svg";

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
        delay: 0.1,
        duration: 2,
        ease: "power4.out",
      });
      // circle_round
      gsap.from(".circle_round", {
        rotateZ: "50%",
        delay: 0.1,
        duration: 2,
        ease: "power4.out",
      });
      //emoji title
      gsap.from(".emoji_cards_title", {
        opacity: 0,
        x: -50,
        y:-10,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: ".emoji_cards_title",
          start: "-50% 70%",
          end: "+=150",
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
          start: "-50% 70%",
          end: () => "+=" + 150,
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
    }, container);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <div className="mx-auto w-11/12" ref={container}>
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
          <section className="mb-24 h-[40rem] rounded-xl bg-purple-50 px-8">
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

          <section className="mb-24 min-h-screen">
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

          <section className="min-h-screen">
            <div className="grid h-full grid-cols-1 rounded-xl bg-orange-50 px-4 py-10 md:h-[36rem] md:grid-cols-3 md:px-8">
              <div className="meet_app_title mb-8 md:mb-0 md:col-span-2 md:ml-8 md:py-24">
                <div className="mb-10 text-lg">Built out of frustation</div>
                <div className="text-6xl font-bold">Meet the ahead app</div>
                <div className="mt-8 flex justify-center">
                  <img
                    src="https://static.wixstatic.com/media/729578_73b7c3a111284b42be7935df60aef924~mv2.png/v1/crop/x_0,y_28,w_1080,h_1024/fill/w_692,h_656,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Artisan-Doodles-Color.png"
                    alt="flower"
                    className=" w-48"
                  />{" "}
                </div>
              </div>

              <div className="mr-8 flex flex-col items-start justify-center gap-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                  totam odio dolore eaque culpa ipsam doloribus amet libero
                  tempore molestiae?
                </p>
                <p>Lorem ipsum dolor sit amet consectet</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
