"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

type CodeProps = {
	code: string;
};
const SourceCode = ({ code }: CodeProps) => {
	useEffect(() => {
		hljs.highlightAll();
	}, []);

	return (
		<div className='w-full text-left'>
			<pre>
				<code className='js'>{code}</code>
			</pre>
		</div>
	);
};

export default SourceCode;
