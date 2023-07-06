import Block from "@/components/ui/Block"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen font-medium grid grid-cols-3">
      <div className="flex flex-col">
        <Block legend={["sss", "sss"]}>sss</Block>
        <Block>github</Block>
        <Block>breakout</Block>
        <Block>sorting</Block>
        <Block>beakout (pre breakout)</Block>
      </div>
    </main>
  )
}
