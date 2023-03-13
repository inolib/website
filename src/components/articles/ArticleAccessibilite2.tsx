import { component$ } from "@builder.io/qwik";

import { Article } from "../Article";

export default component$(() => {
  return (
    <Article
      title="Explications"
      content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus.

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem itaque iure nulla ipsam
          consequuntur sit, consequatur harum tempore voluptates modi odio at odit enim vero amet perspiciatis esse
          numquam minima.

          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
          demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
          weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
          perfectly simple and easy to distinguish"
      imageSrc="/images/prothese.png"
    ></Article>
  );
});
