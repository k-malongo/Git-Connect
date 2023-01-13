import React from "react";
import { MdLocationOn } from "react-icons/md";
import {FiLink} from "react-icons/fi"
import {FaTwitter} from "react-icons/fa"
import {BiBuildings} from "react-icons/bi"

export default function CardComponent() {
  return (
    <div className="w-full p-8 shadow-md lg:max-w-1xl bg-white drop-shadow-lg rounded-xl ">
      <div className="grid grid-cols-4 gap-4">
        <img
          src="https://avatars.githubusercontent.com/u/36006542?v=4"
          alt="img"
          className="rounded-full lg:h-28 lg:w-28 ml-4"
        />
        <div className="space-y-2 col-span-3 p-4">
          <div className="flex flex-wrap lg:justify-between ">
            <p className="text-2xl pr-4">Malongo</p>
            <p className="pt-2">Joined 31 Jan 2018</p>
          </div>
          <div className="">
            <a href="#" className="text-sky-600">
              @k-malongo
            </a>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-4">
        <div></div>
        <div className="space-y-2 col-span-3 p-4">
          <div className=" pb-4">
            <p>Full stack web dev</p>
          </div>
          <div>
            <div className="w-full p-8 shadow-md lg:max-w-1xl bg-gray-100 drop-shadow-lg rounded-xl grid grid-cols-3 gap-4 text-center">
              <div className="">
                <p className="text-sm">Repos</p>
                <p className="text-lg">256</p>
              </div>
              <div className="">
                <p className="text-sm">Followers</p>
                <p className="text-lg">256</p>
              </div>
              <div className="">
                <p className="text-sm">Following</p>
                <p className="text-lg">256</p>
              </div>
            </div>
            <div className="pt-4 grid lg:grid-cols-2">
              <div className="flex text-blue-500 mb-4">
                <span className="text-2xl mr-2">
                <MdLocationOn/>
                </span>
                <p>Nairobi</p>
              </div>
              <div className="flex text-blue-500 mb-4">
                <span className="text-2xl mr-2">
                <FiLink/>
                </span>
                <p>Nairobi</p>
              </div>
              <div className="flex text-blue-500 mb-4">
                <span className="text-2xl mr-2">
                <FaTwitter/>
                </span>
                <p>Nairobi</p>
              </div>
              <div className="flex text-blue-500 mb-4">
                <span className="text-2xl mr-2 ">
                <BiBuildings/>
                </span>
                <p>Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
