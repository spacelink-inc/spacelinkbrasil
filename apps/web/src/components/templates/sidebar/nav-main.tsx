import { LucideIcon } from 'lucide-react'

import {
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/organisms/sidebar'
import { useNavigate } from 'react-router-dom'

export function NavMain({
   items,
}: {
   items: {
      title: string
      url: string
      icon?: LucideIcon
      isActive?: boolean
      items?: {
         title: string
         url: string
      }[]
   }[]
}) {
   const navigate = useNavigate()

   return (
      <SidebarGroup>
         <SidebarGroupLabel className='uppercase font-mono font-medium text-[11px] text-foreground'>
            Menu Principal
         </SidebarGroupLabel>
         <SidebarGroupContent>
            <SidebarMenu>
               {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                     <SidebarMenuButton
                        asChild
                        className='hover:bg-primary-foreground/5 transition ease-in'
                     >
                        <button onClick={() => navigate(item.url)}>
                           {item.icon && <item.icon />}
                           <span>{item.title}</span>
                        </button>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               ))}
            </SidebarMenu>
         </SidebarGroupContent>
      </SidebarGroup>
   )
}
