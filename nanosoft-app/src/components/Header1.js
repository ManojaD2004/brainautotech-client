"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Header1 = () => {
  const router = useRouter();
  return (
    <Popover
      className={
        "flex items-center border-b-2 w-[100%] px-6 bg-white py-2 h-20 text-black z-[100] fixed  shadow-2xl bg-opacity-90 bg-blur"
      }
    >
      <img src="/sidelogoplustext.PNG" width={160} />
      <div className="grow ">
        <div className="hidden lg:flex items-center justify-center gap-2 md:gap-8 font-semibold">
          <div
            href=""
            className="textdesign hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </div>
          <div
            onClick={() => router.push("/about")}
            className="textdesign hover:cursor-pointer"
          >
            About
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0  data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                <div className="flex gap-1 items-center justify-center">
                  <span className="textdesign">Services</span>
                  <img
                    src="https://static.thenounproject.com/png/1123247-200.png"
                    alt=""
                    width={23}
                  />
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[240px] rounded-[8px] font-semibold shadow-xl text-[16px] bg-gray-100"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                className="flex justify-center py-[8px]"
              >
                <a
                  href="/algo-services"
                  // target="_blank"
                  className="textdesign"
                >
                  {" "}
                  Algo services{" "}
                </a>
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                className="flex justify-center py-[8px]"
                onClick={() => router.push("/it-services")}
              >
                <a className="textdesign"> IT services </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div
            onClick={() => router.push("/pricing")}
            className="textdesign cursor-pointer"
          >
            Pricing
          </div>
          <div
            onClick={() => router.push("/payment")}
            className="textdesign hover:cursor-pointer"
          >
            Payment
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent "
                radius="sm"
                variant="light"
              >
                <div className="flex gap-1 items-center justify-center textdesign">
                  Policy
                  <img
                    src="https://static.thenounproject.com/png/1123247-200.png"
                    alt=""
                    width={23}
                  />
                </div>
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              aria-label="ACME features"
              className="w-[240px] bg-gray-100 rounded-[8px] font-semibold shadow-xl text-[16px] flex gap-[10px] "
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscal"
                className="flex justify-center py-[8px] "
                onClick={() => router.push("/disclaimer")}
              >
                <a className="textdesign"> Disclaimer </a>
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                className="flex justify-center py-[8px]"
                onClick={() => router.push("/privacy")}
              >
                <a className="textdesign"> Privacy Policy </a>
              </DropdownItem>
              <DropdownItem
                key="autoscaling"
                className="flex justify-center py-[8px]"
                onClick={() => router.push("/terms")}
              >
                <a className="textdesign"> Terms and Condition </a>
              </DropdownItem>
              <DropdownItem
                key="supreme_supt"
                className="flex justify-center py-[8px]"
                onClick={() => router.push("/refund")}
              >
                <a className="textdesign"> Refund Policy </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Link href="/contact" className="textdesign">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end lg:hidden">
        <Popover.Button
          className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
    hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition xl:hidden z-[100] "
        >
          <div className="rounded-lg bg-[#aee9e7] !text-[#102b5c] shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 ">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <img src="/Textonly.png" width={160} className="" />
                <div className="-mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-[#aee9e7] p-2 text-black
    hover:bg-gray-100 hover:text-gray-500 focus:outline-none  "
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 ">
                <nav className="grid gap-y-5 text-white font-bold text-center">
                  <div
                    onClick={() => router.push("/")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Home
                  </div>
                  <div
                    onClick={() => router.push("/about")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    About
                  </div>
                  <div
                    onClick={() => router.push("/it-services")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    IT-Services
                  </div>
                  <div
                    onClick={() => router.push("/algo-services")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Algo-Services
                  </div>
                  <div
                    onClick={() => router.push("/pricing")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Pricing
                  </div>
                  <div
                    onClick={() => router.push("/payment")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Payment
                  </div>
                  <div
                    onClick={() => router.push("/disclaimer")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Disclaimer
                  </div>
                  <div
                    onClick={() => router.push("/privacy")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Privacy Policy
                  </div>
                  <div
                    onClick={() => router.push("/terms")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Terms and Condition
                  </div>
                  <div
                    onClick={() => router.push("/refund")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Refund Policy
                  </div>
                  <div
                    onClick={() => router.push("/contact")}
                    className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Contact
                  </div>
                </nav>
              </div>
              <div className="mt-6 flex  items-center gap-2 text-white">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScEc8XXMRbv5jx5H1Gb_ltKHwQrGLE8gRqbx5jQTjhYYobp7g/viewform"
                  className="rounded-md bg-purple-500 px-4 py-2 text-sm font-bold  md:text-xl w-full 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 flex justify-center"
                >
                  KYC
                </a>
                <a
                  href="https://login.brainautotech.com/login"
                  className="rounded-md bg-purple-500 px-4 py-2 text-sm font-bold  md:text-xl w-full 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 active:bg-gray-100 flex justify-center"
                >
                  Login
                </a>
                <a
                  href="https://login.brainautotech.com/signup"
                  className="rounded-md bg-purple-500 px-4 py-2 text-sm font-bold  md:text-xl w-full
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 active:bg-gray-100 flex justify-center"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      <div className="hidden lg:flex lg:gap-[20px] text-white">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScEc8XXMRbv5jx5H1Gb_ltKHwQrGLE8gRqbx5jQTjhYYobp7g/viewform"
          target="_blank"
          className="mr-2 font-bold "
        >
          <button className="bg-[#f4511d] duration-300 hover:bg-slate-700 xl:w-[80px] lg:w-[50px] h-[4vh] font-light rounded-xl text-[13px]">
            KYC
          </button>
        </a>
        <a
          href="https://login.brainautotech.com/login"
          target="_blank"
          className="mr-2 font-bold"
        >
          <button className="bg-[#f4511d] duration-300 hover:bg-slate-700 xl:w-[80px] lg:w-[50px] h-[4vh] font-light rounded-xl text-[13px]">
            Login
          </button>
        </a>
        <a
          href="https://login.brainautotech.com/signup"
          target="_blank"
          className="font-bold"
        >
          <button className="bg-[#f4511d] duration-300 hover:bg-slate-700 xl:w-[80px] lg:w-[50px] h-[4vh]  font-light rounded-xl text-[13px]">
            Register
          </button>
        </a>
      </div>
    </Popover>
  );
};

export default Header1;
