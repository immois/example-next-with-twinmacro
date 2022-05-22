import tw, { styled } from "twin.macro";

const ButtonStyled = styled.button(({ variant }) => [
  tw`px-5 box-border h-12 rounded-lg m-3`,
  variant == "filled" && tw`bg-blue-600 text-white`,
  variant == "underline" &&
    tw`bg-transparent text-blue-600 border-2 border-blue-600`,
  variant == "ghost" && tw`bg-transparent text-blue-600`,
]);

const Button = ({ children, variant = "filled" }) => {
  return <ButtonStyled {...{ variant }}>{children}</ButtonStyled>;
};

export default Button;
