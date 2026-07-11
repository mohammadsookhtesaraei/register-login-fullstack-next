

type TMenuLink = {
    id: number;
    path: string;
    children: string;
}

export const menuLink: TMenuLink[] = [
    { id: 1, path: "/", children: "home" },
    { id: 2, path: "/auth", children: "login/register" }
];

