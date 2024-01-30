import React from 'react'
import { Accordion } from '@/comakit'

export const Faq = () => {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="1">
        <Accordion.Trigger>
          Why use Comakit and not others like Shadcn, Radix Themes and etc...?
        </Accordion.Trigger>
        <Accordion.Content>
          I sincerely hope that you choose the best library that fits your developer profile. Just
          like other libraries, I created mine with total love and intend to build something for the
          community, just as they did.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="2">
        <Accordion.Trigger>What led you to create comakit?</Accordion.Trigger>
        <Accordion.Content>
          I created Comakit because it includes components that I had already set aside for all my
          main projects. It&apos;s also part of a design system that I use in my startup called
          Comaqui. Thirdly, I wanted to help my community in some way.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="3">
        <Accordion.Trigger>
          How do you envision the future evolution of Comakit, and what are your plans for expanding
          or enhancing the available components?
        </Accordion.Trigger>
        <Accordion.Content>
          I hope to build a community where not just I, but all of us can continuously evolve and
          create something incredible for the entire developer community. I already have some
          projects in mind like themes, layouts, and icons, but I plan to undertake other projects
          in the future.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="4">
        <Accordion.Trigger>
          In what ways can the community contribute to the growth and improvement of Comakit? Is
          there a specific process for collaborations or feedback?
        </Accordion.Trigger>
        <Accordion.Content>
          Certainly, if you wish to contribute, you can join us on our GitHub. There, you can find
          an issue you want to work on or bring in your insights and develop them.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
