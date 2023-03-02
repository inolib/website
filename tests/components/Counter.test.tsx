import { createDOM } from "@builder.io/qwik/testing";
import { expect, test } from "vitest";

import { Counter } from "~/Counter";

test("Default start value is 0", async () => {
  const { render, screen } = await createDOM();

  await render(<Counter />);

  const count = screen.querySelector(".counter.count") as Element;

  expect(count.innerHTML).toBe("Count: 0");
});

test("Start value is 1", async () => {
  const { render, screen } = await createDOM();

  await render(<Counter start={1} />);

  const count = screen.querySelector(".counter.count") as Element;

  expect(count.innerHTML).toBe("Count: 1");
});

test("Clicking on [+] button increments the counter", async () => {
  const { render, screen, userEvent } = await createDOM();

  await render(<Counter start={0} />);
  await userEvent(".counter.plus", "click");

  const count = screen.querySelector(".counter.count") as Element;

  expect(count.innerHTML).toBe("Count: 1");
});

test("Clicking on [−] button decrements the counter", async () => {
  const { render, screen, userEvent } = await createDOM();

  await render(<Counter start={0} />);
  await userEvent(".counter.minus", "click");

  const count = screen.querySelector(".counter.count") as Element;

  expect(count.innerHTML).toBe("Count: -1");
});
