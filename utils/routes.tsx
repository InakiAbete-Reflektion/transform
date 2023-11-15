import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "CSS",
    content: [
      {
        label: "to TailwindCSS",
        path: "/css-to-tailwind",
        packageUrl: "https://github.com/Jackardios/css-to-tailwindcss",
        packageName: "css-to-tailwindcss"
      }
    ]
  }
];

export interface Route {
  path: string;
  label: string;
  desc: string;
}

export const routes = flatten(
  categorizedRoutes.map(a =>
    // @ts-ignore
    a.content.map(x => {
      const _label =
        a.category.toLowerCase() !== "others"
          ? `${a.category} ${x.label}`
          : x.label;
      return {
        ...x,
        category: a.category,
        searchTerm: _label,
        desc: x.desc || `An online playground to convert ${_label}`
      };
    })
  )
);

export function activeRouteData(
  pathname
): {
  label: string;
  path: string;
  searchTerm: string;
  desc: string;
  packageUrl?: string;
  packageName?: string;
} {
  return find(routes, o => o.path === pathname);
}
