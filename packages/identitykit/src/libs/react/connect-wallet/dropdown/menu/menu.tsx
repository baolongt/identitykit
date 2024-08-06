import { Menu as HeadlessMenu, MenuProps as HeadlessMenuProps } from "@headlessui/react"
import clsx from "clsx"

export type MenuProps = HeadlessMenuProps & { className?: string }

export function Menu({ className, children, ...props }: MenuProps) {
  return (
    <HeadlessMenu
      as="div"
      className={clsx("relative inline-block text-left", className)}
      {...props}
    >
      {children}
    </HeadlessMenu>
  )
}