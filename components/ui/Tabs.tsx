"use client"

import { Root, List, Trigger, Content } from "@radix-ui/react-tabs"
import { twMerge } from "tailwind-merge"
import { Button } from "./Button"
export function Tabs({ className, ...props }: Parameters<typeof Root>[0]) {
  return <Root className={twMerge("flex flex-col", className)} {...props} />
}
export function TabsList({ className, ...props }: Parameters<typeof List>[0]) {
  return (
    <List className={twMerge("border-outset border-2", className)} {...props} />
  )
}
export function TabsTrigger({
  className,
  ...props
}: Parameters<typeof Trigger>[0]) {
  return <Trigger className={twMerge("", className)} {...props} />
}
export function TabsContent({
  className,
  ...props
}: Parameters<typeof Content>[0]) {
  return <Content className={twMerge("", className)} {...props} />
}
