import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import { AiFillThunderbolt } from "react-icons/ai";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SiSolana } from "react-icons/si";
import Switch from "@mui/material/Switch";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { HiMiniClipboardDocument } from "react-icons/hi2";
import { RiShieldKeyholeFill } from "react-icons/ri";
import DataTable from "react-data-table-component";
import TabsPanel from "../components/TabsPanel";
import SolanaTradingViewWidget from "../components/SolanaTradingView";
import RucyStatus from '../components/shared/LucyStatus';
export default function Home() {
  const [hour, setHour] = useState(1);
  const [show, setShow] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [buySell, setBuySell] = useState(1);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [enabled, setEnabled] = useState(false);
  const [outlier, setOutlier] = useState(true);
  const toggleSwitch = () => setEnabled(!enabled);
  const toggleSwitchOurlier = () => setOutlier(!outlier);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [watch, setWatch] = useState(false);
  return (
    <div className="m-3 pb-5 min-h-[100vh] ">
      {watch === true ? (
        <div
          style={{ marginLeft: -10, marginRight: -10 }}
          className="ml-4 px-5 p-2 border-y-2 border-[#36363F] text-[#b5b7da] mb-3 flex items-center"
        >
          <img src="/images/starblue.svg" /> &nbsp; WATCHING &nbsp;
          <span className="text-[#8e9dff]">LUCKY</span> &nbsp;$4.1K
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col-reverse lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 ">
        <div className=" text-white  w-full rounded-lg">
          <div className="border-[#36363F] border-2 bg-[#24252e] rounded-t-lg px-5 py-5 flex justify-between">
            <div className="flex lg:flex-row flex-col items-center">
              <div className="flex lg:mb-0 mb-2">
                <span className="text-[16px] font-bold mr-2">
                  Ruby
                </span>
                <img
                  style={{ boxShadow: "0 0 4px 0 rgba(84, 211, 143, .66)" }}
                  className="lg:mr-10 rounded-full border-2 border-[#0e8748] w-[25px] h-[25px] p-1"
                  src="https://photon-sol.tinyastro.io/assets/pump-045f4b7aabe5dff1e2a9030448611760f6bd84d3e2669a20d7df7828b0febccc.png"
                />
              </div>
              <div className="flex">
                <span className="text-[#8e9dff] flex items-center pr-4 lg:px-4 border-r-2 border-[#36363F]">
                  Token&nbsp;
                  <HiMiniClipboardDocument />
                </span>
                <span className="text-[#8e9dff] flex items-center px-4 border-r-2 border-[#36363F]">
                  Pair&nbsp;
                  <HiMiniClipboardDocument />
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className=" items-center mr-5 hidden lg:flex ">
                <button
                  onClick={toggleSwitchOurlier}
                  className={`relative inline-flex  items-center h-3 rounded-full w-8 transition-colors duration-300 ${
                    outlier ? "bg-[#6A60E8]" : "bg-gray-400"
                  }`}
                >
                  <span
                    className={`inline-block w-5 h-5 transform bg-white  rounded-full transition-transform duration-300 ${
                      outlier ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="ml-3 text-[#b5b7da]">Outlier</span>
              </div>
              <button
                onClick={() => setWatch(!watch)}
                className="w-auto py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center"
              >
                <img
                  className="w-[15px] mr-2"
                  src={
                    watch === false ? "/images/star0.svg" : "/images/star.svg"
                  }
                />
                &nbsp;{watch === false ? "Watch" : "Watching"}
              </button>
            </div>
          </div>
          <div className="h-[500px]">
            <SolanaTradingViewWidget />
          </div>
          <div className="border-[#36363F] border-2 bg-[#24252e] rounded-b-lg p-4">
            <TabsPanel />
          </div>
        </div>
        <div className="text-white lg:w-[450px] w-full">
          <div className="lg:text-center items-center lg:border-[#36363F] lg:border-2 lg:bg-[#24252e] text-white p-4 rounded-lg lg:mb-3">
            <div className="flex items-center lg:justify-center">
              <span className="font-semibold">LUCY</span>&nbsp;&nbsp;
              <HiMiniClipboardDocument className="text-[#8d93b7]" /> &nbsp;&nbsp;
              <RucyStatus />
            </div>
            <div className="m-1 py-2 border-b-2 border-[#36363F]">
              <span className=" text-sm border-r-2 pr-2 border-[#36363F] text-[#b5b7da] font-medium">
                Pump.fun
              </span>
              <span className="text-sm ont-medium text-[#8e9dff] pl-2">
                Verify Profile
              </span>
            </div>
            <div className="flex m-1 py-2 border-b-2 border-[#36363F] justify-between lg:pr-[50px] pr-[250px]">
              <div>
                <div className="float-left text-[#8d93b7] text-[11px] mb-[6px]">
                  PRICE USD
                </div>
                <br />
                <div className="float-left font-semibold ">$0.0₅4065</div>
              </div>
              <div>
                <div className="float-left text-[#8d93b7] text-[11px] mb-[6px]">
                  PRICE SOL
                </div>
                <br />
                <div className="float-left font-semibold"> 0.0₇2965</div>
              </div>
              <div>
                <div className="float-left text-[#8d93b7] text-[11px] mb-[6px]">
                  SUPPLY
                </div>
                <br />
                <div className="float-left font-semibold">1B</div>
              </div>
            </div>
            <div className="flex m-1 py-2  justify-between lg:pr-[50px] pr-[250px]">
              <div>
                <div className="float-left text-[#8d93b7] text-[11px] mb-[6px]">
                  LIQUIDITY
                </div>
                <br />
                <div className="float-left font-semibold ">$8.69K</div>
              </div>
              <div>
                <div className="float-left text-[#8d93b7] text-[11px] mb-[6px]">
                  MKT CAP
                </div>
                <br />
                <div className="float-left font-semibold"> $4.06K</div>
              </div>
              <div>
                <div className="float-left lg:text-[#24252e]  text-[#1B1C25] text-[11px] ">
                  SUPPLY
                </div>
                <br />
                <div className="float-left font-semibold lg:text-[#24252e] text-[#1B1C25]">
                  1B
                </div>
              </div>
            </div>
          </div>

          <div className=" border-[#36363F] border-2 bg-[#1D1E27] text-white  rounded-lg mb-3">
            <div>
              <button
                onClick={() => {
                  if (hour == 1) setHour(0);
                  else setHour(1);
                }}
                className={`w-1/4 py-2 cursor-pointer rounded-t-l-lg ${
                  hour == 1 ? "bg-[#26272F]" : ""
                }`}
              >
                <span className="text-[#8d93b7] text-[11px] ">5M</span>
                <br />
                <span className="font-semibold">N/A</span>
              </button>
              <button
                onClick={() => {
                  if (hour == 2) setHour(0);
                  else setHour(2);
                }}
                className={`w-1/4 py-2 border-[#36363F] border-x-2 cursor-pointer ${
                  hour == 2 ? "bg-[#26272F]" : ""
                }`}
              >
                <span className="text-[#8d93b7] text-[11px] ">1H</span>
                <br />
                <span className="font-semibold">N/A</span>
              </button>
              <button
                onClick={() => {
                  if (hour == 3) setHour(0);
                  else setHour(3);
                }}
                className={`w-1/4 py-2 border-[#36363F] border-r-2 cursor-pointer ${
                  hour == 3 ? "bg-[#26272F]" : ""
                }`}
              >
                <span className="text-[#8d93b7] text-[11px] ">6H</span>
                <br />
                <span className="font-semibold">N/A</span>
              </button>
              <button
                onClick={() => {
                  if (hour == 4) setHour(0);
                  else setHour(4);
                }}
                className={`w-1/4 py-2 cursor-pointer ${
                  hour == 4 ? "bg-[#26272F]" : ""
                }`}
              >
                <span className="text-[#8d93b7] text-[11px] ">24H</span>
                <br />
                <span className="font-semibold">N/A</span>
              </button>
            </div>
            {hour != 0 ? (
              <div className="border-t-2 border-[#36363F] py-3 flex">
                <div className="w-1/4 border-r-2 border-[#36363F] px-4">
                  <span className="text-[#8d93b7] text-[11px] font-medium">
                    TXNS
                  </span>
                  <br />
                  <span className="text-[15px] font-semibold">0</span>
                  <br />
                  <br />
                  <span className="text-[#8d93b7] text-[11px] font-medium">
                    VOLUME
                  </span>
                  <br />
                  <span className="text-[15px] font-semibold">$0</span>
                  <br />
                  <br />
                  <span className="text-[#8d93b7] text-[11px] font-medium">
                    MAKERS
                  </span>
                  <br />
                  <span className="text-[15px] font-semibold">0</span>
                  <br />
                </div>
                <div className="p-3 w-3/4">
                  <div className="flex justify-between">
                    <span className="text-[#8d93b7] text-[11px] font-medium">
                      BUYS
                    </span>
                    <span className="text-[#8d93b7] text-[11px] font-medium">
                      SELLS
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[15px] font-semibold">0</span>
                    <span className="text-[15px] font-semibold">0</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="bg-[#3ed6cc] w-1/2 h-1 rounded-lg mr-1"></div>
                    <div className=" bg-[#ff4b92] w-1/2 h-1 rounded-lg"></div>
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <span className="text-[#8d93b7] text-[11px] font-medium">
                      BUYS VOL
                    </span>
                    <span className="text-[#8d93b7] text-[11px] font-medium">
                      SELLS VOL
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[15px] font-semibold">0</span>
                    <span className="text-[15px] font-semibold">0</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="bg-[#3ed6cc] w-1/2 h-1 rounded-lg mr-1"></div>
                    <div className=" bg-[#ff4b92] w-1/2 h-1 rounded-lg"></div>
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <span className="text-[#8d93b7] text-[11px] font-medium">
                      BUYERS
                    </span>
                    <span className="text-[#8d93b7] text-[11px] font-medium">
                      SELLERS
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[15px] font-semibold">0</span>
                    <span className="text-[15px] font-semibold">0</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="bg-[#3ed6cc] w-1/2 h-1 rounded-lg mr-1"></div>
                    <div className=" bg-[#ff4b92] w-1/2 h-1 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className=" border-[#36363F] border-2 bg-[#181921] text-white  rounded-lg mb-3">
            {buySell == 1 ? (
              <div>
                <button
                  className="w-1/2 h-[41px] rounded-lg bg-[#21222A]"
                  style={{
                    background:
                      "linear-gradient(180deg, #31333F 0%, #191A22 100%)",
                  }}
                  onClick={() => setBuySell(1)}
                >
                  <div className="flex justify-center items-center">
                    <AiFillThunderbolt /> &nbsp; &nbsp; Buy
                  </div>
                </button>
                <button
                  className="text-[#8d93b7] w-1/2 h-[41px] border-b-2 border-[#36363F] bg-[#21222A]"
                  onClick={() => setBuySell(2)}
                >
                  <div className="flex justify-center items-center">
                    <FaTag /> &nbsp; &nbsp; Sell
                  </div>
                </button>
                <div className="space-y-2 p-4">
                  <div className="border-b-2 border-[#36363F] mb-5">
                    <RadioButton
                      label="Buy Now"
                      name="options"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleOptionChange}
                    />
                    <RadioButton
                      label="Buy Dip"
                      name="options"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                    />
                    {selectedOption === "option1" ? (
                      <div className="flex items-center mb-4 mt-4">
                        <button
                          onClick={toggleSwitch}
                          className={`relative inline-flex items-center h-3 rounded-full w-8 transition-colors duration-300 ${
                            enabled ? "bg-[#6A60E8]" : "bg-gray-400"
                          }`}
                        >
                          <span
                            className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ${
                              enabled ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="ml-3 text-[#b5b7da]">Insta Buy</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="justify-between mb-3 flex">
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center">
                      <img className="w-[15px]" src={"/images/solana.png"} />
                      &nbsp;0.25
                    </button>
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] mx-3 flex items-center">
                      <img className="w-[15px]" src={"/images/solana.png"} />
                      &nbsp;0.5
                    </button>
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center">
                      <img className="w-[15px]" src={"/images/solana.png"} />
                      &nbsp;1
                    </button>
                  </div>
                  <div className="justify-between mb-3 flex">
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center">
                      <img className="w-[15px]" src={"/images/solana.png"} />
                      &nbsp;2
                    </button>
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] mx-3 flex items-center">
                      <img className="w-[15px]" src={"/images/solana.png"} />
                      &nbsp;5
                    </button>
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center">
                      <img className="w-[15px]" src={"/images/solana.png"} />
                      &nbsp;10
                    </button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img
                        className="w-[20px] ml-2"
                        src={"/images/solana.png"}
                      />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block p-4 pl-[50px] w-full w-full text-sm text-[#b5b7da] rounded-xl border-[#36363F] border-2"
                      placeholder="Amount to buy in SOL"
                      required
                      style={{
                        backgroundColor: "#181921",
                        borderRadius: "50px",
                        height: "45px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="text-[#8d93b7] w-1/2 h-[41px] border-b-2 border-[#36363F] bg-[#21222A]"
                  onClick={() => setBuySell(1)}
                >
                  <div className="flex justify-center items-center">
                    <AiFillThunderbolt /> &nbsp; &nbsp; Buy
                  </div>
                </button>
                <button
                  className=" w-1/2 h-[41px] rounded-lg bg-[#21222A]"
                  style={{
                    background:
                      "linear-gradient(180deg, #31333F 0%, #191A22 100%)",
                  }}
                  onClick={() => setBuySell(2)}
                >
                  <div className="flex justify-center items-center">
                    <FaTag /> &nbsp; &nbsp; Sell
                  </div>
                </button>
                <div className="space-y-2 p-4">
                  <div className="border-b-2 border-[#36363F] mb-5">
                    <RadioButton
                      label="Sell Now"
                      name="options"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleOptionChange}
                    />
                    <RadioButton
                      label="Auto Sell"
                      name="options"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                    />
                    {selectedOption === "option1" ? (
                      <div className="flex items-center mb-4 mt-4">
                        <button
                          onClick={toggleSwitch}
                          className={`relative inline-flex items-center h-3 rounded-full w-8 transition-colors duration-300 ${
                            enabled ? "bg-[#6A60E8]" : "bg-gray-400"
                          }`}
                        >
                          <span
                            className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ${
                              enabled ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="ml-3 text-[#b5b7da]">Insta Sell</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="justify-between mb-3 flex">
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center">
                      &nbsp;25%
                    </button>
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] mx-3 flex items-center">
                      &nbsp;50%
                    </button>
                    <button className="w-1/3 py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center">
                      &nbsp;100%
                    </button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-5 pr-[30px] border-r-2 border-[#36363F] pointer-events-none">
                      <span>SOL</span>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block p-4 pl-[100px] w-full w-full text-sm text-[#b5b7da] rounded-xl border-[#36363F] border-2"
                      placeholder="Amount to buy in SOL"
                      required
                      style={{
                        backgroundColor: "#181921",
                        borderRadius: "50px",
                        height: "45px",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mx-4 mb-4">
              <div>
                <div
                  onClick={() => setShowSetting(!showSetting)}
                  className={`flex items-center justify-between border-t-2 hover:text-[#FFF] border-[#36363F] text-[#8d93b7] cursor-pointer   py-4 ${
                    showSetting === false ? "border-b-2 mb-4" : null
                  }`}
                >
                  <div className="flex">
                    <span className="text-[25px] mr-2">
                      <IoMdSettings />
                    </span>{" "}
                    Advanced Settings
                  </div>
                  <div className="flex items-center">
                    <img src="/images/attention.svg" />
                    <span className="ml-1 text-[#ff4b92]">Warning</span>{" "}
                    <button
                      onClick={() => {
                        setShowSetting(!showSetting);
                      }}
                      className={
                        "ml-3 flex items-center justify-center border-[#36363F] h-[40px]  w-1/6 py-2 cursor-pointer"
                      }
                    >
                      {showSetting == true ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </button>
                  </div>
                </div>
                {showSetting === true ? (
                  <div className="text-[11px] text-[#b5b7da] p-3 rounded-lg mb-3 bg-[#1f2028]">
                    <div className="flex">
                      <span className="w-1/3">Slippage %</span>
                      <span>Smart-Mev protection</span>
                      <img src="/images/attention_dark.svg" />
                    </div>
                    <div className="flex items-center mb-3">
                      <input
                        className="mr-3 w-1/3 px-4 py-2 bg-transparent placeholder-[#b5b7da] border border-[#36363F] rounded-full hover:border-white text-[#FFF] focus:border-white"
                        placeholder="Input amount"
                        value="20.0"
                      />{" "}
                      Fast{" "}
                      <div className="flex items-center mb-4 mt-4 ml-3">
                        <button
                          onClick={toggleSwitch}
                          className={`relative inline-flex items-center h-3 rounded-full w-8 transition-colors duration-300 ${
                            enabled ? "bg-[#6A60E8]" : "bg-gray-400"
                          }`}
                        >
                          <span
                            className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ${
                              enabled ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="ml-3 text-[#b5b7da]">Secure</span>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span>SetSpeed</span>
                      <img src="/images/attention_dark.svg" />
                    </div>
                    <div className="flex mb-3 space-x-2">
                      <button className="w-1/2 justify-center py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center text-[#FFF]">Default</button>
                      <button className="w-1/2 justify-center py-2 text-left px-5 border-2 rounded-full border-[#36363F] flex items-center text-[#FFF]">Auto</button>
                    </div>
                    <div className="flex mb-3">
                      <span>Priority Fee</span>
                    </div>
                    <div className="flex mb-3 items-center">
                    <input
                        className="mr-3 w-4/5 px-4 py-2 bg-transparent placeholder-[#b5b7da] border border-[#36363F] rounded-full hover:border-white text-[#FFF] focus:border-white"
                        placeholder="Input amount"
                        value="0.008"
                      />
                      <span className="text-[15px]">SOL</span>
                    </div>
                    <div className="flex mb-3">
                      <span>Bribery Amount </span>
                      <img src="/images/attention_dark.svg" />
                    </div>
                    <div className="flex mb-3 items-center">
                    <input
                        className="mr-3 w-4/5 px-4 py-2 bg-transparent placeholder-[#b5b7da] border border-[#36363F] rounded-full hover:border-white text-[#FFF] focus:border-white"
                        placeholder="Input amount"
                        value="0.012"
                      />
                      <span className="text-[15px]">SOL</span>
                    </div>
                  </div>
                ) : null}
              </div>
              {buySell === 1 ? (
                <div>
                  <button className="mb-4 w-full py-2 px-5 hover:bg-[#7970EA] bg-[#6a60e8] rounded-full items-center flex justify-center">
                    <AiFillThunderbolt /> &nbsp; <b>Quick Buy</b> &nbsp;
                  </button>
                  <span className="text-[#8d93b7] ">
                    Once you click on <b>Quick Buy</b>, your transaction is sent
                    immediately
                  </span>
                </div>
              ) : (
                <div>
                  <button className="mb-4 w-full py-2 px-5 hover:bg-[#7970EA] bg-[#6a60e8] rounded-full items-center flex justify-center">
                    <AiFillThunderbolt /> &nbsp; <b>Quick Sell</b> &nbsp;
                  </button>
                  <span className="text-[#8d93b7] ">
                    Estimation of expected payout incl. price impact and fees is
                    only enabled for Raydium AMM. Once you click on{" "}
                    <b>Quick Sell</b>, your transaction is sent immediately.
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 border-[#36363F] border-2 bg-[#181921] text-white  rounded-lg mb-3">
            <b>Bonding Curve Progress: 3%</b>

            <div className="w-full bg-[#303038] h-[10px] rounded-full mt-4">
              <div className="w-[10px] bg-[#898EFF] h-[10px] rounded-full"></div>
            </div>
          </div>
          <div className="cursor-pointer border-[#36363F] border-2 bg-[#1D1E27] text-white  rounded-lg mb-3">
            <div className="flex items-center">
              <div
                onClick={() => setShow(!show)}
                className="w-5/6 pl-4 text-[18px] hover:text-[#CFCFD0]"
              >
                <b>Data & Security</b>
              </div>
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className={
                  "border-l-2 flex items-center justify-center border-[#36363F] h-[40px]  w-1/6 py-2 cursor-pointer"
                }
              >
                {show == true ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {show === true ? (
              <div className="border-t-2 border-[#36363F] px-3 ">
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    Mint Authority
                  </div>
                  <div className="text-[#3ed6cc] font-semibold">Disabled</div>
                </div>
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    Freeze Authority
                  </div>
                  <div className="text-[#3ed6cc] font-semibold">Disabled</div>
                </div>
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    LP Burned
                  </div>
                  <div className="text-[#3ed6cc] font-semibold">100%</div>
                </div>
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    Pooled LUCY
                  </div>
                  <div className=" font-semibold">1.05B $4.34K</div>
                </div>
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    Pooled SOL
                  </div>
                  <div className=" font-semibold">30.78 $4.3K</div>
                </div>
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    Top 10 Holders
                  </div>
                  <div className="text-[#3ed6cc] font-semibold">2.74%</div>
                </div>
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    Deployer
                    <span className="ml-3 text-[#e7b587] bg-[#303038] px-2 py-1 rounded-full text-[10px]">
                      Dev
                    </span>
                  </div>
                  <div className="text-[#8e9dff] font-semibold flex items-center">
                    <img
                      onClick={() => setWallet(val.makers)}
                      className="w-[20px] mr-1 fixed-size"
                      src={"/images/Filter.svg"}
                    />
                    CEg..7WT
                  </div>
                </div>
                <div className="flex w-full justify-between border-b-2 border-[#36363F] py-3">
                  <div className="flex items-center text-[#b5b7da]">
                    <img className="mr-1" src="/images/attention_dark.svg" />
                    Open Trading
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
