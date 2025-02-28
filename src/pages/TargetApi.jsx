import React from "react";

// Data
import addresses from "@/data/addresses";

// Api
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// Components
import CopyButton from "@/components/CopyButton";
import AdminPagesHeader from "@/components/AdminPagesHeader";

const A = ({ children }) => {
  return (
    <a
      target="_blank"
      children={children}
      href={`https://${children?.trim()}`}
      className="text-primary-default underline-offset-2 hover:underline"
    />
  );
};

const bash = `curl --request POST  
    "${apiBaseUrl}api/oqim/67bd2d6b8e35645b265ca68a/order"
    --header "Content-Type: application/json"  
    --header "Accept: applecation/json  
    data "{
        "client_name": "Yaxyobek",
        "client_mobile": "+998999999999",
        "client_address": 1
    }"`;

const TargetApi = () => {
  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      <AdminPagesHeader link="/admin/streams" title="Target uchun API" />

      {/* Main content */}
      <div className="container">
        <div className="bg-gradient-gray rounded-xl p-4 space-y-6 sm:p-5">
          {/* About of Target API */}
          <section className="space-y-3.5">
            <h2 className="text-lg font-semibold">Target API nima?</h2>

            <p className="text-[17px] text-neutral-500">
              Agar sizning shaxsiy sotuv Veb-saytingiz, Ilovangiz yoki boshqa
              bir dasturingiz bo'lsa "Target API" yordamida sizning
              Targetlaringizdan keluvchi buyurtmalarni avtomatlashtirish uchun
              maxsus funksiya.
              <br />
              <br />
              Agar siz Target orqali buyurtmalarni bizga yubormoqchi bo'lsangiz,
              <A> albato.ru</A>,<A> make.com</A>,<A> ifttt.com</A> va boshqa
              platformalar orqali yuborishingiz mumkin. (Buning uchun siz hech
              qanday dasturlash tilini bilishingiz shart emas!)
              <br />
              <br />
              Agar siz dasturchi bo'lsangiz, http so'rov yuborish
              kutubxonalaridan foydalanib buyurtmalarni avtomatlashtirishingiz
              mumkin.
            </p>
          </section>

          {/* Usage of Target API */}
          <section className="space-y-5">
            <h2 className="text-lg font-semibold">
              Target API dan foydalanish uchun qo'llanma
            </h2>

            {/* Api url */}
            <div className="flex items-start flex-col gap-3">
              <b className="font-medium xs:text-[17px]">API URL</b>

              <CopyButton
                notificationText="API URL dan nusxa olindi"
                text={`${apiBaseUrl}api/oqim/oqim_id_raqami/order`}
                className="overflow-x-auto scroll-hidden max-w-full h-11 bg-white px-3.5 rounded-xl text-[17px] disabled:opacity-50"
              >
                <span className="inline-block min-w-max">
                  <span className="text-green-500">POST </span>
                  <span className="pl-1.5">
                    {apiBaseUrl}api/oqim/oqim_id_raqami/order
                  </span>
                </span>
              </CopyButton>
            </div>

            {/* Request headers */}
            <div className="w-full space-y-0.5">
              <div className="flex items-center w-full h-11 px-4 bg-white rounded-t-xl font-medium xs:text-[17px]">
                Headers
              </div>

              <div className="space-y-4 bg-white/50 p-4 rounded-b-xl">
                <CopyButton
                  text="application/json"
                  notificationText="Matndan nusxa olindi"
                  className="block overflow-x-auto scroll-hidden max-w-full h-11 bg-white px-3.5 rounded-xl disabled:opacity-50"
                >
                  <span className="inline-block min-w-max">
                    <span className="font-medium">Accept </span>
                    <span className="pl-1.5 text-neutral-500">
                      Example: application/json
                    </span>
                  </span>
                </CopyButton>

                <CopyButton
                  text="application/json"
                  notificationText="Matndan nusxa olindi"
                  className="block overflow-x-auto scroll-hidden max-w-full h-11 bg-white px-3.5 rounded-xl disabled:opacity-50"
                >
                  <span className="inline-block min-w-max">
                    <span className="font-medium">Content-Type </span>
                    <span className="pl-1.5 text-neutral-500">
                      Example: application/json
                    </span>
                  </span>
                </CopyButton>
              </div>
            </div>

            {/* Request body */}
            <div className="w-full space-y-0.5">
              <div className="flex items-center w-full h-11 px-4 bg-white rounded-t-xl font-medium xs:text-[17px]">
                Body
              </div>

              <div className="space-y-4 bg-white/50 p-4 rounded-b-xl">
                {/* Name */}
                <CopyButton
                  text="client_name"
                  notificationText="Kalitdan nusxa olindi"
                  className="block overflow-x-auto scroll-hidden max-w-full h-11 bg-white px-3.5 rounded-xl disabled:opacity-50"
                >
                  <span className="inline-block min-w-max">
                    <span className="font-medium">client_name </span>
                    <span className="pl-1.5 text-neutral-500">
                      Mijoz ismi Misol: Yaxyobek
                    </span>
                  </span>
                </CopyButton>

                {/* Tel */}
                <CopyButton
                  text="client_mobile"
                  notificationText="Kalitdan nusxa olindi"
                  className="block overflow-x-auto scroll-hidden max-w-full h-11 bg-white px-3.5 rounded-xl disabled:opacity-50"
                >
                  <span className="inline-block min-w-max">
                    <span className="font-medium">client_mobile </span>
                    <span className="pl-1.5 text-neutral-500">
                      Mijoz tel raqami Misol: +999 99 999 99 99
                    </span>
                  </span>
                </CopyButton>

                {/* Address */}
                <CopyButton
                  text="client_address"
                  notificationText="Kalitdan nusxa olindi"
                  className="block overflow-x-auto scroll-hidden max-w-full h-11 bg-white px-3.5 rounded-xl disabled:opacity-50"
                >
                  <span className="inline-block min-w-max">
                    <span className="font-medium">client_address </span>
                    <span className="pl-1.5 text-neutral-500">
                      Manzil tartib raqami Misol: 1
                    </span>
                  </span>
                </CopyButton>
              </div>
            </div>

            {/* Bash */}
            <div className="w-full space-y-0.5">
              <div className="flex items-center justify-between w-full h-11 px-4 bg-white rounded-t-xl">
                <span className="font-medium xs:text-[17px]">Bash</span>
                <CopyButton
                  text={bash}
                  notificationText="Koddan nusxa olindi"
                  className="h-10 disabled:opacity-50"
                >
                  Nusxa olish
                </CopyButton>
              </div>

              <div className="max-w-full overflow-x-auto scroll-hidden space-y-4 bg-white/50 p-4 rounded-b-xl">
                <pre className="shrink-0 min-w-max">
                  <code>
                    <span className="">curl --request POST </span>

                    <br />

                    {/* Url */}
                    <span className="pl-5 text-green-500">
                      "{apiBaseUrl}api/oqim/67bd2d6b8e35645b265ca68a/order"
                    </span>

                    <br />

                    {/* Headers */}
                    <span className="pl-5">
                      --header
                      <span className="text-green-500">
                        {" "}
                        "Content-Type: application/json"
                      </span>
                    </span>

                    <br />

                    <span className="pl-5">
                      --header
                      <span className="text-green-500">
                        {" "}
                        "Accept: application/json"
                      </span>
                    </span>

                    <br />

                    {/* Body */}
                    <span className="pl-5">
                      <span>data </span>
                      <span className="text-green-500">
                        <span>"{"{"}</span>
                        <br />
                        <span className="pl-10">"client_name": "Yaxyobek"</span>
                        <br />
                        <span className="pl-10">
                          "client_mobile": "+998999999999"
                        </span>
                        <br />
                        <span className="pl-10">"client_address": 1</span>
                        <br />
                        <span className="pl-5">{"}"}"</span>
                      </span>
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* Addresses number */}
          <section className="space-y-3.5">
            <h2 className="text-lg font-semibold">Manzil raqamlari</h2>

            <ol className="flex flex-wrap gap-3.5">
              {addresses.map(({ name, value }) => (
                <li key={value} className="">
                  <CopyButton
                    text={value}
                    notificationText="Raqamdan nusxa olindi"
                    className="btn gap-2 h-10 bg-white px-3.5 rounded-xl text-neutral-500 font-normal text-[17px] hover:text-primary-default disabled:!text-neutral-500"
                  >
                    <span className="font-medium">{value}</span>
                    <span></span>
                    <span className="font-normal">{name}</span>
                  </CopyButton>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TargetApi;
