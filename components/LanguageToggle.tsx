"use client"

import { useTransition } from "react"
import { useRouter } from 'next/navigation'
import { GlobeIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface LanguageToggleProps {
  englishLabel: string
  polishLabel: string
  ukrainianLabel: string
  russianLabel: string
  changeLanguageLabel: string
}

export function LanguageToggle({
  englishLabel,
  polishLabel,
  ukrainianLabel,
  russianLabel,
  changeLanguageLabel
}: LanguageToggleProps) {
  const router = useRouter()
  const [isPending, starTransition ] = useTransition()

const changeLanguage = ( newLocale: string) => {
starTransition (()=> {
router.replace(`/${newLocale}`)
})
}
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{changeLanguageLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          {englishLabel}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('pl')}>
          {polishLabel}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ua')}>
          {ukrainianLabel}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ru')}>
          {russianLabel}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
