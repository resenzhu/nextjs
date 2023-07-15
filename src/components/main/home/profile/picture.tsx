'use client';

import {type DragEvent, useState} from 'react';
import Image from 'next/image';

type PictureProps = {
  src: string | [string, string];
};

const Picture = ({src}: PictureProps): JSX.Element => {
  const [easter, setEaster] = useState<boolean>(false);
  let timer: number | ReturnType<typeof setTimeout> = 0;

  const handleShowEaster = (delay: number): void => {
    if (src instanceof Array && !easter && timer === 0) {
      timer = setTimeout((): void => {
        setEaster(true);
        clearTimeout(timer);
        timer = 0;
      }, delay);
    }
  };

  const handleHideEaster = (): void => {
    setEaster(false);
    clearTimeout(timer);
    timer = 0;
  };

  const handleDisableDrag = (event: DragEvent<HTMLImageElement>): void => {
    event.preventDefault();
  };

  return (
    <Image
      className='rounded-full border-8 contrast-125'
      src={src instanceof Array ? (easter ? src[1] : src[0]) : src.toString()}
      width={140}
      height={140}
      alt='author profile picture'
      onMouseDown={(): void => handleShowEaster(3000)}
      onMouseUp={(): void => handleHideEaster()}
      onMouseLeave={(): void => handleHideEaster()}
      onDragStart={handleDisableDrag}
    />
  );
};

export type {PictureProps};
export default Picture;
