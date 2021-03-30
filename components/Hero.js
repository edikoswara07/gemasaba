import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="xs:p-4  sm:p-4 flex flex-row justify-between items-start xs:flex-col xs:items-start xs:space-y-4 container mt-10 xs:mt-0">
      <div>
        <h1 className="font-semibold leading-tight text-teal-900 text-xl xs:text-2xl md:text-xl">
          Selamat Datang di Website resmi
        </h1>
        <p className="text-xs leading-relaxed text-bluegray-500 xs:-mt-2">
          <br /> Dewan Perwakilan Wilayah Gerakan <br />
          Mahasiswa Satu Bangsa
          <span className="font-semibold text-emerald-900 mx-1">
            (GEMASABA)
          </span>
          <br /> Jawa Barat.
        </p>

        <div className="mt-12 xs:mt-5 space-x-4 flex w-full items-center justify-start">
          <a className=" cursor-pointer hover:bg-teal-600 px-4 py-2 bg-teal-700 rounded-md text-cyan-50 font-medium text-sm shadow-lg">Follow Me</a>
          <a className=" cursor-pointer hover:bg-teal-600 px-4 py-2 bg-teal-700 rounded-md text-cyan-50 font-medium text-sm shadow-lg">About Us</a>
        </div>

      </div>

      <div className="xs:py-10">
          <div className="relative h-64">
            <div className="inset-0 absolute w-full h-full bg-gradient-to-tr from-teal-500 to-lightblue-500 transform rotate-6 rounded-3xl shadow-2xl"></div>
            <img
              className=" inset-0 rounded-3xl object-cover w-full h-full relative shadow-2xl"
              alt="Hero"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
          </div>
      </div>

    </div>
  );
}
