import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { nameRegEx, idRegEx, pwRegEx, emailRegEx } from "../assets/constants";
import { IFormInput } from "../utils/type";

export const useValidate = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onBlur" });

  const namePattern = useCallback(() => {
    return {
      value: nameRegEx,
      message: "올바른 이름을 입력해주세요 (한글 단어만 가능)",
    };
  }, []);

  const pwPattern = useCallback(() => {
    return {
      value: pwRegEx,
      message:
        "적어도 한개의 대문자, 소문자, 숫자, 특수문자를 포함해서 8자 이상으로 입력해주세요",
    };
  }, []);

  const emailPattern = useCallback(() => {
    return {
      value: emailRegEx,
      message: "올바른 형식의 이메일을 입력해주세요",
    };
  }, []);

  const idPattern = useCallback(() => {
    return {
      value: idRegEx,
      message: "영어나 숫자로 된 4-16자의 아이디를 입력해주세요",
    };
  }, []);

  return {
    errors,
    register,
    namePattern,
    watch,
    handleSubmit,
    idPattern,
    emailPattern,
    pwPattern,
  };
};
