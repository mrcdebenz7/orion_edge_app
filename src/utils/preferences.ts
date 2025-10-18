import { AllHTMLAttributes } from "react";
import { proxy, subscribe } from "valtio";
import { proxyMap } from "valtio/utils";

type NodeEnv = "development" | "production" | "test";

export interface OrionPrimarySidebarTools {
    id: string;
    name: string;
    icon: string;
}

export interface OrionEdgeWebPreferences {
    sidebar: {
        primary: {
            layout: OrionPrimarySidebarTools[];
            showLabels: boolean;
        };
    };
}

export const defaultOrionEdgeWebPreferences: OrionEdgeWebPreferences = {
    sidebar: {
        primary: {
            layout: [
                {
                    id: "copilot",
                    name: "Copilot",
                    icon: "copilot",
                },
                {
                    id: "search",
                    name: "Search",
                    icon: "search",
                },
                {
                    id: "version-control",
                    name: "Version Control",
                    icon: "source-control",
                },
                {
                    id: "plugins",
                    name: "Plugins",
                    icon: "plug",
                },
                {
                    id: "settings",
                    name: "Settings",
                    icon: "gear",
                },
            ],
            showLabels: true,
        },
    },
};

export const createOrionEdgeWebPreferences = (
    v: OrionEdgeWebPreferences,
): OrionEdgeWebPreferences => {
    if (process.env.NODE_ENV === "development") {
        v.sidebar.primary.layout = v.sidebar.primary.layout.filter(
            (tool) => !["version-control", "plugins"].includes(tool.id),
        );
    }

    return v;
};
