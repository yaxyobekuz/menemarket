import React from "react";
import AdminPagesHeader from "../components/AdminPagesHeader";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const News = () => {
  return (
    <div className="w-full pt-3.5 space-y-2 xs:space-y-4 xs:pb-8">
      <AdminPagesHeader title="Yangiliklar" />

      <div className="container max-xs:!px-0">
        <div className="bg-gradient-to-b p-3.5 pb-8 space-y-4 from-transparent to-gray-medium xs:p-4 xs:pb-4 xs:from-gray-light xs:to-gray-medium/20 xs:rounded-xl">
          <ul className="space-y-3.5">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <li key={index}>
                  <Link
                    to="/"
                    className="flex items-center gap-3.5 p-3.5 bg-white/70 rounded-xl"
                  >
                    {/* icon */}
                    <Icon
                      size={72}
                      alt="News image"
                      className="size-16 xs:size-[72px] rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ea/BBC_World_News_2022_%28Boxed%29.svg"
                    />

                    {/* details */}
                    <div className="max-sm:space-y-1">
                      <h3 className="font-medium line-clamp-1 max-w-full sm:text-lg">
                        Yangilikning asosiy sarlavhasi bu yerda bo'ladi
                      </h3>

                      <p className="text-neutral-500 line-clamp-2 text-sm sm:text-base">
                        Hurmatli adminlar, 25 iyul kuniga qadar “yetqazib berish
                        bepul” deb olingan oqimlarni yangilashingizni soraymiz.
                        Aks holda narxlarda xatoliklar kuzatilishi mumkin.
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
