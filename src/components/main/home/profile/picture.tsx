'use client';

import {type DragEvent, useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import useApp from '@hooks/main/use-app';

type PictureProps = {
  src: string | [string, string];
};

const Picture = ({src}: PictureProps): JSX.Element => {
  const {viewport} = useApp();
  const [easter, setEaster] = useState<boolean>(false);
  const [pictureSize, setPictureSize] = useState<number>(0);
  let timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect((): void => {
    let size: number = 0;
    if (viewport.width <= 640) {
      size = 140;
    } else if (viewport.width > 640 && viewport.width <= 1024) {
      size = 110;
    } else {
      size = 120;
    }
    if (size !== pictureSize) {
      setPictureSize(size);
    }
  }, [viewport]);

  const handleShowEaster = (delay: number): void => {
    if (src instanceof Array && !easter && !timer.current) {
      timer.current = setTimeout((): void => {
        setEaster(true);
        if (timer.current) {
          clearTimeout(timer.current);
        }
      }, delay);
    }
  };

  const handleHideEaster = (): void => {
    setEaster(false);
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const handleDisableDrag = (event: DragEvent<HTMLImageElement>): void => {
    event.preventDefault();
  };

  return (
    <Image
      className='rounded-full border-8 contrast-125'
      src={src instanceof Array ? (easter ? src[1] : src[0]) : src.toString()}
      placeholder='blur'
      blurDataURL={
        src instanceof Array ? (easter ? src[1] : src[0]) : src.toString()
      }
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
