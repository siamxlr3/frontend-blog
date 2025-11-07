import { MoreVertical, Plus, Search, ChevronDown } from "lucide-react";

export const PlusIcon = Plus;
export const VerticalDotsIcon = MoreVertical;
export const SearchIcon = Search;
export const ChevronDownIcon = ChevronDown;

export const columns = [
    { name: "NAME", uid: "name", sortable: true },
    { name: "ROLE", uid: "role", sortable: true },
    { name: "TEAM", uid: "team" },
    { name: "EMAIL", uid: "email" },
    { name: "STATUS", uid: "status", sortable: true },
    { name: "ACTIONS", uid: "actions" },
];

export const users = [
    {
        id: 1,
        name: "John Doe",
        role: "Developer",
        team: "Frontend",
        email: "john@example.com",
        status: "active",
        avatar: "/avatar1.png",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Designer",
        team: "UI/UX",
        email: "jane@example.com",
        status: "paused",
        avatar: "/avatar2.png",
    },
    {
        id: 3,
        name: "Alex Johnson",
        role: "Manager",
        team: "Operations",
        email: "alex@example.com",
        status: "vacation",
        avatar: "/avatar3.png",
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "QA Engineer",
        team: "Testing",
        email: "emily@example.com",
        status: "active",
        avatar: "/avatar4.png",
    },
    {
        id: 5,
        name: "Michael Lee",
        role: "Backend Dev",
        team: "API",
        email: "michael@example.com",
        status: "active",
        avatar: "/avatar5.png",
    },
];

export const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
];

export const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
