// --------------------------------------------------------

import { useCallback, useRef, useState } from "react";

// --------------------------------------------------------

function useScrollable<T extends HTMLElement>() {
	const [state, setState] = useState({
		vertical: false,
		horizontal: false,
		up: false,
		down: false,
		left: false,
		right: false,
	});

	const stateRef = useRef(state);

	const ref = useCallback((node: T | null) => {
		if (!node) {
			return;
		}

		let rafId = 0;

		const check = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				const prev = stateRef.current;

				const vertical = node.scrollHeight > node.clientHeight;
				const horizontal = node.scrollWidth > node.clientWidth;

				const up = Math.floor(node.scrollTop) > 0;
				const down =
					Math.ceil(node.scrollTop) <
					node.scrollHeight - node.clientHeight;

				const left = Math.floor(node.scrollLeft) > 0;
				const right =
					Math.ceil(node.scrollLeft) <
					node.scrollWidth - node.clientWidth;

				if (
					vertical === prev.vertical &&
					horizontal === prev.horizontal &&
					up === prev.up &&
					down === prev.down &&
					left === prev.left &&
					right === prev.right
				) {
					return;
				}

				const next = { vertical, horizontal, up, down, left, right };
				setState(next);
				stateRef.current = next;
			});
		};

		check();

		const resizeObserver = new ResizeObserver(check);
		resizeObserver.observe(node);

		const mutationObserver = new MutationObserver(check);
		mutationObserver.observe(node, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["style", "class"],
		});

		node.addEventListener("scroll", check, { passive: true });

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
			mutationObserver.disconnect();
			node.removeEventListener("scroll", check);
		};
	}, []);

	const { horizontal, vertical, up, down, left, right } = state;

	return {
		ref,
		isScrollable: vertical || horizontal,
		isScrollableVertical: vertical,
		isScrollableHorizontal: horizontal,
		canScrollUp: up,
		canScrollDown: down,
		canScrollLeft: left,
		canScrollRight: right,
	};
}

// --------------------------------------------------------

export { useScrollable };

// --------------------------------------------------------
