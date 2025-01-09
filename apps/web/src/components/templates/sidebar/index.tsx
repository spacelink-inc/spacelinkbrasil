'use client'

import * as React from 'react'
import {
   GalleryVerticalEnd,
   SquareTerminal,
   UserRoundSearch,
   Wallet,
} from 'lucide-react'

import { NavMain } from './nav-main'
import { NavUser, NavUserProps } from './nav-user'
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail,
} from '@/components/organisms/sidebar'
import { Image } from '@/components/atoms/image'
import Rocket from '/rocket.svg'
import { Label } from '@/components/atoms/label'

const data = {
   teams: [
      {
         name: 'Spacelink',
         logo: GalleryVerticalEnd,
         plan: 'Members Club',
      },
   ],
   navMain: [
      {
         title: 'Visão geral',
         url: '/app',
         icon: SquareTerminal,
      },
      {
         title: 'Usuários',
         url: 'customers',
         icon: UserRoundSearch,
      },
      {
         title: 'Carteira',
         url: 'wallet',
         icon: Wallet,
      },
   ],
}

export interface AppSidebarProps
   extends React.ComponentProps<typeof Sidebar>,
      NavUserProps {}

export function AppSidebar({
   user,
   accountRouter,
   financeRouter,
   signOut,
   ...props
}: AppSidebarProps) {
   return (
      <Sidebar collapsible='icon' {...props}>
         <SidebarHeader>
            <div className='flex items-center justify-start gap-2'>
               <div className='flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-primary/90 border group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:border-none'>
                  <Image alt='rocket' width={25} height={25}>
                     {Rocket}
                  </Image>
               </div>
               <div className='flex flex-col group-data-[collapsible=icon]:hidden'>
                  <Label className='text-md font-semibold select-none'>
                     Spacelink Inc.
                  </Label>
                  <Label className='text-xs font-normal font-mono select-none'>
                     Members Club
                  </Label>
               </div>
            </div>
         </SidebarHeader>
         <SidebarContent>
            <NavMain items={data.navMain} />
         </SidebarContent>
         <SidebarFooter>
            <NavUser
               user={user}
               accountRouter={accountRouter}
               financeRouter={financeRouter}
               signOut={signOut}
            />
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   )
}
