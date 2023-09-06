"use client";
import Card from "@/components/Card";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";

export default function Home() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero_text", {
        x: -50,
        opacity: 0,
        delay: 0.1,
        duration: 1,
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
                <img
                  src="https://freesvg.org/img/1527145993.png"
                  alt="phone"
                  className="hidden md:block"
                />
              </div>
            </div>
          </section>

          <section className="h-screen">
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

            <div className="mt-32">
              <h3 className="mb-6 text-4xl font-bold">
                Does this sound familiar...
              </h3>
              <div className="no-scrollbar relative -left-11 flex	h-72 items-center gap-10 overflow-y-hidden overflow-x-scroll">
                <Card emoji={`😎`} classes="bg-yellow-200" />
                <Card emoji={`😇`} classes="bg-lime-200" />
                <Card emoji={`🤩`} classes="bg-orange-200" />
                <Card emoji={`😉`} classes="bg-purple-200 -rotate-[15deg]" />
                <Card emoji={`😉`} classes="bg-rose-200" />
                <Card emoji={`😉`} classes="bg-teal-200" />
                <Card emoji={`😉`} classes="bg-lime-200" />
              </div>
            </div>
          </section>

          <section className="h-screen">
            <div className="grid h-[36rem] grid-cols-3 rounded-xl bg-orange-50 px-8">
              <div className="col-span-2 ml-8 py-24">
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
              <div className="mr-8 flex h-[inherit] flex-col items-start justify-center gap-6">
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
