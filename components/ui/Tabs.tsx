"use client"

import { Root, List, Trigger, Content } from "@radix-ui/react-tabs"
export function Tabs({ ...props }: Parameters<typeof Root>[0]) {
  return <Root {...props} />
}
export function TabsList({ ...props }: Parameters<typeof List>[0]) {
  return <List {...props} />
}

export function TabsContent({ ...props }: Parameters<typeof Content>[0]) {
  return <Content {...props} />
}

export function TabsTrigger({ ...props }: Parameters<typeof Trigger>[0]) {
  return <Trigger {...props} />
}
