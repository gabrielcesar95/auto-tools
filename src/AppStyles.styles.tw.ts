import styled from "styled-components";
import "./index.css"
import tw from "twin.macro";

const AppStyles = styled.div.attrs({
    className: "w-full h-screen flex flex-col items-center justify-center bg-black"
  })`
    & {
      h1 {
          ${tw`font-sans text-6xl font-mono text-6xl text-red-500`}
      }
      p {
        ${tw`text-gray-700 text-lg`}
      }
      h2 {
        ${tw`text-2xl font-mono mt-5 text-red-500`}
      }
      ul {
        ${tw`inline-flex`}
      }
      li {
        ${tw`mr-5`}
      }
      a {
        ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
      }
    }
  `;
  export default AppStyles;