import { component$ } from "@builder.io/qwik";

export const Contentinfo = component$(() => {
  return (
    <footer>
      <section className="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:flex">
        <section className="md:flex md:flex-col md:items-center md:w-1/2">
          <div className="flex mb-4">
            <img alt="" src="/images/logo-white.svg" className="h-10 w-auto" />
            <h3 className="flex items-center pl-2">INOLIB</h3>
          </div>
          <p className="border-t-2 border-[#9A35AD] mb-8 pt-4">Des questions?</p>
          <p className="mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
            nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas odit. Eveniet saepe
            dolore quae!
          </p>
          <a
            className="items-center bg-white flex cursor-pointer drop-shadow-md h-10 justify-center mb-8 rounded-md text-[#0b3168] w-100% lg:w-36"
            href="/contact"
          >
            Nous contacter
          </a>
        </section>
        <div className="md:flex md:flex-col">
          <section className="border-y-2 border-[#9A35AD] flex justify-between mb-8 py-4 md:w1/2">
            <a href="#">
              <img alt="facebook INOLIB" src="\images\logo-facebook-violet.svg"></img>
            </a>
            <a href="#">
              <img alt="twitter INOLIB" src="\images\logo-twiter.svg"></img>
            </a>
            <a href="#">
              <img alt="LinkedIn INOLIB" src="\images\logo-linkedin.svg"></img>
            </a>
            <a href="#">
              <img alt="instagram INOLIB" src="\images\logo-instagram.svg"></img>
            </a>
          </section>
          <p>© 2023 Inolib</p>
        </div>
      </section>
    </footer>
  );
});
