import React from "react";
import QuicklyWebsite from "./projects/quicklywebsite"
import MernToDoApp from "./projects/mern-todo-app";
import Chatio from "./projects/chatio";


export default function ProjectsLayout() {
    return (
        <>
            <QuicklyWebsite />
            <MernToDoApp />
            <Chatio />
        </>
    )
}