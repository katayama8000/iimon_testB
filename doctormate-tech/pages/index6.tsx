import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const GENDER = ["男性", "女性"];

type Input = {
  name: string;
  age: number;
  gernder: typeof GENDER;
};

const schema = yup.object({
  name: yup.string().required("名前を入力してください"),
  age: yup
    .number()
    .required("年齢を入力してください")
    .positive("年齢は正の数で入力してください"),
  gernder: yup.array().required("性別を選択してください"),
});

const Index6: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Input> = async ({ name, age, gernder }) => {
    console.log(name, age, gernder);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel>名前</FormLabel>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.age)}>
        <FormLabel>年齢</FormLabel>
        <Controller
          name="age"
          control={control}
          defaultValue={0}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.gernder)}>
        <FormLabel>性別</FormLabel>
        <Controller
          name="gernder"
          control={control}
          render={({ field }) => (
            <CheckboxGroup {...field}>
              {GENDER.map((v) => (
                <Checkbox key={v} value={v} name="elements">
                  {v}
                </Checkbox>
              ))}
            </CheckboxGroup>
          )}
        />
        <FormErrorMessage>
          {errors.gernder && errors.gernder.message}
        </FormErrorMessage>
      </FormControl>

      <Button isLoading={isSubmitting} type="submit">
        送信
      </Button>
    </form>
  );
};

export default Index6;
