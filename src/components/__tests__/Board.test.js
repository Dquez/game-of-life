// import React from "react";
// import {mount} from "enzyme";
// import CommentBox from "components/CommentBox";
// import Root from "Root";

// let wrapped;
// beforeEach(()=> wrapped = mount(
//     <Root>
//         <CommentBox />
//     </Root>
// ));
// afterEach(()=> wrapped.unmount());

// it("has a text area and 2 buttons", () =>{
//     expect(wrapped.find("textarea").length).toEqual(1);
//     expect(wrapped.find("button").length).toEqual(2);
    
// })

// describe("the textarea", ()=>{
//     beforeEach(()=>{
//     // simulates the "event" that happens onChange, merges as the event that gets passed to the actual function in react
//     wrapped.find("textarea").simulate("change",{
//         target: {value: "new comment"}
//     })
//     wrapped.update();
//     })
//     it("has a textarea users can type in", ()=>{
//         expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
//     })
    
//     it("submits user input and clears textarea", ()=>{
//         wrapped.find("textarea").simulate("submit")
//         wrapped.update();
//         expect(wrapped.find("textarea").prop("value")).toEqual("");
//     })
// })

