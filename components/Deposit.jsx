import { GrLinkNext } from "react-icons/gr";
import { IoIosCopy } from "react-icons/io";
import moonpay from "../public/images/moonpay.svg";
import Image from "next/image";
import apppay from "../public/images/apppay.webp";
import goopay from "../public/images/goopay.webp";
import cipay from "../public/images/cipay.webp";
import visa from "../public/images/visa.webp";
import paypal from "../public/images/paypal.webp";

const Deposit = () => {
  const formatAddress = (addr) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <div className="w-full py-4 text-[white]">
      <div className="flex flex-col">
        <span className="text-[16px] text-[#b5b7da]">
          Deposit SOL to you Photon trading wallet.
        </span>
        <div className="flex flex-col flex-wrap mt-4 lg:space-x-6 lg:flex-row">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col mb-2 space-y-2">
              <span className="text-[13px]">DEPOSIT SOL AMOUNT</span>
              <input
                className="px-4 py-2 bg-transparent  lg:w-[200px] w-[100%]  placeholder-[#b5b7da] border border-[#36363F] rounded-full w-36 hover:border-white focus:border-white"
                placeholder="Input amount"
              />
            </div>
          </div>
          <div className="flex flex-col hidden lg:block">
            <div
              className="p-3 rounded-full mt-7"
              style={{ border: "1px solid #36363F" }}
            >
              <GrLinkNext />
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col space-y-2">
              <span className="text-[13px]">DEPOSIT TO</span>
              <div className="w-[100%] lg:w-[150px] flex flex-row px-4 py-2 bg-transparent placeholder-[#b5b7da] border border-[#36363F] rounded-full  hover:border-white focus:border-white">
                {formatAddress("GgYUUUpzEPTtP9Q3F6teMEhhtTFvoASRXPuSfwKZanC9")}
                <IoIosCopy
                  className="self-center ml-1"
                  style={{ width: "11px", height: "11px", color: "#b5b7da" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <button
              className="px-8 py-2 rounded-full mt-7"
              style={{ backgroundColor: "rgb(107,97,230)" }}
            >
              DEPOSIT 
            </button>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col space-y-2">
              <span className="text-[13px]">PRIORITY OF FEE</span>
              <input
                className="flex lg:w-[100px] w-full flex-row px-4 py-2 bg-transparent placeholder-[#b5b7da] border border-[#36363F] rounded-full hover:border-white focus:border-white"
                
                value={"0.0001"}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="mt-9 text-[#b5b7da]">or</span>
          </div>
          <div className="flex flex-col">
            <div
              className="flex flex-row px-6 py-3 rounded-full mt-7"
              style={{ color: "black", backgroundColor: "white" }}
            >
              Deposit with <Image className="ml-1" src={moonpay} />
            </div>
            <div className="flex flex-row self-center justify-center mt-2 space-x-1">
              <Image src={apppay} style={{ width: "35px", height: "20px" }} />
              <Image src={goopay} style={{ width: "35px", height: "20px" }} />
              <Image src={cipay} style={{ width: "35px", height: "20px" }} />
              <Image src={visa} style={{ width: "35px", height: "20px" }} />
              <Image src={paypal} style={{ width: "35px", height: "20px" }} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col py-4"
        style={{ borderTop: "1px solid #36363F" }}
      >
        <span className="text-[13px]">HISTORY OF DEPOSIT</span> 
        <span className="text-[#b5b7da] mx-auto my-10">
          There are currently no transactions yet.
        </span>
      </div>
    </div>
  );
};

export default Deposit;
