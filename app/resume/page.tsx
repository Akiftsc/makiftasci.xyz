import MainTitle from "@/Components/MainTitle";
import MiniTitle from "@/Components/MiniTitle";
import Me from "@/public/ben.jpg";
import Image from "next/image"

export default function Resume() {
    return (
        <main className="container p-12 w-full h-full flex flex-col md:flex-row md:gap-0 gap-8">
            <section className="flex-1 p-2">
                <MainTitle size="two" direction="left">
                    I’m mehmet Akif Taşçı.
                    I like coding, designing and reading.
                </MainTitle>
                <br />

                <MiniTitle>
                    Biographical
                </MiniTitle>
                <p className="text-defaultText text-base font-[500] tracking-tight">
                    Mehmet Akif was born on <span className="highlighted">May 16, 2008</span>, in Istanbul.
                    He is a high school student with a profound passion for software development.
                    He is currently enrolled at Bülent Akarcalı Highschool, which is located in <span className="highlighted">Istanbul</span>.
                    Akif is immersed in a challenging software technology learning program that ignites his passion for learning and developing projects for his journey towards becoming a software engineer.
                </p>
                <br />

                <MiniTitle>
                    Freelancing
                </MiniTitle>
                <p className="text-defaultText text-base font-[500] tracking-tight">

                    He’s freelancing for a few years, He’s able to create CMSs,
                    HTML email designs and projects with Frontend/Backend technologies perhaps
                    <span className="highlighted"> Blogs, E-commerce websites etc.</span>

                    <br />
                    Here’s a few projects I’ve done:

                </p>
                <ul className="list-disc px-6">
                    <li>
                        <a href="https://munazara.netlify.app/">
                            Website of open discussion club of my Highschool
                        </a>
                    </li><li>
                    <a href="https://united-clubs.vercel.app/">
                        United Clubs Management System in React, Express
                    </a>
                </li><li>
                    <a href="https://github.com/Akiftsc/r-place">
                        Reddit&apos;s r/place clone with Nodejs
                    </a>
                </li><li>
                    <a href="http://github.com/Akiftsc">
                        E-mail Newsletters in HTML.
                    </a>
                </li>
                </ul>

                <br />

                <MiniTitle>
                    Technologies
                </MiniTitle>
                <div className="!font-[800] w-full px-6">

                    <div className="flex gap-7">
                        <ul className="list-disc">
                            <li>
                                Node.js
                            </li><li>
                            Express
                        </li><li>
                            Typescript
                        </li><li>
                            Tailwind CSS
                        </li><li>
                            Python
                        </li>

                        </ul>
                        <ul className="list-disc">
                            <li>
                                JsonWebToken
                            </li><li>
                            ReactJS
                        </li><li>
                            NextJS
                        </li><li>
                            MongoDB
                        </li>
                        </ul>
                    </div>

                </div>

            </section>
            <section className="flex-1 flex items-center justify-between flex-col">
                <div className="flex items-center p-2 flex-col gap-3">
                    <Image src={Me} width={358.924} height={400} alt="A portrait of Mehmet Akif Taşçı. " className="rounded" priority={true} />
                    <div className="flex items-center justify-between flex-col w-full">
                        <div className="flex items-center gap-1 justify-center ">
                            <a href="http://github.com/Akiftsc" target="_blank" className="bg-[#231E1B] w-32 grid place-items-center text-white fill-white hover:opacity-80 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                                    <path d="M27 -2H5C2.23858 -2 0 0.238576 0 3V25C0 27.7614 2.23858 30 5 30H27C29.7614 30 32 27.7614 32 25V3C32 0.238576 29.7614 -2 27 -2Z" fill="#231E1B"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9755 6.19199C11.5719 6.19199 8 9.76385 8 14.1675C8 17.6905 10.2997 20.6752 13.4312 21.7516C13.8226 21.8005 13.9694 21.5559 13.9694 21.3602C13.9694 21.1645 13.9694 20.6752 13.9694 19.9902C11.7676 20.4794 11.2783 18.9137 11.2783 18.9137C10.9358 17.984 10.3976 17.7394 10.3976 17.7394C9.66361 17.2501 10.4465 17.2501 10.4465 17.2501C11.2294 17.299 11.6697 18.0819 11.6697 18.0819C12.4037 19.3051 13.5291 18.9626 13.9694 18.7669C14.0183 18.2287 14.263 17.8862 14.4587 17.6905C12.6972 17.4947 10.8379 16.8097 10.8379 13.7272C10.8379 12.8464 11.1315 12.1614 11.6697 11.5742C11.6208 11.4275 11.3272 10.5957 11.7676 9.5192C11.7676 9.5192 12.4526 9.32348 13.9694 10.351C14.6055 10.1553 15.2905 10.1064 15.9755 10.1064C16.6606 10.1064 17.3456 10.2042 17.9817 10.351C19.4985 9.32348 20.1835 9.5192 20.1835 9.5192C20.6239 10.5957 20.3303 11.4275 20.2813 11.6232C20.7706 12.1614 21.1131 12.8953 21.1131 13.7761C21.1131 16.8587 19.2538 17.4947 17.4924 17.6905C17.7859 17.9351 18.0306 18.4244 18.0306 19.1583C18.0306 20.2348 18.0306 21.0666 18.0306 21.3602C18.0306 21.5559 18.1774 21.8005 18.5688 21.7516C21.7492 20.6752 24 17.6905 24 14.1675C23.9511 9.76385 20.3792 6.19199 15.9755 6.19199Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/m.akif.tasci/" target="_blank" className="bg-[#F00073] w-16 grid place-items-center hover:opacity-80 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                                    <path d="M27 -2H5C2.23858 -2 0 0.238576 0 3V25C0 27.7614 2.23858 30 5 30H27C29.7614 30 32 27.7614 32 25V3C32 0.238576 29.7614 -2 27 -2Z" fill="#F00073"/>
                                    <path d="M16 7.20001C18.2 7.20001 18.5 7.20001 19.4 7.20001C20.2 7.20001 20.6 7.40001 20.9 7.50001C21.3 7.70001 21.6 7.80001 21.9 8.10001C22.2 8.40001 22.4 8.70001 22.5 9.10001C22.6 9.40001 22.7 9.80001 22.8 10.6C22.8 11.5 22.8 11.7 22.8 14C22.8 16.3 22.8 16.5 22.8 17.4C22.8 18.2 22.6 18.6 22.5 18.9C22.3 19.3 22.2 19.6 21.9 19.9C21.6 20.2 21.3 20.4 20.9 20.5C20.6 20.6 20.2 20.7 19.4 20.8C18.5 20.8 18.3 20.8 16 20.8C13.7 20.8 13.5 20.8 12.6 20.8C11.8 20.8 11.4 20.6 11.1 20.5C10.7 20.3 10.4 20.2 10.1 19.9C9.80001 19.6 9.60001 19.3 9.50001 18.9C9.40001 18.6 9.30001 18.2 9.20001 17.4C9.20001 16.5 9.20001 16.3 9.20001 14C9.20001 11.7 9.20001 11.5 9.20001 10.6C9.20001 9.80001 9.40001 9.40001 9.50001 9.10001C9.70001 8.70001 9.80001 8.40001 10.1 8.10001C10.4 7.80001 10.7 7.60001 11.1 7.50001C11.4 7.40001 11.8 7.30001 12.6 7.20001C13.5 7.20001 13.8 7.20001 16 7.20001ZM16 5.70001C13.7 5.70001 13.5 5.70001 12.6 5.70001C11.7 5.70001 11.1 5.90001 10.6 6.10001C10.1 6.30001 9.60001 6.60001 9.10001 7.10001C8.60001 7.60001 8.40001 8.00001 8.10001 8.60001C7.90001 9.10001 7.80001 9.70001 7.70001 10.6C7.70001 11.5 7.70001 11.8 7.70001 14C7.70001 16.3 7.70001 16.5 7.70001 17.4C7.70001 18.3 7.90001 18.9 8.10001 19.4C8.30001 19.9 8.60001 20.4 9.10001 20.9C9.60001 21.4 10 21.6 10.6 21.9C11.1 22.1 11.7 22.2 12.6 22.3C13.5 22.3 13.8 22.3 16 22.3C18.2 22.3 18.5 22.3 19.4 22.3C20.3 22.3 20.9 22.1 21.4 21.9C21.9 21.7 22.4 21.4 22.9 20.9C23.4 20.4 23.6 20 23.9 19.4C24.1 18.9 24.2 18.3 24.3 17.4C24.3 16.5 24.3 16.2 24.3 14C24.3 11.8 24.3 11.5 24.3 10.6C24.3 9.70001 24.1 9.10001 23.9 8.60001C23.7 8.10001 23.4 7.60001 22.9 7.10001C22.4 6.60001 22 6.40001 21.4 6.10001C20.9 5.90001 20.3 5.80001 19.4 5.70001C18.5 5.70001 18.3 5.70001 16 5.70001Z" fill="white"/>
                                    <path d="M16 9.70001C13.6 9.70001 11.7 11.6 11.7 14C11.7 16.4 13.6 18.3 16 18.3C18.4 18.3 20.3 16.4 20.3 14C20.3 11.6 18.4 9.70001 16 9.70001ZM16 16.8C14.5 16.8 13.2 15.6 13.2 14C13.2 12.5 14.4 11.2 16 11.2C17.5 11.2 18.8 12.4 18.8 14C18.8 15.5 17.5 16.8 16 16.8Z" fill="white"/>
                                    <path d="M20.4 10.6C20.9523 10.6 21.4 10.1523 21.4 9.60001C21.4 9.04773 20.9523 8.60001 20.4 8.60001C19.8477 8.60001 19.4 9.04773 19.4 9.60001C19.4 10.1523 19.8477 10.6 20.4 10.6Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/akif2442" target="_blank" className="bg-[#1DA1F2] w-32 grid place-items-center hover:opacity-80 cursor-pointer" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                                    <path d="M27 -2H5C2.23858 -2 0 0.238576 0 3V25C0 27.7614 2.23858 30 5 30H27C29.7614 30 32 27.7614 32 25V3C32 0.238576 29.7614 -2 27 -2Z" fill="#1DA1F2"/>
                                    <path d="M24 9C23.4 9.3 22.8 9.4 22.1 9.5C22.8 9.1 23.3 8.5 23.5 7.7C22.9 8.1 22.2 8.3 21.4 8.5C20.8 7.9 19.9 7.5 19 7.5C16.9 7.5 15.3 9.5 15.8 11.5C13.1 11.4 10.7 10.1 9 8.1C8.1 9.6 8.6 11.5 10 12.5C9.5 12.5 9 12.3 8.5 12.1C8.5 13.6 9.6 15 11.1 15.4C10.6 15.5 10.1 15.6 9.6 15.5C10 16.8 11.2 17.8 12.7 17.8C11.5 18.7 9.7 19.2 8 19C9.5 19.9 11.2 20.5 13 20.5C19.1 20.5 22.5 15.4 22.3 10.7C23 10.3 23.6 9.7 24 9Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}
