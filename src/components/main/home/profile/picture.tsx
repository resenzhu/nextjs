'use client';

import {type DragEvent, useEffect, useState} from 'react';
import Image from 'next/image';
import useApp from '@hooks/app/use-app';

type PictureProps = {
  src: string;
  alt: string;
};

const Picture = ({src, alt}: PictureProps): JSX.Element => {
  const {viewport} = useApp();
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

  const handleDisableImageDrag = (event: DragEvent<HTMLImageElement>): void => {
    event.preventDefault();
  };

  return (
    <Image
      className='rounded-full border-8 contrast-125'
      src={src}
      placeholder='blur'
      blurDataURL={src}
      width={pictureSize}
      height={pictureSize}
      alt={alt}
      onDragStart={handleDisableImageDrag}
    />
  );
};

export type {PictureProps};
export default Picture;
