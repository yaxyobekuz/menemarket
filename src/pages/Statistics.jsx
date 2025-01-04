import React, { useState } from "react";

// Data
import products from "../data/products";

// Components
import { getPercentageBgColor, getRandomNumber } from "../utils";

const Statistics = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollLeft > 32);
  };

  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container">
        <div className="bg-gradient-gray pb-4 rounded-xl">
          {/* Title */}
          <div className="flex items-center h-[60px] px-4">
            <h1 className="text-2xl">Statistika</h1>
          </div>

          {/* Line */}
          <div className="h-0.5 w-full bg-white" />

          {/* Content */}
          <div
            onScroll={handleScroll}
            className="w-full max-w-full overflow-x-auto scroll-x-primary"
          >
            <table className="w-[1240px] table-fixed">
              {/* Head */}
              <thead className="bg-neutral-50">
                <tr className="h-12">
                  <th
                    className={`${
                      isScrolled ? "custom-active-border-r" : null
                    }  sticky left-0 inset-y-0 bg-neutral-50 font-semibold transition-colors duration-200`}
                  >
                    Oqim nomi
                  </th>
                  <th className="font-semibold">Tashrif</th>
                  <th className="font-semibold">Qabul qilindi</th>
                  <th className="font-semibold">Yetkazilmoqda</th>
                  <th className="font-semibold">Yetkazildi</th>
                  <th className="font-semibold">Qaytib keldi</th>
                  <th className="font-semibold">Arxivlandi</th>
                  <th className="font-semibold">Holati</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {products.map((_, index) => {
                  const percentage = getRandomNumber(0, 99);
                  return (
                    <tr
                      key={index}
                      className="group h-12 bg-gray-light even:bg-neutral-50"
                    >
                      <td
                        className={`${
                          isScrolled ? "custom-active-border-r" : null
                        } sticky left-0 inset-y-0 bg-gray-light px-2 transition-colors duration-200 group-even:bg-neutral-50`}
                      >
                        <span className="line-clamp-1 text-center font-medium">
                          Mening oqimim #{getRandomNumber(0, 999)}
                        </span>
                      </td>
                      <td className="text-center">
                        {getRandomNumber(0, 9999)}
                      </td>
                      <td className="text-center">
                        {getRandomNumber(0, 9999)}
                      </td>
                      <td className="text-center">{getRandomNumber(0, 999)}</td>
                      <td className="text-center">{getRandomNumber(0, 999)}</td>
                      <td className="text-center">{getRandomNumber(0, 99)}</td>
                      <td className="text-center">{getRandomNumber(0, 99)}</td>
                      <td>
                        <div
                          className={`${getPercentageBgColor(
                            percentage
                          )} flex items-center justify-center w-11 h-6 m-auto rounded-full text-white text-sm`}
                        >
                          {percentage}%
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
