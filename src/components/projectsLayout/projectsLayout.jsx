import React from "react";
import QuicklyWebsite from "./projects/quicklywebsite"
import MernToDoApp from "./projects/mern-todo-app";
import Chatio from "./projects/chatio";
import LifeInvader from "./projects/lifeInvader";
import SernCrmApp from "./projects/serncrm";
import RothDivCalc from "./projects/rothDivCalc";
export default function ProjectsLayout() {
    return (
        <>
            <SernCrmApp/>
            <LifeInvader/>
            <RothDivCalc/>
            <QuicklyWebsite />
            <MernToDoApp />
            <Chatio />
        </>
    )
}