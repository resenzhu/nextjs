'use client';

import {type DragEvent, useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import useApp from '@hooks/app/use-app';

type PictureProps = {
  src: string | [string, string];
};

const Picture = ({src}: PictureProps): JSX.Element => {
  const easterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const {viewport} = useApp();
  const [easter, setEaster] = useState<boolean>(false);
  const [pictureSize, setPictureSize] = useState<number>(0);
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered) {
      let size: number = 0;
      if (viewport.width <= 640) {
        size = 140;
      } else if (viewport.width > 640 && viewport.width <= 1024) {
        size = 110;
      } else {
        size = 120;
      }
      if (pictureSize !== size) {
        setPictureSize(size);
      }
    }
  }, [rendered, viewport]);

  const handleShowEaster = (delay: number): void => {
    if (src instanceof Array && !easter && !easterTimer.current) {
      easterTimer.current = setTimeout((): void => {
        setEaster(true);
        if (easterTimer.current) {
          clearTimeout(easterTimer.current);
        }
      }, delay);
    }
  };

  const handleHideEaster = (): void => {
    setEaster(false);
    if (easterTimer.current) {
      clearTimeout(easterTimer.current);
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
