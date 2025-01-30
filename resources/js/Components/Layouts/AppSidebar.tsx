"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/Components/Layouts/NavMain"
import {NavMainSingle} from "@/Components/Layouts/NavMainSingle"
import { NavProjects } from "@/components/Layouts/NavProjects"
import { NavUser } from "@/components/Layouts/NavUser"
import { TeamSwitcher } from "@/components/Layouts/TeamSwitcher"
import { Link, usePage } from '@inertiajs/react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { auth } = usePage().props;
  const user = auth.user;

  const data = {
    user: {
      name: user.name,
      email: user.email,
      avatar: "/avatars/default-avatar.jpg", // Add dynamic avatar if available
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    NavMainSingle: [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: Frame,
        },
        {
            name: "Projects",
            url: "/projects",
            icon: PieChart,
        },
        {
            name: "Calendar",
            url: "/calendar",
            icon: Map,
        },
        {
            name: "Settings",
            url: "/settings",
            icon: Settings2,
        },
    ],
    navMain: [
      {
        title: "Getting Started",
        url: "#",
        icon: BookOpen,
        isActive: true,
        isItem: false,
    },
      {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: false,
        isItem: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        isActive: false,
        isItem: true,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isActive: false,
        isItem: true,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        isActive: false,
        isItem: true,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Project A",
        url: "#",
        icon: Frame,
      },
      {
        name: "Project B",
        url: "#",
        icon: Frame,
      },
      {
        name: "Project C",
        url: "#",
        icon: Frame,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMainSingle single={data.NavMainSingle} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
