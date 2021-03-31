import React from "react";
import UserIcon from "./UserIcon";

const AvatarIcon = (props) => {
  const [hasError, setHasError] = React.useState(false);
  const { src } = props;

  return !!src && !hasError ? (
    <img
      src={src}
      alt=""
      onError={() => setHasError(true)}
      width={props.width}
      height={props.height}
      className={props.className}
      {...props}
    />
  ) : (
    <UserIcon {...props} />
  );
};

export default AvatarIcon;

AvatarIcon.defaultProps = {
  className: "",
  width: 32,
  height: 32,
};
