'use client'

import './globals.css'
import React from 'react'
import Image from 'next/image'
import whiteLogo from '../public/whiteLogo.png'
import blackLogo from '../public/blackLogo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isHomePage = usePathname() == '/'

  return (
    <html lang="ko">
      <body>
        <header style={{ color: isHomePage ? 'white' : 'black' }}>
          <Link href='/'>
            <div className='logo'>
              <Image
                src={isHomePage ? whiteLogo : blackLogo}
                alt=''
                width='50'
                height='50'
              />
              <div>
                <h1>
                  한국대학생클래식기타연합회
                </h1>
                <h2>
                  Korea Univ. Classical Guitar Association
                </h2>
              </div>
            </div>
          </Link>
          <ul>
            <li>
              <Link href='/'>홈</Link>
            </li>
            <li>
              <Link href='/about'>소개</Link>
            </li>
            <li>
              <Link href='/activity'>활동</Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  )
}
