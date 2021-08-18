import styled from "styled-components";
import "./index.css"
import tw from "twin.macro";

const AppStyles = styled.div.attrs({
    className: "w-full h-screen flex flex-col items-center justify-center bg-black"
  })`
    & {
      h1 {
          ${tw`text-6xl text-6xl text-red-500`}
          text-shadow: 10px 10px 2px rgba(150, 150, 150, 1);
      }
      p {
        ${tw`text-gray-700 text-lg`}
      }
      h2 {
        ${tw`text-2xl mt-5 text-red-500`}
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