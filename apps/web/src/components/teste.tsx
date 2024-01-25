'use client'

import React from 'react'
import { Card, Button, Calendar } from '@/comakit'

export const Teste = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p className="mb-8 mt-1.5 max-w-[420px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum modi in
        deleniti similique necessitatibus rerum ullam accusamus.
      </p>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Button size="sm" variant="primary">
            Hello
          </Button>
          <Button size="sm" variant="danger">
            Hello
          </Button>
          <Button size="sm" variant="success">
            Hello
          </Button>
          <Button size="sm" variant="secondary">
            Hello
          </Button>
          <Button size="sm" variant="outline">
            Hello
          </Button>
          <Button size="sm" variant="ghost">
            Hello
          </Button>
          <Button size="sm" disabled>
            Hello
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="primary">Hello</Button>
          <Button variant="danger">Hello</Button>
          <Button variant="success">Hello</Button>
          <Button variant="secondary">Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>
          <Button disabled>Hello</Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button size="lg" variant="primary">
            Hello
          </Button>
          <Button size="lg" variant="danger">
            Hello
          </Button>
          <Button size="lg" variant="success">
            Hello
          </Button>
          <Button size="lg" variant="secondary">
            Hello
          </Button>
          <Button size="lg" variant="outline">
            Hello
          </Button>
          <Button size="lg" variant="ghost">
            Hello
          </Button>
          <Button size="lg" disabled>
            Hello
          </Button>
        </div>
      </div>
    </div>
  )
}
