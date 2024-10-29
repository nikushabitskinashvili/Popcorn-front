'use client';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Form, Input } from 'antd';
import { ComponentType } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { authAction } from '@/src/app/(auth)/actions/auth-action';
import { LoginSchema } from '@/src/app/(auth)/login/forms/schemas/login.schema';
import { LoginSubmitType } from '@/src/app/(auth)/login/types/login-submit.type';

const LoginForm: ComponentType = () => {
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: classValidatorResolver(LoginSchema),
  });

  const onFinish: LoginSubmitType = async (values: LoginSchema) => {
    await authAction('/login', values.toPlain());
  };

  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <Form.Item label={'მეილი'}>
        <Controller
          render={({ field }) => <Input type={'email'} {...field} />}
          name={'email'}
          control={control}
        />
      </Form.Item>
      <Form.Item label={'პაროლი'}>
        <Controller
          render={({ field }) => <Input.Password {...field} />}
          name={'password'}
          control={control}
        />
      </Form.Item>
      <Button htmlType={'submit'}>გაგრძელება</Button>
    </form>
  );
};

export default LoginForm;
