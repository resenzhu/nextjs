'use client';

import {type DragEvent, useEffect, useRef, useState} from 'react';
import Image from 'next/image';

type AvatarProps = {
  src: string;
  easter?: string;
};

const Avatar = ({src, easter}: AvatarProps): JSX.Element => {
  const avatar = useRef<HTMLImageElement>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  const [showEaster, setShowEaster] = useState<boolean>(false);

  const handleToggleEaster = (show: boolean): void => {
    if (easter && show !== showEaster) {
      setShowEaster(show);
    }
  };

  const handleHideEaster = (event: MouseEvent): void => {
    if (
      easter &&
      avatar.current &&
      !avatar.current.contains(event.target as Node) &&
      showEaster !== false
    ) {
      setShowEaster(false);
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
      src={easter && showEaster ? easter : src}
      width={150}
      height={150}
      alt='the author photo'
      onMouseDown={(): void => handleToggleEaster(true)}
      onMouseUp={(): void => handleToggleEaster(false)}
      onMouseLeave={(): void => handleToggleEaster(false)}
      onDragStart={handleDisableDrag}
    />
  );
};

export type {AvatarProps};
export default Avatar;
