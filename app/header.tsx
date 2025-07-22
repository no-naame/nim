'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <motion.div 
          className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-zinc-200 dark:ring-zinc-700"
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              fill
              className="object-cover"
              sizes="48px"
            />
          </motion.div>
        </motion.div>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Julien Nim
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Design Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
