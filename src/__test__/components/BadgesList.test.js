import React from "react";
import { mount } from "enzyme";
import BadgesList from "../../components/BadgesList";

describe("BadgesList", ()=>{
    test("Render del componente BadgesList", ()=>{
        const badgesList = mount(<BadgesList/>);
        expect(badgesList.length).toEqual(1)
    })
})