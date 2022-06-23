import {useState} from 'react';

export interface useToggleProps {
  defaultValue?: boolean;
}

export const useTogglePasswordVisibility = ({
  defaultValue = false,
}: useToggleProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(defaultValue);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
