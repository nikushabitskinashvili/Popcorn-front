
'use client';
import { signIn } from "next-auth/react";
import Image from "next/image";
import { OAuthTypeEnum } from "@/src/shared/types/enums/oauth-type.enum";
import styles from "./OAuthLogin.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  type: OAuthTypeEnum;
  image: StaticImport;
}

const OAuthLogin: React.FC<Props> = ({ type, image }) => {
  const handleOAuthLogin = () => {
    if (type === OAuthTypeEnum.Google) {
      signIn("google");
    } 
  };

  return (
    <Image
      onClick={handleOAuthLogin}
      src={image}
      alt="oauth login icon"
      width={30}
      height={30}
      className={styles.image}
    />
  );
};

export default OAuthLogin;
