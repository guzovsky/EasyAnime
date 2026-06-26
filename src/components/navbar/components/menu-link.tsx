"use client";

// -------------------------------------------------------------

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { MenuItem, type MenuItemProps } from "react-aria-components";
import { cn } from "@/utils/cn";

// -------------------------------------------------------------

interface MenuLinkProps extends Omit<MenuItemProps, "href" | "render"> {
	href: string;
}

// -------------------------------------------------------------

function MenuLink({ href, className, ...props }: MenuLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<MenuItem
			{...props}
			className={(values) =>
				cn(
					"outline-none",

					(values.isHovered || values.isFocused || isActive) &&
						"bg-border-focus/10 text-border-focus",

					typeof className === "function"
						? className(values)
						: className
				)
			}
			href={href}
			render={(domProps) => (
				<Link {...(domProps as ComponentProps<typeof Link>)} />
			)}
		/>
	);
}

// -------------------------------------------------------------

export { MenuLink };

// -------------------------------------------------------------
