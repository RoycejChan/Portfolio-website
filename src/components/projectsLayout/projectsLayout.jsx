import React from "react";
import QuicklyWebsite from "./projects/quicklywebsite"
import MernToDoApp from "./projects/mern-todo-app";
import Chatio from "./projects/chatio";
import LifeInvader from "./projects/lifeInvader";


export default function ProjectsLayout() {
    return (
        <>
            <LifeInvader/>
            <QuicklyWebsite />
            <MernToDoApp />
            <Chatio />
        </>
    )
}