import React from "react";
import type { MDXComponents } from "mdx/types";
import YouTube from "@/components/mdx/youtube";
import Code from "@/components/mdx/code";
import InlineCode from "@/components/mdx/inline-code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    YouTube,
    h1: (props) => <h1 className="text-4xl font-black pb-2" {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold pb-2" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold pb-2" {...props} />,
    h4: (props) => <h4 className="text-xl font-medium pb-2" {...props} />,
    h5: (props) => <h5 className="text-lg font-normal pb-2" {...props} />,
    h6: (props) => <h6 className="text-base font-light pb-2" {...props} />,
    p: (props) => <p className="text-lg pb-2 mb-2" {...props} />,
    ul: (props) => <ul className="list-disc pl-5 mb-4" {...props} />,
    ol: (props) => <ol className="list-decimal pl-5 mb-4" {...props} />,
    li: (props) => {
      const parentTag = props.parentName;
      const className =
        parentTag === "ul" || parentTag === "ol" ? "mb-0" : "mb-2 ml-4";
      return <li className={className} {...props} />;
    },
    hr: (props) => <hr className="my-4" {...props} />,
    pre: (props) => <pre className="overflow-x-auto pb-4" {...props} />,
    code: (props) => {
      const { className, children } = props;
      if (className) {
        return <Code {...props} />;
      } else {
        return <InlineCode>{children}</InlineCode>;
      }
    },
    div: (props) => <div className="code-block mb-6" {...props} />,
  };
}
