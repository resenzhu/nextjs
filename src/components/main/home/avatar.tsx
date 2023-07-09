'use client';

import {type DragEvent, useEffect, useRef, useState} from 'react';
import Image from 'next/image';

type AvatarProps = {
  src: string;
  easterSrc?: string;
};

const Avatar = ({src, easterSrc}: AvatarProps): JSX.Element => {
  const avatar = useRef<HTMLImageElement>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  const [easter, setEaster] = useState<boolean>(false);

  const handleSetEaster = (show: boolean): void => {
    if (easterSrc && show !== easter) {
      setEaster(show);
    }
  };

  const handleHideEaster = (event: MouseEvent): void => {
    if (
      easterSrc &&
      avatar.current &&
      !avatar.current.contains(event.target as Node)
    ) {
      setEaster(false);
    }
  };

  const handleDisableDrag = (event: DragEvent<HTMLImageElement>): void => {
    event.preventDefault();
  };

  useEffect((): (() => void) => {
    if (!rendered) {
      setRendered(true);
    }

    return (): void => {
      window.removeEventListener('mousedown', handleHideEaster);
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      window.addEventListener('mousedown', handleHideEaster);
    }
  }, [rendered]);

  return (
    <Image
      className='rounded-full border-8 border-white contrast-125'
      ref={avatar}
      src={easterSrc && easter ? easterSrc : src}
      width={150}
      height={150}
      alt='the author photo'
      onMouseDown={(): void => handleSetEaster(true)}
      onMouseUp={(): void => handleSetEaster(false)}
      onMouseLeave={(): void => handleSetEaster(false)}
      onDragStart={handleDisableDrag}
    />
  );
};

export type {AvatarProps};
export default Avatar;
