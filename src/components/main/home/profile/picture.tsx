'use client';

import {type DragEvent, useEffect, useState} from 'react';
import Image from 'next/image';
import useApp from '@hooks/main/use-app';

type PictureProps = {
  src: string | [string, string];
};

const Picture = ({src}: PictureProps): JSX.Element => {
  const {viewport} = useApp();
  const [easter, setEaster] = useState<boolean>(false);
  const [pictureSize, setPictureSize] = useState<number>(0);
  let timer: number | ReturnType<typeof setTimeout> = 0;

  useEffect((): void => {
    let size: number = 0;
    if (viewport.width <= 640) {
      size = 140;
    } else {
      size = 110;
    }
    if (size !== pictureSize) {
      setPictureSize(size);
    }
  }, [viewport]);

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
      width={pictureSize}
      height={pictureSize}
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
