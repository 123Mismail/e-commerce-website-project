
 "use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/tops",
    description:
      "A collections of beautiful tops for your wardeobe to sleek your looks",
  },
  {
    title: "Pants",
    href: "/pants",
    description:
      "A collections of beautiful Pants for your wardeobe to sleek your looks",
  },
  {
    title: "Shoes",
    href: "/shoes",
    description:
      "A collections of beautiful Shoes for your wardeobe to sleek your looks",
  },
  {
    title: "Accessories/Jwellerirs",
    href: "/accesseries",
    description:
      "A collections of beautiful accessories and jewelleries for your wardeobe to sleek your looks",
  },
  
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu >
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Womens</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid bg-myWhite    w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]   ">
              {components.map((component) => (
               <Link 
               key={component.title}
             
               href={component.href}
               > <ListItem
               title={component.title}
               >
                  {component.description}
                </ListItem></Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="contacts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block  select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          
        >
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground     ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
