import { component$, Slot } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div className="h-[100vh] bg-slate-100">
        <form className=" flex flex-col items-center justify-center  ">
          <h1 className=" text-[#0B3168] font-semibold items-center content-center justify-center text-4xl mb-16 md:mb-14 mt-44">
            Connexion
          </h1>
          <div className=" flex md:w-3/5 justify-center ">
            <input
              title="formulaire de connexion adresse email"
              type="email"
              placeholder="Entrer votre email"
              required
              id="email"
              name="email"
              className="bg-gray-200 form-control text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
            />
          </div>
          <br />
          <div className="flex  justify-center md:w-3/5">
            <input
              title="formulaire de connexion mot de passe"
              type="password"
              required
              id="password"
              name="password"
              placeholder="Entrer votre mot de passe"
              className="bg-gray-200 form-control  text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
            />
          </div>
          <br />
          <button
            title="se connecter"
            type="submit"
            className="bg-[#0B3168] mt-10 md:mt-2 text-white m-3 py-1 px-4 rounded-lg shadow-lg h-10 w-32 md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
          >
            Connexion
          </button>
        </form>
        <div></div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "connexion",
};
