import React from "react";
import { Tip } from "@wordpress/components";

import { breakpoints } from "@/constants";

export const TipResponsive = () => (
	<div style={{ marginBottom: 24 }}>
		<Tip>
			<p>
				Mobile display: {breakpoints.xs}...{breakpoints.sm}px
			</p>
			<p>
				Tablet display: {breakpoints.sm}...{breakpoints.md}px
			</p>
			<p>
				Laptop display: {breakpoints.md}...{breakpoints.xl}px
			</p>
			<p>Desktop display: {breakpoints.xl}...</p>
		</Tip>
	</div>
);
